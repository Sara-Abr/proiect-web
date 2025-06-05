function openLightbox(title, description, imageUrl) {
    // Afișează lightbox-ul când este apăsată o imagine
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-title').textContent = title;       // Setează titlul
    document.getElementById('lightbox-description').textContent = description; // Setează descrierea
    document.getElementById('lightbox-image').src = imageUrl;            // Setează imaginea
  }
  
  function closeLightbox() {
    // Ascunde lightbox-ul când se face click pe fundal
    document.getElementById('lightbox').style.display = 'none';
  }