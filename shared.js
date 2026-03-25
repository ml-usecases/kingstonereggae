document.addEventListener("DOMContentLoaded", function () {
  // 1. MASTER CONTACT INFO (Email + 8 Social Icons)
  const contactHTML = `
    <a href="mailto:info@kingstonereggae.uk" class="email-link">info@kingstonereggae.uk</a>
    <div class="social-links">
      <a href="https://www.facebook.com/kingstonereggaeuk" target="_blank" aria-label="Facebook"><svg viewBox="0 0 320 512" class="social-svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
      <a href="https://www.instagram.com/kingstonereggae_uk" target="_blank" aria-label="Instagram"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" class="social-icon-img" alt="Instagram"></a>
      <a href="https://www.youtube.com/@KingstoneReggaeUK" target="_blank" aria-label="YouTube"><svg viewBox="0 0 576 512" class="social-svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.205z"/></svg></a>
      <a href="https://www.tiktok.com/@kingstonereggaeuk" target="_blank" aria-label="TikTok"><svg viewBox="0 0 448 512" class="social-svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg></a>
      <a href="https://open.spotify.com/artist/3E3dNUH1I0S0zqm39xYE51" target="_blank" aria-label="Spotify"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spotify.svg" class="social-icon-img" alt="Spotify"></a>
      <a href="https://music.apple.com/us/artist/kingstone/1855111583" target="_blank" aria-label="Apple Music"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/applemusic.svg" class="social-icon-img" alt="Apple Music"></a>
      <a href="https://kingstonereggaeuk.bandcamp.com/" target="_blank" aria-label="Bandcamp"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bandcamp.svg" class="social-icon-img" alt="Bandcamp"></a>
      <a href="https://gtracks.net/artists/kingstone/" target="_blank" aria-label="Gtracks"><img src="https://gtracks.net/wp-content/uploads/2022/02/Gtracks-Red-Cropped2-logo.png" class="social-icon-img" alt="Gtracks"></a>
    </div>
  `;

  // 2. MASTER NAVIGATION BAR
  const navHTML = `
    <a href="index.html">Home</a>
    <a href="john.html">John</a>
    <a href="israel.html">Israel</a>
    <a href="enoch.html">Enoch</a>
    <a href="gavin.html">Gavin</a>
    <a href="paul.html">Paul</a>
    <a href="gallery.html">Gallery</a>
  `;

  // Injects into <div class="contact-info-placeholder"></div>
  const contactPlaceholders = document.querySelectorAll(".contact-info-placeholder");
  contactPlaceholders.forEach((el) => {
    el.innerHTML = contactHTML;
    el.classList.add("contact-info"); // automatically styles it!
  });

  // Injects into <nav class="nav-placeholder"></nav>
  const navPlaceholders = document.querySelectorAll(".nav-placeholder");
  navPlaceholders.forEach((el) => {
    el.innerHTML = navHTML;
  });
});