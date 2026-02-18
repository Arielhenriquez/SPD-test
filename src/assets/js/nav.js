/**
 * nav.js - Mega menu / dropdown: hover, click outside, Esc, mobile hamburger, a11y
 * Llamar Nav.init() después de inyectar el header (p. ej. desde main.js).
 */
window.Nav = {
  init: function () {
    "use strict";
    var header = document.getElementById("site-header");
    if (!header) return;

  var toggleBtn = document.getElementById("nav-toggle");
  var listWrap = document.getElementById("nav-list-wrap");
  var itemsWithDropdown = header.querySelectorAll(".nav__item[aria-haspopup='true']");
  var dropdowns = header.querySelectorAll(".nav__dropdown");
  var megaCategories = header.querySelectorAll(".nav__mega-category");
  var mediaQuery = window.matchMedia("(max-width: 900px)");

  function isMobile() {
    return mediaQuery.matches;
  }

  function closeAllDropdowns() {
    itemsWithDropdown.forEach(function (item) {
      item.setAttribute("aria-expanded", "false");
      var panel = item.querySelector(".nav__dropdown");
      if (panel) panel.setAttribute("hidden", "");
    });
    header.classList.remove("is-open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  }

  function openDropdown(item) {
    closeAllDropdowns();
    item.setAttribute("aria-expanded", "true");
    var panel = item.querySelector(".nav__dropdown");
    if (panel) panel.removeAttribute("hidden");
    if (isMobile()) header.classList.add("is-open");
    if (toggleBtn && isMobile()) toggleBtn.setAttribute("aria-expanded", "true");
  }

  function toggleDropdown(item) {
    var expanded = item.getAttribute("aria-expanded") === "true";
    if (expanded) {
      item.setAttribute("aria-expanded", "false");
      var panel = item.querySelector(".nav__dropdown");
      if (panel) panel.setAttribute("hidden", "");
      if (isMobile()) header.classList.remove("is-open");
      if (toggleBtn && isMobile()) toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      openDropdown(item);
    }
  }

  function setMegaPanel(panelId) {
    var panel = header.querySelector(".nav__mega-panel");
    if (!panel) return;
    var contents = panel.querySelectorAll(".nav__mega-panel-content");
    var categories = header.querySelectorAll(".nav__mega-category");
    contents.forEach(function (c) {
      c.classList.remove("is-visible");
      if (c.getAttribute("data-nav-panel-content") === panelId) c.classList.add("is-visible");
    });
    categories.forEach(function (cat) {
      cat.classList.toggle("is-active", cat.getAttribute("data-nav-panel") === panelId);
    });
  }

  // Desktop: hover
  itemsWithDropdown.forEach(function (item) {
    var link = item.querySelector(".nav__link");
    var panel = item.querySelector(".nav__dropdown");

    item.addEventListener("mouseenter", function () {
      if (!isMobile()) {
        item.setAttribute("aria-expanded", "true");
        if (panel) panel.removeAttribute("hidden");
      }
    });

    item.addEventListener("mouseleave", function () {
      if (!isMobile()) {
        item.setAttribute("aria-expanded", "false");
        if (panel) panel.setAttribute("hidden", "");
      }
    });
  });

  // Mobile: click trigger toggles
  itemsWithDropdown.forEach(function (item) {
    var link = item.querySelector(".nav__link");
    if (!link) return;
    link.addEventListener("click", function (e) {
      if (!isMobile()) return;
      e.preventDefault();
      toggleDropdown(item);
    });
  });

  // Mega menu: category hover/focus -> show panel
  megaCategories.forEach(function (cat) {
    var panelId = cat.getAttribute("data-nav-panel");
    if (!panelId) return;

    cat.addEventListener("mouseenter", function () {
      if (!isMobile()) setMegaPanel(panelId);
    });
    cat.addEventListener("focus", function () {
      setMegaPanel(panelId);
    });
    cat.addEventListener("click", function (e) {
      e.preventDefault();
      setMegaPanel(panelId);
      var firstLink = header.querySelector("#nav-panel-" + panelId + " a");
      if (firstLink && isMobile()) firstLink.focus();
    });
  });

  // Toggle button (hamburger)
  if (toggleBtn && listWrap) {
    toggleBtn.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (!open) {
        itemsWithDropdown.forEach(function (item) {
          item.setAttribute("aria-expanded", "false");
          var panel = item.querySelector(".nav__dropdown");
          if (panel) panel.setAttribute("hidden", "");
        });
      }
    });
  }

  // Click outside: close
  document.addEventListener("click", function (e) {
    if (!header.contains(e.target)) closeAllDropdowns();
  });

  // Esc: close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllDropdowns();
  });

  // First mega panel visible by default
  setMegaPanel("randall");
  }
};
