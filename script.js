AOS.init({
  duration: 1000,
  once: true,
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  });
});

// Wait for DOM to load before initializing Typed.js and form logic
document.addEventListener('DOMContentLoaded', () => {
  // Typed.js effect
  const typedElement = document.querySelector('.typed-text');
  if (typedElement) {
    new Typed('.typed-text', {
      strings: ['Java Backend Developer', 'MERN Stack Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Simple form validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      const email = form.querySelector('input[type="email"]');
      const message = form.querySelector('textarea');
      if (!email.value.includes('@') || message.value.trim() === '') {
        e.preventDefault();
        alert('Please enter a valid email and message.');
      }
    });
  }
});