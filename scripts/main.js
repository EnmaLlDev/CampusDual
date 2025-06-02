//MANEJADORES DE EVENTOS
document.addEventListener('DOMContentLoaded', () => {

    //LOGIN
    let loginForm = document.getElementById('loginForm');
    let inputUserLogin = document.getElementById('inputUserLogin');
    let inputPassLogin = document.getElementById('inputPassLogin');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) =>{
            event.preventDefault(); 

            let user = inputUserLogin.value;
            let pass = inputPassLogin.value;

            validLogin(user, pass); 
        });
    }
    
    function validLogin(username, password) {
        //PUEDO COMPARAR CON === VALOR Y TIPO DE DATOS
        if (username === "admin" && password === "1234") { 
            alert("¡Estas dentro!");
        } else {
            alert("Estas fuera!!!\nUsuario o contraseña incorrectos.");
        }
    }

    //REGISTRO
    let registerForm = document.getElementById('registerForm');
    let inputName = document.getElementById('inputName');
    let inputUser = document.getElementById('inputUser');
    let inputEmail = document.getElementById('inputEmail');
    let inputPass = document.getElementById('inputPass');
    let inputPassAgain = document.getElementById('inputPassAgain');
    let termsCheckbox = document.getElementById('checkTerms');
    let newsletterCheckbox = document.getElementById('checkNewsLetter');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let name = inputName.value;
            let user = inputUser.value;
            let email = inputEmail.value;
            let pass = inputPass.value;
            let passAgain = inputPassAgain.value;
            let terms = termsCheckbox.checked;
            let newsletter = newsletterCheckbox.checked;
            
            let isValidEmail = (email) => {
            // Patrón de regex para email (ejemplo básico)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
            };

            if (!name || !user || !email || !pass || !passAgain) {
                alert("Por favor, rellena todos los campos obligatorios");
                return;
            }

            if (pass !== passAgain) {
                alert("Las contraseñas no coinciden.");
                return;
            }

            if (!isValidEmail(email)) {
                alert("Por favor, introduce un email válido.");
                return;
            }

            if (!terms) {
                alert("Debes aceptar los términos y condiciones.");
                return;
            }

            if(!newsletter){
                alert("Deseas continuar sin suscribirte al boletín informativo.");
            }

            alert("¡Registro exitoso!");
            console.log("Datos de registro:", {
                Nombre: name,
                Usuario: user,
                Email: email,
                Contraseña: pass,
                Newsletter: newsletter
            });
        });
    }
});



// SECCION MULTIMEDIA
document.addEventListener('DOMContentLoaded', () => {
    const articles = [
           {
        title: "La revolución de la IA",
        desc: "Descubre cómo la inteligencia artificial está cambiando el mundo.",
        imgs: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
             "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            
        ]
        },
        {
            title: "Innovaciones en robótica",
            desc: "Últimos avances en robots y automatización.",
            imgs: [
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
            ]
        },
        {
            title: "Realidad Virtual y Aumentada",
            desc: "Explora nuevas experiencias inmersivas.",
            imgs: [
                "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            ]
        }
    ];

 const wrapper = document.getElementById('cards-wrapper');
if (wrapper) {
    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${article.imgs[0]}" alt="${article.title}">
            <div class="card-content">
                <div class="card-title">${article.title}</div>
                <div class="card-desc">${article.desc}</div>
            </div>
        `;
        wrapper.appendChild(card);

        // Carrusel: cambiamos la imagen cada 2.5 segundos
        const imgElement = card.querySelector('img');
        let imgIndex = 0;
        setInterval(() => {
            imgIndex = (imgIndex + 1) % article.imgs.length;
            imgElement.src = article.imgs[imgIndex];
        }, 2500);
    });
    }
});

// PRUEBAS DE EFECTOS
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = [
        '/assets/breaking-news-background.jpeg',
        '/assets/java.jpg',
        '/assets/breaking-news-background.jpeg',
        '/assets/java.jpg'
    ];

    const cardsEffects = document.getElementById('cards-effects');
    if (cardsEffects && imagenes.length > 0) {
        const img = document.createElement('img');
        img.src = imagenes[0];
        img.alt = 'Imagen galería';
        cardsEffects.appendChild(img);

        let index = 0;
        setInterval(() => {
            index = (index + 1) % imagenes.length;
            img.src = imagenes[index];
        }, 2000); // Cambia cada 2 segundos
    }
});