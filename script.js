// Region banner dismiss
const banner = document.getElementById('regionBanner');
const closeBanner = document.getElementById('closeBanner');
if (closeBanner && banner) {
  closeBanner.addEventListener('click', () => {
    banner.hidden = true;
  });
}

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Demo-only buttons: prevent navigation, give lightweight feedback
document.querySelectorAll('a[href="#"], .btn').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.tagName === 'A') e.preventDefault();
  });
});
