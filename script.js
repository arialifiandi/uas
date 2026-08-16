// =========================================================
// EDULEARN — script.js
// Semua interaktivitas: dark mode, navbar mobile, accordion FAQ,
// validasi form real-time, testimonial slider, back-to-top,
// dan counter animasi statistik.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Dark / Light mode toggle ---------- */
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  // load preferensi dari localStorage
  if (localStorage.getItem('edulearn-theme') === 'dark') {
    body.classList.add('dark');
    if (modeToggle) modeToggle.textContent = '☀ Mode Terang';
  }

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      modeToggle.textContent = isDark ? '☀ Mode Terang' : '🌙 Mode Malam';
      localStorage.setItem('edulearn-theme', isDark ? 'dark' : 'light');
    });
  }

  /* ---------- 2. Navbar mobile toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  /* ---------- 3. FAQ Accordion ---------- */
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // tutup semua accordion lain (mode single-open)
      triggers.forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- 4. Validasi Form Pendaftaran ---------- */
  const form = document.getElementById('registerForm');
  if (form) {
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const courseSelect = document.getElementById('course');
    const messageInput = document.getElementById('message');
    const successBox = document.getElementById('formSuccess');

    const showError = (input, msg) => {
      const row = input.closest('.form-row');
      row.classList.add('error');
      row.querySelector('.error-msg').textContent = msg;
    };
    const clearError = (input) => {
      const row = input.closest('.form-row');
      row.classList.remove('error');
      row.querySelector('.error-msg').textContent = '';
    };

    const validators = {
      fullname: () => {
        if (nameInput.value.trim().length < 3) {
          showError(nameInput, 'Nama minimal 3 karakter.');
          return false;
        }
        clearError(nameInput);
        return true;
      },
      email: () => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(emailInput.value.trim())) {
          showError(emailInput, 'Format email tidak valid.');
          return false;
        }
        clearError(emailInput);
        return true;
      },
      phone: () => {
        const pattern = /^[0-9+\s-]{9,15}$/;
        if (!pattern.test(phoneInput.value.trim())) {
          showError(phoneInput, 'Nomor telepon 9-15 digit.');
          return false;
        }
        clearError(phoneInput);
        return true;
      },
      course: () => {
        if (!courseSelect.value) {
          showError(courseSelect, 'Silakan pilih salah satu kelas.');
          return false;
        }
        clearError(courseSelect);
        return true;
      }
    };

    // validasi real-time saat user mengetik / memilih
    nameInput.addEventListener('input', validators.fullname);
    emailInput.addEventListener('input', validators.email);
    phoneInput.addEventListener('input', validators.phone);
    courseSelect.addEventListener('change', validators.course);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const results = [
        validators.fullname(),
        validators.email(),
        validators.phone(),
        validators.course()
      ];

      if (results.every(ok => ok)) {
        successBox.style.display = 'block';
        successBox.textContent = `Terima kasih, ${nameInput.value.trim()}! Pendaftaran kelas "${courseSelect.options[courseSelect.selectedIndex].text}" berhasil dikirim. Tim kami akan menghubungi Anda melalui email.`;
        form.reset();
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        successBox.style.display = 'none';
      }
    });
  }

  /* ---------- 5. Testimonial slider ---------- */
  const slides = document.querySelectorAll('.testi-slide');
  const dotsWrap = document.getElementById('testiDots');
  if (slides.length && dotsWrap) {
    let current = 0;
    slides.forEach((s, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('button');

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
  }

  /* ---------- 6. Counter animasi statistik (muncul saat di-scroll) ---------- */
  const counters = document.querySelectorAll('.num[data-target]');
  if (counters.length) {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current.toLocaleString('id-ID') + (el.dataset.suffix || '');
      }, 25);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  /* ---------- 7. Tombol back-to-top ---------- */
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('show', window.scrollY > 400);
    });
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 8. Panel Kuis Cloud Computing (5 soal) ---------- */
  const quizBody = document.getElementById('quizBody');
  const quizProgressBar = document.getElementById('quizProgressBar');

  if (quizBody) {
    const questions = [
      {
        question: "Model cloud mana yang infrastrukturnya dimiliki dan digunakan secara eksklusif oleh satu organisasi?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Multi-Cloud"],
        correct: 1,
        explanation: "Private Cloud dibangun dan dikelola khusus untuk satu organisasi, sehingga kontrol dan keamanannya lebih tinggi."
      },
      {
        question: "Manakah di bawah ini yang merupakan penyedia layanan Public Cloud?",
        options: ["Data center pribadi perusahaan", "Amazon Web Services (AWS)", "Server lokal tanpa akses internet", "Ruang server internal kantor"],
        correct: 1,
        explanation: "AWS adalah salah satu penyedia Public Cloud terbesar, bersama Microsoft Azure dan Google Cloud Platform."
      },
      {
        question: "Model cloud yang menggabungkan infrastruktur on-premise dengan layanan cloud publik disebut?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
        correct: 2,
        explanation: "Hybrid Cloud menggabungkan Private dan Public Cloud, memungkinkan beban kerja dipindah sesuai kebutuhan."
      },
      {
        question: "Apa kelebihan utama Public Cloud dibanding Private Cloud?",
        options: ["Kontrol data yang lebih ketat", "Skalabilitas tinggi dengan biaya awal rendah", "Tidak membutuhkan koneksi internet", "Keamanan mutlak tanpa risiko"],
        correct: 1,
        explanation: "Public Cloud unggul dalam skalabilitas dan model bayar-sesuai-pakai, sehingga biaya awal jauh lebih rendah."
      },
      {
        question: "Perusahaan perbankan yang punya data sangat sensitif namun tetap ingin fleksibilitas cloud publik untuk aplikasi non-sensitif, paling cocok menggunakan model?",
        options: ["Public Cloud saja", "Private Cloud saja", "Hybrid Cloud", "Tidak menggunakan cloud sama sekali"],
        correct: 2,
        explanation: "Hybrid Cloud memungkinkan data sensitif tetap di Private Cloud, sementara aplikasi lain memanfaatkan fleksibilitas Public Cloud."
      }
    ];

    let currentQ = 0;
    let score = 0;
    const userAnswers = new Array(questions.length).fill(null);
    const letters = ['A', 'B', 'C', 'D'];

    function updateProgress() {
      const pct = ((currentQ) / questions.length) * 100;
      quizProgressBar.style.width = pct + '%';
    }

    function renderQuestion() {
      updateProgress();
      const q = questions[currentQ];

      quizBody.innerHTML = `
        <div class="quiz-meta">
          <span>Soal ${currentQ + 1} dari ${questions.length}</span>
          <span class="score-live">Skor: ${score}</span>
        </div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options" id="quizOptions">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" data-index="${i}">
              <span class="opt-letter">${letters[i]}</span> ${opt}
            </button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
        <div class="quiz-nav">
          <button class="btn btn-primary" id="quizNextBtn" style="background:var(--gold);color:#22271F" disabled>
            ${currentQ === questions.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya'}
          </button>
        </div>
      `;

      const optionButtons = quizBody.querySelectorAll('.quiz-option');
      const feedback = document.getElementById('quizFeedback');
      const nextBtn = document.getElementById('quizNextBtn');
      let answered = false;

      optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          const chosen = parseInt(btn.dataset.index, 10);
          userAnswers[currentQ] = chosen;

          optionButtons.forEach(b => b.disabled = true);
          btn.classList.add('selected');

          if (chosen === q.correct) {
            btn.classList.add('correct');
            score++;
            feedback.textContent = '✅ Benar! ' + q.explanation;
            feedback.className = 'quiz-feedback show ok';
          } else {
            btn.classList.add('wrong');
            optionButtons[q.correct].classList.add('correct');
            feedback.textContent = '❌ Kurang tepat. ' + q.explanation;
            feedback.className = 'quiz-feedback show bad';
          }

          nextBtn.disabled = false;
        });
      });

      nextBtn.addEventListener('click', () => {
        if (currentQ < questions.length - 1) {
          currentQ++;
          renderQuestion();
        } else {
          renderResult();
        }
      });
    }

    function renderResult() {
      quizProgressBar.style.width = '100%';
      const percent = Math.round((score / questions.length) * 100);

      let message, emoji;
      if (percent >= 80) {
        message = 'Luar biasa! Pemahamanmu tentang Public, Private, dan Hybrid Cloud sudah sangat baik.';
        emoji = '🏆';
      } else if (percent >= 50) {
        message = 'Sudah cukup baik! Coba pelajari lagi bagian yang masih salah di halaman Tentang.';
        emoji = '👍';
      } else {
        message = 'Masih perlu belajar lagi nih. Yuk baca ulang materi di halaman Tentang sebelum coba lagi.';
        emoji = '📘';
      }

      quizBody.innerHTML = `
        <div class="quiz-result">
          <div class="score-circle">
            <span class="val">${score}/${questions.length}</span>
            <span class="of">SKOR AKHIR</span>
          </div>
          <h3>${emoji} ${message}</h3>
          <p>Kamu menjawab benar ${score} dari ${questions.length} soal (${percent}%).</p>
          <button class="btn btn-primary" id="quizRestartBtn">Ulangi Kuis</button>

          <div class="quiz-review">
            ${questions.map((q, i) => `
              <div class="quiz-review-item">
                <div class="q">${i + 1}. ${q.question}</div>
                <div class="a ${userAnswers[i] === q.correct ? 'ok' : 'bad'}">
                  Jawabanmu: ${q.options[userAnswers[i]]} ${userAnswers[i] === q.correct ? '(Benar)' : '— Jawaban benar: ' + q.options[q.correct]}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      document.getElementById('quizRestartBtn').addEventListener('click', () => {
        currentQ = 0;
        score = 0;
        userAnswers.fill(null);
        renderQuestion();
      });
    }

    renderQuestion();
  }

  /* ---------- 9. Update tahun otomatis di footer ---------- */
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
