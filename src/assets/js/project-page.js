/**
 * project-page.js - Detecta slug por pathname, pinta hero, overview, gallery y related
 * para páginas de proyecto individual. Depende de projects-data.js.
 */
(function () {
  "use strict";

  function getSlugFromPath() {
    var path = window.location.pathname || "";
    var match = path.match(/\/([^/]+)\.html$/);
    if (match) return match[1];
    var hash = path.split("/").pop();
    if (hash && hash.indexOf(".html") === -1) return hash;
    return null;
  }

  function escapeHtml(str) {
    if (str == null) return "";
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function render() {
    var slug = getSlugFromPath();
    if (!slug) return;
    var project = window.getProjectBySlug && window.getProjectBySlug(slug);
    if (!project) return;

    /* Links desde esta página son mismo directorio (project/) */
    window.projectPageBase = "";

    var heroEl = document.getElementById("project-hero");
    if (heroEl) {
      heroEl.style.backgroundImage = "url(" + escapeHtml(project.heroImage || project.image) + ")";
      var categoryEl = heroEl.querySelector(".project-hero__category");
      if (categoryEl) categoryEl.textContent = project.categoryLabel || project.category;
      var titleEl = heroEl.querySelector(".project-hero__title");
      if (titleEl) titleEl.textContent = project.title;
    }

    var overviewEl = document.getElementById("project-overview");
    if (overviewEl && project.description1 != null) {
      var grid = overviewEl.querySelector(".project-overview__grid");
      if (grid) {
        grid.innerHTML =
          '<div class="project-overview__card">' +
          "<h3>Overview</h3>" +
          "<p>" + escapeHtml(project.description1) + "</p>" +
          "</div>" +
          '<div class="project-overview__card">' +
          "<h3>Scope &amp; Delivery</h3>" +
          "<p>" + escapeHtml(project.description2 || project.description1) + "</p>" +
          "</div>";
      }
    }

    var galleryTrack = document.getElementById("project-gallery-track");
    if (galleryTrack && project.galleryImages && project.galleryImages.length) {
      var galleryHtml = "";
      project.galleryImages.forEach(function (src) {
        galleryHtml +=
          '<div class="c-carousel__slide">' +
          '<div class="gallery-slide-img">' +
          '<img src="' + escapeHtml(src) + '" alt=""/>' +
          "</div>" +
          "</div>";
      });
      galleryTrack.innerHTML = galleryHtml;
    }

    var relatedTrack = document.getElementById("project-related-track");
    if (relatedTrack && window.projectsData && window.getRelatedProjects) {
      var related = window.getRelatedProjects(slug);
      var base = window.projectPageBase || "";
      var relatedHtml = "";
      related.forEach(function (p) {
        var excerpt = p.excerpt ? (p.excerpt.length > 120 ? p.excerpt.slice(0, 117) + "..." : p.excerpt) : "";
        var href = base + p.slug + ".html";
        relatedHtml +=
          '<div class="c-carousel__slide">' +
          '  <article class="related-card">' +
          '    <div class="thumb">' +
          '      <a href="' + href + '"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '"/></a>' +
          "    </div>" +
          '    <div class="body">' +
          '      <h3><a href="' + href + '">' + escapeHtml(p.title) + "</a></h3>" +
          "      <p>" + escapeHtml(excerpt) + "</p>" +
          '      <a href="' + href + '" class="link">Read more →</a>' +
          "    </div>" +
          "  </article>" +
          "</div>";
      });
      relatedTrack.innerHTML = relatedHtml;
    }

    /* Título de la pestaña */
    if (project.title) {
      var title = document.querySelector("title");
      if (title) title.textContent = project.title + " - SPD Contracting";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
