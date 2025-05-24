document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "💬 'Живу, чтобы кодить и мемить!'",
      "👾 'Не пытайтесь испортить мою жизнь. Я все сама сделаю!'",
      "🌈 'Даже если у тебя нет ничего — у тебя есть жизнь, в которой есть все!'",
      "🔥 'Я счастливa по умолчанию. Потому, пожалуйста, не лезьте в настройки.'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Музыка": "Слушаю только то, что нравится мне",
      "Игры": "Люблю играть в роблокс, особенно в дорс. Я обожаю играть!",
      "Гулять": "Гуляю только с близкими, с которыми мне комфортно, чтобы было не скучно",
      "Фоткаться": "Устраиваю фотоссесии с сестрой. Я-её, она-меня"
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
// Переключение темы
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '🌙';
document.body.appendChild(themeToggle);

// Проверяем сохраненную тему
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.innerHTML = '☀️';
}

// Обработчик клика
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    themeToggle.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
  const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Анимированный курсор (дополнительно)
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 768) { // Только для больших экранов
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // Изменение размера при наведении на интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, button, .card, .project-card, .btn, .theme-toggle, .back-to-top');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Добавьте этот код в самое начало
  if (window.innerWidth > 768) {
    document.documentElement.classList.add('has-custom-cursor');
  }
  
  // Остальной ваш код...
});