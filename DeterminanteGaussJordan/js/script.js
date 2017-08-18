var numeros = []; // Números de la matriz


$(document).ready(function() {
  $('#btnCalcular').hide()
});

function agregarCajas() {
  var numCajas = $('#inputCantidad').val();
  var divMatriz = $('#matriz');
  // Valida si ya existe el input_0, para eliminar los input ya existentes y volver a crear unos nuevos
  // Esto es en caso de que el valor de numCajas cambie
  if (typeof $('#input_0').value === 'undefined') {
    divMatriz.empty();
  }
  // Agrega los input al div 'cajas' y les asigna un id contenenando 'input_' con el valor de i
  for (var i = 0; i < numCajas; i++) {
    var divFila = '<div id="fila_'+i+'" class="row"></div>';
    divMatriz.append(divFila);
    for (var j = 0; j < numCajas; j++) {
      var newInput = '<input type="number" class="form-control col-md-'+Math.trunc(12/numCajas)+' col-md-offset-1" id="input_'+i+'_'+j+'">';
      $('#fila_'+i).append(newInput);
    }
  }
  $('#btnCalcular').show();
  $('#txtTamanioMatriz').html('Matriz de tamaño '+numCajas+'x'+numCajas);
}

function llenarMatriz() {
  numeros = [];
  var numCajas = $('#inputCantidad').val();
  for (var i = 0; i < numCajas/2; i++) {
    var fila = [];
    for (var j = 0; j < numCajas/2; j++) {
      var valor = $('#input_'+i+'_'+j).val();
      fila.push(valor);
    }
    numeros.push(fila);
  }
  calcularDeterminante();
}

function calcularDeterminante () {
  var m = numeros;
  var n = m.length;
  for (var i = 0; i < n-1; i++) {
    if (m[i][i] == 0) {
      // Intercambiar una fila más abajo
      // Si toda la fila es 0, el determinante no existe
      // Si se intercambia con una fila de abajo se multiplica el determinante por -1
    }
    for (var k = i+1; k < n; k++) {
      for (var j = i+1; j < n; j++) {
        m[k][j] = m[k][j] - (m[k][j]*m[i][j])/m[i][i];
      }
    }
  }
  console.log(m[0][0]);
  var d = 1;  // determinante
  for (var i = 0; i < n; i++) {
    d = d * m[i][i];
  }
  console.log(d);
}

function interCambiarFila(fila) {
  for (var i = fila; i < numeros.length; i++) {
    temp = numeros[i];
    numeros[i] = numeros[i+1];
    numeros[i+1] = numeros;
  }
}
