/**
 * main.js - Carga header y footer desde partials e inicializa Navbar y Carousel
 * Usar con Live Server (fetch no funciona con file:// por CORS).
 */
(function () {
  "use strict";

  var headerPlaceholder = document.getElementById("site-header-placeholder");
  var footerPlaceholder = document.getElementById("site-footer-placeholder");

  function runCarousel() {
    if (window.Carousel && typeof window.Carousel.init === "function") {
      window.Carousel.init();
    }
  }

  function runNavbar() {
    if (window.Navbar && typeof window.Navbar.init === "function") {
      window.Navbar.init();
    }
  }

  if (!headerPlaceholder && !footerPlaceholder) {
    runCarousel();
    return;
  }

  var base = document.querySelector("script[data-partials-base]");
  var basePath = base ? base.getAttribute("data-partials-base") : "../partials/";

  var pathname = window.location.pathname || "";
  var isProjectPage = pathname.indexOf("/project/") !== -1 || pathname.indexOf("\\project\\") !== -1;
  if (isProjectPage) {
    window.projectPageBase = "";
  } else {
    window.projectPageBase = "project/";
  }

  Promise.all([
    headerPlaceholder ? fetch(basePath + "header.html").then(function (r) { return r.text(); }) : Promise.resolve(""),
    footerPlaceholder ? fetch(basePath + "footer.html").then(function (r) { return r.text(); }) : Promise.resolve("")
  ]).then(function (results) {
    var headerHtml = results[0];
    var footerHtml = results[1];
    if (headerPlaceholder && headerHtml) headerPlaceholder.outerHTML = headerHtml;
    if (footerPlaceholder && footerHtml) footerPlaceholder.outerHTML = footerHtml;
    if (isProjectPage) {
      var header = document.getElementById("site-header");
      if (header) {
        header.querySelectorAll('a[href="index.html"]').forEach(function (a) { a.setAttribute("href", "../index.html"); });
        header.querySelectorAll('a[href="projects.html"]').forEach(function (a) { a.setAttribute("href", "../projects.html"); });
      }
      var footer = document.getElementById("site-footer");
      if (footer) {
        footer.querySelectorAll('a[href="index.html"]').forEach(function (a) { a.setAttribute("href", "../index.html"); });
        footer.querySelectorAll('a[href="projects.html"]').forEach(function (a) { a.setAttribute("href", "../projects.html"); });
      }
    }
    runNavbar();
    runCarousel();
  }).catch(function () {
    runCarousel();
  });
})();
