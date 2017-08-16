function calcularDeterminante (m) {
  var n = m.length;
  for (var i = 0; i < n-1; i++) {
    if (m[i][i] == 0) {
      // Intercambiar una fila más abajo
      // Si toda la fila es 0, el determinante no existe
      // Si se intercambia con una fila de abajo se multiplica el determinante por -1
    }
    for (var j = i+1; i < n; i++) {
      for (var k = j+1; i < n; i++) {
        m[j][k] = m[j][k]-(m[k][i]*m[i][j])/m[i][j];
      }
    }
  }
  var d = 1;  // determinante
  for (var i = 0; i < n; i++) {
    d = d * m[i][i];
  }
}
