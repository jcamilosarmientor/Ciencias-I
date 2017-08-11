var app = angular.module('OrdenamientoApp', ['nvd3']);
app.controller('controller', function($scope) {
  var arr; // Arreglo a organizar
  var xs;

  var contSelection; // Contador para el número de operaciones del algorito de selección
  var contBubble; // Contador para el número de operaciones para el algoritmo burbuja

  // Organiza arr con el método de clasificación por selección
  function selectionSort( myArr ){
    var size = myArr.length;
    contSelection = 1; // slot = 0;
    for( var slot = 0; slot < size -1; slot ++ ){ // outer loop
      contSelection += 3; // slot < size -1; slot ++
      var smallest = slot;
      contSelection += 3; // smallest = slot;  check = slot + 1;
      for( var check = slot + 1; check < size; check++ ){ // inner loop
        contSelection += 3; // myArr[check] < myArr[smallest]
        if( myArr[check] < myArr[smallest] ){
          smallest = check;
          contSelection++; // smallest = check;
        }
      }
      contSelection++ // fin del cliclo interior
      contSelection += 2; // smallest != slot
      if( smallest != slot ){
        var tmpVal = myArr[smallest];
        myArr[smallest] = myArr[slot];
        myArr[slot] = tmpVal;
        contSelection += 7; // var tmpVal = myArr[smallest]; myArr[smallest] = myArr[slot]; myArr[slot] = tmpVal;
      }
    }
    contSelection ++; // Fin del cliclo exterior
    return myArr;
  }

  // Organiza arr con el método burbuja
  function bubbleSort(myArr){
    var tamanio = myArr.length;
    contBubble = 1; // pass = 1;
    for (var i = 0; i < tamanio-1; i++) {
      contBubble += 3; //i < tamanio-1; i++
      contBubble += 2; // var j = i+1
      for (var j = i+1; j < tamanio; j++) {
        contBubble += 3; // j < tamanio; j++
        contBubble += 3; // myArr[i] > myArr[j]
        if (myArr[i] > myArr[j]) {
          var temp = myArr[j];
          myArr[j] = myArr[i];
          myArr[i] = temp;
          contBubble += 7; // var temp = myArr[j]; myArr[j] = myArr[i]; myArr[i] = temp;
        }
      }
    }
    return myArr;
  }

  // Sobreescribe arr
  function generarArreglo() {
    for (var i = 20; i <= 200; i++) {
      var arr = [];
      for (var j = 0; j < i; j++) {
        var aleatorio = Math.floor((Math.random() * 100) + 1); // Genera un número aleatorio entre 1 y 100
        arr.push(aleatorio);
      }
      selectionSort(arr);
      bubbleSort(arr);
      $scope.data[0].values.push({x: i, y: contSelection});
      $scope.data[1].values.push({x: i, y: contBubble});
    }
  }

  // Muestra en el div correspondiente el arreglo ordenado
  $scope.mostrarArreglo = function() {
    generarArreglo();
    $scope.arr = arr;
    $scope.contSelection = contSelection;
    $scope.contBubble = contBubble;
  }

  $scope.options = {
    chart: {
      type: 'lineWithFocusChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 60,
        left: 40
      },

      color: d3.scale.category10().range(),
      duration: 500,
      useInteractiveGuideline: true,
      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d){
          return d3.format(',f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Y Axis',
        rotateYLabel: false
      },
      y2Axis: {
        tickFormat: function(d){
          return d3.format(',.2f')(d);
        }
      }

    }
  };

  $scope.data = [
    {
      key: "Ordenamiento por Selección",
      values: []
    },
    {
      key: "Ordenamiento Burbuja",
      values: []
    },
  ];
});
