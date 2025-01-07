const themeToggle = document.getElementById('theme-toggle');
const bodyColorPicker = document.getElementById('body-color-picker');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '🌜';
} else {
    themeToggle.textContent = '🌞';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '🌜';
    } else {
        themeToggle.textContent = '🌞';
    }

    localStorage.setItem(
        'theme',
        document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );

    const articles = document.querySelectorAll('.article');
    articles.forEach((article) => {
        article.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--section-bg-color');
        article.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    });
    location.reload();
});


document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note-input");
    const saveButton = document.getElementById("save-note");

    const savedNote = localStorage.getItem("userNote");
    if (savedNote) {
      noteInput.value = savedNote;
    }

    saveButton.addEventListener("click", () => {
      const noteContent = noteInput.value;
      localStorage.setItem("userNote", noteContent);
      alert("Votre note a été sauvegardée !");
    });
  });

