
$(document).ready(function() {
  $("#btn_siguiente").click(function(){
    var numArticulos = $('#num_articulos').val();
    var pesoLim = $('#peso_limite').val();
    crearTabla(numArticulos, pesoLim);
  });
});

var pesos = [];
var valores = [];

function llenarArrelgos() {
  pesos = [];
  valores = [];
  var numArticulos = parseInt($('#num_articulos').val());
  var pesoLim = parseInt($('#peso_limite').val());
  for (var i = 0; i < numArticulos; i++) {
    valores.push(parseInt($('#valor_'+i).val()));
    pesos.push(parseInt($('#peso_'+i).val()));
  }
  insertionSort(pesos);
  var mochila = crearMatrizMochila(numArticulos, pesoLim);
  console.log(mochila);
}

function crearMatrizMochila(numArticulos, limite) {
  var matrizMochila = new Array(numArticulos+1);
  for (var i = 0; i < numArticulos+1; i++) {
    matrizMochila[i] = new Array(limite+1);
    for (var j = 0; j < limite+1; j++) {
      if (i == 0 || j == 0) {
        matrizMochila[i][j] = 0;
      }  else {
        if (j-parseInt(pesos[i-1]) < 0) {
          matrizMochila[i][j] = 0;
        } else {
          matrizMochila[i][j] = maximo(matrizMochila[i-1][j], matrizMochila[i-1][j-parseInt(pesos[i-1])]+parseInt(valores[i-1]));
        }
      }
    }
  }
  return matrizMochila;
}

function insertionSort(myArr) {
  var len = myArr.length;
  for (var i = 1; i < len; i++) {
      var tmp = myArr[i];
      for (var j = i - 1; j >= 0 && (myArr[j] > tmp); j--) {
          myArr[j + 1] = myArr[j];
      }
      myArr[j + 1] = tmp;
  }
  return myArr;
}

function maximo(valor1, valor2) {
  if (valor1 > valor2) {
    return valor1;
  } else {
    return valor2;
  }
}

function crearTabla(numArticulos, pesoLim) {
  var divTabla = $('#tabla');
  if ($('#input_0_0').length) {
    divTabla.empty();
  }
  var tabla = '<table id="tabla_valores" class="table table-bordered table-hover table-sm"><thead class="thead-default table-active"><tr><th colspan="'+pesoLim+'">Valores</th>';
  tabla += '<th colspan="3"><button style="float:right" id="btn_procesar" type="button" class="btn btn-success" onclick="llenarArrelgos()">Procesar</button></th></tr>'
  tabla += '<tr><th>Peso</th><th>Valor</th><th colspan="'+pesoLim+'"></th></tr></thead><tbody>';
  for (var i = 0; i < numArticulos; i++) {
    tabla += '<tr>';
    tabla += '<td><input type="text" id="peso_'+i+'" class="form-control col-md-6"></td>'
    tabla += '<td><input type="text" id="valor_'+i+'" class="form-control col-md-6"></td>'
    for (var j = 0; j < pesoLim; j++) {
      tabla += '<td><input type="text" id="input_'+i+'_'+j+'" class="form-control col-md-6" disabled></td>';
    }
    tabla += '</tr>';
  }
  tabla += '</tbody></table>';
  divTabla.append(tabla);
  $('#tabla_valores').hide();
  $('#tabla_valores').show(500);
}
