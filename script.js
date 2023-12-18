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

/*
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
  */


  function verificarCobertura() {
    const inputContainer = document.getElementById('inputContainer');
    const titulo = document.getElementById('titulo');
    const parrafo = document.getElementById('textoAbajoTitulo');
    const numHelp = document.getElementById('numHelp');
    const textoWP = document.getElementById('textoWP');
    const numWP = document.getElementById('numWP');
    const botonVerificar = document.getElementById('botonVerificar');
    const numeroIngresado = document.getElementById('inputNumero').value;

    if (numeroIngresado.trim() === '') {
      // Agregar un estilo para el borde rojo o algún mensaje de error
      document.getElementById('inputNumero').style.border = '1px solid red';
      return; // Sale de la función si el campo está vacío
    }
    

    const numerosValidos = [
        '44754001', '115108004', '23102001', '114458001', '99360002', '109980003', '143393001', '143393001', '107113001', '129351001', '91161002', '137688001', '137166001', '70475001', '139813001', '143591001', 
        '141112001', '144064001', '138670001', '126128002', '134310001', '138110001', '123668002', '138063001', '130047002', '126780001', '77504001', '105387001', '109900001', '101145005', '114235001', '135962001', 
        '107113002', '97484001', '97484001', '84237002', '94106002', '68792001', '5084003', '12393001', '143957001', '782001', '16876002', '142526001', '80430002', '105569001', '104788001', '40396003', '40396004', 
        '91585002', '26967001', '71398001', '71555001', '135066001', '91408013', '137767002', '70356001', '135497001', '44591001', '64774001', '97624001', '75064009', '120971001', '128212001', '89301002', '65420001', 
        '119174002', '106327001', '138798001', '103644004', '123084002', '102499002', '102499002', '108301001', '83922002', '106609003', '97068001', '78690002', '142809001', '133194001', '94770005', '125745002', '111365001', 
        '132302001', '127413003', '131439001', '134845001', '137251001', '129937001', '128958001', '129031001', '129622001', '128873001', '129818001', '71011002', '42942002', '120503002', '24593004', '24593004', '24593004', 
        '140001001', '134020002', '138519001', '98129011', '98129011', '141887001', '141683001', '143625001', '80120002', '137451003', '141540001', '131700002', '102052007', '138671001', '125153003', '112470003', '142870001', 
        '143520001', '101335003', '101335003', '138485001', '105627004', '138395001', '124276002', '110022003', '138492001', '138492001', '137800003', '137800003', '56667002', '134795001', '134795001', '85436005', '94096002', 
        '124486002', '137603003', '79173002', '79173002', '128944001', '91172003', '95128001', '139118001', '134285001', '115768003', '94956001', '94956001', '94956001', '91172002', '139220001', '143532001', '18685001', 
        '30680001', '62012011', '109294002', '102032003', '106918005', '121422002', '142570001', '62012017', '46374001', '142596001', '141377001', '119673003', '121949001', '101720003', '105095002', '131989001', '140584001', 
        '121371002', '132248004', '137616001', '137472001', '139888001', '138917001', '138898001', '64598006', '64598006', '129999002', '94114003', '104100001', '22797001', '93498002', '140667002', '47723001', '138996002', 
        '27436001', '123318001', '123318001', '98885002', '142959001', '131437001', '141152001', '141411001', '93493003', '120941002', '132601001', '92397002', '58097003', '139251002', '102939001', '29870001', '102313001', 
        '89885001', '93301001', '28044001', '48381001', '95552002', '110943006', '109166001', '117435001', '103823003', '109070001', '19980002', '135153001', '136634001', '129149002', '80851005', '108894001', '130156001', 
        '111741001', '69110002', '105275001', '128621001', '89018004', '106996001', '139967001', '106152003', '97284004', '106152002', '54319001', '23524001', '2137001', '129452001', '57236001', '68605001', '14169001', 
        '63222001', '132115001', '134534001', '103465001', '59777005', '98627002', '81309003', '139479001', '103616005', '88909006', '10068001', '601002', '109132007', '89550004', '140064001', '118415002', '101854002', 
        '115628004', '139999001', '140034001', '114021002', '116130003', '129415002', '81396001', '122959001', '122959001', '92893002', '144349001', '114126003', '85614006', '51920003', '125942005', '139943001', '96794003', 
        '75809001', '5017001', '126299001', '126299001', '88395001', '48935001', '48935001', '103266001', '11231001', '30140001', '89903001', '62375001', '97152001', '137015001', '97119003', '101114002', '95481002', '52322001', 
        '79321003', '10358001', '57413003', '135303001', '20325001', '78532002', '105896001', '120397001', '121340001', '82372003', '32458001', '109867005', '121781002', '112166001', '93386002', '25233002', '88127003', 
        '103803002', '109264001', '142162001', '123422002', '89034003', '97234004', '97234004', '82722004', '12114003', '127459001', '75081002', '122191004', '103058001', '109634001', '71459001', '137168001', '137168001', 
        '101217011', '109792002', '124046002', '78055008', '72209008', '40553002', '2683001', '132388001', '26413001', '93317001', '46564001', '72796001', '72796001', '94859001', '94859001', '15709001', '74718001', '13606001', 
        '9844001', '45878001', '7024003', '47334001', '112700001', '112700001', '47790001', '47790001', '106963002', '114457003', '114457003', '69023002', '143709001', '104015001', '55951002', '82633002', '82633002', '98426004', 
        '104271001', '129380001', '84711004', '100226005', '129864002', '104239001', '98133003', '116764001', '100613003', '40796002', '97441004', '97441004', '115371002', '116764002', '106749001', '109573001', '70188003', 
        '138255001', '134390001', '133963001', '98963002', '97108003', '112308001', '1678001', '24593003', '24593003', '25380001', '83788001', '6478001', '134177001', '23419001', '106836001', '63981001', '87517002', '80711002', 
        '68631003', '123945002', '130798001', '43375001', '9025001', '134488001', '144247001', '19947001', '77926001', '41572001', '58585001', '14603001', '48674001', '18545001', '123581001', '136538001', '14875001', 
        '101505002', '119629004', '89152003', '86608001', '86608001', '86608001', '86608001', '4561002', '62646001', '62646001', '96978001', '96978001', '43106001', '122890001', '105057001', '2856001', '33126001', '143983001', 
        '104357002', '83490003', '27740001', '136930001', '20349001', '130414001', '105104002', '134624001', '134624001', '87359002', '81601001', '24434002', '21970001', '48359001', '89686002', '49984002', '92926001', 
        '92926001', '92926001', '16609001', '16609001', '78265001', '79514001', '90810001', '124290003', '19272001', '137800004', '96427002', '137168002', '96427003', '27378002', '95108003', '11741002', '76568003', 
        '23613001', '102001001', '134508001', '143403001', '137125001', '102276001', '64427002', '99372001', '132869001', '132869001', '110069001', '94138006', '140459001', '140028001', '100685001', '104816002', 
        '132163002', '94199002', '93752005', '99283001', '119194001', '143950001', '61136002', '102848001', '85441002', '88868002', '88868002', '24561002', '99770001', '61980002', '100690001', '87234009', '81896003', 
        '135315001', '70475016', '97187001', '58453002', '111742001', '74579002', '58453003', '142348001', '63855002', '63855002', '9452003', '90021002', '61980003', '85082002', '143850001', '102367001', '102367001', 
        '81092003', '133620001', '133620001', '663001', '49438001', '92192003', '112827001', '4615001', '106758001', '29707001', '131658003', '16349001', '94190001', '115957001', '93600003', '141749001', '105101002', 
        '93600002', '74218001', '81316001', '2456001', '90745002', '109424002', '15953001', '121655004', '76345004', '121655002', '126689003', '16101001', '964001', '5084001', '44349001', '104643001', '86355001', '109412001', 
        '43339002', '9643001', '14004001', '94668001', '111709003', '122332001', '92711002', '78565001', '28808001', '82043001', '89671001', '89671001', '72133002', '90367001', '108076001', '93226001', '73832001', '52281001', 
        '96297002', '138557001', '46984003', '1793001', '121207004', '83260001', '117920001', '35004390', '28794001', '4001001', '106197001', '30740001', '30018001', '2731001', '100334001', '131278001', '16261001', '73187001', 
        '73187001', '5131001', '85018005', '135684001', '60040001', '134229001', '111508001', '124110002', '19900002', '101749001', '53498002', '51707002', '108345001', '108345001', '143894001', '106652001', '126826001', 
        '127337001'
    ];

    

    if (numerosValidos.includes(numeroIngresado)) {
        titulo.innerText = '¡Buenas Noticias! Estás en Zona Usittel';
        parrafo.innerText = 'Puedes dejarnos tus datos en el formulario que se encuentra al final de la pagina o escribirnos al mail: contacto@usittel.com.ar y un operador se contactará contigo.',
        numHelp.innerText = '';
        textoWP.innerText = 'Tambien podés escribirnos al whatsapp'
        numWP.innerText = '54 9 249 406-0345';
    } else {
        titulo.innerText = 'Por el momento no contamos con cobertura en la dirección indicada.';
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
  const textoWP = document.getElementById('textoWP');
  const numWP = document.getElementById('numWP');
  const numHelp = document.getElementById('numHelp');
  const botonVerificar = document.getElementById('botonVerificar');
  // Restablecer el borde a su estado original (si fuera necesario)
  document.getElementById('inputNumero').style.border = ''; // Establece el borde a su estado original
  // Resto de tu lógica al volver

  // Muestra nuevamente el contenedor del input y restaura el contenido original
  inputContainer.style.display = 'block';
  titulo.innerText = 'Validá si estás en zona ingresando el número de Cliente de la USINA:';
  numHelp.innerHTML = '<a target="_blank" href="img/FACTURA USINA DETALLE.png" id="numHelp">¿Cómo encuentro el número de Cliente?</a>'
  botonVerificar.innerHTML = '<button class="button button-large button-rounded text-capitalize ls0" style="border-radius: 23px" onclick="verificarCobertura()">Verificar</button>'
  document.getElementById('inputNumero').value = ''; // Borra el contenido del input
  parrafo.innerText = '';
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

// Correo fuera de cobertura
function enviarCorreoFueraCobertura(numeroCliente) {
  fetch('enviarCorreoFueraCobertura.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ numeroCliente: numeroCliente })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Hubo un problema al enviar el correo.');
      }
      return response.json();
  })
  .then(data => {
      console.log(data.message); // Mensaje de éxito del servidor
  })
  .catch(error => {
      console.error('Error:', error);
  });
}