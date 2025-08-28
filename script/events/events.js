const eventsItems = [
  {
    title: "Boot-Camp Phase 1",
    desc: "A basic electronic workshop.",
    image: "assets/gallery/2.jpeg",
  },
  {
    title: "Outreach programme",
    desc: "Guidance for school students for IT fair",
    image: "assets/gallery/3.jpg",
  },
];

const container = document.querySelector(".events-container");

eventsItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "events-card";
  card.innerHTML = `
    <div class="event-image">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="event-info">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
  container.appendChild(card);
});
