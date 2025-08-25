document.addEventListener('DOMContentLoaded', function() {
  const execomContainer = document.getElementById("execom-container");

  // Function to create a single member's HTML card
  function createMemberCard(member) {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("execom-member", "execom-card");

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

    execomContainer.appendChild(memberDiv);
  }

  // Check if execomMembers is defined (from execom.js)
  if (typeof execomMembers !== 'undefined' && execomMembers.length > 0) {
    execomMembers.forEach(member => {
      createMemberCard(member);
    });
    console.log(`DEBUG: Rendered ${execomMembers.length} members into the container.`);
  } else {
    console.error("ERROR: execomMembers array is not defined or is empty.");
  }
});