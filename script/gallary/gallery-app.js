const galleryPageItems = [
  { title: "Event 1", desc: "Tech Meetup 2024", image: "assets/gallery/1.jpg" },
  { title: "Event 2", desc: "Hackathon", image: "assets/gallery/2.jpg" },
  { title: "Event 3", desc: "Workshop", image: "assets/gallery/3.jpg" },
  { title: "Event 4", desc: "Coding Night", image: "assets/gallery/4.jpg" },
  { title: "Event 5", desc: "Fun Meetup", image: "assets/gallery/5.jpg" }
];

const gallery_container = document.querySelector('.gallery-container');

galleryPageItems.forEach(item => {
    console.log(item.name);
  const card = document.createElement('div');
  card.className = 'gallery-card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="info">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
  gallery_container.appendChild(card);
});
