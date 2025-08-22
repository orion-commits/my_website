
  
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
bgVideo.addEventListener('error', () => {
  console.log('Video failed to load, using fallback');
  fallbackImage.style.display = 'block';
  bgVideo.style.display = 'none';
});

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

// Wait for video to load
bgVideo.addEventListener('loadeddata', () => {
  setupVideo();
});

// If video takes too long to load
setTimeout(() => {
  if (bgVideo.readyState < 3) { // HAVE_FUTURE_DATA
    console.log('Video loading timeout, using fallback');
    fallbackImage.style.display = 'block';
    bgVideo.style.display = 'none';
  }
}, 5000);

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
  document.getElementById('our-focus').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
});

// Load more button functionality
document.getElementById('loadMoreBtn').addEventListener('click', function() {
  // Animate button
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = 'scale(1)';
  }, 150);
  
  // Show message
  this.innerHTML = '<i class="fas fa-hourglass-half"></i> Coming Soon...';
  this.disabled = true;
  this.style.opacity = '0.7';
  
  // Could add actual loading functionality here
  setTimeout(() => {
    alert('More execom members will be added soon! Stay tuned for updates.');
  }, 500);
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

// Enhanced button interactions
document.querySelectorAll('button, .focus-card, .execom-member, .project-card').forEach(element => {
  element.addEventListener('mouseenter', function() {
    if (cursor) {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.borderColor = '#6e45e2';
    }
  });
  
  element.addEventListener('mouseleave', function() {
    if (cursor) {
      cursor.style.transform = 'scale(1)';
      cursor.style.borderColor = '#88d3ce';
    }
  });
});

// Enhanced Parallax effect for background elements
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const aboutImage = document.querySelector('.about-image');
  const focusCards = document.querySelectorAll('.focus-card');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (aboutImage) {
    const speed = 0.3;
    const yPos = -(scrolled * speed);
    aboutImage.style.transform = `translateY(${yPos}px)`;
  }
  
  focusCards.forEach((card, index) => {
    const speed = 0.2 + (index * 0.1);
    const yPos = -(scrolled * speed);
    card.style.transform = `translateY(${yPos}px)`;
  });
});

// Project Cards Animation on Scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate-in');
      }, index * 200);
      projectObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

projectCards.forEach(card => {
  projectObserver.observe(card);
});

// Projects Button Click Handler
document.querySelector('.projects-btn')?.addEventListener('click', function() {
  // Animate button
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = 'scale(1.05)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 150);
  }, 150);
  
  // Show message with enhanced styling
  const originalText = this.innerHTML;
  this.innerHTML = '<i class="fas fa-rocket"></i> Launching Soon...';
  this.style.background = 'linear-gradient(135deg, #ff9800, #6e45e2)';
  
  setTimeout(() => {
    alert('🚀 More amazing projects are being developed! Check back soon for updates on our latest space innovations.');
    this.innerHTML = originalText;
    this.style.background = 'linear-gradient(135deg, #6e45e2 0%, #88d3ce 50%, #ff9800 100%)';
  }, 1000);
});

// Add stagger animation to project cards on scroll
const animateProjectCards = () => {
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
};

animateProjectCards();



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