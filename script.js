/* ================================================
   PORTFOLIO — Dra. I Made Ayu Adyani
   File: script.js
   ================================================ */

// ── DATA ANGGOTA KELOMPOK ──
// Ganti nama, tugas, dan kontribusi sesuai data asli

const memberData = {
  1: {
    nomor: '01',
    inisial: 'A',
    nama: 'Nama Anggota 1',
    jabatan: 'Ketua',
    tugas: [
      'Memimpin dan mengkoordinasi seluruh kegiatan kelompok',
      'Menentukan jadwal wawancara bersama Bu Ayu',
      'Membagi tugas kepada setiap anggota kelompok',
      'Memastikan semua anggota menyelesaikan tanggung jawab masing-masing',
      'Menjadi penghubung antara kelompok dan guru pembimbing'
    ],
    kontribusi: [
      'Menginisiasi ide pembuatan portfolio digital ini',
      'Membuat kerangka pertanyaan wawancara bersama sekretaris',
      'Memimpin jalannya sesi wawancara langsung dengan Bu Ayu',
      'Melakukan review akhir sebelum portfolio dipublikasikan'
    ]
  },
  2: {
    nomor: '02',
    inisial: 'B',
    nama: 'Nama Anggota 2',
    jabatan: 'Sekretaris',
    tugas: [
      'Mencatat dan mendokumentasikan semua hasil rapat kelompok',
      'Menyusun daftar pertanyaan wawancara secara tertulis',
      'Merekap jawaban hasil wawancara menjadi teks terstruktur',
      'Menyimpan dan mengelola semua berkas dan dokumen kelompok'
    ],
    kontribusi: [
      'Menyusun 12 pertanyaan wawancara yang komprehensif',
      'Mentranskrip hasil rekaman wawancara secara lengkap',
      'Menulis ulang narasi profil Bu Ayu agar enak dibaca',
      'Membantu proofreading teks di portfolio'
    ]
  },
  3: {
    nomor: '03',
    inisial: 'C',
    nama: 'Nama Anggota 3',
    jabatan: 'Pewawancara',
    tugas: [
      'Melakukan wawancara langsung kepada narasumber (Bu Ayu)',
      'Mengajukan pertanyaan dengan sopan dan profesional',
      'Menggali informasi lebih dalam dari setiap jawaban',
      'Menjaga suasana wawancara agar nyaman dan kondusif'
    ],
    kontribusi: [
      'Berhasil menggali cerita perjalanan hidup Bu Ayu secara mendalam',
      'Mengajukan pertanyaan spontan berdasarkan jawaban Bu Ayu',
      'Membantu menenangkan suasana saat wawancara berlangsung',
      'Merekam jalannya wawancara sebagai backup dokumentasi'
    ]
  },
  4: {
    nomor: '04',
    inisial: 'D',
    nama: 'Nama Anggota 4',
    jabatan: 'Pewawancara',
    tugas: [
      'Melakukan wawancara langsung kepada narasumber (Bu Ayu)',
      'Membantu mengajukan pertanyaan lanjutan yang relevan',
      'Memastikan semua topik pertanyaan terjawab dengan baik',
      'Berkoordinasi dengan pewawancara pertama'
    ],
    kontribusi: [
      'Menggali informasi tentang filosofi dan motivasi Bu Ayu',
      'Mengajukan pertanyaan tentang tantangan dan pencapaian karir',
      'Membantu menciptakan suasana wawancara yang hangat',
      'Memberikan umpan balik positif kepada narasumber'
    ]
  },
  5: {
    nomor: '05',
    inisial: 'E',
    nama: 'Nama Anggota 5',
    jabatan: 'Dokumentasi',
    tugas: [
      'Merekam jalannya wawancara menggunakan perangkat audio/video',
      'Mengambil foto kegiatan wawancara sebagai dokumentasi',
      'Mengelola dan menyimpan semua file hasil rekaman',
      'Membantu persiapan teknis sebelum wawancara dimulai'
    ],
    kontribusi: [
      'Menghasilkan rekaman audio wawancara berkualitas baik',
      'Mendokumentasikan momen-momen penting selama wawancara',
      'Mengelola file media yang digunakan dalam portfolio',
      'Membantu menyiapkan peralatan dokumentasi'
    ]
  },
  6: {
    nomor: '06',
    inisial: 'F',
    nama: 'Nama Anggota 6',
    jabatan: 'Dokumentasi',
    tugas: [
      'Mendokumentasikan kegiatan kelompok secara visual',
      'Mengambil foto dan video selama proses wawancara',
      'Mengedit dan memilih foto terbaik untuk portfolio',
      'Bekerja sama dengan tim editor dalam penyusunan konten visual'
    ],
    kontribusi: [
      'Mengabadikan momen wawancara dengan Bu Ayu',
      'Memilih dan menyeleksi foto terbaik untuk ditampilkan',
      'Mendukung tim editor dengan bahan visual yang berkualitas',
      'Memastikan dokumentasi kegiatan tersimpan dengan rapi'
    ]
  },
  7: {
    nomor: '07',
    inisial: 'G',
    nama: 'Nama Anggota 7',
    jabatan: 'Editor Web',
    tugas: [
      'Merancang dan membangun tampilan website portfolio',
      'Menulis dan merapikan kode HTML, CSS, dan JavaScript',
      'Memasukkan konten hasil wawancara ke dalam website',
      'Memastikan website berjalan dengan baik di semua perangkat'
    ],
    kontribusi: [
      'Membangun website portfolio dari awal hingga selesai',
      'Menambahkan animasi dan efek visual yang menarik',
      'Mengimplementasikan fitur dark mode dan typing effect',
      'Melakukan testing dan perbaikan tampilan di berbagai perangkat'
    ]
  }
};

// ── POPUP LOGIC ──
const overlay   = document.getElementById('memberOverlay');
const popup     = document.getElementById('memberPopup');
const closeBtn  = document.getElementById('popupClose');


function openPopup(id) {
  const m = memberData[id];
  if (!m) return;

  document.getElementById('popupAvatar').textContent   = m.inisial;
  document.getElementById('popupNumber').textContent   = `Anggota #${m.nomor}`;
  document.getElementById('popupName').textContent     = m.nama;
  document.getElementById('popupRole').textContent     = m.jabatan;

  // Tugas
  document.getElementById('popupTugas').innerHTML =
    `<ul>${m.tugas.map(t => `<li>${t}</li>`).join('')}</ul>`;

  // Kontribusi
  document.getElementById('popupKontribusi').innerHTML =
    `<ul>${m.kontribusi.map(k => `<li>${k}</li>`).join('')}</ul>`;

  overlay.classList.add('active');
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  overlay.classList.remove('active');
  popup.classList.remove('active');
  document.body.style.overflow = '';
}

// Bind clicks on org cards
document.querySelectorAll('.org-card').forEach(card => {
  card.addEventListener('click', () => openPopup(Number(card.dataset.member)));
});

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ── DARK MODE TOGGLE ──
const themeToggle = document.getElementById('themeToggle');
const toggleIcon  = themeToggle.querySelector('.theme-toggle-icon');
const saved       = localStorage.getItem('theme');
if (saved === 'dark') {
  document.body.classList.add('dark');
  toggleIcon.textContent = '🌙';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleIcon.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  }, 60);
});

// ── PARTICLE CANVAS ──
const canvas = document.getElementById('particle-canvas');
const ctx    = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticle() {
  return {
    x:       Math.random() * canvas.width,
    y:       Math.random() * canvas.height,
    r:       Math.random() * 1.8 + 0.4,
    dx:      (Math.random() - 0.5) * 0.3,
    dy:      -(Math.random() * 0.4 + 0.1),
    alpha:   Math.random() * 0.6 + 0.2,
    life:    0,
    maxLife: Math.random() * 300 + 150
  };
}

for (let i = 0; i < 90; i++) particles.push(createParticle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life++;
    const fade = p.life < 40
      ? p.life / 40
      : p.life > p.maxLife - 40
        ? (p.maxLife - p.life) / 40
        : 1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 149, 108, ${p.alpha * fade})`;
    ctx.fill();
    if (p.life >= p.maxLife) particles[i] = createParticle();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── TYPING EFFECT ──
const phrases = [
  'Pendidik · Inspirator · Pembimbing',
  'Guru PKn SMK TI',
  '18+ Tahun Mengabdi'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById('typing-text');

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 2000);
      return;
    }
    setTimeout(typeLoop, 65);
  } else {
    typingEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeLoop, 400);
      return;
    }
    setTimeout(typeLoop, 35);
  }
}
setTimeout(typeLoop, 800);

// ── SCROLL FADE-UP ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

setTimeout(() => {
  document.querySelectorAll('.hero .fade-up, .stats-bar .fade-up')
    .forEach(el => el.classList.add('visible'));
}, 100);

// ── STAT COUNT-UP ──
const statData = [
  { el: document.querySelectorAll('.stat-number')[0], target: 18,  suffix: '+', isNum: true  },
  { el: document.querySelectorAll('.stat-number')[1], target: 99, suffix: '%', isNum: true  },
  { el: document.querySelectorAll('.stat-number')[2], target: null, suffix: '', isNum: false }
];

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    statData.forEach(({ el, target, suffix, isNum }) => {
      if (!isNum || el.dataset.counted) return;
      el.dataset.counted = '1';
      el.classList.add('counting');
      let current = 0;
      const step  = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) {
          clearInterval(timer);
          el.classList.remove('counting');
          el.classList.add('done');
        }
      }, 35);
    });
    statsObserver.disconnect();
  });
}, { threshold: 0.5 });
statsObserver.observe(document.querySelector('.stats-bar'));

// ── FORM SUBMIT ──
document.querySelector('.btn-submit').addEventListener('click', () => {
  alert('Pesan terkirim! Terima kasih telah menghubungi Bu Ayu 😊');
});



// ── LIGHTBOX ──
function openLightbox(src, caption) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxCaption').textContent = caption;
  document.getElementById('lightboxOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
