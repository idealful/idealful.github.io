// Copy email to clipboard
document.addEventListener('DOMContentLoaded', function () {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const email = 'idealful@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        const originalBg = copyEmailBtn.className;
        copyEmailBtn.classList.remove('bg-gray-300', 'hover:bg-gray-400');
        copyEmailBtn.classList.add('bg-green-500');
        copyEmailBtn.textContent = '복사됨!';

        setTimeout(() => {
          copyEmailBtn.className = originalBg;
          copyEmailBtn.innerHTML =
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>';
        }, 1500);
      });
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Active navigation link highlighting
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });

  // Add fade-in animation to elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  const careerStartDate = '2012-08-30';
  const thisDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  document.querySelectorAll('[data-career]').forEach((el) => {
    el.textContent = CUSTOM.UTIL.getYearDiff(careerStartDate, thisDate) + '년';
  });
});
