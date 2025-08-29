// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 6 + 'px';
    cursorFollower.style.top = e.clientY + 6 + 'px';
  }, 100);
});

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('fade-out');
  }, 2000);
});

// Floating Particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    particlesContainer.appendChild(particle);
  }
}

createParticles();



// Video Background Enhancement with fallback
const bgVideo = document.getElementById('bgVideo');
const fallbackImage = document.querySelector('.fallback-image');

// Check if video can play
// bgVideo.addEventListener('error', () => {
//   console.log('Video failed to load, using fallback');
//   fallbackImage.style.display = 'block';
//   bgVideo.style.display = 'none';
// });

// Try to play video with error handling
function setupVideo() {
  bgVideo.muted = true;
  
  const playPromise = bgVideo.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Video autoplay prevented:', error);
      fallbackImage.style.display = 'block';
      bgVideo.style.display = 'none';
      
      // Try to play on user interaction
      document.addEventListener('click', function playOnClick() {
        bgVideo.play().then(() => {
          fallbackImage.style.display = 'none';
          bgVideo.style.display = 'block';
          document.removeEventListener('click', playOnClick);
        }).catch(e => {
          console.log('Still cannot play video:', e);
        });
      }, { once: true });
    });
  }
}

// // Wait for video to load
// bgVideo.addEventListener('loadeddata', () => {
//   setupVideo();
// });

// If video takes too long to load
// setTimeout(() => {
//   if (bgVideo.readyState < 3) { // HAVE_FUTURE_DATA
//     console.log('Video loading timeout, using fallback');
//     fallbackImage.style.display = 'block';
//     bgVideo.style.display = 'none';
//   }
// }, 5000);

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  if (menu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking on a link
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Section reveal animation
const allSections = document.querySelectorAll('.section-hidden');
const revealSection = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
});

// Join button smooth scroll
document.getElementById('join-btn').addEventListener('click', () => {
  document.getElementById('join-us').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add glow effect to main title on scroll
window.addEventListener('scroll', () => {
  const quote = document.querySelector('#space-section .quote');
  if (quote) {
    const scrollPercent = window.scrollY / window.innerHeight;
    if (scrollPercent < 1) {
      quote.style.animation = scrollPercent > 0.5 ? 'glow 2s ease-in-out infinite' : 'none';
    }
  }
});


// footer

 document.addEventListener('DOMContentLoaded', function () {
            // Select all footer sections that should be collapsible
            const collapsibleSections = document.querySelectorAll('.footer-section.collapsible');

            collapsibleSections.forEach(section => {
                const header = section.querySelector('h3');

                header.addEventListener('click', () => {
                    // Check if the screen is in mobile view
                    if (window.innerWidth <= 768) {
                        // Toggle the 'active' class on the section
                        section.classList.toggle('active');
                    }
                });
            });
        });



// Add this inside your main DOMContentLoaded function in script.js

// ----- FOCUS SECTION "CONSTELLATION" ANIMATION -----
const focusCards = document.querySelectorAll('.focus-card');

const focusObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.1 // Trigger when 10% of the card is visible
});

focusCards.forEach(card => {
    focusObserver.observe(card);
});