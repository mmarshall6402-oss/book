// Contact form handling
const form = document.querySelector('.contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Thanks! We'll be in touch soon.";
    form.reset();
  });
}
