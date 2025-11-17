// Scroll animations using Intersection Observer
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Observe elements with specific scroll animation classes
  const scrollElements = document.querySelectorAll(
    '.animate-slide-in-left-scroll, .animate-slide-in-right-scroll, .animate-scale-in, .animate-fade-in-scale'
  );
  scrollElements.forEach(element => {
    observer.observe(element);
  });
}

// Go to top button functionality
export function initGoToTopButton() {
  // Create the go-to-top button
  const goToTopBtn = document.createElement('button');
  goToTopBtn.innerHTML = `
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  `;
  goToTopBtn.className = 'fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-blue-500/90 backdrop-blur-sm text-white shadow-lg transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 opacity-0 pointer-events-none animate-bounce-in flex items-center justify-center';
  goToTopBtn.setAttribute('aria-label', 'Go to top');
  goToTopBtn.style.animationDelay = '1s';

  document.body.appendChild(goToTopBtn);

  // Show/hide button based on scroll position
  const toggleButton = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroSection = document.getElementById('hero');

    if (!heroSection) {
      // Fallback: show button after scrolling 200px
      if (scrollY > 200) {
        goToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        goToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        goToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        goToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
      return;
    }

    const heroHeight = heroSection.offsetHeight;

    // Show button when user has scrolled past the hero section height
    if (scrollY > heroHeight) {
      goToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      goToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      goToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      goToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  };

  // Smooth scroll to top
  goToTopBtn.addEventListener('click', () => {
    // Hide button immediately when clicked
    goToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
    goToTopBtn.classList.add('opacity-0', 'pointer-events-none');

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Listen for scroll events
  window.addEventListener('scroll', toggleButton);

  // Initial check
  toggleButton();
}

// Initialize all scroll animations when DOM is loaded
export function initAllAnimations() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initGoToTopButton();
    });
  } else {
    initScrollAnimations();
    initGoToTopButton();
  }
}
