var app = angular.module('OrdenamientoApp', ['nvd3']);
app.controller('controller', function($scope) {
  var arr; // Arreglo a organizar
  var chart;

  var contSelection, // Contador para el número de operaciones del algorito de selección
  contBubble, // Contador para el número de operaciones para el algoritmo burbuja
  contInsertion,  // Contador para el número de operaciones para el algoritmo inserción
  contMerge;  // Contaror para el número de operaciones apra el algoritmo merge


  // Ordenamiento burbula simple
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
  // Ordenamiento por selección
  function selectionSort(myArr){
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

  // Ordenamiento por inserción
  function insertionSort(myArr) {
    var tamanio = myArr.length;
    var i = tamanio/2;
    contInsertion = 1; // var i = tamanio/2;
    while (i <= tamanio) {
      var j = i - 1;
      var temp = myArr[i];
      contInsertion += 7; // (i <= n) var j = i - 1; var temp = myArr[i]; (temp < arr[j])
      while (temp < myArr[j]) {
        myArr[j+1] = myArr[j];
        j = j - 1;
        contInsertion += 7; // j+1; arr[j+1] = arr[j]; j = j - 1;
      }
      contInsertion++; // Fin del while interior
      myArr[j+1] = temp;
      i++;
      contInsertion += 6; // arr[j+1] = temp; i++;
    }
    contInsertion++; // Fin del while exterior
    return myArr;
  }

  function sort(array) {
    contMerge = 1;
    var length = array.length,
    mid    = Math.floor(length * 0.5),
    left   = array.slice(0, mid),
    right  = array.slice(mid, length);
    contMerge += 5;
    if(length === 1) {
      contMerge++;
      return array;
    }
    contMerge++;
    return conquer(sort(left), sort(right));
  }

  var conquer = function(left, right) {
    var sorted = [];
    var i = 0; //left tracker
    var j = 0; //right tracker
    contMerge += 5;
    while (i < left.length || j < right.length) {
      contMerge += 2;
      if (i < left.length && j < right.length) {
        contMerge += 3;
        if (left[i] < right[j]){
          sorted.push(left[i]);
          i++;
        } else {
          sorted.push(right[j]);
          j++;
        }
      } else if (i < left.length){
        sorted.push(left[i]);
        i++;
      } else {
        sorted.push(right[j]);
        j++;
      }
      contMerge += 3;
    }
    contMerge++;
    return sorted;
  }


  // Sobreescribe arr
  function generarArreglo() {
    $scope.data[0].values = [];
    $scope.data[1].values = [];
    $scope.data[2].values = [];
    for (var i = 20; i < 201; i++) {
      var arr = [];
      for (var j = 0; j < i; j++) {
        var aleatorio = Math.floor((Math.random() * 100) + 1); // Genera un número aleatorio entre 1 y 100
        arr.push(aleatorio);
      }
      selectionSort(arr);
      bubbleSort(arr);
      insertionSort(arr);
      sort(arr);
      $scope.data[0].values.push({x: i, y: contSelection});
      $scope.data[1].values.push({x: i, y: contBubble});
      $scope.data[2].values.push({x: i, y: contInsertion});
      $scope.data[3].values.push({x: i, y: contMerge});
    }
  }

  // Muestra en el div correspondiente el arreglo ordenado
  $scope.mostrarArreglo = function() {
    generarArreglo();
    $scope.arr = arr;
  }

  $scope.options = {
    chart: {
      type: 'lineWithFocusChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 60,
        left: 150
      },

      x: function(d){ return d.x; },

      color: d3.scale.category10().range(),
      duration: 300,
      useInteractiveGuideline: true,
      clipVoronoi: false,

      xAxis: {
        axisLabel: 'X (Nº de elementos)',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
      },

      yAxis: {
        axisLabel: 'Y (Operaciones \n elementales)',
        rotateYLabel: false,
        axisLabelDistance: -10,
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
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
    {
      key: "Ordenamiento Inserción",
      values: []
    },
    {
      key: "Ordenamiento MergeSort",
      values: []
    }
  ];
});
