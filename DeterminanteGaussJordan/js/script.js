var numeros = []; // Números de la matriz

function agregarCajas() {
  var numCajas = document.getElementById('inputCantidad').value;
  var divMatriz = document.getElementById('matriz');
  var btn = document.getElementById('btnCalcular');
  // Valida si ya existe el input_0, para eliminar los input ya existentes y volver a crear unos nuevos
  // Esto es en caso de que el valor de numCajas cambie
  if (document.getElementById('input_0')) {
    divMatriz.innerHTML='';
    btn.innerHTML='';
  }
  // Agrega los input al div 'cajas' y les asigna un id contenenando 'input_' con el valor de i
  for (var i = 0; i < numCajas; i++) {
    var inputCaja = document.createElement('input');
    inputCaja.setAttribute('id', 'input_'+i);
    divMatriz.appendChild(inputCaja);
  }
  var btnCalcular = document.createElement('button');
  btnCalcular.setAttribute('onclick','llenarMatriz()');
  btnCalcular.setAttribute('type', 'button');
  btnCalcular.setAttribute('id', 'btnCalcular');
  btnCalcular.innerHTML = 'Calcular Determinante!'
  divMatriz.appendChild(btnCalcular)
}

function llenarMatriz() {
  numeros = [];
  var numCajas = document.getElementById('inputCantidad').value;
  for (var i = 0; i < numCajas; i++) {
      var valor = document.getElementById('input_'+i).value;
      numeros.push(Integer.parseInt(valor));
  }
  console.log(numeros);
}

function calcularDeterminante (m) {
  var n = m.length;
  for (var i = 0; i < n-1; i++) {
    if (m[i][i] == 0) {
      // Intercambiar una fila más abajo
      // Si toda la fila es 0, el determinante no existe
      // Si se intercambia con una fila de abajo se multiplica el determinante por -1
    }
    for (var j = i+1; i < n; i++) {
      for (var k = j+1; i < n; i++) {
        m[j][k] = m[j][k]-((m[k][i]*m[i][j])/m[i][j]);
      }
    }
  }
  var d = 1;  // determinante
  for (var i = 0; i < n; i++) {
    d = d * m[i][i];
  }
}
