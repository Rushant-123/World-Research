/* globe.js
 * 3D wireframe globe with animated supply-chain arcs.
 * Depends on Three.js r160 (loaded from CDN) and window.graphData (from data-loader.js).
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  Constants                                                          */
  /* ------------------------------------------------------------------ */

  var COUNTRIES = {
    'United States': { lat: 39.8, lng: -98.5 },
    'USA':           { lat: 39.8, lng: -98.5 },
    'Japan':         { lat: 36.2, lng: 138.2 },
    'Taiwan':        { lat: 23.7, lng: 120.9 },
    'China':         { lat: 35.9, lng: 104.2 },
    'Germany':       { lat: 51.2, lng: 10.4 },
    'South Korea':   { lat: 35.9, lng: 127.8 },
    'France':        { lat: 46.2, lng: 2.2 },
    'Switzerland':   { lat: 46.8, lng: 8.2 },
    'Netherlands':   { lat: 52.1, lng: 5.3 },
    'United Kingdom':{ lat: 55.4, lng: -3.4 },
    'Sweden':        { lat: 60.1, lng: 18.6 },
    'Singapore':     { lat: 1.4, lng: 103.8 },
    'Canada':        { lat: 56.1, lng: -106.3 },
    'Australia':     { lat: -25.3, lng: 133.8 },
    'Israel':        { lat: 31.0, lng: 34.9 },
    'India':         { lat: 20.6, lng: 78.9 },
    'Chile':         { lat: -35.7, lng: -71.5 },
    'Finland':       { lat: 61.9, lng: 25.7 },
    'Norway':        { lat: 60.5, lng: 8.5 },
    'Belgium':       { lat: 50.5, lng: 4.5 },
    'Ireland':       { lat: 53.1, lng: -7.7 },
    'Czech Republic':{ lat: 49.8, lng: 15.5 },
    'Italy':         { lat: 41.9, lng: 12.5 },
    'Mexico':        { lat: 23.6, lng: -102.6 },
    'Brazil':        { lat: -14.2, lng: -51.9 },
    'Congo':         { lat: -4.0, lng: 21.8 },
    'South Africa':  { lat: -30.6, lng: 22.9 },
    'Russia':        { lat: 61.5, lng: 105.3 },
    'Indonesia':     { lat: -0.8, lng: 113.9 }
  };

  var USA_COORDS = COUNTRIES['United States'];
  var AUTO_ROTATE_SPEED = 0.002;
  var AUTO_ROTATE_RESUME_MS = 3000;
  var ARC_POINTS = 50;
  var GLOBE_RADIUS = 1;

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                            */
  /* ------------------------------------------------------------------ */

  function latLngToVector3(lat, lng, radius) {
    var phi   = (90 - lat) * (Math.PI / 180);
    var theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }

  /** Lerp between two hex colour integers. t in [0,1]. */
  function lerpColor(a, b, t) {
    var ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
    var br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
    var rr = Math.round(ar + (br - ar) * t);
    var rg = Math.round(ag + (bg - ag) * t);
    var rb = Math.round(ab + (bb - ab) * t);
    return (rr << 16) | (rg << 8) | rb;
  }

  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

  /**
   * Try to resolve a (possibly compound) country string into a known key.
   * Examples: "USA / Japan" -> "USA", "China" -> "China".
   */
  function resolveCountry(raw) {
    if (!raw) return null;
    // Try exact match first
    if (COUNTRIES[raw]) return raw;
    // Split on common separators and try each part
    var parts = raw.split(/\s*[\/,&]\s*/);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (COUNTRIES[p]) return p;
    }
    return null;
  }

  /* ------------------------------------------------------------------ */
  /*  GlobeViz Class                                                     */
  /* ------------------------------------------------------------------ */

  function GlobeViz(containerId) {
    this.containerId = containerId;
    this.container   = null;
    this.scene       = null;
    this.camera      = null;
    this.renderer    = null;
    this.globeGroup  = null;
    this.arcsGroup   = null;

    this.arcs        = [];   // { line, curve, particles[], color }
    this.started     = false;
    this.animFrameId = null;

    // Drag state
    this.isDragging       = false;
    this.prevMouse        = { x: 0, y: 0 };
    this.autoRotate       = true;
    this.lastInteraction  = 0;

    // Tooltip / raycasting
    this.mouse    = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.raycaster.params.Line = { threshold: 0.05 };
    this.tooltip  = null;

    // Bind event handlers once so we can remove them later
    this._onMouseDown = this._handleMouseDown.bind(this);
    this._onMouseMove = this._handleMouseMove.bind(this);
    this._onMouseUp   = this._handleMouseUp.bind(this);
    this._onResize    = this.resize.bind(this);
    this._onTouchStart = this._handleTouchStart.bind(this);
    this._onTouchMove  = this._handleTouchMove.bind(this);
    this._onTouchEnd   = this._handleTouchEnd.bind(this);

    var self = this;
    document.addEventListener('graphDataReady', function () {
      self.init();
    });
  }

  /* ----- init -------------------------------------------------------- */

  GlobeViz.prototype.init = function () {
    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      console.warn('[globe] Container #' + this.containerId + ' not found');
      return;
    }
    this.tooltip = document.getElementById('viz-tooltip');

    var w = this.container.clientWidth  || 600;
    var h = this.container.clientHeight || 600;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    this.camera.position.set(0, 0, 2.8);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    this.container.appendChild(this.renderer.domElement);

    // Globe group
    this.globeGroup = new THREE.Group();
    this.scene.add(this.globeGroup);

    // Arcs group (child of globeGroup so they rotate together)
    this.arcsGroup = new THREE.Group();
    this.globeGroup.add(this.arcsGroup);

    this._buildGlobe();
    this._buildArcs();
    this._bindEvents();

    // Initial rotation so the Americas face the viewer
    this.globeGroup.rotation.y = -1.2;
  };

  /* ----- globe mesh -------------------------------------------------- */

  GlobeViz.prototype._buildGlobe = function () {
    // Inner solid sphere (gives depth)
    var innerGeo = new THREE.SphereGeometry(0.98, 32, 32);
    var innerMat = new THREE.MeshBasicMaterial({ color: 0x0a0a1a });
    this.globeGroup.add(new THREE.Mesh(innerGeo, innerMat));

    // Wireframe sphere
    var wireGeo = new THREE.SphereGeometry(1, 48, 48);
    var wireMat = new THREE.MeshBasicMaterial({
      color: 0x1a1a3e,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    this.globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

    // Small dot at each country location
    var dotGeo = new THREE.SphereGeometry(0.012, 8, 8);
    var dotMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff });
    var placed = {};
    var countriesData = window.graphData && window.graphData.countries;
    if (countriesData) {
      countriesData.forEach(function (val, key) {
        var name = resolveCountry(key);
        if (!name || placed[name]) return;
        placed[name] = true;
        var coords = COUNTRIES[name];
        var pos = latLngToVector3(coords.lat, coords.lng, GLOBE_RADIUS * 1.005);
        var dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.copy(pos);
        this.globeGroup.add(dot);
      }.bind(this));
    }
  };

  /* ----- arcs -------------------------------------------------------- */

  GlobeViz.prototype._buildArcs = function () {
    var countriesData = window.graphData && window.graphData.countries;
    if (!countriesData) return;

    // Aggregate counts per resolved country (skip USA itself)
    var countryTotals = {};
    var maxCount = 0;
    countriesData.forEach(function (val, key) {
      var name = resolveCountry(key);
      if (!name) return;
      if (name === 'United States' || name === 'USA') return;
      if (!countryTotals[name]) countryTotals[name] = 0;
      countryTotals[name] += val.count;
      if (countryTotals[name] > maxCount) maxCount = countryTotals[name];
    });

    if (maxCount === 0) maxCount = 1;

    var usaPos = latLngToVector3(USA_COORDS.lat, USA_COORDS.lng, GLOBE_RADIUS);

    var COLOR_LOW  = 0x4a4a8a;
    var COLOR_HIGH = 0x00d4ff;

    var names = Object.keys(countryTotals);
    for (var i = 0; i < names.length; i++) {
      var name  = names[i];
      var count = countryTotals[name];
      var coords = COUNTRIES[name];
      if (!coords) continue;

      var t = clamp(count / maxCount, 0, 1);

      var destPos = latLngToVector3(coords.lat, coords.lng, GLOBE_RADIUS);

      // Control point: midpoint elevated above globe surface
      var mid = new THREE.Vector3().addVectors(usaPos, destPos).multiplyScalar(0.5);
      var dist = usaPos.distanceTo(destPos);
      var elevation = 1.0 + dist * 0.3;
      mid.normalize().multiplyScalar(elevation);

      var curve = new THREE.QuadraticBezierCurve3(usaPos, mid, destPos);
      var points = curve.getPoints(ARC_POINTS);

      var arcColor   = lerpColor(COLOR_LOW, COLOR_HIGH, t);
      var arcOpacity = 0.3 + 0.5 * t;

      var geom = new THREE.BufferGeometry().setFromPoints(points);
      var mat  = new THREE.LineBasicMaterial({
        color: arcColor,
        transparent: true,
        opacity: arcOpacity
      });
      var line = new THREE.Line(geom, mat);
      this.arcsGroup.add(line);

      // Particles
      var numParticles = Math.max(1, Math.min(3, Math.round(t * 3)));
      var particleColor = lerpColor(arcColor, 0xffffff, 0.4);
      var particles = [];
      var pGeo = new THREE.SphereGeometry(0.008, 6, 6);
      var pMat = new THREE.MeshBasicMaterial({ color: particleColor, transparent: true, opacity: 0.9 });

      for (var p = 0; p < numParticles; p++) {
        var mesh = new THREE.Mesh(pGeo, pMat.clone());
        mesh.visible = false;
        this.arcsGroup.add(mesh);
        particles.push({
          mesh: mesh,
          progress: p / numParticles,     // stagger start
          speed: 0.002 + Math.random() * 0.003
        });
      }

      this.arcs.push({
        line: line,
        curve: curve,
        particles: particles,
        color: arcColor,
        countryName: name,
        count: count
      });
    }
  };

  /* ----- events ------------------------------------------------------ */

  GlobeViz.prototype._bindEvents = function () {
    var el = this.renderer.domElement;
    el.addEventListener('mousedown',  this._onMouseDown);
    el.addEventListener('mousemove',  this._onMouseMove);
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('resize',  this._onResize);

    // Touch support
    el.addEventListener('touchstart', this._onTouchStart, { passive: false });
    el.addEventListener('touchmove',  this._onTouchMove,  { passive: false });
    el.addEventListener('touchend',   this._onTouchEnd);
  };

  GlobeViz.prototype._handleMouseDown = function (e) {
    this.isDragging = true;
    this.autoRotate = false;
    this.prevMouse.x = e.clientX;
    this.prevMouse.y = e.clientY;
  };

  GlobeViz.prototype._handleMouseMove = function (e) {
    // Update mouse for raycasting / tooltip
    var rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    this._clientX = e.clientX;
    this._clientY = e.clientY;

    if (this.isDragging && this.globeGroup) {
      var dx = e.clientX - this.prevMouse.x;
      var dy = e.clientY - this.prevMouse.y;
      this.globeGroup.rotation.y += dx * 0.005;
      this.globeGroup.rotation.x += dy * 0.005;
      // Clamp vertical rotation to avoid flipping
      this.globeGroup.rotation.x = clamp(this.globeGroup.rotation.x, -1.2, 1.2);
      this.prevMouse.x = e.clientX;
      this.prevMouse.y = e.clientY;
      this.lastInteraction = performance.now();
    }

    this._updateTooltip(e.clientX, e.clientY);
  };

  GlobeViz.prototype._handleMouseUp = function () {
    if (this.isDragging) {
      this.isDragging = false;
      this.lastInteraction = performance.now();
    }
  };

  // Touch handlers
  GlobeViz.prototype._handleTouchStart = function (e) {
    if (e.touches.length === 1) {
      e.preventDefault();
      this.isDragging = true;
      this.autoRotate = false;
      this.prevMouse.x = e.touches[0].clientX;
      this.prevMouse.y = e.touches[0].clientY;
    }
  };

  GlobeViz.prototype._handleTouchMove = function (e) {
    if (this.isDragging && e.touches.length === 1 && this.globeGroup) {
      e.preventDefault();
      var dx = e.touches[0].clientX - this.prevMouse.x;
      var dy = e.touches[0].clientY - this.prevMouse.y;
      this.globeGroup.rotation.y += dx * 0.005;
      this.globeGroup.rotation.x += dy * 0.005;
      this.globeGroup.rotation.x = clamp(this.globeGroup.rotation.x, -1.2, 1.2);
      this.prevMouse.x = e.touches[0].clientX;
      this.prevMouse.y = e.touches[0].clientY;
      this.lastInteraction = performance.now();
    }
  };

  GlobeViz.prototype._handleTouchEnd = function () {
    if (this.isDragging) {
      this.isDragging = false;
      this.lastInteraction = performance.now();
    }
  };

  /* ----- tooltip via raycasting -------------------------------------- */

  GlobeViz.prototype._updateTooltip = function (cx, cy) {
    if (!this.tooltip || !this.camera || !this.arcsGroup) return;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    var intersects = this.raycaster.intersectObjects(this.arcsGroup.children, false);

    // Find first intersected arc line
    var hitArc = null;
    for (var i = 0; i < intersects.length; i++) {
      var obj = intersects[i].object;
      if (!obj.isLine) continue;
      // Identify which arc it belongs to
      for (var j = 0; j < this.arcs.length; j++) {
        if (this.arcs[j].line === obj) {
          hitArc = this.arcs[j];
          break;
        }
      }
      if (hitArc) break;
    }

    if (hitArc) {
      this.tooltip.innerHTML =
        '<strong>' + hitArc.countryName + '</strong><br>' +
        hitArc.count + ' component' + (hitArc.count !== 1 ? 's' : '');
      this.tooltip.style.display = 'block';
      this.tooltip.style.left = cx + 14 + 'px';
      this.tooltip.style.top  = cy - 10 + 'px';
    } else {
      this.tooltip.style.display = 'none';
    }
  };

  /* ----- animation --------------------------------------------------- */

  GlobeViz.prototype.start = function () {
    if (this.started) return;
    this.started = true;
    this._animate();
  };

  GlobeViz.prototype.stop = function () {
    this.started = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  };

  GlobeViz.prototype._animate = function () {
    if (!this.started) return;
    this.animFrameId = requestAnimationFrame(this._animate.bind(this));

    // Auto-rotate resume
    if (!this.autoRotate && !this.isDragging) {
      if (performance.now() - this.lastInteraction > AUTO_ROTATE_RESUME_MS) {
        this.autoRotate = true;
      }
    }

    if (this.autoRotate && this.globeGroup) {
      this.globeGroup.rotation.y += AUTO_ROTATE_SPEED;
    }

    // Update particles
    for (var i = 0; i < this.arcs.length; i++) {
      var arc = this.arcs[i];
      for (var j = 0; j < arc.particles.length; j++) {
        var p = arc.particles[j];
        p.progress += p.speed;
        if (p.progress > 1) p.progress -= 1;

        var pos = arc.curve.getPoint(p.progress);
        p.mesh.position.copy(pos);
        p.mesh.visible = true;

        // Fade in/out at endpoints
        var fade = 1.0;
        if (p.progress < 0.1) {
          fade = p.progress / 0.1;
        } else if (p.progress > 0.9) {
          fade = (1.0 - p.progress) / 0.1;
        }
        p.mesh.material.opacity = 0.9 * fade;
      }
    }

    this.renderer.render(this.scene, this.camera);
  };

  /* ----- resize ------------------------------------------------------ */

  GlobeViz.prototype.resize = function () {
    if (!this.container || !this.camera || !this.renderer) return;
    var w = this.container.clientWidth;
    var h = this.container.clientHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  /* ------------------------------------------------------------------ */
  /*  Instantiate                                                        */
  /* ------------------------------------------------------------------ */

  window.GlobeViz = GlobeViz;
  window.globeViz = new GlobeViz('globe-container');

})();
