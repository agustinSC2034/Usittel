window.addEventListener('DOMContentLoaded', function() {
  var currentPageLabel = document.getElementById('currentPageLabel');
  var currentPage = location.pathname.split('/').slice(-1)[0]; // Obtiene el nombre del archivo actual

  var dropdownOptions = Array.from(document.querySelectorAll('.dropdown-content a'));

  dropdownOptions.forEach(function(option) {
    option.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la redirección predeterminada
      
      var selectedOption = this.getAttribute('data-value');
      currentPageLabel.textContent = "Web: " + selectedOption;
    });
  });
});

function verificarCobertura() {
  const inputContainer = document.getElementById('inputContainer');
  const titulo = document.getElementById('titulo');
  const parrafo = document.getElementById('textoAbajoTitulo');
  const numHelp = document.getElementById('numHelp');
  const textoWP = document.getElementById('textoWP');
  const numWP = document.getElementById('numWP');
  const botonVerificar = document.getElementById('botonVerificar');
  const numeroIngresado = document.getElementById('inputNumero').value;

  if (numeroIngresado === '111111' || numeroIngresado === '222222' || numeroIngresado === '333333') {
    titulo.innerText = '¡Buenas Noticias! Estás en Zona Usittel',
    parrafo.innerText = 'Puedes dejarnos tus datos en el formulario que se encuentra al final de la pagina o escribirnos al mail: contacto@usittel.com.ar y un operador se contactará contigo.',
    numHelp.innerText = '';
    textoWP.innerText = 'Tambien podés escribirnos al whatsapp'
    numWP.innerText = '54 9 249 406-0345';
    
 
  } else {
    titulo.innerText = 'Por el momento no contamos con cobertura en la dirección indicada.',
    parrafo.innerText = 'Seguimos ampliandonos, pronto llegaremos a tu hogar';
    numHelp.innerText = '';
    textoWP.innerText = '';
    numWP.innerText = '';
  }

  // Oculta el contenedor del input y muestra el botón de volver
  inputContainer.style.display = 'none';
  contactanosWP.style.display = ''
  botonVerificar.innerHTML = '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="volverAtras()">Volver</button>';
  }

function volverAtras() {
  const inputContainer = document.getElementById('inputContainer');
  const titulo = document.getElementById('titulo');
  const parrafo = document.getElementById('textoAbajoTitulo');
  const numHelp = document.getElementById('numHelp');
  const textoWP = document.getElementById('textoWP');
  const numWP = document.getElementById('numWP');
  const botonVerificar = document.getElementById('botonVerificar');

  // Muestra nuevamente el contenedor del input y restaura el contenido original
  inputContainer.style.display = 'block';
  titulo.innerText = 'Validá si estás en zona ingresando el número de Cliente de la USINA:';
  botonVerificar.innerHTML = '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="verificarCobertura()">Verificar</button>'
  document.getElementById('inputNumero').value = ''; // Borra el contenido del input
  parrafo.innerText = '';
  numHelp.innerText = '';
  textoWP.innerText = '';
  numWP.innerText = '';
}

// script pop-up:
function openPopup1() {
  var popup = document.getElementById('popup1');
  popup.style.display = 'block';
}
function openPopup2() {
  var popup = document.getElementById('popup2');
  popup.style.display = 'block';
}
function openPopup3() {
  var popup = document.getElementById('popup3');
  popup.style.display = 'block';
}

function closePopup1() {
  var popup = document.getElementById('popup1');
  popup.style.display = 'none';
}
function closePopup2() {
  var popup = document.getElementById('popup2');
  popup.style.display = 'none';
}
function closePopup3() {
  var popup = document.getElementById('popup3');
  popup.style.display = 'none';
}

document.getElementById('popupLink1').addEventListener('click', function(e) {
  e.preventDefault();
  openPopup1();
});
document.getElementById('popupLink2').addEventListener('click', function(e) {
  e.preventDefault();
  openPopup2();
});
document.getElementById('popupLink3').addEventListener('click', function(e) {
  e.preventDefault();
  openPopup3();
});