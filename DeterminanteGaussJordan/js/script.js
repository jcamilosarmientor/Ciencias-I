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
  $('#determinante').html(determinante(numeros));
}

function determinante(matriz) {
  if(matriz.length==2){
    var det=(matriz[0][0]*matriz[1][1])-(matriz[1][0]*matriz[0][1]);
    return det;
  }
  var suma = 0;
  for(var i = 0; i<matriz.length; i++){
    var nm = createMatriz(matriz.length-1);
    for(var j=0; j<matriz.length; j++){
      if(j!=i){
        for(var k=1; k<matriz.length; k++){
          var indice=-1;
          if(j<i)
          indice=j;
          else if(j>i)
          indice=j-1;
          nm[indice][k-1] = matriz[j][k];
        }
      }
    }
    if(i%2==0){
      suma += matriz[i][0] * determinante(nm);
    }
    else{
      suma -= matriz[i][0] * determinante(nm);
    }
  }
  return suma;
}

function createMatriz(size){
  var matriz = new Array(size);
  for (i = 0; i < size ; i++){
    matriz[i]=new Array(size);
  }
  return matriz;
}
