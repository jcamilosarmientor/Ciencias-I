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
  for (var i = 0; i < numCajas; i++) {
    var fila = [];
    for (var j = 0; j < numCajas; j++) {
      var valor = $('#input_'+i+'_'+j).val();
      fila.push(parseInt(valor));
    }
    numeros.push(fila);
  }
  calcularDeterminante(numeros);
}

function calcularDeterminante (a) {
  n = a.length;
  signo= 1;
  for(i=0;i<n-2;i++){
    for(j=i+1; j<n; j++){
      for(k=i+1;k<n;k++){
        a[j][k]= a[j][k]-((a[i][k]*a[j][i])/(a[i][i]));
      }
    }
  }
  det=1
  for(i=0;i<n; i++){
    det= det*a[i][i];
  }
  det= det*signo;
  console.log(det);
}

function interCambiarFila(fila) {
  for (var i = fila; i < numeros.length; i++) {
    temp = numeros[i];
    numeros[i] = numeros[i+1];
    numeros[i+1] = numeros;
  }
}
