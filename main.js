document.addEventListener("DOMContentLoaded", function () {
  var parrafos = document.querySelectorAll("p");
  parrafos.forEach(function (parrafo) {
    parrafo.textContent = parrafo.textContent.toUpperCase();
  });
});
