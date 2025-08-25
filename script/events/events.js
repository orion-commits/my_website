const eventsItems = [
  { title: "Event 1", desc: "Tech Meetup 2024 eiufhiuef qhfiuh f fqwefi wqif iqfi ief fiq ewuf wi i iewh fie w", image: "assets/bg_image.jpeg" },
  { title: "Event 2", desc: "Hackathon", image: "assets/bg_image.jpeg" },
  { title: "Event 3", desc: "Workshop", image: "assets/bg_image.jpeg" },
  { title: "Event 4", desc: "Coding Night", image: "assets/bg_image.jpeg" },
  { title: "Event 5", desc: "Fun Meetup", image: "assets/bg_image.jpeg" }
];

const container = document.querySelector('.events-container');

eventsItems.forEach(item => {
  const card = document.createElement('div');
  card.className = 'events-card';
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
