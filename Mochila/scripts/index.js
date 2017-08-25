$(document).ready(function() {
  $("#btn_siguiente").click(function(){
    var numArticulos = $('#num_articulos').val();
    var pesoLim = $('#peso_limite').val();
    crearTabla(numArticulos, pesoLim);
  });
})

function crearTabla(numArticulos, pesoLim) {
  var divTabla = $('#tabla');
  if ($('#input_0_0').length) {
    divTabla.empty();
  }
  var tabla = '<table id="tabla_valores" class="table table-bordered table-hover table-sm"><thead class="thead-default table-active"><tr><th colspan="'+pesoLim+'">Valores</th>';
  tabla += '<th colspan="3"><button style="float:right" id="btn_procesar" type="button" class="btn btn-success">Procesar</button></th></tr>'
  tabla += '<tr><th>Peso</th><th>Valor</th><th colspan="'+pesoLim+'"></th></tr></thead><tbody>';
  for (var i = 0; i < numArticulos; i++) {
    tabla += '<tr>';
    tabla += '<td><input type="number" id="peso_"'+i+'" class="form-control col-md-6"></td>'
    tabla += '<td><input type="number" id="valor_"'+i+'" class="form-control col-md-6"></td>'
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
