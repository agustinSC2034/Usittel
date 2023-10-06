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
  const botonVerificar = document.getElementById('botonVerificar');

  const numeroIngresado = document.getElementById('inputNumero').value;

  if (numeroIngresado === '111111' || numeroIngresado === '222222' || numeroIngresado === '333333') {
    titulo.innerText = '¡Buenas Noticias! Estás en Zona Usittel',
    parrafo.innerText = 'Puedes dejarnos tus datos en el formulario que se encuentra al final de la pagina o escribirnos al mail: contacto@usittel.com.ar y un operador se contactará contigo. Tambien puedes llamaranos al 0800-199-4545';
  } else {
    titulo.innerText = 'Por el momento no contamos con cobertura en la dirección indicada.',
    parrafo.innerText = 'Seguimos ampliandonos, pronto llegaremos a tu hogar';
  }

  // Oculta el contenedor del input y muestra el botón de volver
  inputContainer.style.display = 'none';
  botonVerificar.innerHTML = '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="volverAtras()">Volver</button>';
}

function volverAtras() {
  const inputContainer = document.getElementById('inputContainer');
  const titulo = document.getElementById('titulo');
  const parrafo = document.getElementById('textoAbajoTitulo');
  const botonVerificar = document.getElementById('botonVerificar');

  // Muestra nuevamente el contenedor del input y restaura el contenido original
  inputContainer.style.display = 'block';
  titulo.innerText = '¿Estás en zona de usittel?';
  botonVerificar.innerHTML = '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="verificarCobertura()">Verificar</button>';
  document.getElementById('inputNumero').value = ''; // Borra el contenido del input
  parrafo.innerText = '';
}
