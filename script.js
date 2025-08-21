 document.addEventListener('DOMContentLoaded', function() {
      // Create stars background
      function createStars() {
        const starsContainer = document.getElementById('stars');
        const starsCount = 200;
        
        for (let i = 0; i < starsCount; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          
          // Random position
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          // Random size
          const size = Math.random() * 3;
          
          // Random animation duration
          const duration = Math.random() * 5 + 3;
          
          star.style.left = `${x}%`;
          star.style.top = `${y}%`;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.animationDuration = `${duration}s`;
          star.style.animationDelay = `${Math.random() * 5}s`;
          
          starsContainer.appendChild(star);
        }
      }
      
      createStars();
      
      // Navbar scroll effect
      window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });

      // Mobile menu toggle
      const menuToggle = document.getElementById('menuToggle');
      const menu = document.getElementById('menu');
      
      menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      const menuLinks = document.querySelectorAll('#menu a');
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          menu.classList.remove('active');
        });
      });

      // Form submission
      const joinForm = document.getElementById('joinForm');
      if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your interest! We will get back to you soon.');
          joinForm.reset();
        });
      }

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    });