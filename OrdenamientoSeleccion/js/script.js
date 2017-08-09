var app = angular.module('OrdenamientoApp');
app.controller('controller', function($scope) {

  //var arr = [1,7,3];
  $scope.arr = [1,2,3,5,0,1,8];

  var contSelection = 0;
  var contBurble = 0;

  // Organiza arr con el método de clasificación por selección
  function selectionSort( myArr ){
    var size = myArr.length;
    for( var slot = 0; slot < size -1; slot ++ ){ // outer loop
      var smallest = slot;
      for( var check = slot + 1; check < size; check++ ){ // inner loop
        if( myArr[check] < myArr[smallest] ){
          smallest = check;
        }
      }
      if( smallest != slot ){
        var tmpVal = myArr[smallest];
        myArr[smallest] = myArr[slot];
        myArr[slot] = tmpVal;
      }
    }
    return myArr;
  }

  // Organiza arr con el método burbuja
  function bubbleSort(myArr){
    var size = myArr.length;

    for( var pass = 1; pass < size; pass++ ){ // outer loop
      for( var left = 0; left < (size - pass); left++){ // inner loop
        var right = left + 1;
        if( myArr[left] > myArr[right] ){
          var tmpVal = myArr[left];
          myArr[left] = myArr[right];
          myArr[right] = tmpVal;
        }
      }
    }

    return myArr;
  }


  // Muestra en el div correspondiente el arreglo ordenado
  function mostrarArreglo() {
    selectionSort(arr);
    bubbleSort(arr);
    //var divSelection = document.getElementById("divSelection");
    //var divBubble = document.getElementById("divBubble");
    //divSelection.innerHTML = arr;
    //divBubble.innerHTML = arr;
  }

});
