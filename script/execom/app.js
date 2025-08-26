const execomContainer = document.getElementById("execom-container");
let scrollInterval;
let scrollSpeed = 0.5; // Adjust this value to change the scroll speed (lower is slower)

// Function to create a single member's HTML card
function createMemberCard(member) {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("execom-member");

  memberDiv.innerHTML = `
    <img src="${member.image}" alt="${member.title}">
    <div class="overlay">
      <div class="social-links">
        <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>
        <a href="${member.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="member-info">
      <h3>${member.name}</h3>
      <p>${member.title}</p>
    </div>
  `;

  return memberDiv;
}

// Function to render all members into the container
function renderAllMembers() {
  console.log("DEBUG: renderAllMembers called."); // Log 1: Function called

  // Check if execomMembers is defined (from execom.js)
  if (typeof execomMembers !== "undefined" && execomMembers.length > 0) {
    execomMembers.forEach((member) => {
      const memberCard = createMemberCard(member);
      execomContainer.appendChild(memberCard);
    });
    console.log(
      `DEBUG: Rendered ${execomMembers.length} members into the container.`
    ); // Log 2: Members rendered
  } else {
    // This error indicates an issue with your execom.js file or its loading order
    console.error(
      "ERROR: execomMembers array is not defined or is empty. Please check 'script/execom/execom.js' and ensure it's loaded before 'app.js'."
    ); // Error Log
  }
}

// Function to start the automatic scrolling
function startAutoScroll() {
  console.log("DEBUG: startAutoScroll called."); // Log 3: Auto-scroll function called
  if (!execomContainer) {
    console.error(
      "ERROR: execomContainer element is null. Cannot start auto-scroll. Check HTML ID."
    ); // Error Log if container not found
    return;
  }

  // Clear any existing interval to prevent multiple intervals running
  clearInterval(scrollInterval);

  scrollInterval = setInterval(() => {
    // console.log(`DEBUG: Scrolling... scrollLeft: ${execomContainer.scrollLeft}, clientWidth: ${execomContainer.clientWidth}, scrollWidth: ${execomContainer.scrollWidth}`);

    // Check if we've scrolled to the end (adding a small tolerance for floating point math)
    if (
      execomContainer.scrollLeft + execomContainer.clientWidth >=
      execomContainer.scrollWidth - 1
    ) {
      execomContainer.scrollLeft = 0; // Reset to the beginning
      console.log("DEBUG: Scroll reset to beginning."); // Log 4: Scroll looped
    } else {
      execomContainer.scrollLeft += scrollSpeed; // Scroll by the defined speed
    }
  }, 10); // Update scroll position every 10 milliseconds
}

// Function to stop the automatic scrolling (e.g., on hover)
function stopAutoScroll() {
  console.log("DEBUG: stopAutoScroll called (hover detected)."); // Log 5: Hover pause
  clearInterval(scrollInterval);
}

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "DEBUG: DOM Content Loaded. Starting Execom initialization checks."
  ); // Log 6: Script started

  // Check if execomContainer element exists in the HTML
  if (!execomContainer) {
    console.error(
      "ERROR: The element with ID 'execom-container' was not found in the DOM. Please check your HTML for this ID."
    ); // Error Log if element is missing
    return; // Stop execution if container is not found
  }

  renderAllMembers(); // First, render all your members

  // A small delay is crucial here. The browser needs a moment to render the members
  // and calculate the actual 'scrollWidth' before we can compare it.
  setTimeout(() => {
    const currentScrollWidth = execomContainer.scrollWidth;
    const currentClientWidth = execomContainer.clientWidth;
    console.log(
      `DEBUG: Final Check: scrollWidth = ${currentScrollWidth}, clientWidth = ${currentClientWidth}`
    ); // Log 7: Crucial dimensions

    // Only start auto-scrolling if there's more content than can fit on screen
    if (currentScrollWidth > currentClientWidth) {
      startAutoScroll();
      console.log("DEBUG: Auto-scroll initiated successfully!"); // Log 8: Scroll started
      // Add event listeners for pausing on hover
      execomContainer.addEventListener("mouseenter", stopAutoScroll);
      execomContainer.addEventListener("mouseleave", startAutoScroll);
    } else {
      console.warn(
        "WARNING: Content does not overflow horizontally. Auto-scroll will NOT start. Add more members or narrow your browser window to test."
      ); // Warning Log
    }
  }, 200); // 200ms delay to ensure layout is computed
});
