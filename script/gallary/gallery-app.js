// Image data
const galleryPageItems = [
  { image: "assets/gallery/1.JPG" },
  { image: "assets/gallery/2.jpeg" },
  { image: "assets/gallery/3.jpg" },
  { image: "assets/gallery/4.jpg" },
];

// Load images dynamically
const galleryContainer = document.querySelector(".gallery-container");

galleryPageItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "gallery-card";
  card.innerHTML = `<img src="${item.image}" alt="gallery image">`;
  galleryContainer.appendChild(card);
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const allImages = document.querySelectorAll(".gallery-card img");

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  updateLightbox();
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function updateLightbox() {
  lightboxImg.src = allImages[currentIndex].src;
}

function showNext() {
  currentIndex = (currentIndex + 1) % allImages.length;
  updateLightbox();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
  updateLightbox();
}

// Event listeners
allImages.forEach((img, i) => {
  img.addEventListener("click", () => openLightbox(i));
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Escape") closeLightbox();
  }
});
