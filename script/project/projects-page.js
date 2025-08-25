const projectsContainer = document.getElementById('projects-container');

// Function to create a single project card's HTML
function createProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project-card');

  // Create the image and overlay section
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('project-image');
  
  // *** This checks the 'isOngoing' property from your data and adds the tag ***
  if (project.isOngoing) { 
    const ongoingTag = document.createElement('div');
    ongoingTag.classList.add('ongoing-tag');
    ongoingTag.textContent = "Ongoing";
    imageDiv.appendChild(ongoingTag);
  }

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;
  imageDiv.appendChild(img);

  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('project-overlay');
  overlayDiv.innerHTML = `
    <div class="project-links">
      <a href="${project.liveLink}" class="project-link" target="_blank" aria-label="View Live Project"><i class="fas fa-external-link-alt"></i></a>
      <a href="${project.githubLink}" class="project-link" target="_blank" aria-label="View Project on GitHub"><i class="fab fa-github"></i></a>
    </div>
  `;
  imageDiv.appendChild(overlayDiv);

  // Create the project info section
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('project-info');
  infoDiv.innerHTML = `
    <h3>${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-tags">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  `;
  
  // Append both sections to the card
  card.appendChild(imageDiv);
  card.appendChild(infoDiv);
  
  return card;
}

// Function to render all projects into the container
function renderProjects() {
  console.log("DEBUG [Projects]: renderProjects called.");

  // Ensure 'projects' array is defined (from projects.js) and not empty
  if (typeof projects !== 'undefined' && projects.length > 0) {
    console.log(`DEBUG [Projects]: Found ${projects.length} projects in 'projects.js'.`);
    projects.forEach(project => {
      const projectCard = createProjectCard(project);
      projectsContainer.appendChild(projectCard);

      // Add the 'is-visible' class after a short delay for animation
      setTimeout(() => {
        projectCard.classList.add('is-visible');
      }, 10);
    });
    console.log(`DEBUG [Projects]: Successfully rendered all ${projects.length} projects.`);
  } else {
    console.error("ERROR [Projects]: 'projects' array is not defined or is empty. Please check 'script/project/projects.js' content and ensure it's loaded BEFORE 'script/project/app.js' in your index.html.");
  }
}

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log("DEBUG [Projects]: DOM Content Loaded. Initiating checks for 'Projects' section.");

  // Check if the projectsContainer element exists in the HTML
  if (projectsContainer) {
    console.log("DEBUG [Projects]: Element with ID 'projects-container' found in the DOM.");
    renderProjects(); // Call the rendering function
  } else {
    // This error indicates a missing or misspelled ID in your index.html
    console.error("ERROR [Projects]: Element with ID 'projects-container' not found in the DOM. Please check your index.html for this ID.");
  }
});
