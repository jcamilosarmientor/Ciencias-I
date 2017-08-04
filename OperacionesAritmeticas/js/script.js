var numeros = []; // Arrelgo para los números ingresados
// Crea los input establecidos por el usuario
var promedio = 0;
var mejorForma = 0;
var peorForma = 0;
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
  var contando = ordenarBurbuja();
  calcularOperaciones();
  var divResultado = document.getElementById("resultado");
  var divResultadoForm = document.getElementById("resultadoFormula");
  var divArreglo = document.getElementById("arreglo");
  divArreglo.innerHTML = numeros;
  divResultado.innerHTML = "<br>Contando: " + contando;
  divResultadoForm.innerHTML = "<br>Mejor Caso: " + mejorForma;
  divResultadoForm.innerHTML = "<br>Peor Caso: " + peorForma;
  divResultadoForm.innerHTML = "<br>Caso Promedio: " + promedio;
}

// Ordena el arreglo numeros
function ordenarBurbuja() {
  var cont = 0;
  cont += 1; // i = 0
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
  cont+=2; // fin del ciclo for de j
  return cont;
}

// Calcula el número de operaciones elementales con la formula
function calcularOperaciones() {
  var n = numeros.length;
  promedio = 8.5*((n*(n-1))-(n-1)-(((n-2)*(n-1))/2)) + (6*(n-1))+3;
  peorForma = 12*((n*(n-1))-(n-1)-(((n-2)*(n-1))/2)) + (6*(n-1))+3;
  mejorForma = 5*((n*(n-1))-(n-1)-(((n-2)*(n-1))/2)) + (6*(n-1))+3;
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
