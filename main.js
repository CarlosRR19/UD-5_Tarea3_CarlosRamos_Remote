document.addEventListener("DOMContentLoaded", function () {
  var parrafos = document.querySelectorAll("p");
  parrafos.forEach(function (parrafo) {
    parrafo.textContent = parrafo.textContent.toUpperCase();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var botonCambiarColor = document.getElementById("cambiarColorBtn");

  botonCambiarColor.addEventListener("click", function () {
    cambiarColor();
  });

  function cambiarColor() {
    var colorRojo = Math.floor(Math.random() * 256);
    var colorVerde = Math.floor(Math.random() * 256);
    var colorAzul = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor =
      "rgb(" + colorRojo + "," + colorVerde + "," + colorAzul + ")";
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var botonCambiarFuente = document.getElementById('cambiarFuenteBtn');
    var titulos = document.querySelectorAll('h1, h2');
  
    botonCambiarFuente.addEventListener('click', function() {
      cambiarFuente();
    });
  
    function cambiarFuente() {
      titulos.forEach(function(titulo) {
        // Cambiar la fuente a tu elección
        titulo.style.fontFamily = 'NuevaFuente, sans-serif';
      });
    }
  });