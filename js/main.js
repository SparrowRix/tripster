// Initialise Lucide icons
lucide.createIcons();

// ── Header scroll behaviour ──────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Mobile hamburger ─────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  // Animate bars into X
  if (menuOpen) {
    bar1.style.transform = 'translateY(8px) rotate(45deg)';
    bar2.style.opacity = '0';
    bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
  } else {
    bar1.style.transform = '';
    bar2.style.opacity = '';
    bar3.style.transform = '';
  }
});

function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  bar1.style.transform = '';
  bar2.style.opacity = '';
  bar3.style.transform = '';
}

// ── Intersection Observer (fade-in-up) ───────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Lead form ─────────────────────────────────────────
const form = document.getElementById('lead-form');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !phone) {
    // Simple shake for empty fields
    [document.getElementById('name'), document.getElementById('phone')].forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#ff4d4f';
        setTimeout(() => input.style.borderColor = '', 1500);
      }
    });
    return;
  }

  form.style.display = 'none';
  successMsg.classList.remove('hidden');

  // Re-init Lucide for the newly visible check-circle icon
  lucide.createIcons();
});
