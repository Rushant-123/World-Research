/* main-v2.js
 * V2 Controller for homepage visualizations
 * Auto-starts hero graph on load, triggers others on scroll
 */

(function () {
  'use strict';

  var statsBar = document.getElementById('stats-bar');
  var heroSection = document.getElementById('section-hero');
  var globeSection = document.getElementById('section-globe');
  var sunburstSection = document.getElementById('section-sunburst');
  var sankeySection = document.getElementById('section-sankey');
  var explorerSection = document.getElementById('section-explorer');

  var heroStarted = false;
  var globeInView = false;

  // ────────────────────────────────────────────────────────────────────────
  // Initialize Stats Bar
  // ────────────────────────────────────────────────────────────────────────

  function initStatsBar() {
    if (!window.graphData) return;

    var data = window.graphData;
    var stats = data.stats;
    var countries = data.countries;

    var countryCount = countries.size;
    var minPrice = stats.minPrice;
    var maxPrice = stats.maxPrice;

    function formatPrice(p) {
      if (p >= 1e9) return '$' + (p / 1e9).toFixed(1) + 'B';
      if (p >= 1e6) return '$' + (p / 1e6).toFixed(1) + 'M';
      if (p >= 1e3) return '$' + (p / 1e3).toFixed(1) + 'K';
      if (p >= 1) return '$' + p.toFixed(2);
      return '$' + p.toFixed(4);
    }

    var minStr = formatPrice(minPrice);
    var maxStr = formatPrice(maxPrice);

    document.getElementById('stat-pages').textContent = stats.totalNodes;
    document.getElementById('stat-edges').textContent = stats.totalEdges;
    document.getElementById('stat-countries').textContent = countryCount;
    document.getElementById('stat-price-range').textContent = minStr + '—' + maxStr;
  }

  // ────────────────────────────────────────────────────────────────────────
  // Auto-start Hero Graph on Page Load
  // ────────────────────────────────────────────────────────────────────────

  function startHeroGraph() {
    if (heroStarted) return;
    if (!window.heroGraph || !window.heroGraph.start) {
      console.warn('[main-v2] heroGraph not ready, retrying...');
      setTimeout(startHeroGraph, 100);
      return;
    }

    heroStarted = true;
    window.heroGraph.start();
    console.log('[main-v2] Hero graph started');
  }

  // ────────────────────────────────────────────────────────────────────────
  // IntersectionObserver Setup
  // ────────────────────────────────────────────────────────────────────────

  function setupIntersectionObserver() {
    if (!window.IntersectionObserver) return;

    var options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.3, 0.5]
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.id;
        var ratio = entry.intersectionRatio;

        // Hero section: show stats bar when scrolled past
        if (id === 'section-hero') {
          if (ratio < 0.3 && statsBar) {
            statsBar.classList.add('visible');
          } else if (ratio >= 0.5 && statsBar) {
            statsBar.classList.remove('visible');
          }
        }

        // Globe section: start/stop animation
        if (id === 'section-globe') {
          if (ratio > 0.3 && !globeInView) {
            globeInView = true;
            console.log('[main-v2] Globe section in view, starting animation');
            if (window.globeViz && window.globeViz.start) {
              window.globeViz.start();
            } else {
              console.warn('[main-v2] globeViz not available');
            }
          } else if (ratio < 0.1 && globeInView) {
            globeInView = false;
            if (window.globeViz && window.globeViz.stop) {
              window.globeViz.stop();
            }
          }
        }

        // Sunburst section: fast version (no special handling needed)
        if (id === 'section-sunburst' && ratio > 0.3) {
          console.log('[main-v2] Sunburst section in view');
        }

        // Sankey section: using simple implementation (no resize needed)
        if (id === 'section-sankey' && ratio > 0.3) {
          console.log('[main-v2] Sankey section in view');
        }
      });
    }, options);

    // Observe sections
    if (heroSection) observer.observe(heroSection);
    if (globeSection) observer.observe(globeSection);
    if (sunburstSection) observer.observe(sunburstSection);
    if (sankeySection) observer.observe(sankeySection);
    if (explorerSection) observer.observe(explorerSection);
  }

  // ────────────────────────────────────────────────────────────────────────
  // Window Resize Handler
  // ────────────────────────────────────────────────────────────────────────

  var resizeTimeout;

  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      if (window.heroGraph && window.heroGraph.resize) {
        window.heroGraph.resize();
      }
      if (window.globeViz && window.globeViz.resize) {
        window.globeViz.resize();
      }
      if (window.sunburstViz && window.sunburstViz.resize) {
        window.sunburstViz.resize();
      }
      // Sankey uses simple implementation (no resize method)
      if (window.explorerViz && window.explorerViz.resize) {
        window.explorerViz.resize();
      }
    }, 250);
  }

  window.addEventListener('resize', handleResize);

  // ────────────────────────────────────────────────────────────────────────
  // Page Visibility: Pause animations when tab is hidden
  // ────────────────────────────────────────────────────────────────────────

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (window.heroGraph && window.heroGraph.pause) {
        window.heroGraph.pause();
      }
      if (window.globeViz && window.globeViz.stop) {
        window.globeViz.stop();
        globeInView = false;
      }
    } else {
      if (heroStarted && window.heroGraph && window.heroGraph.simulation) {
        window.heroGraph.simulation.alpha(0.3).restart();
      }
      if (globeInView && window.globeViz && window.globeViz.start) {
        window.globeViz.start();
      }
    }
  });

  // ────────────────────────────────────────────────────────────────────────
  // Bootstrap: Wait for graphDataReady
  // ────────────────────────────────────────────────────────────────────────

  document.addEventListener('graphDataReady', function () {
    console.log('[main-v2] graphDataReady event received');
    initStatsBar();
    setupIntersectionObserver();

    // Start hero graph automatically after a brief delay
    setTimeout(startHeroGraph, 500);

    document.body.classList.add('viz-ready');
  });

  // Fallback: if data is already loaded
  if (window.graphData) {
    console.log('[main-v2] graphData already available');
    initStatsBar();
    setupIntersectionObserver();
    setTimeout(startHeroGraph, 500);
    document.body.classList.add('viz-ready');
  }

})();
