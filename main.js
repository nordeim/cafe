/**
 * ============================================
 * MERLION BREWS ARTISAN ROASTERY
 * Main JavaScript - Animations & Interactivity
 * ============================================
 */

(function () {
    'use strict';

    // ============================================
    // 1. DOM ELEMENTS CACHE
    // ============================================
    const DOM = {
        header: document.querySelector('.header'),
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('.nav'),
        navLinks: document.querySelectorAll('.nav__link'),
        animatedElements: document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-scale-in'),
        anchorLinks: document.querySelectorAll('a[href^="#"]')
    };

    // ============================================
    // 2. SCROLL ANIMATION OBSERVER
    // ============================================
    const scrollAnimationObserver = {
        init() {
            if (!('IntersectionObserver' in window)) {
                // Fallback: Show all elements if IntersectionObserver not supported
                DOM.animatedElements.forEach(el => el.classList.add('visible'));
                return;
            }

            const options = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            DOM.animatedElements.forEach(el => observer.observe(el));
        }
    };

    // ============================================
    // 3. MOBILE NAVIGATION
    // ============================================
    const mobileNav = {
        isOpen: false,

        init() {
            if (!DOM.navToggle || !DOM.nav) return;

            DOM.navToggle.addEventListener('click', () => this.toggle());

            // Close nav when clicking a link
            DOM.navLinks.forEach(link => {
                link.addEventListener('click', () => this.close());
            });

            // Close nav when clicking outside
            document.addEventListener('click', (e) => {
                if (this.isOpen &&
                    !DOM.nav.contains(e.target) &&
                    !DOM.navToggle.contains(e.target)) {
                    this.close();
                }
            });

            // Close nav on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });
        },

        toggle() {
            this.isOpen ? this.close() : this.open();
        },

        open() {
            this.isOpen = true;
            DOM.nav.classList.add('nav--active');
            DOM.navToggle.classList.add('nav-toggle--active');
            DOM.navToggle.setAttribute('aria-expanded', 'true');
        },

        close() {
            this.isOpen = false;
            DOM.nav.classList.remove('nav--active');
            DOM.navToggle.classList.remove('nav-toggle--active');
            DOM.navToggle.setAttribute('aria-expanded', 'false');
        }
    };

    // ============================================
    // 4. HEADER SCROLL EFFECT
    // ============================================
    const headerScroll = {
        scrollThreshold: 50,
        ticking: false,

        init() {
            if (!DOM.header) return;

            window.addEventListener('scroll', () => this.onScroll(), { passive: true });
            this.checkScroll(); // Initial check
        },

        onScroll() {
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.checkScroll();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        },

        checkScroll() {
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY > this.scrollThreshold) {
                DOM.header.classList.add('header--scrolled');
            } else {
                DOM.header.classList.remove('header--scrolled');
            }
        }
    };

    // ============================================
    // 5. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    const smoothScroll = {
        init() {
            DOM.anchorLinks.forEach(link => {
                link.addEventListener('click', (e) => this.handleClick(e, link));
            });
        },

        handleClick(e, link) {
            const href = link.getAttribute('href');

            // Skip if it's just "#" or external link
            if (href === '#' || !href.startsWith('#')) return;

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        }
    };

    // ============================================
    // 6. LAZY LOADING ENHANCEMENT
    // ============================================
    const lazyLoad = {
        init() {
            // Native lazy loading is used in HTML with loading="lazy"
            // This is a fallback for browsers that don't support it
            if ('loading' in HTMLImageElement.prototype) {
                // Native lazy loading supported
                return;
            }

            // Fallback for older browsers
            const images = document.querySelectorAll('img[loading="lazy"]');

            if (!('IntersectionObserver' in window)) {
                // Load all images immediately
                images.forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                });
                return;
            }

            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    };

    // ============================================
    // 7. ACTIVE NAVIGATION HIGHLIGHT
    // ============================================
    const activeNavigation = {
        sections: [],

        init() {
            // Collect all sections that have IDs matching nav links
            DOM.navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const section = document.getElementById(href.substring(1));
                    if (section) {
                        this.sections.push({ element: section, link: link });
                    }
                }
            });

            if (this.sections.length === 0) return;

            window.addEventListener('scroll', () => this.onScroll(), { passive: true });
            this.onScroll(); // Initial check
        },

        onScroll() {
            const scrollPosition = window.scrollY + 150; // Offset for header

            let currentSection = null;

            this.sections.forEach(({ element, link }) => {
                const sectionTop = element.offsetTop;
                const sectionHeight = element.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = link;
                }
            });

            // Update active states
            DOM.navLinks.forEach(link => link.classList.remove('nav__link--active'));
            if (currentSection) {
                currentSection.classList.add('nav__link--active');
            }
        }
    };

    // ============================================
    // 8. INITIALIZE ALL MODULES
    // ============================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initModules);
        } else {
            initModules();
        }
    }

    function initModules() {
        scrollAnimationObserver.init();
        mobileNav.init();
        headerScroll.init();
        smoothScroll.init();
        lazyLoad.init();
        activeNavigation.init();

        // Log initialization (remove in production)
        console.log('🍵 Merlion Brews website initialized');
    }

    // Start the app
    init();

})();
