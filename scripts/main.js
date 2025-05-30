
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

//ANIMACIONES
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
        element.classList.add('fade-in');
    });
});

document.addEventListener('DOMContentLoaded', () => {

    let track = document.querySelector('.gallery-track');
    let images = document.querySelectorAll('.gallery-img');
    let currentIndex = 0;
    let imgWidth =images[0].offsetWidth + 10; 

    function moveGallery() {
        currentIndex++;
        if (currentIndex > images.length - 1) {
            currentIndex = 0;
        }
        track.style.transform = `translateY(-${imgWidth * currentIndex}px)`;
    }
    //INTERVALO 2 Segundos
    setInterval(moveGallery, 2000); 
});

