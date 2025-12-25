// main.js - Module Pattern
(function() {
  'use strict';

  // 1. DOM Elements Cache
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const revealElements = document.querySelectorAll('.reveal');

  // 2. Scroll Animation Handler (Intersection Observer)
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    root: null,
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
  });

  // Apply observer to all reveal elements
  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Mobile Navigation Toggle
  const toggleMenu = () => {
    navMenu.classList.toggle('active');
    // Animate hamburger icon change if desired (simple text toggle for now)
    hamburger.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.innerHTML = '☰';
    });
  });

  // 4. Header Scroll Effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Use passive listener for scroll performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 5. Smooth Scroll for Anchor Links (Polyfill-like behavior)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // 6. Initialize (Console Check)
  console.log('Merlion Brews System Initialized');

})();
