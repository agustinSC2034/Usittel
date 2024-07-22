window.addEventListener("DOMContentLoaded", function () {
  var currentPageLabel = document.getElementById("currentPageLabel");
  var currentPage = location.pathname.split("/").slice(-1)[0]; // Obtiene el nombre del archivo actual

  var dropdownOptions = Array.from(
    document.querySelectorAll(".dropdown-content a")
  );

  dropdownOptions.forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.preventDefault(); // Evita la redirección predeterminada

      var selectedOption = this.getAttribute("data-value");
      currentPageLabel.textContent = "Web: " + selectedOption;
    });
  });
});


const zonasDeCobertura = [
  { calle: '4 de abril', desde: 1, hasta: 900 },
  { calle: 'santamarina', desde: 1, hasta: 900 },
  { calle: 'av Santamarina', desde: 1, hasta: 900 },
  { calle: 'avenida Santamarina', desde: 1, hasta: 900 },
  { calle: 'alsina', desde: 1, hasta: 900 },
  { calle: 'gral roca', desde: 1, hasta: 900 },
  { calle: 'general roca', desde: 1, hasta: 900 },
  { calle: 'roca', desde: 1, hasta: 900 },
  { calle: '11 de septiembre', desde: 1, hasta: 900 },
  { calle: 'once de septiembre', desde: 1, hasta: 900 },
  { calle: 'montiel', desde: 1, hasta: 900 },
  { calle: 'moreno', desde: 1, hasta: 900 },
  { calle: 'saavedra', desde: 1, hasta: 900 },
  { calle: 'buzon', desde: 1, hasta: 900 },
  { calle: 'av buzon', desde: 1, hasta: 900 },
  { calle: 'avenida buzon', desde: 1, hasta: 900 },
  { calle: 'avenida marconi', desde: 1000, hasta: 1800 },
  { calle: 'av marconi', desde: 1000, hasta: 1800 },
  { calle: 'marconi', desde: 1000, hasta: 1800 },
  { calle: 'sarmiento', desde: 1000, hasta: 1800 },
  { calle: 'mitre', desde: 1000, hasta: 1800 },
  { calle: 'sanmartin', desde: 1000, hasta: 1800 },
  { calle: 'san martin', desde: 1000, hasta: 1800 },
  { calle: 'pinto', desde: 1000, hasta: 1800 },
  { calle: 'belgrano', desde: 1000, hasta: 1800 },
  { calle: 'maipu', desde: 1000, hasta: 1800 },
  { calle: 'veinticinco de mayo', desde: 1000, hasta: 1800 },
  { calle: '25demayo', desde: 1000, hasta: 1800 },
  { calle: '25 de mayo', desde: 1000, hasta: 1800 },
  { calle: 'constitucion', desde: 1000, hasta: 1800 },
  { calle: 'avellaneda', desde: 1000, hasta: 1800 },
  { calle: 'avenida avellaneda', desde: 1000, hasta: 1800 },
  { calle: 'av avellaneda', desde: 1000, hasta: 1800 }
];




function verificarCobertura() {
  console.log("Verificar cobertura fue llamado."); // Línea de depuración

  const inputContainer = document.getElementById("inputContainer");
  const titulo = document.getElementById("titulo");
  const parrafo = document.getElementById("textoAbajoTitulo");
  const parrafo2 = document.getElementById("textoAbajoTitulo2");
  const parrafo3 = document.getElementById("textoAbajoTitulo3");
  const numHelp = document.getElementById("numHelp");
  const contact = document.getElementById("contact");
  const textoWP = document.getElementById("textoWP");
  const numWP = document.getElementById("numWP");
  const botonVerificar = document.getElementById("botonVerificar");
  const direccion = document.getElementById("inputNumero").value;

  if (direccion === "") {
      // Agregar un estilo para el borde rojo o algún mensaje de error
      document.getElementById("inputNumero").style.border = "1px solid red";
      return; // Sale de la función si el campo está vacío
  }

  const zonasDeCobertura = [
    { calle: '4 de abril', desde: 1, hasta: 900 },
    { calle: 'santamarina', desde: 1, hasta: 900 },
    { calle: 'av Santamarina', desde: 1, hasta: 900 },
    { calle: 'avenida Santamarina', desde: 1, hasta: 900 },
    { calle: 'alsina', desde: 1, hasta: 900 },
    { calle: 'gral roca', desde: 1, hasta: 900 },
    { calle: 'general roca', desde: 1, hasta: 900 },
    { calle: 'roca', desde: 1, hasta: 900 },
    { calle: '11 de septiembre', desde: 1, hasta: 900 },
    { calle: 'once de septiembre', desde: 1, hasta: 900 },
    { calle: 'montiel', desde: 1, hasta: 900 },
    { calle: 'moreno', desde: 1, hasta: 900 },
    { calle: 'saavedra', desde: 1, hasta: 900 },
    { calle: 'buzon', desde: 1, hasta: 900 },
    { calle: 'av buzon', desde: 1, hasta: 900 },
    { calle: 'avenida buzon', desde: 1, hasta: 900 },
    { calle: 'avenida marconi', desde: 1000, hasta: 1800 },
    { calle: 'av marconi', desde: 1000, hasta: 1800 },
    { calle: 'marconi', desde: 1000, hasta: 1800 },
    { calle: 'sarmiento', desde: 1000, hasta: 1800 },
    { calle: 'mitre', desde: 1000, hasta: 1800 },
    { calle: 'sanmartin', desde: 1000, hasta: 1800 },
    { calle: 'san martin', desde: 1000, hasta: 1800 },
    { calle: 'pinto', desde: 1000, hasta: 1800 },
    { calle: 'belgrano', desde: 1000, hasta: 1800 },
    { calle: 'maipu', desde: 1000, hasta: 1800 },
    { calle: 'veinticinco de mayo', desde: 1000, hasta: 1800 },
    { calle: '25demayo', desde: 1000, hasta: 1800 },
    { calle: '25 de mayo', desde: 1000, hasta: 1800 },
    { calle: 'constitucion', desde: 1000, hasta: 1800 },
    { calle: 'avellaneda', desde: 1000, hasta: 1800 },
    { calle: 'avenida avellaneda', desde: 1000, hasta: 1800 },
    { calle: 'av avellaneda', desde: 1000, hasta: 1800 }
  ];

  const zonasDeCoberturaNormalizadas = zonasDeCobertura.map(zona => ({
      calle: normalizeString(zona.calle),
      desde: zona.desde,
      hasta: zona.hasta
  }));

  const direccionPartes = direccion.split(' ');
  const calle = direccionPartes.slice(0, -1).join(' ');
  const numero = direccionPartes[direccionPartes.length - 1];
  const numeroInt = parseInt(numero, 10);
  const calleNormalizada = normalizeString(calle);

  let dentroDeCobertura = false;
  for (const zona of zonasDeCoberturaNormalizadas) {
      if (calleNormalizada === zona.calle && numeroInt >= zona.desde && numeroInt <= zona.hasta) {
          dentroDeCobertura = true;
          break;
      }
  }

  if (dentroDeCobertura) {
      titulo.innerText = "¡Buenas Noticias! Estás en Zona Usittel";
      parrafo.innerHTML = 'Contactate ahora al siguiente Whatsapp <i class="fab fa-whatsapp"></i> <a target="_blank" href="https://wa.me/5492494060345/?text=Hola!%20vengo%20desde%20la%20web%20de%20Usittel%20y%20quer%C3%ADa%20consultarte%20por%20los%20diferentes%20planes%20y%20servicios">+54 9 249406-0345</a>, o hace click en el número y chatea ahora con nosotros!';
      parrafo2.innerHTML = 'También, podes dejarnos tus datos en el siguiente formulario <a target="" href="consultaForm.html">formulario</a> y un operador se contactará contigo.';
      parrafo3.innerText = "¡Muchas gracias!";
      numHelp.innerText = "";
      textoWP.innerText = "";
      numWP.innerText = "";
  } else {
      titulo.innerText = "Por el momento no contamos con cobertura en la dirección indicada.";
      parrafo.innerText = "Seguimos ampliándonos, pronto llegaremos a tu hogar.";
      parrafo2.innerHTML = '¡Déjanos tu consulta haciendo click en el siguiente enlace <a target="" href="consultaForm.html">Formulario</a>!';
      parrafo3.innerText = "¡Muchas gracias!";
      numHelp.innerText = "";
      textoWP.innerText = "";
      numWP.innerText = "";
  }

  // Ocultar el contenedor del input y mostrar el botón de volver
  inputContainer.style.display = "none";
  botonVerificar.innerHTML = '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="volverAtras()">Volver</button>';
}

function volverAtras() {
  const inputContainer = document.getElementById("inputContainer");
  const titulo = document.getElementById("titulo");
  const parrafo = document.getElementById("textoAbajoTitulo");
  const parrafo2 = document.getElementById("textoAbajoTitulo2");
  const parrafo3 = document.getElementById("textoAbajoTitulo3");
  const textoWP = document.getElementById("textoWP");
  const numWP = document.getElementById("numWP");
  const numHelp = document.getElementById("numHelp");
  const botonVerificar = document.getElementById("botonVerificar");
  
  // Restablecer el borde a su estado original (si fuera necesario)
  document.getElementById("inputNumero").style.border = ""; // Establece el borde a su estado original
  document.getElementById("inputNumero").value = ""; // Borra el contenido del input

  // Restaurar el contenido original
  titulo.innerText = "Validá si estás en zona ingresando tu dirección:";
  numHelp.innerHTML = '<a target="_blank" href="img/FACTURA USINA DETALLE.png">¿Cómo encuentro el número de Cliente?</a>';
  botonVerificar.innerHTML = '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="verificarCobertura()">Verificar</button>';
  
  // Limpiar párrafos
  parrafo.innerText = "";
  parrafo2.innerText = "";
  parrafo3.innerText = "";
  textoWP.innerText = "";
  numWP.innerText = "";

  // Mostrar el contenedor del input nuevamente
  inputContainer.style.display = "block";
}

// Normalización de cadenas para comparar calles
function normalizeString(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
}


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
