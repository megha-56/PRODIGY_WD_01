// Change navbar style on scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// CTA button action
document.getElementById('cta-btn').addEventListener('click', () => {
  alert('Thanks for getting started!');
});