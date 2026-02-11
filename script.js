/**
 * SPD Homepage - Minimal JS
 * Carousel arrows and smooth scroll can be extended here.
 */
document.addEventListener('DOMContentLoaded', function () {
  var prev = document.querySelector('.carousel-prev');
  var next = document.querySelector('.carousel-next');
  var cards = document.querySelector('.projects-cards');

  if (prev && next && cards) {
    prev.addEventListener('click', function () {
      cards.scrollBy({ left: -320, behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      cards.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }
});
