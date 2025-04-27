document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  
    // Scroll animations
    const faders = document.querySelectorAll('.scroll-fade');
    const sliders = document.querySelectorAll('.card');
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });
  
    // Custom cursor
    const cursor = document.getElementById('customCursor');
  
    document.addEventListener('mousemove', e => {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
    });
  
    const hoverTargets = document.querySelectorAll('a, button, .btn, .card, .social-link');
  
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
      target.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
    });
  
    // Add floating animation to some elements
    const floatingElements = document.querySelectorAll('.card-icon, .btn');
    floatingElements.forEach(el => {
      el.classList.add('floating');
    });
  });