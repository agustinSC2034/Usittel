window.addEventListener('DOMContentLoaded', function() {
  var currentPageLabel = document.getElementById('currentPageLabel');
  var currentPage = location.pathname.split('/').slice(-1)[0]; // Obtiene el nombre del archivo actual sin la ruta completa
  
  // Elimina la extensión ".html" del nombre del archivo
  var pageName = currentPage.replace('.html', '');

  currentPageLabel.textContent += pageName;
});