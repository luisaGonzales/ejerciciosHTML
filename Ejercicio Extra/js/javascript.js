function convertirCelsius(gradosC){
  var gradosC = document.getElementById('celsius').value;
  var resultado = document.getElementById("resultado");
  var farenheit = parseFloat(gradosC * 9/5 + 32);
  resultado.innerHTML = farenheit;
}
