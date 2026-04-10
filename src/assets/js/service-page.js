(function () {
  "use strict";

  function getSlugFromPath() {
    var path = window.location.pathname || "";
    var match = path.match(/\/([^/]+)\.html$/);
    return match ? match[1] : null;
  }

  function escapeHtml(str) {
    if (str == null) return "";
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function render() {
    var slug = getSlugFromPath();
    if (!slug || !window.approachData || !window.approachData[slug]) return;

    var service = window.approachData[slug];
    var heroEl = document.getElementById("project-hero");
    if (heroEl) {
      heroEl.style.backgroundImage = "url(" + escapeHtml(service.heroImage) + ")";
      var title = heroEl.querySelector(".project-hero__title");
      if (title) title.textContent = service.title;
    }

    var overviewEl = document.getElementById("project-overview");
    if (overviewEl) {
      var grid = overviewEl.querySelector(".project-overview__grid");
      if (grid) {
        grid.innerHTML =
          '<div class="project-overview__card"><h3>Overview</h3><p>' + escapeHtml(service.overview) + '</p></div>' +
          '<div class="project-overview__card"><h3>Scope</h3><p>' + escapeHtml(service.scope) + "</p></div>";
      }
    }

    var galleryTrack = document.getElementById("project-gallery-track");
    if (galleryTrack) {
      galleryTrack.innerHTML = '<div class="c-carousel__slide"><div class="gallery-slide-img"><img src="' + escapeHtml(service.heroImage) + '" alt="' + escapeHtml(service.title) + '"></div></div>';
    }

    if (window.renderApproachPage) {
      window.renderApproachPage();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
