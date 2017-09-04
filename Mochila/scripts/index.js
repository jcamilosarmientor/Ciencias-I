
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
  llenarTabla(mochila);
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
          matrizMochila[i][j] = matrizMochila[i-1][j];
        } else {
          matrizMochila[i][j] = maximo(matrizMochila[i-1][j], matrizMochila[i-1][j-parseInt(pesos[i-1])]+parseInt(valores[i-1]));
        }
      }
    }
  }
  return matrizMochila;
}

function llenarTabla(matrizMochila) {
  for (var i = 1; i < matrizMochila.length; i++) {
    for (var j = 1; j < matrizMochila[i].length; j++) {
      $('#input_'+i+'_'+j).val(matrizMochila[i][j]);
      $('#result_'+i+'_'+j).append(componerArticulos(matrizMochila[i][j]));
    }
  }
}

function componerArticulos(valor) {
  var temp = valores[0];
  var composicion = [[1,temp]];
  saltar = 1;
  var cont = 0;
  while (cont < valores.length) {
    if (valor === 0) {
      composicion = [[0,0]];
      break;
    }
    if (valores[cont] === valor)  {
      composicion = [[(cont+1),valores[cont]]];
      break;
    }

    if ((temp+valores[cont+1]) <= valor) {
      temp += valores[cont+1];
      composicion.push([(cont+2),valores[cont+1]]);
      cont++;
    } else {
      if (temp === valor) {
        break;
      } else {
        temp = valores[0];
        composicion = [[1,temp]];
        cont = saltar;
        saltar++;
      }
    }
  }
  var txt = crearTxt(composicion);
  return txt;
}


function crearTxt(arrCompo) {
  var txt = '';
  for (var i = 0; i < arrCompo.length; i++) {
    if (txt.length > 0) {
      txt += '<small>+</small>'
    }
    txt += '<b style="color:green;">'+arrCompo[i][1]+'</b>:<b>'+arrCompo[i][0]+'</b>';
  }
  return txt;
}

function binarySearch(valor) {
  var low = 0;
  var high = valores.length - 1;
  while (low <= high) {
    var middle = Math.floor((low + high)/2);
    var guess = valores[middle];
    if (guess == valor) {
      return [(valores.indexOf(guess)+1), guess]
    }
    if (guess > valor) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
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
      tabla += '<td><div id="result_'+(i+1)+'_'+(j+1)+'"><input type="text" id="input_'+(i+1)+'_'+(j+1)+'" class="form-control col-md-12" disabled></td>';
    }
    tabla += '</tr>';
  }
  tabla += '</tbody></table>';
  divTabla.append(tabla);
  $('#tabla_valores').hide();
  $('#tabla_valores').show(500);
}
