/* explorer.js
 * Searchable, filterable, sortable card grid for browsing all products.
 * Listens for "graphDataReady" event from data-loader.js.
 */
(function () {
  'use strict';

  var PAGE_SIZE = 60;

  var DIST_COLORS = {
    0: '#ffd700',
    1: '#ff6b35',
    2: '#00d4ff',
    3: '#7b68ee',
    4: '#4a4a8a',
    999: '#333'
  };

  // --- Helpers ---

  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatPrice(price) {
    if (price === 0 || price == null) return 'Free';
    if (price >= 1000000) return '$' + (price / 1000000).toFixed(1) + 'M';
    if (price >= 1000) return '$' + (price / 1000).toFixed(1) + 'K';
    if (price < 0.01) return '$' + price.toFixed(4);
    if (price < 1) return '$' + price.toFixed(2);
    return '$' + price.toLocaleString();
  }

  function distColorFor(d) {
    if (d >= 4 && d < 999) return DIST_COLORS[4];
    return DIST_COLORS[d] || '#333';
  }

  function distLabel(d) {
    if (d >= 999) return 'Unlinked';
    return 'D' + d;
  }

  // Extract individual countries from compound strings like "USA / Japan"
  function extractCountries(countryStr) {
    if (!countryStr) return [];
    return countryStr.split(/\s*\/\s*/).map(function (c) { return c.trim(); }).filter(Boolean);
  }

  // --- ExplorerViz Class ---

  function ExplorerViz(containerId) {
    this.containerId = containerId;
    this.allNodes = [];
    this.filteredNodes = [];
    this.displayCount = PAGE_SIZE;
    this.searchText = '';
    this.distanceFilter = '';
    this.countryFilter = '';
    this.sortBy = 'name';
    this._debounceTimer = null;

    var self = this;
    document.addEventListener('graphDataReady', function () {
      self.init();
    });
  }

  ExplorerViz.prototype.init = function () {
    var data = window.graphData;
    if (!data || !data.nodes) {
      console.error('[explorer] No graph data available');
      return;
    }

    this.allNodes = data.nodes.slice();
    this.populateDistanceDropdown();
    this.populateCountryDropdown();
    this.setupListeners();
    this.updateSearchPlaceholder();
    this.filterAndSort();
  };

  ExplorerViz.prototype.populateDistanceDropdown = function () {
    var select = document.getElementById('explorer-distance-filter');
    if (!select) return;

    // Count nodes per distance bucket
    var counts = {};
    this.allNodes.forEach(function (n) {
      var key = n.distance >= 4 ? '4+' : String(n.distance);
      if (n.distance >= 999) key = '4+'; // unlinked lumped with 4+
      counts[key] = (counts[key] || 0) + 1;
    });

    // Build options
    var html = '<option value="">All distances</option>';
    [0, 1, 2, 3].forEach(function (d) {
      var c = counts[String(d)] || 0;
      html += '<option value="' + d + '">Distance ' + d + ' (' + c + ')</option>';
    });
    var c4 = counts['4+'] || 0;
    html += '<option value="4+">Distance 4+ (' + c4 + ')</option>';

    select.innerHTML = html;
  };

  ExplorerViz.prototype.populateCountryDropdown = function () {
    var select = document.getElementById('explorer-country-filter');
    if (!select) return;

    // Extract individual countries and count
    var countMap = {};
    this.allNodes.forEach(function (n) {
      var parts = extractCountries(n.country);
      parts.forEach(function (c) {
        countMap[c] = (countMap[c] || 0) + 1;
      });
    });

    // Sort by count descending, take top 30
    var sorted = Object.keys(countMap).sort(function (a, b) {
      return countMap[b] - countMap[a];
    });
    var top = sorted.slice(0, 30);

    var html = '<option value="">All countries</option>';
    top.forEach(function (c) {
      html += '<option value="' + escapeHtml(c) + '">' + escapeHtml(c) + ' (' + countMap[c] + ')</option>';
    });

    select.innerHTML = html;
  };

  ExplorerViz.prototype.updateSearchPlaceholder = function () {
    var input = document.getElementById('explorer-search');
    if (input) {
      input.placeholder = 'Search ' + this.allNodes.length + ' products...';
    }
  };

  ExplorerViz.prototype.setupListeners = function () {
    var self = this;

    // Search with debounce
    var searchInput = document.getElementById('explorer-search');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(self._debounceTimer);
        self._debounceTimer = setTimeout(function () {
          self.searchText = searchInput.value.trim();
          self.filterAndSort();
        }, 150);
      });
    }

    // Distance filter
    var distSelect = document.getElementById('explorer-distance-filter');
    if (distSelect) {
      distSelect.addEventListener('change', function () {
        self.distanceFilter = distSelect.value;
        self.filterAndSort();
      });
    }

    // Country filter
    var countrySelect = document.getElementById('explorer-country-filter');
    if (countrySelect) {
      countrySelect.addEventListener('change', function () {
        self.countryFilter = countrySelect.value;
        self.filterAndSort();
      });
    }

    // Sort
    var sortSelect = document.getElementById('explorer-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        self.sortBy = sortSelect.value;
        self.filterAndSort();
      });
    }
  };

  ExplorerViz.prototype.filterAndSort = function () {
    var nodes = this.allNodes.slice();

    // Apply search
    if (this.searchText) {
      var q = this.searchText.toLowerCase();
      nodes = nodes.filter(function (n) {
        return (n.title && n.title.toLowerCase().indexOf(q) !== -1) ||
               (n.company && n.company.toLowerCase().indexOf(q) !== -1) ||
               (n.country && n.country.toLowerCase().indexOf(q) !== -1);
      });
    }

    // Apply distance filter
    if (this.distanceFilter !== '') {
      if (this.distanceFilter === '4+') {
        nodes = nodes.filter(function (n) { return n.distance >= 4; });
      } else {
        var d = parseInt(this.distanceFilter, 10);
        nodes = nodes.filter(function (n) { return n.distance === d; });
      }
    }

    // Apply country filter
    if (this.countryFilter !== '') {
      var cf = this.countryFilter;
      nodes = nodes.filter(function (n) {
        return n.country && n.country.indexOf(cf) !== -1;
      });
    }

    // Apply sort
    switch (this.sortBy) {
      case 'name':
        nodes.sort(function (a, b) {
          return (a.title || '').localeCompare(b.title || '');
        });
        break;
      case 'price-desc':
        nodes.sort(function (a, b) { return (b.price || 0) - (a.price || 0); });
        break;
      case 'price-asc':
        // $0 items go last
        nodes.sort(function (a, b) {
          var pa = a.price || 0;
          var pb = b.price || 0;
          if (pa === 0 && pb === 0) return 0;
          if (pa === 0) return 1;
          if (pb === 0) return -1;
          return pa - pb;
        });
        break;
      case 'inputs':
        nodes.sort(function (a, b) { return (b.inputCount || 0) - (a.inputCount || 0); });
        break;
      case 'distance':
        nodes.sort(function (a, b) { return (a.distance || 0) - (b.distance || 0); });
        break;
    }

    this.filteredNodes = nodes;
    this.displayCount = PAGE_SIZE;
    this.renderPage();
  };

  ExplorerViz.prototype.renderPage = function () {
    var visible = this.filteredNodes.slice(0, this.displayCount);
    this.renderCards(visible);
    this.renderLoadMore();
  };

  ExplorerViz.prototype.renderCards = function (nodes) {
    var grid = document.getElementById('explorer-grid');
    if (!grid) return;

    if (nodes.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:rgba(255,255,255,0.4);grid-column:1/-1;padding:48px 0;">No products match your search.</p>';
      return;
    }

    grid.innerHTML = nodes.map(function (node) {
      var color = distColorFor(node.distance);
      var label = distLabel(node.distance);
      return '<a href="/pages/' + encodeURI(node.id) + '/" class="explorer-card">' +
        '<div class="card-distance" style="background:' + color + '">' + label + '</div>' +
        '<h3 class="card-title">' + escapeHtml(node.title) + '</h3>' +
        '<p class="card-company">' + escapeHtml(node.company) + '</p>' +
        '<p class="card-country">' + escapeHtml(node.country) + '</p>' +
        '<div class="card-meta">' +
          '<span class="card-price">' + formatPrice(node.price) + '</span>' +
          '<span class="card-inputs">' + (node.inputCount || 0) + ' inputs</span>' +
        '</div>' +
      '</a>';
    }).join('');
  };

  ExplorerViz.prototype.renderLoadMore = function () {
    var container = document.getElementById('explorer-container');
    if (!container) return;

    // Remove existing load-more button
    var existing = container.querySelector('.explorer-load-more');
    if (existing) existing.remove();

    var remaining = this.filteredNodes.length - this.displayCount;
    if (remaining <= 0) return;

    var btn = document.createElement('button');
    btn.className = 'explorer-load-more';
    btn.textContent = 'Show more (' + remaining + ' remaining)';

    var self = this;
    btn.addEventListener('click', function () {
      self.displayCount += PAGE_SIZE;
      self.renderPage();
    });

    container.appendChild(btn);
  };

  // --- Instantiate ---
  new ExplorerViz('explorer-container');
})();
