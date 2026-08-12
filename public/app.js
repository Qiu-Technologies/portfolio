// stevens.fyi — small progressive enhancements only

(function () {
  "use strict";

  // Mark JS as active — reveal styles only apply once this class exists,
  // so content is never hidden when JS is unavailable.
  document.documentElement.classList.add("js");

  // Current year in footer
  document.getElementById("year").textContent = String(new Date().getFullYear());

  // Sticky header border on scroll
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal-on-scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // Safety net: never leave content hidden if the observer hasn't fired
  // (full-page screenshots, embedded iframes, unusual viewports).
  setTimeout(function () {
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  }, 2500);
})();
