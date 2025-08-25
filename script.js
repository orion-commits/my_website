document.addEventListener("DOMContentLoaded", function () {
  // --- Navbar Dropdown Logic ---
  const dropdownToggle = document.querySelector(".dropdown > a");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdownParent = document.querySelector(".dropdown");
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  
  // This function sets up the dropdown behavior based on screen size
  function setupDropdown() {
    // Desktop: Click to toggle dropdown
    if (window.innerWidth > 768) {
      // Remove any existing mobile-only listeners to prevent conflicts
      dropdownToggle.removeEventListener("click", toggleMobileDropdown);
      
      dropdownToggle.addEventListener("click", toggleDesktopDropdown);

      // Close dropdown on outside click for desktop
      window.addEventListener("click", closeDropdownOnClickOutside);

    } else {
      // Mobile: Toggle collapsible dropdown inside the menu
      // Remove any existing desktop-only listeners
      dropdownToggle.removeEventListener("click", toggleDesktopDropdown);
      window.removeEventListener("click", closeDropdownOnClickOutside);
      
      dropdownToggle.addEventListener("click", toggleMobileDropdown);
    }
  }

  // Desktop dropdown toggle function
  function toggleDesktopDropdown(e) {
    e.preventDefault();
    dropdownContent.classList.toggle("show");
    dropdownParent.classList.toggle("active");
  }

  // Mobile dropdown toggle function
  function toggleMobileDropdown(e) {
    e.preventDefault();
    dropdownParent.classList.toggle("active");
  }

  // Close dropdown on outside click
  function closeDropdownOnClickOutside(e) {
    if (!e.target.closest(".dropdown")) {
      dropdownContent.classList.remove("show");
      dropdownParent.classList.remove("active");
    }
  }
  
  // Close both mobile menu and dropdown when a sub-link is clicked
  dropdownContent.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove("active"); // Close the whole menu
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        dropdownParent.classList.remove("active"); // Collapse the dropdown
      }
    });
  });

  // Call the function to set up the dropdown on page load
  setupDropdown();
  
  // Also, re-run the setup on window resize to switch between mobile/desktop logic
  window.addEventListener("resize", () => {
    setupDropdown();
  });

  // --- Mobile Menu Toggle ---
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    if (menu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when a main link is clicked
  menu.querySelectorAll("a:not(.dropdown > a)").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });


  // --- Smooth Scrolling for Internal Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // --- Footer Collapsible Logic ---
  const collapsibleSections = document.querySelectorAll(".footer-section.collapsible");
  collapsibleSections.forEach((section) => {
    const header = section.querySelector("h3");
    header.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        section.classList.toggle("active");
      }
    });
  });

  // --- Video Background with Fallback (Corrected) ---
  const bgVideo = document.getElementById("bgVideo");
  const fallbackImage = document.querySelector(".fallback-image");
  if (bgVideo && fallbackImage) {
    // Try to play video with error handling
    function setupVideo() {
      bgVideo.muted = true;
      const playPromise = bgVideo.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Video is playing.');
          fallbackImage.style.display = 'none';
          bgVideo.style.display = 'block';
        }).catch(error => {
          console.log('Video autoplay prevented:', error);
          fallbackImage.style.display = 'block';
          bgVideo.style.display = 'none';
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
    setupVideo();
  } else {
    console.error("ERROR: Video or fallback element not found.");
  }

  // --- Section Reveal Animation ---
  const allSections = document.querySelectorAll(".section-hidden");
  const revealSection = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        observer.unobserve(entry.target);
      }
    });
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
  allSections.forEach((section) => {
    sectionObserver.observe(section);
  });
});

// --- Custom Cursor ---
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");
document.addEventListener("mousemove", (e) => {
  if (cursor && cursorFollower) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 6 + "px";
      cursorFollower.style.top = e.clientY + 6 + "px";
    }, 100);
  }
});

// --- Loading Screen ---
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add("fade-out");
    }, 2000);
  }
});

// --- Floating Particles ---
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (particlesContainer) {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 15 + "s";
      particlesContainer.appendChild(particle);
    }
  }
}
createParticles();

// --- Navbar Scroll Effect ---
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});