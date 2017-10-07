var app = angular.module('myApp', ['nvd3']);
app.controller('controller', function($scope) {
  $scope.prueba = function() {
    for (var i = 1; i <= 200; i++) {
      var arr = [];
      numOpera = 0;
      console.log(numOpera);
      arr = sort(generarArreglo());
      binarySearch(arr,5);
      console.log(numOpera);
      $scope.data[0].values.push({x: i, y: numOpera});
    }
  }

  $scope.options = {
    chart: {
      type: 'scatterChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 150
      },
      x: function(d){ return d.x; },
      y: function(d){ return d.y; },
      useInteractiveGuideline: false,
      xAxis: {
        axisLabel: 'Busquedas(X)'
      },

      yAxis: {
        axisLabel: 'Nº Operaciones (Y)',
        axisLabelDistance: 20
      }
    },
    title: {
      enable: true,
      text: 'Búsqueda binaria'
    }
  };

  $scope.data = [
    {
      key: "Busqueda binaría",
      values: []
    }
  ];

});

var numOpera; // Contador para el número de operaciones elementales

function generarArreglo() {
  var arr = [];
  for (var i = 0; i < 100; i++) {
    arr.push(Math.floor((Math.random() * 100) + 1));
  }
  return arr;
}

// Recibe un array y el elemento a Buscar. Devolverá el arreglo  si en caso
function binarySearch(array, item){
  //numOpera = 0;
  var low = 0;
  var high = array.length - 1;
  numOpera += 3;
  while(low <= high) {
    var middle = Math.floor((low + high)/2);
    var guess = array[middle];
    numOpera += 6;
    if(guess == item){
      numOpera++;
      //return numOpera
      return middle;
    }
    numOpera += 2;
    if(guess > item){
      high = middle - 1;
      numOpera += 2;
    } else {
      low = middle + 1;
      numOpera += 2;
    }
    numOpera++;
  }
  numOpera++;
  //return numOpera;
  return -1;
}

// Merge Sort
function sort(array) {
  // Contaror para el número de operaciones apra el algoritmo merge
  var length = array.length,
  mid    = Math.floor(length * 0.5),
  left   = array.slice(0, mid),
  right  = array.slice(mid, length);
  if(length === 1) {
    return array;
  }
  return conquer(sort(left), sort(right));
}
var conquer = function(left, right) {
  var sorted = [];
  var i = 0; //left tracker
  var j = 0; //right tracker
  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length) {
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
  }
  return sorted;
}
// Merge sort
