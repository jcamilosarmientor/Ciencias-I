var arr = [1,7,3];
//var arr = [1,2,3,5,0,1,8];

// Organiza arr con el método de clasificación por selección
function ordenarArreglo() {
  var v = 0;  // Valor
  var p = 0;  // Posición
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if(arr[i+2] > arr[j]) {
        console.log(arr[i+1] +">"+ arr[j]);
        v = arr[j];
        p = j;
      } else {
        p = i;
        v = arr[i];
      }
    }
    arr[p] = arr[i];
    arr[i] = v;
  }
}

// Muestra en el div correspondiente el arreglo ordenado
function mostrarArreglo() {
  ordenarArreglo();
  var cajaArr = document.getElementById("divArr");
  divArr.innerHTML = arr;
}
