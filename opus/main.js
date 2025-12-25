/**
 * ============================================
 * MERLION BREWS ARTISAN ROASTERY
 * Main JavaScript - Interactivity & Animations
 * ============================================
 * 
 * Features:
 * 1. Scroll Animation Observer - Fade-in elements as they enter viewport
 * 2. Mobile Navigation Toggle - Hamburger menu open/close
 * 3. Header Scroll Effect - Background change on scroll
 * 4. Smooth Scroll for Anchor Links - Enhanced navigation
 * 5. Lazy Loading Images - Performance optimization
 * 
 * @author Meticulous AI Assistant
 * @version 1.0.0
 */

(function() {
  'use strict';

  // ============================================
  // 1. DOM ELEMENTS CACHE
  // ============================================
  
  const DOM = {
    header: document.querySelector('.header'),
    navToggle: document.querySelector('.nav-toggle'),
    navMenu: document.querySelector('.nav-menu'),
    navLinks: document.querySelectorAll('.nav-link'),
    revealElements: document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale'),
    anchorLinks: document.querySelectorAll('a[href^="#"]'),
    body: document.body
  };

  // ============================================
  // 2. CONFIGURATION
  // ============================================
  
  const CONFIG = {
    scrollThreshold: 100,           // Pixels scrolled before header changes
    revealThreshold: 0.15,          // Percentage of element visible to trigger animation
    revealRootMargin: '0px 0px -50px 0px',  // Margin around viewport for reveal
    smoothScrollOffset: 80,          // Offset for smooth scroll (header height)
    mobileBreakpoint: 768           // Mobile breakpoint in pixels
  };

  // ============================================
  // 3. UTILITY FUNCTIONS
  // ============================================
  
  /**
   * Debounce function to limit execution rate
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  /**
   * Check if device is mobile based on viewport width
   * @returns {boolean} True if mobile
   */
  const isMobile = () => window.innerWidth <= CONFIG.mobileBreakpoint;

  /**
   * Lock body scroll (for mobile menu)
   * @param {boolean} lock - Whether to lock or unlock
   */
  const lockBodyScroll = (lock) => {
    DOM.body.style.overflow = lock ? 'hidden' : '';
  };

  // ============================================
  // 4. HEADER SCROLL EFFECT
  // ============================================
  
  /**
   * Handle header background change on scroll
   */
  const handleHeaderScroll = () => {
    if (!DOM.header) return;
    
    const scrolled = window.scrollY > CONFIG.scrollThreshold;
    DOM.header.classList.toggle('scrolled', scrolled);
  };

  /**
   * Initialize header scroll effect
   */
  const initHeaderScroll = () => {
    // Initial check
    handleHeaderScroll();
    
    // Add scroll listener with debounce for performance
    window.addEventListener('scroll', debounce(handleHeaderScroll, 5), { passive: true });
  };

  // ============================================
  // 5. MOBILE NAVIGATION
  // ============================================
  
  /**
   * Toggle mobile navigation menu
   */
  const toggleMobileNav = () => {
    if (!DOM.navToggle || !DOM.navMenu) return;
    
    const isActive = DOM.navMenu.classList.toggle('active');
    DOM.navToggle.classList.toggle('active', isActive);
    lockBodyScroll(isActive);
    
    // Update ARIA attributes for accessibility
    DOM.navToggle.setAttribute('aria-expanded', isActive);
    DOM.navMenu.setAttribute('aria-hidden', !isActive);
  };

  /**
   * Close mobile navigation menu
   */
  const closeMobileNav = () => {
    if (!DOM.navMenu || !DOM.navToggle) return;
    
    DOM.navMenu.classList.remove('active');
    DOM.navToggle.classList.remove('active');
    lockBodyScroll(false);
    DOM.navToggle.setAttribute('aria-expanded', 'false');
    DOM.navMenu.setAttribute('aria-hidden', 'true');
  };

  /**
   * Initialize mobile navigation
   */
  const initMobileNav = () => {
    if (!DOM.navToggle) return;
    
    // Toggle button click
    DOM.navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
    
    // Close menu when clicking nav links
    DOM.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMobile()) {
          closeMobileNav();
        }
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (DOM.navMenu.classList.contains('active') && 
          !DOM.navMenu.contains(e.target) && 
          !DOM.navToggle.contains(e.target)) {
        closeMobileNav();
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.navMenu.classList.contains('active')) {
        closeMobileNav();
      }
    });
    
    // Close menu on window resize to desktop
    window.addEventListener('resize', debounce(() => {
      if (!isMobile() && DOM.navMenu.classList.contains('active')) {
        closeMobileNav();
      }
    }, 100));
  };

  // ============================================
  // 6. SMOOTH SCROLL
  // ============================================
  
  /**
   * Smooth scroll to target element
   * @param {string} targetId - Target element ID
   */
  const smoothScrollTo = (targetId) => {
    const target = document.querySelector(targetId);
    if (!target) return;
    
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - CONFIG.smoothScrollOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  /**
   * Initialize smooth scroll for anchor links
   */
  const initSmoothScroll = () => {
    DOM.anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only handle internal anchor links
        if (href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          smoothScrollTo(href);
          
          // Update URL without triggering scroll
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  };

  // ============================================
  // 7. SCROLL REVEAL ANIMATIONS
  // ============================================
  
  /**
   * Initialize Intersection Observer for reveal animations
   */
  const initScrollReveal = () => {
    if (!DOM.revealElements.length) return;
    
    // Check for Intersection Observer support
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all elements immediately
      DOM.revealElements.forEach(el => el.classList.add('active'));
      return;
    }
    
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after animation (performance optimization)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: CONFIG.revealThreshold,
        rootMargin: CONFIG.revealRootMargin
      }
    );
    
    DOM.revealElements.forEach(el => revealObserver.observe(el));
  };

  // ============================================
  // 8. ACTIVE NAV LINK HIGHLIGHTING
  // ============================================
  
  /**
   * Update active nav link based on scroll position
   */
  const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + CONFIG.smoothScrollOffset + 50;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        DOM.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  /**
   * Initialize active nav link highlighting
   */
  const initActiveNavLink = () => {
    window.addEventListener('scroll', debounce(updateActiveNavLink, 50), { passive: true });
    updateActiveNavLink(); // Initial check
  };

  // ============================================
  // 9. LAZY LOADING IMAGES
  // ============================================
  
  /**
   * Initialize lazy loading for images
   */
  const initLazyLoading = () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (!lazyImages.length) return;
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          });
        },
        { rootMargin: '100px' }
      );
      
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback: load all images immediately
      lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  };

  // ============================================
  // 10. PARALLAX EFFECT (HERO DECORATIONS)
  // ============================================
  
  /**
   * Initialize parallax effect for hero decorations
   */
  const initParallax = () => {
    const decorations = document.querySelectorAll('.decoration');
    
    if (!decorations.length || isMobile()) return;
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    window.addEventListener('scroll', debounce(() => {
      const scrolled = window.scrollY;
      
      decorations.forEach((decoration, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = scrolled * speed;
        decoration.style.transform = `translateY(${yPos}px)`;
      });
    }, 10), { passive: true });
  };

  // ============================================
  // 11. FORM VALIDATION (For future use)
  // ============================================
  
  /**
   * Basic form validation helper
   * @param {HTMLFormElement} form - Form element to validate
   * @returns {boolean} Whether form is valid
   */
  const validateForm = (form) => {
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
    
    return isValid;
  };

  // ============================================
  // 12. ACCESSIBILITY ENHANCEMENTS
  // ============================================
  
  /**
   * Initialize accessibility enhancements
   */
  const initAccessibility = () => {
    // Add ARIA attributes to navigation
    if (DOM.navToggle) {
      DOM.navToggle.setAttribute('aria-label', 'Toggle navigation menu');
      DOM.navToggle.setAttribute('aria-expanded', 'false');
      DOM.navToggle.setAttribute('aria-controls', 'nav-menu');
    }
    
    if (DOM.navMenu) {
      DOM.navMenu.setAttribute('role', 'navigation');
      DOM.navMenu.setAttribute('aria-hidden', 'true');
    }
    
    // Skip to main content link functionality
    const skipLink = document.querySelector('.skip-to-content');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.setAttribute('tabindex', '-1');
          main.focus();
        }
      });
    }
  };

  // ============================================
  // 13. PERFORMANCE MONITORING
  // ============================================
  
  /**
   * Log performance metrics (development only)
   */
  const logPerformance = () => {
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = window.performance.timing;
          const loadTime = timing.loadEventEnd - timing.navigationStart;
          console.log(`Page load time: ${loadTime}ms`);
        }, 0);
      });
    }
  };

  // ============================================
  // 14. ERROR HANDLING
  // ============================================
  
  /**
   * Global error handler
   */
  const initErrorHandling = () => {
    window.addEventListener('error', (e) => {
      console.error('JavaScript error:', e.message, 'at', e.filename, 'line', e.lineno);
    });
  };

  // ============================================
  // 15. INITIALIZATION
  // ============================================
  
  /**
   * Initialize all modules when DOM is ready
   */
  const init = () => {
    try {
      // Core functionality
      initHeaderScroll();
      initMobileNav();
      initSmoothScroll();
      initScrollReveal();
      initActiveNavLink();
      
      // Enhancements
      initLazyLoading();
      initParallax();
      initAccessibility();
      initErrorHandling();
      
      // Development helpers
      if (process?.env?.NODE_ENV === 'development') {
        logPerformance();
      }
      
      console.log('🎉 Merlion Brews: All modules initialized successfully');
    } catch (error) {
      console.error('Initialization error:', error);
    }
  };

  // ============================================
  // 16. DOM READY CHECK
  // ============================================
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded
    init();
  }

  // ============================================
  // 17. EXPOSE PUBLIC API (Optional)
  // ============================================
  
  // Expose certain functions globally if needed
  window.MerlionBrews = {
    closeMobileNav,
    smoothScrollTo,
    validateForm
  };

})();
