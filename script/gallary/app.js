const gallery_container = document.querySelector('.gallery-container');

galleryItems.forEach(item => {
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
