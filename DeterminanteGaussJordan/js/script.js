function generarMatriz() {
	const n = parseInt(document.getElementById("entradaN").value);
	const container = document.getElementById("container");
	const divBotonSol = document.getElementById("botonSolucion");

	for (i = 1; i <= n; i++) {
		for (j = 1; j <= n; j++) {
			var input = document.createElement("input");
			input.id = "input" + i + "-" + j;
			container.insertBefore(input,divBotonSol);
		}
		var salto = document.createElement("br");
		container.insertBefore(salto,divBotonSol);
	}
	document.getElementById("btnSol").style.display = "inline";
}

function llenarSolucionar(){
	var cont = 0;
	var sign = 1;
	var det = 1;
	const n = parseInt(document.getElementById("entradaN").value);
	var matriz = new Array(n);
	for(i=0; i<n; i++){
		matriz[i] = new Array(n);
	}

	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			var input = "input" + (i+1) + "-" + (j+1);
			console.log(input);
			matriz[i][j] = parseInt(document.getElementById(input).value);
			console.log(matriz[i][j]);
		}
	}

	cont = 1;
	for (i = 0; i < (n-1); i++){
		cont = cont+6;
		if(matriz[i][i]==0){
			cont = cont +2;
			for (h=i+1; h < n; h++) {
				cont = cont+5;
				if(matriz[h][i]!=0){
					cont = cont+3;
					sign = sign*(-1);
					for (ch =0; ch<n; ch++) {
						cont = cont+13;
						var temp = matriz[h][ch];
						matriz[h][ch] = matriz[i][ch];
						matriz[i][ch] = temp;
					}
					h = n-1;
					cont = cont+1;
				}
			}
			cont = cont+1;
		}
		cont = cont+2;
		for (k = (i + 1); k < n; k++) {
			cont = cont+4;
			for (j = (i + 1); j < n; j++) {
				cont = cont+16;
				matriz[k][j] = matriz[k][j] - (matriz[k][i] * matriz[i][j]) / matriz[i][i];
			}
		}
	}
	cont = cont+2;


	for(i=0; i<n; i++){
		det = det*matriz[i][i];
	}

	var a = (Math.pow(n,2)*(n-1))-(n*(n-2)*(n-1))-((2*n)*(n-1))+(((n-2)*(n-1)*((2*n)-3))/6)+((n-2)*(n-1))+(n-1);
	var b = (n*(n-1))-(n-1)-(((n-2)*(n-1))/2);
	var formula = (16*a)+(5*b)+(6*(n-2))+3;

	det=det*sign;

	mostrarEnPantalla(cont, matriz, det, formula);
}

function mostrarEnPantalla(cont, matrizReducida, det, form){
	const container = document.getElementById("contenedorSol");
	var matriz = document.createElement("div");
	var contDiv = document.createElement("div");
	var formDiv = document.createElement("div");
	var detDiv = document.createElement("div");
	var datos = "matriz reducida <br>";

	matriz.style.display = "inline-block";
	matriz.style.margin = "1em"
	matriz.id = "divMatrizRedu";
	contDiv.style.display = "inline-block";
	contDiv.style.margin = "1em"
	contDiv.id = "divCont"
	formDiv.style.display = "inline-block";
	formDiv.style.margin = "1em"
	formDiv.id = "diForm"
	detDiv.style.display = "inline-block";
	detDiv.style.margin = "1em"
	detDiv.id = "divDet"

	/*for (i=0; i<matrizReducida.length; i++){
		for (j=0; j<matrizReducida.length; j++){
			datos = datos + " " + matrizReducida[i][j]
			console.log((i+1) + "-" + (j+1));
			console.log(matrizReducida[i][j]);
			matriz.innerHTML = datos;
		}
		datos = datos + "<br>";
	}*/

	if(isNaN(det)){
		det = "No existe el determinante";
		contDiv.innerHTML = "<h5>Operaciones elementales por contador: </h5>" + cont;
		formDiv.innerHTML = "<h5>Operaciones elementales por formula: </h5>" + form;
		detDiv.innerHTML = "<h5>Determinante de la matriz: </h5>" + det;

		container.appendChild(contDiv);
		container.appendChild(formDiv);
		container.appendChild(detDiv);

	}else{
		container.appendChild(matriz);
		contDiv.innerHTML = "<h5>Operaciones elementales por contador: </h5>" + cont;
		formDiv.innerHTML = "<h5>Operaciones elementales por formula: </h5>" + form;
		detDiv.innerHTML = "<h5>Determinante de la matriz: </h5>" + det;

		container.appendChild(contDiv);
		container.appendChild(formDiv);
		container.appendChild(detDiv);
	}



}
