var numeros = []; // Arrelgo para los números ingresados
var formula = "5 + ( N(N - 1) - (N/2)(N - 1)) + 6(N - 1) + 3"
// Crea los input establecidos por el usuario
function agregarCajas() {
  var numCajas = document.getElementById("input_cajas").value;
  var divCajas = document.getElementById("cajas");
  // Valida si ya existe el input_0, para eliminar los input ya existentes y volver a crear unos nuevos
  // Esto es en caso de que el valor de numCajas cambie
  if (document.getElementById("input_0")) {
    divCajas.innerHTML='';
  }
  // Agrega los input al div "cajas" y les asigna un id contenenando "input_" con el valor de i
  for (var i = 0; i < numCajas; i++) {
    var inputCaja = document.createElement("input");
    inputCaja.setAttribute("id", "input_"+i);
    inputCaja.setAttribute("type", "number");
    divCajas.appendChild(inputCaja);
  }
}

// Obtiene los valores de los input
function calcularFunciones() {
  numeros = [];
  var numCajas = document.getElementById("input_cajas").value;
  for (var i = 0; i < numCajas; i++) {
    if (document.getElementById("input_"+i)) {
      valor = parseInt(document.getElementById("input_"+i).value);
      numeros.push(valor);
    }
  }
  var resultado = ordenarBurbuja();
  var divResultado = document.getElementById("resultado");
  var divArreglo = document.getElementById("arreglo");
  divArreglo.innerHTML = numeros;
  divResultado.innerHTML = "Formula: " + formula + "<br>Resultado: " + resultado;
}

// Ordena el arreglo numeros
function ordenarBurbuja() {
  var cont = 0;
  cont += 2; // cont = 0; i = 0
  for (var i = 0; i < numeros.length-1; i++) {
    cont += 3; // i < numeros.length-1; i++
    cont += 2; // j = i+1
    for (var j = i+1; j < numeros.length; j++) {
      cont += 2; // j < numeros.length; j++
      cont += 3; // numeros[i] > numeros[j]
      if (numeros[i] > numeros[j]) {
        var temp = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = temp;
        cont += 7;
      }
    }
    cont++; // fin del ciclo for de i
  }
  cont++; // fin del ciclo for de j
  return cont;
}

// Cálcula el factorial del número
function factorial(num) {
  var a = 1;
  cont++;
  for (var i = 1; i <= num; i++) {
    a *= i;
  }
  return a;
}
