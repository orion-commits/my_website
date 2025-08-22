// script/focus/app.js

const focusGridContainer = document.getElementById('focus-grid-container');

// Function to create a single focus card's HTML
function createFocusCard(focus) {
  const article = document.createElement('article');
  article.classList.add('focus-card');

  article.innerHTML = `
    <div class="focus-icon">
      <i class="${focus.icon}"></i>
    </div>
    <div class="focus-content">
      <h3>${focus.title}</h3>
      <p>${focus.description}</p>
    </div>
  `;
  return article;
}

// Function to render all focus areas
function renderFocusAreas() {
  if (typeof focusAreas !== 'undefined' && focusAreas.length > 0) {
    focusAreas.forEach(focus => {
      const focusCard = createFocusCard(focus);
      focusGridContainer.appendChild(focusCard);
      
      // *** THE FIX ***
      // Use setTimeout to add the 'is-visible' class
      // after the card has been added to the DOM.
      // The delay ensures the transition works correctly.
      setTimeout(() => {
        focusCard.classList.add('is-visible');
      }, 10);
    });
  } else {
    console.error("ERROR: focusAreas array is not defined or is empty.");
  }
}

// Ensure the HTML is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  if (focusGridContainer) {
    renderFocusAreas();
  } else {
    console.error("ERROR: Element with ID 'focus-grid-container' not found.");
  }
});