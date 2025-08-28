const galleryPageItems = [
  { title: "Boot-Camp Phase 1", desc: "A basic electronic workshop.", image: "assets/gallery/1.JPG" },
  { title: "Boot-Camp Phase 1", desc: "A basic electronic workshop.", image: "assets/gallery/2.jpeg" },
  { title: "Outreach programme", desc: "Guidance for school students for IT fair", image: "assets/gallery/3.jpg" },
  // { title: "Outreach programme", desc: "Guidance for school students for IT fair", image: "assets/gallery/4.jpg" },
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
