function nuevoAjax(){ var xmlhttp=false; try {  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); }  catch (e) {  try {   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  } catch (E) {   xmlhttp = false;  } } if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  xmlhttp = new XMLHttpRequest(); } return xmlhttp;}function validarnum(cp, respet) { if(cp.length==0) {  respet.innerHTML="Error en datos";  return -1; } for(i1=0;i1 < cp.length;i1++) {  if( (cp.charAt(i1)<'0' || cp.charAt(i1)>'9') &&   cp.charAt(i1)!='-') {   respet.innerHTML="Dato invalido";   return -1;
  } } return 1;}function generarAleatorios(){ var i1,i,nll1;  var nll=document.getElementById('nllaves').value; if(nll.length==0) {  nll="0"; } for(i1=0;i1 < nll.length;i1++) {  if( (nll.charAt(i1)<'0' || nll.charAt(i1)>'9') ) {   nll.innerHTML="Dato invalido";
   return -1;  } } nll1=Number(nll); if(nll1> 50){  nll.innerHTML="M&#225;ximo 50 numeros aleatorios";  return; } var i,cad=""; for(i=0;i < nll1;i++) {  ale=Math.floor(Math.random()*200);  cad=cad+ale;  if (i+1<nll1) {   cad=cad+",";
  } } var ponerum=document.getElementById('llavesA'); ponerum.value=cad; // no es div, es <input>
}function validar3(cp, respet) { if(cp.length==0) {  respet.innerHTML="Error en datos";  return -1; } for(i1=0;i1 < cp.length;i1++) {  if( (cp.charAt(i1)<'0' || cp.charAt(i1)>'9') &&   cp.charAt(i1)!='-') {   respet.innerHTML="Dato invalido";
   return -1;  } } return 1;}//////
var arrMonedas=null;var nVueltas1=0;var ordenMonedas=0;var maGauss=null;var orden=0;var fi_orden=0;var col_orden=0;var ordenArticulos;
var nPeso1;


function f_determinante()
  {
    respe1 = document.getElementById('pvgauss');
    respe1.innerHTML="";
    respet=document.getElementById("resultIdetermi1f");
    maGauss = new Array(orden*orden+1);//orden
    ele=0;
    maGauss[ele] = orden;
    if(validar3(orden, respet)==-1) {
      return;
    }
    ele++;
    for(i=0;i < orden;i++) {
      for(j=0;j < orden;j++) {
        nombre="x"+i+j;
        cp = document.getElementById(nombre).value;
        if(validar3(cp, respet)==-1) {
          return;
        }
        maGauss[ele] = Number( cp );
        ele++;
      }
    }
    xhr = nuevoAjax();
    xhr.open("POST","formulaDetermi11.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState==4) {
        respet.innerHTML = xhr.responseText;
      }
    };
    xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); /////////////////////////dt1=datos.join("&");
    dato=maGauss.join(",");
    xhr.send("formula="+dato);
  }

  function f_Escalonada () {
    respe1 = document.getElementById('pvescalonar');
    respe1.innerHTML="";    
    respet=document.getElementById("resultEscalonada");
    var maEscalonada = new Array(fi_orden*col_orden+2);//filas y col
    //alert("1"+fi_orden+" "+col_orden);
    ele=0;
    maEscalonada[ele] = fi_orden;
    ele++;
    maEscalonada[ele] = col_orden;
    if(validar3(fi_orden, respet)==-1)
    {
      return;
    }
    if (validar3(col_orden, respet)==-1)
    {
      return;
    }
    ele++; //alert("2");
    for(i=0;i < fi_orden;i++) {
      for(j=0;j < col_orden;j++) {
        nombre="x"+i+j;
        cp = document.getElementById(nombre).value;
        if(validar3(cp, respet)==-1) {
          return;
        }
        maEscalonada[ele] = Number( cp );
        ele++;
      }
    } //alert("3");
    xhr = nuevoAjax();
    xhr.open("POST","escalonar1.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState==4) {
        respet.innerHTML = xhr.responseText;
      }
    };
    xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); /////////////////////////dt1=datos.join("&");
    dato=maEscalonada.join(",");
    xhr.send("escalonada="+dato);
  }

  function f_armarFibonacci(){ nTermino=document.getElementById("terFibo").value; respet=document.getElementById("resultFibo");
 for(i=0;i<nTermino.length;i++){  if(nTermino.charAt(i)<'0' || nTermino.charAt(i)>'9') {   respet.innerHTML = "Error en datos";   return;  } } nTermino=Number(nTermino);  xhr = nuevoAjax(); xhr.open("POST","dibarboFibo.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  }
 }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr.send("fibo1nacci="+nTermino);}function f_armarMatriz() { respe1 = document.getElementById('pvgauss'); respe1.innerHTML=""; var mytable5 = document.getElementById('tablaGauss'); filaT = mytable5.rows.length; for (i=0;i<filaT; i++) {  firstRow = mytable5.rows[i];  mytable5.deleteRow(firstRow); }
    orden=document.getElementById('oMTDetermi').value;
    respet=document.getElementById("resultIdetermi1f"); if(orden.length==0) {  respet.innerHTML = "Dato invalido";  return; } for(i=0;i < orden.length;i++) {  if(orden.charAt(i)<'0' || orden.charAt(i)>'9') {   respet.innerHTML="Dato invalido";   return;  } } respet.innerHTML=""; var tabla = document.getElementById("tablaGauss");
 orden = Number(orden); for(i=0;i < orden;i++) {  var nuevaFila = tabla.insertRow(-1);  for(j=0;j < orden;j++) {   nombre="x"+i+j;   var celda = nuevaFila.insertCell(-1);   xx1 = "<input type=\"text\" id=";   xx1 = xx1 + "\""+nombre+"\"";   xx1 = xx1 + " size=3>\n";   celda.innerHTML = xx1;  } }}function f_armarMatrizEscalonada() {
 respe1 = document.getElementById('pvescalonar'); respe1.innerHTML=""; var mytable5 = document.getElementById('tablaEscalonar'); filaT = mytable5.rows.length; for (i=0;i<filaT; i++) {  firstRow = mytable5.rows[i];  mytable5.deleteRow(firstRow); }    fi_orden=document.getElementById('fi_escalonada').value;    col_orden=document.getElementById('col_escalonada').value; respet=document.getElementById("resultEscalonada");//resultEscalonada
 if(fi_orden.length==0) {  respet.innerHTML = "No. de Filas invalidas";  return;
 } if(col_orden.length==0) {  respet.innerHTML = "No. de Columnas invalidas";  return; } for(i=0;i < fi_orden.length;i++) {  if(fi_orden.charAt(i)<'0' || fi_orden.charAt(i)>'9') {   respet.innerHTML="Dato invalido. Filas";   return;  } } for(i=0;i < col_orden.length;i++) {  if(col_orden.charAt(i)<'0' || col_orden.charAt(i)>'9') {   respet.innerHTML="Dato invalido. Columnas";
   return;  } } respet.innerHTML=""; var tabla = document.getElementById("tablaEscalonar"); fi_orden = Number(fi_orden); col_orden = Number(col_orden); for(i=0;i < fi_orden;i++) {  var nuevaFila = tabla.insertRow(-1);  for(j=0;j < col_orden;j++) {   nombre="x"+i+j;   var celda = nuevaFila.insertCell(-1);   xx1 = "<input type=\"text\" id=";   xx1 = xx1 + "\""+nombre+"\"";
   xx1 = xx1 + " size=3>\n";   celda.innerHTML = xx1;  } }}function f_armarMonedas() { var mytable5 = document.getElementById('tablaMonedas'); filaT = mytable5.rows.length; for (i=0;i<filaT; i++) {  firstRow = mytable5.rows[i];  mytable5.deleteRow(firstRow); }    ordenMonedas=document.getElementById('nMonedas').value; nVueltas1=document.getElementById('nVueltas').value;
 respet=document.getElementById("resultMonedas"); if(nVueltas1.length==0 || ordenMonedas.length==0) {  respet.innerHTML = "Dato invalido";  return; } for(i=0;i < ordenMonedas.length;i++) {  if(ordenMonedas.charAt(i)<'0' || ordenMonedas.charAt(i)>'9') {   respet.innerHTML="Dato invalido en orden de monedas";   return;  } } for(i=0;i < nVueltas1.length;i++) {  if(nVueltas1.charAt(i)<'0' || nVueltas1.charAt(i)>'9') {   respet.innerHTML="Dato invalido en el valor de las vueltas";
   return;  } } ordenMonedas = Number(ordenMonedas); nVueltas1 = Number(nVueltas1); if(nVueltas1  < 1 || nVueltas1 > 30) {  respet.innerHTML="Acepta un m&#225;ximo valor de $30 de vueltas";  return; } respet.innerHTML=""; var tabla = document.getElementById("tablaMonedas"); for(i=0;i < 1;i++) {  var nuevaFila = tabla.insertRow(-1);  for(j=0;j < ordenMonedas;j++) {
   nombre="x"+i+j;   var celda = nuevaFila.insertCell(-1);   xx1 = "<input type=\"text\" id=";   xx1 = xx1 + "\""+nombre+"\"";   xx1 = xx1 + " size=3>\n";   celda.innerHTML = xx1;  } }}function f_armarMochila() { var mytable5 = document.getElementById('tablaPesos'); var mytable6 = document.getElementById('tablaValores'); filaT = mytable5.rows.length; for (i=0;i<filaT; i++) {
  firstRow = mytable5.rows[i];  mytable5.deleteRow(firstRow); } filaT = mytable6.rows.length; for (i=0;i<filaT; i++) {  firstRow = mytable6.rows[i];  mytable6.deleteRow(firstRow); }    ordenArticulos=document.getElementById('nArticulos').value; nPeso1=document.getElementById('nPeso').value; respet=document.getElementById("resultMochila"); if(nPeso1.length==0 || ordenArticulos.length==0) {  respet.innerHTML = "Dato invalido";  return;
 } for(i=0;i < ordenArticulos.length;i++) {  if(ordenArticulos.charAt(i)<'0' || ordenArticulos.charAt(i)>'9') {   respet.innerHTML="Dato invalido en orden de Articulos";   return;  } } for(i=0;i < nPeso1.length;i++) {  if(nPeso1.charAt(i)<'0' || nPeso1.charAt(i)>'9') {   respet.innerHTML="Dato invalido en el valor del peso.";   return;  } } ordenArticulos = Number(ordenArticulos);
 nPeso1 = Number(nPeso1); if(nPeso1  < 1 || nPeso1 > 30) {  respet.innerHTML="Acepta un peso m&#225;ximo de 30 unidades";  return; } if(ordenArticulos  < 1 || ordenArticulos > 8) {  respet.innerHTML="Acepta m&#225;ximo 8 articulos.";  return; } respet.innerHTML=""; var tabla = document.getElementById("tablaPesos"); for(i=0;i < 1;i++) {  var nuevaFila = tabla.insertRow(-1);  for(j=0;j < ordenArticulos;j++) {
   nombre="Peso"+i+j;   var celda = nuevaFila.insertCell(-1);   xx1 = "<input type=\"text\" id=";   xx1 = xx1 + "\""+nombre+"\"";   xx1 = xx1 + " size=3>\n";   celda.innerHTML = xx1;  } } var tabla1 = document.getElementById("tablaValores"); for(i=0;i < 1;i++) {  var nuevaFila = tabla1.insertRow(-1);  for(j=0;j < ordenArticulos;j++) {   nombre="Valo"+i+j;   var celda = nuevaFila.insertCell(-1);
   xx1 = "<input type=\"text\" id=";   xx1 = xx1 + "\""+nombre+"\"";   xx1 = xx1 + " size=3>\n";   celda.innerHTML = xx1;  } }}/*<!-- ******el problema de La mochila. programacion dinamica. --><table cellspacing=0 cellpadding=3 bordercolor=red border=1><caption><span class="letra1">El problema de la mochila con Programaci&#243;n din&#225;mica.</span></caption><tr><td  colspan=2>Peso limite</td><td><input type="text" size=3 id="nPeso"></td>
</tr><tr><td>N&#250;mero de articulos</td><td><input type="text"  size=3 id="nArticulos"></td><td><input type="button" value="Abrir campos"  onclick="f_armarMochila();"></td></tr><tr><td  colspan=2>Digite Pesos</td><td><table id="tablaPesos" cellpadding=3 cellspacing=0 border=0></table></td></tr>
<tr><td  colspan=2>Digite Valores</td><td><table id="tablaValores" cellpadding=3 cellspacing=0 border=0></table></td></tr><tr><td colspan=3><input type="button"     value="Procesar sin sub-dividir articulos" id="porMochila" onclick="f_mochila();"></td><tr >
<td colspan=3><div style="border-width:1;border-color:read;" id="resultMochila">?</div></td></tr></table></center><br>*/function f_monedas(){    respet=document.getElementById("resultMonedas"); arrMonedas = new Array(1 * ordenMonedas + 1);//orden
 ele=0; arrMonedas[ele] = ordenMonedas; if(validar3(ordenMonedas, respet)==-1) {
  return; } ele++; for(i=0;i < 1;i++) {  for(j=0;j < ordenMonedas;j++) {   nombre="x"+i+j;   cp = document.getElementById(nombre).value;   if(validar3(cp, respet)==-1) {    return;   }   arrMonedas[ele] = Number( cp );   ele++;  } }
 nVueltas1=document.getElementById('nVueltas').value; if(validar3(nVueltas1, respet)==-1) {  return; } nVueltas1 = Number(nVueltas1); xhr = nuevoAjax(); xhr.open("POST","monedas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded");
 /////////////////////////dt1=datos.join("&");
 dato=arrMonedas.join(","); xhr.send("formulaMonedas="+dato+"&"+"vueltas="+nVueltas1);}function f_mochila(){    respet=document.getElementById("resultMochila"); arrMochilaPe = new Array(1 * ordenArticulos + 1);//orden
 ele=0; arrMochilaPe[ele] = ordenArticulos; if(validar3(ordenArticulos, respet)==-1) {  return; } ele++; for(i=0;i < 1;i++) {
  for(j=0;j < ordenArticulos;j++) {   nombre="Peso"+i+j;   cp = document.getElementById(nombre).value;   if(validar3(cp, respet)==-1) {    return;   }   arrMochilaPe[ele] = Number( cp );   ele++;  } } /////
 arrMochilaVa = new Array(1 * ordenArticulos + 1);//orden
 ele=0; for(i=0;i < 1;i++) {
  for(j=0;j < ordenArticulos;j++) {   nombre="Valo"+i+j;   cp = document.getElementById(nombre).value;   if(validar3(cp, respet)==-1) {    return;   }   arrMochilaVa[ele] = Number( cp );   ele++;  } } nPeso1=document.getElementById('nPeso').value; if(validar3(nPeso1, respet)==-1) {  return; }
  nPeso1 = Number(nPeso1); xhr = nuevoAjax(); xhr.open("POST","mochila2.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); /////////////////////////dt1=datos.join("&");
 dato=arrMochilaPe.join(","); //dato[0]=numero de articulos
 dato1=arrMochilaVa.join(",");
 xhr.send("limite="+nPeso1+"&"+"Pesos="+dato+  "&"+"Valores="+dato1);}function verCodigo1(){ borre=document.getElementById("claveDetermi"); claves=borre.value; borre.value=""; respet = document.getElementById('pvgauss'); if(claves.length==0) {  respet.innerHTML = "Digite clave.";  return; }
  xhr = nuevoAjax(); xhr.open("POST","formulaDetermi11.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr.send("formula="+claves);  }/// fin determinante
function f1Iburbuja(){
 N=document.getElementById("datoiburbuja").value; respet = document.getElementById('resultIburbujaf'); if(N.length==0) {  respet.innerHTML = "Dato invalido";  return; } xhr = nuevoAjax();  xhr.open("POST","formulaBurbuja1.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } };
 xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr.send("formula="+N);  }function verIburbuja(){ borre=document.getElementById("clave"); claves=borre.value; borre.value=""; respet = document.getElementById('resultIburbujaf'); if(claves.length==0) {  respet.innerHTML = "Digite clave.";  return; }
  xhr = nuevoAjax(); respet = document.getElementById('resultIburbujaf'); xhr.open("POST","formulaBurbuja1.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr.send("formula="+claves);  }
function f2Iburbuja(){ x=document.getElementById("resultIburbujac"); N=document.getElementById("datoiburbuja").value; if(N.length==0) {  x.innerHTML = "Dato invalido";  return; } for(i=0;i < N.length;i++) {  if(N.charAt(i)<'0' || N.charAt(i)>'9') {   x.innerHTML="Dato invalido";   return;  } } N=Number(N);
 c=1; for(i=0;i < N-1; i++) {  c+=5;  for(j=i+1;j < N; j++) {   c+=2;   c+=10;  }  c+=1; } c+=2; x.innerHTML=c;}/////// f i n  burbuja

function seleccion() { xhr = nuevoAjax(); respet = document.getElementById('respseleccion'); xhr.open("POST","calETemp.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = armarDatos(2,"seleccion");   xhr.send(datos);}
function tarea1() { xhr = nuevoAjax(); respet = document.getElementById('resptarea1'); palCla = document.getElementById('palclave').value; xhr.open("POST","tarea1.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr.send("dato="+palCla);
}function tarea1Esc() { xhr = nuevoAjax(); respet = document.getElementById('resptarea1'); xhr.open("POST","tarea1Esc.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr.send(null);}
function calETemp() { xhr = nuevoAjax(); respet = document.getElementById('respfact'); xhr.open("POST","calETemp.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = armarDatos(0,"efact");   xhr.send(datos);}
function burbuja() { xhr = nuevoAjax(); respet = document.getElementById('respburbuja'); xhr.open("POST","calETemp.php", true); xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded");  datos = new Array();
 todo = "cual="; todo = todo+"burbuja"; datos.push(todo); controles = document.forms[1].elements; todo = "valorN2="; valor = controles[0].value;  todo = todo+valor; ///alert(""+todo);
 ///return;
 datos.push(todo); opcion2= fburbuja.burbu3[0].checked;
 opcion3= fburbuja.burbu3[1].checked; todo = "burbu1="; if(opcion2==true) {  todo = todo + "mc"; } else if(opcion3=true) {  todo = todo + "cm"; } datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}
function insercion() { xhr = nuevoAjax(); respet = document.getElementById('respinsercion'); xhr.open("POST","calETemp.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = armarDatos(3,"insercion");   xhr.send(datos);}
function quicksort() { xhr = nuevoAjax(); respet = document.getElementById('respquicksort'); xhr.open("POST","calETemp.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = armarDatos(4,"quicksort");   xhr.send(datos);
}function mergesort() { xhr = nuevoAjax(); respet = document.getElementById('respmergesort'); xhr.open("POST","calETemp.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded");
 datos = armarDatos(5,"mergesort");   xhr.send(datos);}function comparaMetodos() { xhr = nuevoAjax(); respet = document.getElementById('graphicsCompara'); xhr.open("POST","graficaCompara.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } };
 xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); fechax=new Date(); xhr.send("fecha="+fechax.getTime());}function busquedabin() { xhr = nuevoAjax(); respet = document.getElementById('respbusquedabin'); xhr.open("POST","calETemp.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } };
 xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = armarDatos(6,"busquedabin");   xhr.send(datos);}function cOmicron() { xhr = nuevoAjax(); respet = document.getElementById('respOmicron'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  }
 }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"omicron"; datos.push(todo); controles = document.forms[7].elements; opcion1= fomicron.omicron1[0].checked; opcion2= fomicron.omicron1[1].checked; opcion3= fomicron.omicron1[2].checked; opcion4= fomicron.omicron1[3].checked;
 todo = "omicron1="; if(opcion1==true) {  todo = todo + "ej1"; } else if(opcion2==true) {  todo = todo + "ej2"; } else if(opcion3==true) {  todo = todo + "ej3"; } else if(opcion4==true) {  todo = todo + "ej4"; } datos.push(todo);
 todo = "valorN8="; valor = controles[4].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[5].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}
function cPropi1() { xhr = nuevoAjax(); respet = document.getElementById('respPropi1'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"propiedad1";
 datos.push(todo); controles = document.forms[8].elements; opcion1= fpropi1.propieda1[0].checked; opcion2= fpropi1.propieda1[1].checked;  todo = "omicron1="; if(opcion1==true) {  todo = todo + "ej1"; } else if(opcion2==true) {  todo = todo + "ej2";
 } datos.push(todo); todo = "valorN8="; valor = controles[2].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[3].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&");
 xhr.send( dt1 );}function cPropi2() { xhr = nuevoAjax(); respet = document.getElementById('respPropi2'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array();
 todo = "cual="; todo = todo+"propiedad2"; datos.push(todo); controles = document.forms[9].elements; todo = "omicron1="; todo = todo + "ej1"; datos.push(todo); todo = "valorN8="; valor = controles[0].value; todo = todo+valor; datos.push(todo);
 todo = "valorC8="; valor = controles[1].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}function cPropi3() { xhr = nuevoAjax(); respet = document.getElementById('respPropi3'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {
   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"propiedad3"; datos.push(todo); controles = document.forms[10].elements; todo = "omicron1="; todo = todo + "ej1"; datos.push(todo);
 todo = "valorN8="; valor = controles[0].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[1].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}
function cPropi4() { xhr = nuevoAjax(); respet = document.getElementById('respPropi4'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"propiedad4";
 datos.push(todo); controles = document.forms[11].elements; todo = "omicron1="; todo = todo + "ej1"; datos.push(todo); todo = "valorN8="; valor = controles[0].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[1].value;
 todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}function cPropi5() { xhr = nuevoAjax(); respet = document.getElementById('respPropi5'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  }
 }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"propiedad5"; datos.push(todo); controles = document.forms[12].elements; todo = "omicron1="; todo = todo + "ej1"; datos.push(todo); todo = "valorN8=";
 valor = controles[0].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[1].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}function cPropi6() { xhr = nuevoAjax();
 respet = document.getElementById('respPropi6'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"propiedad6"; datos.push(todo);
 controles = document.forms[13].elements; todo = "omicron1="; todo = todo + "ej1"; datos.push(todo); todo = "valorN8="; valor = controles[0].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[1].value; todo = todo+valor; datos.push(todo);
 dt1=datos.join("&"); xhr.send( dt1 );}function cPropi6a() { xhr = nuevoAjax(); respet = document.getElementById('respPropi6a'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",
  "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"propiedad6a"; datos.push(todo); controles = document.forms[14].elements; todo = "omicron1="; todo = todo + "ej1"; datos.push(todo); todo = "valorN8="; valor = controles[0].value;
 todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[1].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}function cTheta() { xhr = nuevoAjax(); respet = document.getElementById('respTheta');
 xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"theta"; datos.push(todo); controles = document.forms[15].elements;
 todo = "valorN8="; valor = controles[0].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[1].value; todo = todo+valor; datos.push(todo); todo = "valorD8="; valor = controles[2].value;
 todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}function protheta1() { xhr = nuevoAjax(); respet = document.getElementById('rThetap1'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  }
 }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"thetap1"; datos.push(todo); controles = document.forms[16].elements; todo = "valorN8="; valor = controles[0].value; todo = todo+valor;
 datos.push(todo); todo = "valorC8="; valor = controles[1].value; todo = todo+valor; datos.push(todo); todo = "valorD8="; valor = controles[2].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );
}function protheta2() { xhr = nuevoAjax(); respet = document.getElementById('rThetap2'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual=";
 todo = todo+"thetap2"; datos.push(todo); controles = document.forms[17].elements; b1= fprotheta2.prop2[0].checked; b2= fprotheta2.prop2[1].checked; b3= fprotheta2.prop2[2].checked; todo = "opcion="; if(b1==true) {  todo = todo+"ej1"; } else if(b2==true) {  todo = todo+"ej2"; }
 else if(b3==true)   todo = todo+"ej3"; datos.push(todo); todo = "valorN8="; valor = controles[3].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[4].value; todo = todo+valor; datos.push(todo);
 todo = "valorD8="; valor = controles[5].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}function protheta3() { xhr = nuevoAjax(); respet = document.getElementById('rThetap3'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {
  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array(); todo = "cual="; todo = todo+"thetap3"; datos.push(todo); controles = document.forms[18].elements; b1= fprotheta3.prop3[0].checked; b2= fprotheta3.prop3[1].checked;
 b3= fprotheta3.prop3[2].checked; todo = "opcion="; if(b1==true) {  todo = todo+"ej1"; } else if(b2==true) {  todo = todo+"ej2"; } else if(b3==true)   todo = todo+"ej3"; datos.push(todo); todo = "valorN8="; valor = controles[3].value;
 todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[4].value; todo = todo+valor; datos.push(todo); todo = "valorD8="; valor = controles[5].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&");
 xhr.send( dt1 );}function protheta4() { xhr = nuevoAjax(); respet = document.getElementById('rThetap4'); xhr.open("POST","calCotas.php", true);  xhr.onreadystatechange = function() {  if (xhr.readyState==4) {   respet.innerHTML = xhr.responseText;  } }; xhr.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); datos = new Array();
 todo = "cual="; todo = todo+"thetap4"; datos.push(todo); controles = document.forms[19].elements; b1= fprotheta4.prop4[0].checked; b2= fprotheta4.prop4[1].checked; b3= fprotheta4.prop4[2].checked; todo = "opcion="; if(b1==true) {  todo = todo+"ej1"; } else if(b2==true) {  todo = todo+"ej2";
 } else if(b3==true)   todo = todo+"ej3"; datos.push(todo); todo = "valorN8="; valor = controles[3].value; todo = todo+valor; datos.push(todo); todo = "valorC8="; valor = controles[4].value; todo = todo+valor; datos.push(todo);
 todo = "valorD8="; valor = controles[5].value; todo = todo+valor; datos.push(todo); dt1=datos.join("&"); xhr.send( dt1 );}function armarDatos(nforma,proceso) { controles = document.forms[nforma].elements; datos = new Array(); var todo; todo = "cual=";
 todo = todo+proceso; datos.push(todo); for (i = 0; i < controles.length; i++) {  todo = encodeURIComponent (controles[i].name);  todo = todo + "=";  valor = controles[i].value;    todo = todo + encodeURIComponent (controles[i].value);  datos.push(todo); } return datos.join("&");}function siesnumero(dato) { for(i=0;i<dato.length;i++){
  if(  dato.charAt(i)<'0' || dato.charAt(i) >'9' ) {    return -1;  } } return 1;}function mDivision(){ respuesta1 = document.getElementById("respuesta"); element31 =  document.getElementById("clavedis").value; element41 =  document.getElementById("tamanio").value; if(element31.length==0) return; if(element41.length==0) return; var result; result = siesnumero(element31);
 if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } result = siesnumero(element41); if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } var xhr1; element3=Number(element31); element4=Number(element41); xhr1 = nuevoAjax(); xhr1.open("POST", "metodos.php", true);
 xhr1.onreadystatechange = function() {  if (xhr1.readyState==4) {   respuesta1.innerHTML = xhr1.responseText;  } }; xhr1.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr1.send("accion="+1+"&"+"clave1="+element3+"&"+  "tamanio1="+element4);}function mmidsquare(){ element31 = document.getElementById("clavedis").value; element41 = document.getElementById("bitsCentrales").value; if(element31.length==0) return;
 if(element41.length==0) return; var xhr1; var result; result = siesnumero(element31); if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } result = siesnumero(element41); if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } element3=Number(element31);
 element4=Number(element41); respuesta1 = document.getElementById("respuesta"); xhr1 = nuevoAjax(); xhr1.open('POST', 'metodos.php', true); xhr1.onreadystatechange = function() {  if (xhr1.readyState==4) {   respuesta1.innerHTML = xhr1.responseText;  } }; xhr1.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr1.send("accion="+2+"&"+"clave1="+element3+"&"+ "nbits="+element4); }
function mtransformar(){ element31 = document.getElementById("clavedis").value; element41 = document.getElementById("base1").value; element51 = document.getElementById("tamanio1").value; if(element31.length==0) return; if(element41.length==0) return; if(element51.length==0) return; var xhr1; var result; result = siesnumero(element31); if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; }
 result = siesnumero(element41); if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } result = siesnumero(element51); if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } element3=Number(element31); element4=Number(element41); element5=Number(element51); if(element4<5) {
  respuesta1.innerHTML ="Digite una base mayor que 5";  return; } respuesta1 = document.getElementById("respuesta"); xhr1 = nuevoAjax(); xhr1.open('POST', 'metodos.php', true); xhr1.onreadystatechange = function() {  if (xhr1.readyState==4) {   respuesta1.innerHTML = xhr1.responseText;  } }; xhr1.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr1.send("accion="+3+"&"+"clave1="+element3+"&"+ "base1="+element4+
 "&"+ "tamanio1="+element5);}function mfolding(){ element31 = document.getElementById("clavedis").value; element41 = document.getElementById("nbits2").value; if(element31.length==0) return; if(element41.length==0) return; var xhr1; result = siesnumero(element31); if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } result = siesnumero(element41);
 if(result<0) {  respuesta1.innerHTML ="Favor escriba un n&#250;mero  mayor que 0";  return; } element3=Number(element31); element4=Number(element41); respuesta1 = document.getElementById("respuesta"); xhr1 = nuevoAjax(); xhr1.open('POST', 'metodos.php', true); xhr1.onreadystatechange = function() {  if (xhr1.readyState==4) {   respuesta1.innerHTML = xhr1.responseText;  }
 }; xhr1.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr1.send("accion="+4+"&"+"clave1="+element3+"&"+ "nbits2="+element4);}function dibenearios(){ var xhr1; palabrasAA = document.getElementById("palabrasA").value; respuesta1 = document.getElementById("resultEneario"); for(i=0;i<palabrasAA.length;i++){  if( ( palabrasAA.charAt(i)<'a' || palabrasAA.charAt(i) >'z' ) &&    palabrasAA.charAt(i) != ',') {   respuesta1.innerHTML =    "Favor digite letras minúsculas unicamente.";
   return;  } }  xhr1 = nuevoAjax(); xhr1.open('POST', 'enearios.php', true); xhr1.onreadystatechange = function() {  if (xhr1.readyState==4) {   respuesta1.innerHTML = xhr1.responseText;  } }; fechax=new Date(); xhr1.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded");
 xhr1.send("accion="+palabrasAA+"&"+  "fecha="+fechax.getTime());}function resolverColisiones(){ var xhr1; llavesAA = document.getElementById("llavesA").value; respuesta1 = document.getElementById("resultColisiones"); for(i=0;i<llavesAA.length;i++){  if( ( llavesAA.charAt(i)<'0' || llavesAA.charAt(i) >'9' ) &&    llavesAA.charAt(i) != ',') {   respuesta1.innerHTML =    "Favor digite números unicamente.";   return;  }
 } primo1=document.getElementById("separado").value; primo2=document.getElementById("lineal").value; primo3=document.getElementById("doblehash").value; primo4=document.getElementById("cuadratica").value;  xhr1 = nuevoAjax(); xhr1.open('POST', 'colisiones.php', true); xhr1.onreadystatechange = function() {  if (xhr1.readyState==4) {   respuesta1.innerHTML = xhr1.responseText;  } }; fechax=new Date();
 xhr1.setRequestHeader("Content-Type",   "application/x-www-form-urlencoded"); xhr1.send("accion="+llavesAA+"&"+  "separado="+primo1+"&"+  "lineal="+primo2+"&"+  "doblehash="+primo3+"&"+  "cuadratica="+primo4+"&");}
