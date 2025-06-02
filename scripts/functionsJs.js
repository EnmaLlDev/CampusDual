// Galeria home
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

 // Array de artículos
const articulos = [
    "Articulo1",
    "Articulo2",
    "Articulo3",
    "Articulo4"
];
const lista = document.getElementById('articles-list');
const searchInput = document.getElementById('search-article');

// Cambia el contenedor a un div en el HTML y aquí
function renderArticulos(filtrados) {
    lista.innerHTML = "";
    filtrados.forEach(articulo => {
        const div = document.createElement('div');
        div.className = 'article-card fade-in-up'; // Agrega clase de animación
        div.textContent = articulo;
        lista.appendChild(div);
    });
}
// Renderiza todos al inicio
renderArticulos(articulos);

// Filtra en tiempo real según el input
searchInput.addEventListener('input', function() {
    const texto = this.value.toLowerCase();
    const filtrados = articulos.filter(art => art.toLowerCase().includes(texto));
    renderArticulos(filtrados);
});


// seccion de contacto
document.addEventListener("DOMContentLoaded", function() {
    const socialNetworks = [
        {
            name: "Instagram",
            url: "https://instagram.com/NewIt",
            icon: "fab fa-instagram" 
        },
        {
            name: "Facebook",
            url: "https://facebook.com/NewsIt",
            icon: "fab fa-facebook"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/NewIt",
            icon: "fab fa-twitter"
        }
    ];

    const container = document.getElementById("social-icons");
    socialNetworks.forEach((network, i) => {
        const a = document.createElement("a");
        a.href = network.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.title = network.name;
        a.innerHTML = `<i class="social-icon ${network.icon}" style="animation-delay:${i * 0.2}s"></i>`;
        container.appendChild(a);
    });
});