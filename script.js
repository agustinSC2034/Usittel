// carrousel logica

let currentSlideIndex = 0;
let slideInterval;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Asegúrate de que el índice esté dentro de los límites
  if (n >= slides.length) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = slides.length - 1;
  }

  // Oculta todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Desactiva todos los puntos
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Muestra la diapositiva actual
  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].className += " active";
}

function changeSlide(n) {
  currentSlideIndex += n;
  showSlides(currentSlideIndex);
}

function currentSlide(n) {
  currentSlideIndex = n - 1;
  showSlides(currentSlideIndex);
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    currentSlideIndex++;
    showSlides(currentSlideIndex);
  }, 1800); // Cambia cada 3 segundos
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// Inicializa la primera diapositiva al cargar la página
window.onload = function () {
  showSlides(currentSlideIndex);
  startSlideShow();
};

// Pausar el carrusel cuando el mouse esté sobre él
document
  .querySelector(".carousel-container")
  .addEventListener("mouseover", stopSlideShow);
document
  .querySelector(".carousel-container")
  .addEventListener("mouseout", startSlideShow);

// deslizamiento nav

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// script pop-up:
function openPopup1() {
  var popup = document.getElementById("popup1");
  popup.style.display = "block";
}
function openPopup2() {
  var popup = document.getElementById("popup2");
  popup.style.display = "block";
}
function openPopup3() {
  var popup = document.getElementById("popup3");
  popup.style.display = "block";
}
function openPopup4() {
  var popup = document.getElementById("popup4");
  popup.style.display = "block";
}
function openPopup5() {
  var popup = document.getElementById("popup5");
  popup.style.display = "block";
}
function openPopup6() {
  var popup = document.getElementById("popup6");
  popup.style.display = "block";
}

function closePopup1() {
  var popup = document.getElementById("popup1");
  popup.style.display = "none";
}
function closePopup2() {
  var popup = document.getElementById("popup2");
  popup.style.display = "none";
}
function closePopup3() {
  var popup = document.getElementById("popup3");
  popup.style.display = "none";
}

function closePopup4() {
  var popup = document.getElementById("popup4");
  popup.style.display = "none";
}
function closePopup5() {
  var popup = document.getElementById("popup5");
  popup.style.display = "none";
}
function closePopup6() {
  var popup = document.getElementById("popup6");
  popup.style.display = "none";
}

document.getElementById("popupLink1").addEventListener("click", function (e) {
  e.preventDefault();
  openPopup1();
});
document.getElementById("popupLink2").addEventListener("click", function (e) {
  e.preventDefault();
  openPopup2();
});
document.getElementById("popupLink3").addEventListener("click", function (e) {
  e.preventDefault();
  openPopup3();
});

document.getElementById("popupLink4").addEventListener("click", function (e) {
  e.preventDefault();
  openPopup4();
});
document.getElementById("popupLink5").addEventListener("click", function (e) {
  e.preventDefault();
  openPopup5();
});
document.getElementById("popupLink6").addEventListener("click", function (e) {
  e.preventDefault();
  openPopup6();
});

window.addEventListener("DOMContentLoaded", function () {
  var currentPageLabel = document.getElementById("currentPageLabel");
  var currentPage = location.pathname.split("/").slice(-1)[0]; // Obtiene el nombre del archivo actual

  var dropdownOptions = Array.from(
    document.querySelectorAll(".dropdown-content a")
  );

  dropdownOptions.forEach(function (option) {
    option.addEventListener("click", function (event) {
      //  event.preventDefault();  Evita la redirección predeterminada

      var selectedOption = this.getAttribute("data-value");
      currentPageLabel.textContent = "Web: " + selectedOption;
    });
  });
});

dropdownOptions.forEach(function (option) {
  option.addEventListener("click", function (event) {
    // No se llama a event.preventDefault(), por lo que el enlace seguirá funcionando
    var selectedOption = this.getAttribute("data-value");
    currentPageLabel.textContent = "Web: " + selectedOption;
  });
});

document.getElementById("inputNumero").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

function verificarCobertura() {
  const inputContainer = document.getElementById("inputContainer");
  const titulo = document.getElementById("titulo");
  const parrafo = document.getElementById("textoAbajoTitulo");
  const parrafo2 = document.getElementById("textoAbajoTitulo2");
  const parrafo3 = document.getElementById("textoAbajoTitulo3");
  const numHelp = document.getElementById("numHelp");
  const contact = document.getElementById("contact");
  const textoWP = document.getElementById("textoWP");
  const numWP = document.getElementById("numWP");
  const inputDireccion = document.getElementById("inputDireccion").value;
  const inputNumero = document.getElementById("inputNumero").value;

  if (inputDireccion === "" || inputNumero === "") {
    if (inputDireccion === "") {
      document.getElementById("inputDireccion").style.border = "1px solid red";
    }
    if (inputNumero === "") {
      document.getElementById("inputNumero").style.border = "1px solid red";
    }
    return;
  }

  const zonasDeCobertura = [
    { calle: "paz", desde: 1, hasta: 1599 },
    { calle: "general paz", desde: 1, hasta: 1599 },
    { calle: "gral paz", desde: 1, hasta: 1599 },
    { calle: "gral. paz", desde: 1, hasta: 1599 },
    { calle: "4 de abril", desde: 1, hasta: 1600 },
    { calle: "4 abril", desde: 1, hasta: 1600 },
    { calle: "cuatro de abril", desde: 1, hasta: 1600 },
    { calle: "santamarina", desde: 1, hasta: 900 },
    { calle: "av Santamarina", desde: 1, hasta: 900 },
    { calle: "av Santa marina", desde: 1, hasta: 900 },
    { calle: "av. Santamarina", desde: 1, hasta: 900 },
    { calle: "av. Santa marina", desde: 1, hasta: 900 },
    { calle: "avenida Santa marina", desde: 1, hasta: 900 },
    { calle: "avenida Santamarina", desde: 1, hasta: 900 },
    { calle: "alsina", desde: 1, hasta: 1600 },
    { calle: "alcina", desde: 1, hasta: 1600 },
    { calle: "gral roca", desde: 1, hasta: 1600 },
    { calle: "gral. roca", desde: 1, hasta: 1600 },
    { calle: "general roca", desde: 1, hasta: 1600 },
    { calle: "roca", desde: 1, hasta: 1600 },
    { calle: "11 de septiembre", desde: 1, hasta: 1600 },
    { calle: "11 de setiembre", desde: 1, hasta: 1600 },
    { calle: "once de setiembre", desde: 1, hasta: 1600 },
    { calle: "once de septiembre", desde: 1, hasta: 1600 },
    { calle: "montiel", desde: 1, hasta: 1600 },
    { calle: "moreno", desde: 1, hasta: 1600 },
    { calle: "saavedra", desde: 1, hasta: 1600 },
    { calle: "savedra", desde: 1, hasta: 1600 },
    { calle: "saaveedra", desde: 1, hasta: 1600 },
    { calle: "saaveedra", desde: 1, hasta: 1600 },
    { calle: "buzon", desde: 1, hasta: 1100 },
    { calle: "av buzon", desde: 1, hasta: 1100 },
    { calle: "av buzón", desde: 1, hasta: 1100 },
    { calle: "avenida buzon", desde: 1, hasta: 1100 },
    { calle: "avenida marconi", desde: 1000, hasta: 1800 },
    { calle: "av marconi", desde: 1000, hasta: 1800 },
    { calle: "marconi", desde: 1000, hasta: 1800 },
    { calle: "avenida españa", desde: 900, hasta: 1000 },
    { calle: "av españa", desde: 900, hasta: 1000 },
    { calle: "av. españa", desde: 900, hasta: 1000 },
    { calle: "españa", desde: 900, hasta: 1000 },
    { calle: "sarmiento", desde: 900, hasta: 1800 },
    { calle: "mitre", desde: 900, hasta: 1800 },
    { calle: "sanmartin", desde: 900, hasta: 1800 },
    { calle: "san martin", desde: 900, hasta: 1800 },
    { calle: "san martín", desde: 900, hasta: 1800 },
    { calle: "pinto", desde: 900, hasta: 1800 },
    { calle: "belgrano", desde: 900, hasta: 1800 },
    { calle: "gral. belgrano", desde: 900, hasta: 1800 },
    { calle: "gral belgrano", desde: 900, hasta: 1800 },
    { calle: "general belgrano", desde: 900, hasta: 1800 },
    { calle: "maipu", desde: 900, hasta: 1800 },
    { calle: "maipú", desde: 900, hasta: 1800 },
    { calle: "veinticinco de mayo", desde: 900, hasta: 1800 },
    { calle: "25demayo", desde: 900, hasta: 1800 },
    { calle: "25 de mayo", desde: 900, hasta: 1800 },
    { calle: "constitucion", desde: 900, hasta: 1800 },
    { calle: "constitución", desde: 900, hasta: 1800 },
    { calle: "avellaneda", desde: 900, hasta: 1800 },
    { calle: "avenida avellaneda", desde: 900, hasta: 1800 },
    { calle: "av avellaneda", desde: 900, hasta: 1800 },
    { calle: "av. avellaneda", desde: 900, hasta: 1800 },
    { calle: "1 de mayo", desde: 1000, hasta: 1499 },
    { calle: "uno de mayo", desde: 1000, hasta: 1499 },
    { calle: "primero de mayo", desde: 1000, hasta: 1499 },
    { calle: "1ero de mayo", desde: 1000, hasta: 1499 },
    { calle: "pasaje primero de mayo", desde: 1000, hasta: 1499 },
    { calle: "pasaje 1 de mayo", desde: 1000, hasta: 1499 },
    { calle: "pasaje uno de mayo", desde: 1000, hasta: 1499 },
    { calle: "pasaje 1ero de mayo", desde: 1000, hasta: 1499 },
    { calle: "psje 1ero de mayo", desde: 1000, hasta: 1499 },
    { calle: "pje 1ero de mayo", desde: 1000, hasta: 1499 },
    { calle: "pje. 1ero de mayo", desde: 1000, hasta: 1499 },
    { calle: "pasaje uno de mayo", desde: 1000, hasta: 1499 },
    { calle: "pje 1 de mayo", desde: 1000, hasta: 1499 },
    { calle: "psaje 1 de mayo", desde: 1000, hasta: 1499 },
    { calle: "pje uno de mayo", desde: 1000, hasta: 1499 },
    { calle: "psaje uno de mayo", desde: 1000, hasta: 1499 },
    { calle: "roser", desde: 1500, hasta: 1599 },
    { calle: "rosser", desde: 1500, hasta: 1599 },
    { calle: "cruz roja argentina", desde: 0, hasta: 1700 },
    { calle: "cruz roja", desde: 0, hasta: 1700 },
    { calle: "cruz roja arg.", desde: 0, hasta: 1700 },
    { calle: "cruz roja arg", desde: 0, hasta: 1700 },
    { calle: "pasaje cruz roja argentina", desde: 0, hasta: 1700 },
    { calle: "pje cruz roja argentina", desde: 0, hasta: 1700 },
    { calle: "pje. cruz roja argentina", desde: 0, hasta: 1700 },
    { calle: "cruz roja argentina casa", desde: 0, hasta: 1700 },
    { calle: "cruz roja casa", desde: 0, hasta: 1700 },
    { calle: "cruz roja arg. casa", desde: 0, hasta: 1700 },
    { calle: "cruz roja arg casa", desde: 0, hasta: 1700 },
    { calle: "pasaje cruz roja argentina casa", desde: 0, hasta: 1700 },
    { calle: "pje cruz roja argentina casa", desde: 0, hasta: 1700 },
    { calle: "pje. duggan martignoni casa", desde: 0, hasta: 1700 },
    { calle: "duggan martignoni", desde: 0, hasta: 1700 },
    { calle: "dugan martinoni", desde: 0, hasta: 1700 },
    { calle: "dugan martignoni", desde: 0, hasta: 1700 },
    { calle: "pje. duggan martignoni ", desde: 0, hasta: 1700 },
    { calle: "duggan martignoni casa", desde: 0, hasta: 1700 },
    { calle: "dugan martinoni casa", desde: 0, hasta: 1700 },
    { calle: "dugan martignoni casa", desde: 0, hasta: 1700 },
    { calle: "pasaje agote casa", desde: 0, hasta: 1700 },
    { calle: "pasaje agote", desde: 0, hasta: 1700 },
    { calle: "pje. agote casa", desde: 0, hasta: 1700 },
    { calle: "pje. agote", desde: 0, hasta: 1700 },
    { calle: "pasaje luis agote casa", desde: 0, hasta: 1700 },
    { calle: "pasaje luis agote", desde: 0, hasta: 1700 },
    { calle: "pje. luis agote casa", desde: 0, hasta: 1700 },
    { calle: "pje. luis agote", desde: 0, hasta: 1700 },
    { calle: "pje. r. gutierrez casa", desde: 0, hasta: 1700 },
    { calle: "r. gutierrez", desde: 0, hasta: 1700 },
    { calle: "r gutierrez", desde: 0, hasta: 1700 },
    { calle: "r. gutierrez casa", desde: 0, hasta: 1700 },
    { calle: "pje. r. gutierrez", desde: 0, hasta: 1700 },
    { calle: "r. gutierrez casa", desde: 0, hasta: 1700 },
    { calle: "r gutierrez casa", desde: 0, hasta: 1700 },
    { calle: "pje. r gutierrez casa", desde: 0, hasta: 1700 },
    { calle: "pje. mariano castex casa", desde: 0, hasta: 1700 },
    { calle: "pje. mariano castex ", desde: 0, hasta: 1700 },
    { calle: "mariano castex", desde: 0, hasta: 1700 },
    { calle: "mariano castex casa", desde: 0, hasta: 1700 },
    { calle: "pje mariano castex", desde: 0, hasta: 1700 },
    { calle: "pje mariano castex casa", desde: 0, hasta: 1700 },
    { calle: "pasaje mariano castex casa", desde: 0, hasta: 1700 },
    { calle: "pasaje mariano castex ", desde: 0, hasta: 1700 },
    { calle: "pje. baldomero moreno casa", desde: 0, hasta: 1700 },
    { calle: "pje. baldomero moreno", desde: 0, hasta: 1700 },
    { calle: "baldomero moreno", desde: 0, hasta: 1700 },
    { calle: "baldomero moreno casa", desde: 0, hasta: 1700 },
    { calle: "pje baldomero moreno", desde: 0, hasta: 1700 },
    { calle: "pje baldomero moreno casa", desde: 0, hasta: 1700 },
    { calle: "pasaje baldomero moreno casa", desde: 0, hasta: 1700 },
    { calle: "pasaje baldomero moreno ", desde: 0, hasta: 1700 },
    { calle: "pje. crucero gral belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pje. crucero gral belgrano", desde: 0, hasta: 1700 },
    { calle: "crucero gral belgrano", desde: 0, hasta: 1700 },
    { calle: "crucero gral belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pje crucero gral belgrano", desde: 0, hasta: 1700 },
    { calle: "pje crucero gral belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pasaje crucero gral belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pasaje crucero gral belgrano ", desde: 0, hasta: 1700 },
    { calle: "pje. crucero general belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pje. crucero general belgrano", desde: 0, hasta: 1700 },
    { calle: "crucero general belgrano", desde: 0, hasta: 1700 },
    { calle: "crucero general belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pje crucero general belgrano", desde: 0, hasta: 1700 },
    { calle: "pje crucero general belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pasaje crucero general belgrano casa", desde: 0, hasta: 1700 },
    { calle: "pasaje crucero general belgrano ", desde: 0, hasta: 1700 },
    { calle: "pje. combate de obligado casa", desde: 0, hasta: 1700 },
    { calle: "pje. combate de obligado", desde: 0, hasta: 1700 },
    { calle: "combate de obligado", desde: 0, hasta: 1700 },
    { calle: "combate de obligado casa", desde: 0, hasta: 1700 },
    { calle: "pje combate de obligado", desde: 0, hasta: 1700 },
    { calle: "pje combate de obligado casa", desde: 0, hasta: 1700 },
    { calle: "pasaje combate de obligado casa", desde: 0, hasta: 1700 },
    { calle: "pasaje combate de obligado", desde: 0, hasta: 1700 },
    { calle: "pje. combate de obligado casa", desde: 0, hasta: 1700 },
    { calle: "pje. Combatientes de malvinas", desde: 0, hasta: 1700 },
    { calle: " Combatientes de malvinas ", desde: 0, hasta: 1700 },
    { calle: " Combatientes de malvinas casa", desde: 0, hasta: 1700 },
    { calle: "pje Combatientes de malvinas ", desde: 0, hasta: 1700 },
    { calle: "pje Combatientes de malvinas casa", desde: 0, hasta: 1700 },
    { calle: "pasaje Combatientes de malvinas casa", desde: 0, hasta: 1700 },
    { calle: "pasaje Combatientes de malvinas ", desde: 0, hasta: 1700 },
    { calle: "pje. S. Austral", desde: 0, hasta: 1700 },
    { calle: " S. Austral ", desde: 0, hasta: 1700 },
    { calle: " S. Austral casa", desde: 0, hasta: 1700 },
    { calle: "pje Soberanía Austral ", desde: 0, hasta: 1700 },
    { calle: "pje Soberanía Austral casa", desde: 0, hasta: 1700 },
    { calle: "pasaje Soberanía Austral casa", desde: 0, hasta: 1700 },
    { calle: "pasaje Soberanía Austral ", desde: 0, hasta: 1700 },
    { calle: "pje. puerto argentino casa", desde: 0, hasta: 1700 },
    { calle: "pje. puerto argentino", desde: 0, hasta: 1700 },
    { calle: "puerto argentino", desde: 0, hasta: 1700 },
    { calle: "puerto argentino casa", desde: 0, hasta: 1700 },
    { calle: "pje puerto argentino", desde: 0, hasta: 1700 },
    { calle: "pje puerto argentino casa", desde: 0, hasta: 1700 },
    { calle: "pasaje puerto argentino casa", desde: 0, hasta: 1700 },
    { calle: "pasaje puerto argentino", desde: 0, hasta: 1700 },
    { calle: "pje. jose vernet casa", desde: 0, hasta: 1700 },
    { calle: "pje. jose vernet", desde: 0, hasta: 1700 },
    { calle: "jose vernet", desde: 0, hasta: 1700 },
    { calle: "jose vernet casa", desde: 0, hasta: 1700 },
    { calle: "pje jose vernet", desde: 0, hasta: 1700 },
    { calle: "pje jose vernet casa", desde: 0, hasta: 1700 },
    { calle: "pasaje jose vernet casa", desde: 0, hasta: 1700 },
    { calle: "pasaje jose vernet", desde: 0, hasta: 1700 },
    { calle: "pje. c. posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "pje. c. posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "c. posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "c. posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "pje c. posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "pje c. posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "pasaje c. posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "pasaje c. posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "pje. c. posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "pje. posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "posta de yatasto casa", desde: 0, hasta: 1700 },
    { calle: "posta de yatasto", desde: 0, hasta: 1700 },
    { calle: "av. machado", desde: 900, hasta: 1800 },
    { calle: "avenida machado", desde: 900, hasta: 1800 },
    { calle: "machado", desde: 900, hasta: 1800 },
    { calle: "arana", desde: 900, hasta: 1800 },
    { calle: "uriburu", desde: 900, hasta: 1800 },
    { calle: "pellegrini", desde: 900, hasta: 1800 },
    { calle: "montevideo", desde: 900, hasta: 1800 },
    { calle: "las heras", desde: 900, hasta: 1800 },
    { calle: "garibaldi", desde: 900, hasta: 1800 },
    { calle: "av balbin", desde: 900, hasta: 1700 },
    { calle: "balbin", desde: 900, hasta: 1700 },
    { calle: "avenida balbin", desde: 900, hasta: 1700 },
    { calle: "avenida colón", desde: 900, hasta: 1600 },
    { calle: "av colón", desde: 900, hasta: 1600 },
    { calle: "colón", desde: 900, hasta: 1600 },
    { calle: "avenida colon", desde: 900, hasta: 1600 },
    { calle: "av colon", desde: 900, hasta: 1600 },
    { calle: "colon", desde: 900, hasta: 1600 },
    { calle: "av espora", desde: 800, hasta: 1400 },
    { calle: "espora", desde: 800, hasta: 1400 },
    { calle: "avenida espora", desde: 800, hasta: 1400 },
    { calle: "guatemala", desde: 900, hasta: 1500 },
    { calle: "mejico", desde: 1000, hasta: 1400 },
    { calle: "mexico", desde: 1000, hasta: 1400 },
    { calle: "gomez", desde: 1200, hasta: 1400 },
    { calle: "colectora sur", desde: 1000, hasta: 1800 },
    { calle: "colectora sur j.c pugliese", desde: 1000, hasta: 1800 },
    { calle: "colectora j.c pugliese", desde: 1000, hasta: 1800 },
    { calle: "colectora pugliese", desde: 1000, hasta: 1800 },
    { calle: "pugliese", desde: 1000, hasta: 1800 },
    { calle: "piedrabuena", desde: 1000, hasta: 1800 },
    { calle: "piñero", desde: 1200, hasta: 1600 },
    { calle: "piñiero", desde: 1200, hasta: 1600 },
    { calle: "piñeiro", desde: 1200, hasta: 1600 },
    { calle: "primera junta", desde: 1000, hasta: 1800 },
    { calle: "franklin", desde: 1000, hasta: 1700 },
    { calle: "colombia", desde: 1000, hasta: 1400 },
    { calle: "newton", desde: 900, hasta: 1400 },
    { calle: "edison", desde: 900, hasta: 1200 },
    { calle: "cuba", desde: 900, hasta: 1400 },
    { calle: "haiti", desde: 900, hasta: 1400 },
    { calle: "jurado", desde: 1200, hasta: 1400 },
    { calle: "rauch", desde: 1000, hasta: 1400 },
    { calle: "peyrel", desde: 1200, hasta: 1400 },
    { calle: "honduras", desde: 1300, hasta: 1400 },
    { calle: "pioxii", desde: 1300, hasta: 1400 },
    { calle: "pioXII", desde: 1300, hasta: 1400 },
    { calle: "guemes", desde: 1200, hasta: 1400 },
    { calle: "güemes", desde: 1200, hasta: 1400 },
    { calle: "pasaje guernica", desde: 1600, hasta: 1800 },
    { calle: "pje guernica", desde: 1600, hasta: 1800 },
    { calle: "pje guernica", desde: 1600, hasta: 1800 },
    { calle: "pasaje orbe", desde: 0, hasta: 1800 },
    { calle: "pje orbe", desde: 0, hasta: 1800 },
    { calle: "orbe", desde: 0, hasta: 1800 },
    { calle: "pasaje c. disney", desde: 0, hasta: 1800 },
    { calle: "pje c. disney", desde: 0, hasta: 1800 },
    { calle: "c. disney", desde: 0, hasta: 1800 },
    { calle: "Pasaje interno barrio san francisco", desde: 1100, hasta: 1500 },
    { calle: "pje interno barrio san francisco", desde: 1100, hasta: 1500 },
    { calle: "Pasaje interno bo san francisco", desde: 1100, hasta: 1500 },
    { calle: "liniers", desde: 1000, hasta: 1700 },
    { calle: "pje castelli", desde: 1100, hasta: 1800 },
    { calle: "Pasaje castelli", desde: 1100, hasta: 1800 },
    { calle: "Castelli", desde: 1100, hasta: 1800 },
  ];

  const zonasDeCoberturaNormalizadas = zonasDeCobertura.map((zona) => ({
    calle: normalizeString(zona.calle),
    desde: zona.desde,
    hasta: zona.hasta,
  }));

  const calleNormalizada = normalizeString(inputDireccion);
  const numeroInt = parseInt(inputNumero, 10);

  let dentroDeCobertura = false;
  for (const zona of zonasDeCoberturaNormalizadas) {
    if (
      calleNormalizada.includes(zona.calle) &&
      numeroInt >= zona.desde &&
      numeroInt <= zona.hasta
    ) {
      dentroDeCobertura = true;
      break;
    }
  }

  if (dentroDeCobertura) {
    document.getElementById("textoAbajoTitulo").style.display = "block";
    document.getElementById("textoAbajoTitulo2").style.display = "block";
    document.getElementById("textoAbajoTitulo3").style.display = "block";
    titulo.innerText = "¡Buenas Noticias! Estás en Zona Usittel";
    parrafo.innerHTML =
      'Contactate al siguiente Whatsapp <i class="fab fa-whatsapp"></i> <a target="_blank" href="https://wa.me/5492494060345/?text=Hola!%20vengo%20desde%20la%20web%20de%20Usittel%20y%20quer%C3%ADa%20consultarte%20por%20los%20diferentes%20planes%20y%20servicios">+54 9 249406-0345</a>, o hace click en el número y chatea ahora con nosotros!';
    parrafo2.innerHTML =
      'También, podes dejarnos tus datos en el siguiente formulario <a target="" href="consultaForm.html">formulario</a> y un operador se contactará contigo.';
    parrafo3.innerText = "¡Muchas gracias!";
    numHelp.innerText = "";
    textoWP.innerText = "";
    numWP.innerText = "";
  } else {
    document.getElementById("textoAbajoTitulo").style.display = "block";
    document.getElementById("textoAbajoTitulo2").style.display = "block";
    document.getElementById("textoAbajoTitulo3").style.display = "block";
    titulo.innerText =
      "Por el momento no contamos con cobertura en la dirección indicada.";
    parrafo.innerText = "Seguimos ampliándonos, pronto llegaremos a tu hogar.";
    parrafo2.innerHTML =
      '¡Déjanos tu consulta haciendo click en el siguiente enlace <a target="" href="consultaForm.html">Formulario</a>!';
    parrafo3.innerText = "¡Muchas gracias!";
    numHelp.innerText = "";
    textoWP.innerText = "";
    numWP.innerText = "";
  }

  inputContainer.style.display = "none";
  botonVerificar.innerHTML =
    '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="volverAtras()">Volver</button>';
}

function volverAtras() {
  document.getElementById("textoAbajoTitulo").style.display = "none";
  document.getElementById("textoAbajoTitulo2").style.display = "none";
  document.getElementById("textoAbajoTitulo3").style.display = "none";
  const inputContainer = document.getElementById("inputContainer");
  const titulo = document.getElementById("titulo");
  const parrafo = document.getElementById("textoAbajoTitulo");
  const parrafo2 = document.getElementById("textoAbajoTitulo2");
  const parrafo3 = document.getElementById("textoAbajoTitulo3");
  const textoWP = document.getElementById("textoWP");
  const numWP = document.getElementById("numWP");
  const numHelp = document.getElementById("numHelp");
  const botonVerificar = document.getElementById("botonVerificar");

  document.getElementById("inputDireccion").style.border = "";
  document.getElementById("inputNumero").style.border = "";
  document.getElementById("inputDireccion").value = "";
  document.getElementById("inputNumero").value = "";

  titulo.innerText = "Validá si estás en zona ingresando tu dirección:";
  numHelp.innerHTML =
    '<a target="_blank" href="img/FACTURA USINA DETALLE.png">¿Cómo encuentro el número de Cliente?</a>';
  botonVerificar.innerHTML =
    '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="verificarCobertura()">Verificar</button>';

  parrafo.innerText = "";
  parrafo2.innerText = "";
  parrafo3.innerText = "";
  textoWP.innerText = "";
  numWP.innerText = "";

  inputContainer.style.display = "block";
}

function normalizeString(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ");
}
