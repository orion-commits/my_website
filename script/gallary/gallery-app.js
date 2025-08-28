const galleryPageItems = [
  { image: "assets/gallery/1.JPG" },
  { image: "assets/gallery/2.jpeg" },
  { image: "assets/gallery/3.jpg" },
];

const gallery_container = document.querySelector('.gallery-container');

galleryPageItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "gallery-card";
  card.innerHTML = `
    <img src="${item.image}" alt= "orion gallery">
  `;
  gallery_container.appendChild(card);
});

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const closeBtn = document.querySelector('.close-btn');

    let currentImageIndex = 0;

    // --- Function to create and render gallery cards ---
    function renderGallery() {
        if (!galleryData || galleryData.length === 0) {
            console.error('Gallery data is empty or not found.');
            return;
        }

        galleryData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.innerHTML = `
                <img src="${item.image}" alt="orion gallery">
            `;
            // Add a click listener to each card to open the lightbox
            card.addEventListener('click', () => {
                currentImageIndex = index;
                openLightbox(currentImageIndex);
            });
            galleryContainer.appendChild(card);
        });
    }

    // --- Function to open the lightbox ---
    function openLightbox(index) {
        if (galleryData[index]) {
            lightbox.style.display = 'block';
            lightboxImage.src = galleryData[index].image;
        }
    }

    // --- Function to close the lightbox ---
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // --- Function to navigate to the previous image ---
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
        lightboxImage.src = galleryData[currentImageIndex].image;
    }

    // --- Function to navigate to the next image ---
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
        lightboxImage.src = galleryData[currentImageIndex].image;
    }

    // --- Event Listeners for Lightbox Controls ---
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Keyboard navigation (optional but great for user experience)
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });

    // Initial render of the gallery when the page loads
    renderGallery();
});