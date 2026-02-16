/* main.js
 * Main controller that orchestrates all homepage visualizations.
 * - Waits for "graphDataReady" event from data-loader.js
 * - Initializes stats bar
 * - Sets up IntersectionObserver for scroll-based animation triggers
 * - Manages pause/resume for performance
 * - Handles window resize
 */

(function () {
  'use strict';

  var statsBar = document.getElementById('stats-bar');
  var heroSection = document.getElementById('section-hero');
  var globeSection = document.getElementById('section-globe');
  var sunburstSection = document.getElementById('section-sunburst');
  var sankeySection = document.getElementById('section-sankey');
  var explorerSection = document.getElementById('section-explorer');

  var heroInView = false;
  var globeInView = false;
  var heroStarted = false;

  // ────────────────────────────────────────────────────────────────────────
  // Initialize Stats Bar
  // ────────────────────────────────────────────────────────────────────────

  function initStatsBar() {
    if (!window.graphData) return;

    var data = window.graphData;
    var stats = data.stats;
    var countries = data.countries;

    // Count unique countries
    var countryCount = countries.size;

    // Format price range
    var minPrice = stats.minPrice;
    var maxPrice = stats.maxPrice;
    var minStr = formatPrice(minPrice);
    var maxStr = formatPrice(maxPrice);

    // Update stats bar elements
    document.getElementById('stat-pages').textContent = stats.totalNodes + ' products';
    document.getElementById('stat-edges').textContent = stats.totalEdges + ' connections';
    document.getElementById('stat-countries').textContent = countryCount + ' countries';
    document.getElementById('stat-price-range').textContent = minStr + ' to ' + maxStr;
  }

  function formatPrice(p) {
    if (p >= 1e9) return '$' + (p / 1e9).toFixed(1) + 'B';
    if (p >= 1e6) return '$' + (p / 1e6).toFixed(1) + 'M';
    if (p >= 1e3) return '$' + (p / 1e3).toFixed(1) + 'K';
    if (p >= 1) return '$' + p.toFixed(2);
    return '$' + p.toFixed(4);
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

          // Manage hero graph animation
          if (ratio > 0.3) {
            heroInView = true;
            // Auto-start hero graph when it comes into view
            if (!heroStarted && window.heroGraph && window.heroGraph.start) {
              heroStarted = true;
              window.heroGraph.start();
            }
          } else if (ratio < 0.1) {
            heroInView = false;
            if (window.heroGraph && window.heroGraph.pause) {
              window.heroGraph.pause();
            }
          }
        }

        // Globe section: start/stop animation
        if (id === 'section-globe') {
          if (ratio > 0.3 && !globeInView) {
            globeInView = true;
            if (window.globeViz && window.globeViz.start) {
              window.globeViz.start();
            }
          } else if (ratio < 0.1 && globeInView) {
            globeInView = false;
            if (window.globeViz && window.globeViz.stop) {
              window.globeViz.stop();
            }
          }
        }

        // Sunburst section: trigger layout recalculation if needed
        if (id === 'section-sunburst' && ratio > 0.3) {
          // Sunburst auto-initializes, no trigger needed
        }

        // Sankey section: trigger layout recalculation if needed
        if (id === 'section-sankey' && ratio > 0.3) {
          // Sankey auto-initializes, no trigger needed
        }

        // Explorer section: trigger if needed
        if (id === 'section-explorer' && ratio > 0.3) {
          // Explorer auto-initializes, no trigger needed
        }
      });
    }, options);

    // Observe all sections
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
      // Call resize() on each visualization that has it
      if (window.heroGraph && window.heroGraph.resize) {
        window.heroGraph.resize();
      }
      if (window.globeViz && window.globeViz.resize) {
        window.globeViz.resize();
      }
      if (window.sunburstViz && window.sunburstViz.resize) {
        window.sunburstViz.resize();
      }
      if (window.sankeyViz && window.sankeyViz.resize) {
        window.sankeyViz.resize();
      }
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
      // Pause expensive animations
      if (window.heroGraph && window.heroGraph.pause) {
        window.heroGraph.pause();
      }
      if (window.globeViz && window.globeViz.stop) {
        window.globeViz.stop();
        globeInView = false;
      }
    } else {
      // Resume if in view
      if (heroInView && window.heroGraph && window.heroGraph.simulation) {
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
    initStatsBar();
    setupIntersectionObserver();

    // Add a class to body to indicate visualizations are ready
    document.body.classList.add('viz-ready');
  });

  // Fallback: if data is already loaded (race condition)
  if (window.graphData) {
    initStatsBar();
    setupIntersectionObserver();
    document.body.classList.add('viz-ready');
  }

})();
