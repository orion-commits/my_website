const gallery_container = document.querySelector(".gallery-container");

galleryItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "gallery-card";
  card.innerHTML = `
    <img src="${item.image}" alt= "orion gallery">
  `;
  gallery_container.appendChild(card);
});
