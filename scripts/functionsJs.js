// TITULO DE LA PÁGINA
document.addEventListener("DOMContentLoaded", function() {
  let h1 = document.querySelector("h1");
  h1.classList.add("glitch");
  h1.setAttribute("data-text", h1.textContent);
});

// GALERIA HOME
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".gallery-track ul");
    const prevBtn = document.querySelector(".gallery-button.prev");
    const nextBtn = document.querySelector(".gallery-button.next");

    let scrollAmount = 0;
    const scrollStep = 300;

    prevBtn.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollStep,
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", () => {
        track.scrollBy({
            left: scrollStep,
            behavior: "smooth",
        });
    });
});

//SECCION BUSQUEDA DE ARTICULOS
const articles = [
  { title: "Lanzamiento de Java 24", summary: "Java 24 trae nuevas características para desarrolladores." },
  { title: "Tendencias en Inteligencia Artificial", summary: "La IA sigue revolucionando el sector tecnológico." },
  { title: "Opinión: El futuro de la nube", summary: "¿Qué nos espera en la computación en la nube?" },
  { title: "Eventos tecnológicos 2025", summary: "No te pierdas los eventos más importantes del año." },
  { title: "Análisis: Seguridad en la web", summary: "Consejos para proteger tus datos en línea." }
];

function renderArticles(filteredArticles) {
  const list = document.getElementById('articles-list');
  list.innerHTML = '';
  if (filteredArticles.length === 0) {
    list.innerHTML = '<p class="no-results">No se encontraron artículos.</p>';
    return;
  }
  filteredArticles.forEach(article => {
    const div = document.createElement('div');
    div.className = 'article-card';
    div.innerHTML = `<h3>${article.title}</h3><p>${article.summary}</p>`;
    list.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-article');
  renderArticles(articles);

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query)
    );
    renderArticles(filtered);
  });
});

// SECCIÓN DE ÍCONOS DE REDES SOCIALES
document.addEventListener('DOMContentLoaded', () => {
  const socialIcons = [
    { name: 'Twitter', url: 'https://twitter.com/', icon: 'fab fa-twitter' },
    { name: 'Facebook', url: 'https://facebook.com/', icon: 'fab fa-facebook' },
    { name: 'Instagram', url: 'https://instagram.com/', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/', icon: 'fab fa-github' }
  ];

  const container = document.getElementById('social-icons');
  container.innerHTML = socialIcons.map(social => `
    <a href="${social.url}" class="social-link" target="_blank" title="${social.name}">
      <i class="${social.icon}"></i>
    </a>
  `).join('');
});