/**
 * main.js - Carga header y footer desde partials e inicializa Nav y Carousel
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

  function runNav() {
    if (window.Nav && typeof window.Nav.init === "function") {
      window.Nav.init();
    }
  }

  if (!headerPlaceholder && !footerPlaceholder) {
    runCarousel();
    return;
  }

  var base = document.querySelector("script[data-partials-base]");
  var basePath = base ? base.getAttribute("data-partials-base") : "../partials/";

  Promise.all([
    headerPlaceholder ? fetch(basePath + "header.html").then(function (r) { return r.text(); }) : Promise.resolve(""),
    footerPlaceholder ? fetch(basePath + "footer.html").then(function (r) { return r.text(); }) : Promise.resolve("")
  ]).then(function (results) {
    var headerHtml = results[0];
    var footerHtml = results[1];
    if (headerPlaceholder && headerHtml) headerPlaceholder.outerHTML = headerHtml;
    if (footerPlaceholder && footerHtml) footerPlaceholder.outerHTML = footerHtml;
    runNav();
    runCarousel();
  }).catch(function () {
    runCarousel();
  });
})();
