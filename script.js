  document.addEventListener('DOMContentLoaded', function() {
      const spaceVideo = document.getElementById('space-video');
      const menuToggle = document.getElementById("menuToggle");
      const menu = document.getElementById("menu");
      const joinBtn = document.getElementById('join-btn');
      const navbar = document.getElementById("navbar");

      // Ensure video starts
      spaceVideo.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction.");
      });

      // Fallback for mobile autoplay
      document.addEventListener('touchstart', function() {
        spaceVideo.play();
      });

      // Join button functionality
      joinBtn.addEventListener('click', function() {
        alert('🚀 Welcome to our space community!');
      });

      // Toggle menu for mobile
      menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        
        // Change icon based on menu state
        if (menu.classList.contains("active")) {
          menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });

      // Close menu when clicking on a link
      const menuItems = document.querySelectorAll("#menu li a");
      menuItems.forEach(item => {
        item.addEventListener("click", () => {
          menu.classList.remove("active");
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Navbar shrink on scroll
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.style.padding = "0.6rem 2rem";
          navbar.style.background = "rgba(0, 0, 30, 0.95)";
        } else {
          navbar.style.padding = "1rem 2rem";
          navbar.style.background = "rgba(0, 0, 30, 0.85)";
        }
      });
    });

    