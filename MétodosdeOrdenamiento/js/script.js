var app = angular.module('OrdenamientoApp', ['nvd3']);
app.controller('controller', function($scope) {

  // Ordenamiento burbula simple
  function bubbleSort(myArr){
    var tamanio = myArr.length;
    // Contador para el número de operaciones del algoritmo burbuja
    var contBubble = 1; // pass = 1;
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
    return contBubble;
  }
  // Ordenamiento por selección
  function selectionSort(myArr){
    var size = myArr.length;
    var contSelection = 1; // Contador para el número de operaciones del algorito de selección
    for (var slot = 0; slot < size -1; slot ++) {
      contSelection += 3;
      var smallest = slot;
      contSelection += 3;
      for (var check = slot + 1; check < size; check++) {
        contSelection += 5;
        if (myArr[check] < myArr[smallest]) {
          smallest = check;
          contSelection++;
        }
      }
      contSelection += 2;
      if (smallest != slot) {
        var tmpVal = myArr[smallest];
        myArr[smallest] = myArr[slot];
        myArr[slot] = tmpVal;
        contSelection += 7;
      }
    }
    contSelection ++;
    return contSelection;
  }

  // Ordenamiento por inserción
  function insertionSort(myArr) {
    var len = myArr.length;
    var contInsetion = 1; // Contador del número de operaciones
    for (var i = 1; i < len; i++) {
        var tmp = myArr[i];
        contInsetion += 6;
        for (var j = i - 1; j >= 0 && (myArr[j] > tmp); j--) {
            myArr[j + 1] = myArr[j];
            contInsetion += 8;
        }
        myArr[j + 1] = tmp;
        contInsetion += 4;
    }
    contInsetion++;
    return contInsetion;
  }

  var contMerge; // Contaror para el número de operaciones del algoritmo merge
  function sort(array) {
    // Contaror para el número de operaciones apra el algoritmo merge
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

  var contQuick = 0; // Contador para el número de operaciones del algoritmo quick
  function quickSort(array, left, right, compare, swap) {
    contQuick++;
    if (left < right) {
      contQuick += 2;
      var pivot = partitionRandom(array, left, right, compare, swap);
      quickSort(array, left, pivot - 1, compare, swap);
      quickSort(array, pivot + 1, right, compare, swap);
      contQuick += 4;
    }
    return array;
  }

  function partitionRandom(array, left, right, compare, swap) {
    var pivot = left + Math.floor(Math.random() * (right - left));
    contQuick += 5;
    if (pivot !== right) {
      swap(array, right, pivot);
      contQuick++;
    }
    contQuick++;
    return partitionRight(array, left, right, compare, swap);
  }

  function partitionRight(array, left, right, compare, swap) {
    var mid = left;
    contQuick += 2;
    for (var i = mid; i < right; i++) {
      contQuick += 4;
      if (compare(array, i, right) <= 0) {
        contQuick++;
        if (i !== mid) {
          contQuick++;
          swap(array, i, mid);
        }
        mid++;
        contQuick++;
      }
    }
    contQuick++;
    if (right !== mid) {
      contQuick++;
      swap(array, right, mid);
    }
    return mid;
  }


  // Sobreescribe arr
  function generarArreglo() {
    $scope.data[0].values = [];
    $scope.data[1].values = [];
    $scope.data[2].values = [];
    $scope.data[3].values = [];
    for (var i = 20; i < 201; i++) {
      var arrB = [],
      arrS = [],
      arrI = [],
      arrM = [];
      arrQ = [];
      for (var j = 0; j < i; j++) {
        var aleatorio = Math.floor((Math.random() * 200) + 1); // Genera un número aleatorio entre 1 y 100
        arrB.push(aleatorio);
        arrS.push(aleatorio);
        arrI.push(aleatorio);
        arrM.push(aleatorio);
        arrQ.push(aleatorio);
      }
      sort(arrM);
      quickSort(arrQ);
      $scope.data[0].values.push({x: i, y: bubbleSort(arrB)});
      $scope.data[1].values.push({x: i, y: selectionSort(arrS)});
      $scope.data[2].values.push({x: i, y: insertionSort(arrI)});
      $scope.data[3].values.push({x: i, y: contMerge});
      $scope.data[4].values.push({x: i, y: contQuick});
    }
  }

  // Muestra en el div correspondiente el arreglo ordenado
  $scope.mostrarArreglo = function() {
    generarArreglo();
  }

  $scope.options = {
    chart: {
      type: 'lineChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 90
      },
      x: function(d){ return d.x; },
      y: function(d){ return d.y; },
      useInteractiveGuideline: true,
      xAxis: {
        axisLabel: 'Tamaño Arreglo (X)'
      },
      yAxis: {
        axisLabel: 'Nº Operaciones (Y)',
        tickFormat: function(d){
          return d3.format('.f')(d);
        },
        axisLabelDistance: 20
      },
    },
    title: {
      enable: true,
      text: 'Tabla de comparación entre los algoritmos de ordenamiento'
    }
  };

  $scope.data = [
    {
      key: 'Burbuja',
      values: [],
      color: '#00FF00'
    },
    {
      key: 'Selección',
      values: [],
      color: '#FA58D0'
    },
    {
      key: 'Inserción',
      values: [],
      color: '#2E2EFE'
    },
    {
      key: 'MergeSort',
      values: [],
      color: '#B40431'
    },
    {
      key: 'QuickSort',
      values: [],
      color: '#585858'
    }
  ];
});
