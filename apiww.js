// ============================================
// DATA (Ubah 'images/fotoX.jpg' sesuai nama file kamu)
// ============================================
const photoData = {
  1: {
    title: 'Lagi melihat sesuatu di hp rafi',
    desc: 'Disini kita merasa deket banget ya seperti pacaran',
    date: 'Maret 2024',
    img: 'images/foto1.jpg' // Pastikan nama file sama
  },
  2: {
    desc: 'Cantiknya seperti bunga mekar yang indah saat malam haris',
    img: 'images/foto2.jpg'
  },
  3: {
    title: 'Cantikk bangett ',
    img: 'images/foto3.jpg'
  },
  4: {
    desc: 'Bersamamu, setiap tempat menjadi istimewa.',
    date: 'Juni 2024',
    img: 'images/foto4.jpg'
  },
  5: {
    title: '',
    desc: 'Kita berdua yang sama doang yah wkwk padahal belum pacaran',
    
    img: 'images/foto5.jpg'
  },
  6: {
    title: 'Mamm miee ayamm',
    date: 'Januari 2025',
    img: 'images/foto6.jpg'
  },
  7: {
    
    img: 'images/foto7.jpg'
  },
  8: {
    
    img: 'images/foto8.jpg'
  },
  9: {
    img: 'images/foto9.jpg'
  }
};

// ============================================


// ============================================
// FLOATING HEARTS
// ============================================
function createFloatingHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = '♥';
  const size = Math.random() * 20 + 15;
  const left = Math.random() * 100;
  const duration = Math.random() * 10 + 12;
  const delay = Math.random() * 5;
  heart.style.cssText = `left: ${left}%; font-size: ${size}px; animation-duration: ${duration}s; animation-delay: ${delay}s;`;
  const colors = ['#E8B4B8', '#D4898E', '#F2AC90', '#D4A574'];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  heartsBg.appendChild(heart);
  setTimeout(() => { if (heart.parentNode) heart.remove(); }, (duration + delay) * 1000);
}
for (let i = 0; i < 10; i++) { setTimeout(createFloatingHeart, i * 400); }
setInterval(createFloatingHeart, 1500);

// ============================================
// LOVE BURST
// ============================================
function createLoveBurst(x, y) {
  const heartCount = 15;
  const colors = ['#E07A5F', '#E8B4B8', '#D4A574', '#D4898E', '#F2AC90', '#FFD700'];
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('span');
    heart.className = 'love-particle';
    heart.textContent = '♥';
    const angle = (i / heartCount) * Math.PI * 2;
    const distance = 100 + Math.random() * 100;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const rot = Math.random() * 360 - 180;
    heart.style.cssText = `left: ${x}px; top: ${y}px; color: ${colors[Math.floor(Math.random() * colors.length)]}; font-size: ${Math.random() * 20 + 20}px; --tx: ${tx}px; --ty: ${ty}px; --rot: ${rot}deg;`;
    loveBurstContainer.appendChild(heart);
    setTimeout(() => { if (heart.parentNode) heart.remove(); }, 1500);
  }
}

// ============================================
// DATA (Ubah 'images/fotoX.jpg' sesuai nama file kamu)
// ============================================

// ============================================
// DOM ELEMENTS
// ============================================
const heartsBg = document.getElementById('hearts-bg');
const giftBoxTrigger = document.getElementById('gift-box-trigger');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalDate = document.getElementById('modal-date');
const modalImageContainer = document.querySelector('.modal-image');
const loveBurstContainer = document.getElementById('love-burst');
const galleryItems = document.querySelectorAll('.gallery-item');

// ============================================
// FLOATING HEARTS (Latar Belakang)
// ============================================
function createFloatingHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = '♥';
  const size = Math.random() * 20 + 15;
  const left = Math.random() * 100;
  const duration = Math.random() * 10 + 12;
  const delay = Math.random() * 5;
  heart.style.cssText = `left: ${left}%; font-size: ${size}px; animation-duration: ${duration}s; animation-delay: ${delay}s;`;
  const colors = ['#E8B4B8', '#D4898E', '#F2AC90', '#D4A574'];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  heartsBg.appendChild(heart);
  setTimeout(() => { if (heart.parentNode) heart.remove(); }, (duration + delay) * 1000);
}
for (let i = 0; i < 10; i++) { setTimeout(createFloatingHeart, i * 400); }
setInterval(createFloatingHeart, 1500);

// ============================================
// FUNGSI LEDAKAN BUNGA TULIP & CINTA (FULL SCREEN)
// ============================================
function createFlowerLoveBurst(x, y) {
  const container = document.getElementById('love-burst');
  
  // Fokus ke Tulip dan Love, tulip lebih banyak
  const symbols = ['🌷', '❤️', '💖', '💕', '🌷', '💗', '🌷', '🌸', '🌷'];
  
  // JUMLAH PARTIKEL DIPERBANYAK (100 partikel per ledakan)
  const count = 100; 

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'flower-love-particle';
    
    // Ambil simbol random
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Kalkulasi arah ledakan (melingkar penuh)
    const angle = Math.random() * Math.PI * 2;
    
    // KEKUATAN DORONG DIPERBESAR agar menyebar ke pinggir layar
    const velocity = 300 + Math.random() * 600; 
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    // Ukuran bervariasi
    const size = Math.random() * 35 + 20; // Ukuran 20px - 55px
    
    // Set CSS
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.fontSize = size + 'px';
    
    // Terapkan variabel CSS untuk animasi
    el.style.setProperty('--tx', tx + 'px');
    el.style.setProperty('--ty', ty + 'px');
    
    // Rotasi acak (searah atau berlawanan jarum jam)
    const rot = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 1000 + 500);
    el.style.setProperty('--rot', rot + 'deg');
    
    // Durasi sedikit random agar tidak seragam
    el.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';

    container.appendChild(el);

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, 3000);
  }
}
// ============================================
// LOVE BURST (Untuk Galeri - standar)
// ============================================
function createLoveBurst(x, y) {
  const heartCount = 15;
  const colors = ['#E07A5F', '#E8B4B8', '#D4A574', '#D4898E', '#F2AC90', '#FFD700'];
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('span');
    heart.className = 'love-particle';
    heart.textContent = '♥';
    const angle = (i / heartCount) * Math.PI * 2;
    const distance = 100 + Math.random() * 100;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const rot = Math.random() * 360 - 180;
    heart.style.cssText = `left: ${x}px; top: ${y}px; color: ${colors[Math.floor(Math.random() * colors.length)]}; font-size: ${Math.random() * 20 + 20}px; --tx: ${tx}px; --ty: ${ty}px; --rot: ${rot}deg;`;
    loveBurstContainer.appendChild(heart);
    setTimeout(() => { if (heart.parentNode) heart.remove(); }, 1500);
  }
}

// ============================================
// GIFT BOX OPENING (Updated)
// ============================================
giftBoxTrigger.addEventListener('click', (e) => {
  const rect = giftBoxTrigger.getBoundingClientRect();
  // Posisi tengah kotak kado
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Tambahkan class untuk animasi CSS buka tutup
  document.body.classList.add('opening');

  // Ledakan bunga dan cinta bertahap
  createFlowerLoveBurst(x, y);
  setTimeout(() => createFlowerLoveBurst(x, y), 150);
  setTimeout(() => createFlowerLoveBurst(x, y), 300);

  // Setelah animasi buka, tampilkan konten
  setTimeout(() => {
    document.body.classList.add('opened');
  }, 800);

  giftBoxTrigger.style.pointerEvents = 'none';
});

// ============================================
// GALLERY & MODAL
// ============================================
function openModal(index) {
  const data = photoData[index];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;
  modalDate.textContent = data.date;

  if (data.img) {
    modalImageContainer.innerHTML = `<img src="${data.img}" alt="${data.title}" class="modal-real-photo">`;
  } else {
    modalImageContainer.innerHTML = `<div class="modal-placeholder"><span class="modal-icon">♥</span></div>`;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModalFn() {
  modal.classList.remove('active');
  if (document.body.classList.contains('opened')) {
    document.body.style.overflow = '';
  }
}

galleryItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const index = item.dataset.index;
    createLoveBurst(e.clientX, e.clientY); // Pakai burst biasa untuk galeri
    setTimeout(() => { openModal(index); }, 200);
  });
});

modalClose.addEventListener('click', closeModalFn);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFn(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModalFn(); });

// ============================================
// GALLERY & MODAL
// ============================================
function openModal(index) {
  const data = photoData[index];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;
  modalDate.textContent = data.date;

  // Cek apakah ada foto, jika ada tampilkan gambar, jika tidak tampilkan icon hati
  if (data.img) {
    modalImageContainer.innerHTML = `<img src="${data.img}" alt="${data.title}" class="modal-real-photo">`;
  } else {
    modalImageContainer.innerHTML = `<div class="modal-placeholder"><span class="modal-icon">♥</span></div>`;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModalFn() {
  modal.classList.remove('active');
  if (document.body.classList.contains('opened')) {
    document.body.style.overflow = '';
  }
}

galleryItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const index = item.dataset.index;
    createLoveBurst(e.clientX, e.clientY);
    setTimeout(() => { openModal(index); }, 200);
  });
});

modalClose.addEventListener('click', closeModalFn);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFn(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModalFn(); });