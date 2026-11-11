// mobile navigation.
var menuButton = document.getElementById('menu-toggle');
var nav = document.getElementById('nav');

menuButton.addEventListener('click', function () {
  var isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

//  automatically close the mobile navigation when a link is clicked.
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', false);
  });
});

// Scroll the selected slider using the arrow buttons.
document.querySelectorAll('.arrow-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var track = document.getElementById(button.dataset.target);
    var direction = Number(button.dataset.dir);
    var firstItem = track.firstElementChild;
    var step = firstItem.offsetWidth + 32; // Card width plus the gap.
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  });
});
