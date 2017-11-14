package arbolavl;

import java.io.*;
//Arbol AVl
public class ArbolAVL_ED{
	String impresor="";
	String rotaciones="";
	NodoAVL A;
	boolean Hh;
	//Guarda las rotaciones en un archivo
	void GuardarArchivoRotaciones(String s, int Cod1, String Nom1, int Cod2, String Nom2){
		int numero;
 		try{
			InputStreamReader isr=new InputStreamReader(System.in);
			BufferedReader br= new BufferedReader(isr);
	 		FileWriter fw = new FileWriter("Rotaciones Autores AVL.txt",true);
    		BufferedWriter bw = new BufferedWriter(fw);
    		PrintWriter salida = new PrintWriter(bw);
    		salida.println("Rotacion "+s+" ");
    		salida.println("Argumentos: "+ Cod1 +" " +Nom1+" y " + Cod2+" " + Nom2);
    		salida.println("---------------------------------------------------"); 
    		rotaciones=rotaciones+"Rotacion "+s+"\n"+"Argumentos: "+ Cod1 +" " +Nom1+" y " + Cod2+" " + Nom2+"\n"+"---------------------------------------------------"+"\n";
    		salida.close();
		}
 		catch(java.io.IOException ioex){
 		}
	}
	//Inserta un elemento en el arbol
	void InsercionAutor (int Codau, String Nombre , String naci){
		if ((!Miembro (Codau,A))){
			NodoAVL info = new NodoAVL(Codau,Nombre,naci);
			A=InsertarBalanceado(A,info);
		}
		else
			System.out.println("Error autor repetido");
	}
	//Auxiliar de InsercinAutor
	NodoAVL InsertarBalanceado(NodoAVL R, NodoAVL Nodo){
		NodoAVL N1;
		NodoAVL info = Nodo;
		if (ArbolVacio(R)){
			R= info;
			System.out.println("Se inserto autor "+ info.Codau + " " + info.Nombre);
			Hh=true;
		}
		else
			if (Nodo.Codau < R.Codau){
				R.Izquierdo=InsertarBalanceado(R.Izquierdo,Nodo);
				if (Hh)
					switch(R.Factbalance){
						case 1:{
							R.Factbalance= 0;
							Hh=false;
						}	
						break;
						case 0:
							R.Factbalance= -1; 
						break;
						//se reestructura ya que pasaria a valer-2 y se desequilibra a la izq
						case -1:{
							N1=R.Izquierdo;
							if (N1.Factbalance== -1){   
								GuardarArchivoRotaciones("Izquierda Izquierda", R.Codau, R.Nombre, N1.Codau, N1.Nombre);
								rotaciones=rotaciones+"Rotacion Izquierda Izquierda\nArgumentos: "+ R.Codau +" " +R.Nombre+" y " + N1.Codau+" " + N1.Nombre+"\n"+"-------------------"+"\n";
								R = RotacionIzquierdaIzquierda(R,N1);
							}
							else{
								GuardarArchivoRotaciones("Izquierda Derecha", R.Codau, R.Nombre, N1.Codau,N1.Nombre);
								rotaciones=rotaciones+"Rotacion Izquierda Derecha\nArgumentos: "+ R.Codau +" " +R.Nombre+" y " + N1.Codau+" " + N1.Nombre+"\n"+"-------------------"+"\n";
								R = RotacionIzquierdaDerecha(R,N1);
							}
							Hh = false;
						}
						break;
					}		
			}
			else{	
			if (Nodo.Codau > R.Codau){
				R.Derecho=InsertarBalanceado(R.Derecho, Nodo);
				if (Hh)
				switch(R.Factbalance){
					case -1:
						R.Factbalance=0;
						Hh=false;	
					break;
					case 0:
						R.Factbalance=1; 
					break;
					//se reestructura ya que pasaria a valer-2 y se desequilibra a la izq
					case 1:{
						N1=R.Derecho;
						if (N1.Factbalance==1){
							GuardarArchivoRotaciones("Derecha Derecha", R.Codau, R.Nombre, N1.Codau, N1.Nombre);
							rotaciones=rotaciones+"Rotacion Derecha Derecha\nArgumentos: "+ R.Codau +" " +R.Nombre+" y " + N1.Codau+" " + N1.Nombre+"\n"+"-------------------"+"\n";
							R = RotacionDerechaDerecha(R,N1);
						}
						else{
							GuardarArchivoRotaciones("Derecha Izquierda", R.Codau, R.Nombre, N1.Codau, N1.Nombre);
							rotaciones=rotaciones+"Rotacion Derecha Izquierda\nArgumentos: "+ R.Codau +" " +R.Nombre+" y " + N1.Codau+" " + N1.Nombre+"\n"+"-------------------"+"\n";
							R = RotacionDerechaIzquierda(R,N1);
						}
						Hh = false;
					}
					break;
				}	
				
			}
			else{
				System.out.println("Error: No se pueden numeros iguales");
				Hh = false;
			}
		}
	return R;	
	}
	//retorna si esta vacio
	boolean ArbolVacio(NodoAVL R){
		return (R == null);
	}
	//rota a la derecha
	NodoAVL RotacionDerechaDerecha(NodoAVL N, NodoAVL N1){
		N.Derecho = N1.Izquierdo;
		N1.Izquierdo = N;
		if (N1.Factbalance==1) {
			N.Factbalance=0;
			N1.Factbalance=0;
		}
		else{
			N.Factbalance = 1;
			N1.Factbalance = -1;
		}
		N= N1;
		return N;
	}
	
	NodoAVL RotacionDerechaIzquierda(NodoAVL N, NodoAVL N1){
		NodoAVL N2;
		N2 = N1.Izquierdo;
		N.Derecho = N2.Izquierdo;
		N2.Izquierdo=N;
		N1.Izquierdo=N2.Derecho;
		N2.Derecho=N1;
		if (N2.Factbalance==1){
			N.Factbalance=-1;
		}
		else{
			N.Factbalance=0;
		}
		if (N2.Factbalance==-1)
			N1.Factbalance=1;
		else
			N1.Factbalance=0;
		N2.Factbalance=0;
		N=N2;
		return N;
	}
	
	NodoAVL RotacionIzquierdaIzquierda(NodoAVL N, NodoAVL N1){
		N.Izquierdo = N1.Derecho;
		N1.Derecho = N;
		if (N1.Factbalance==-1){
			N.Factbalance=0;
			N1.Factbalance=0;
		}
		else{
			N.Factbalance=-1;
			N1.Factbalance=1;
		}
		N=N1;
		return N;
	}
	
	NodoAVL RotacionIzquierdaDerecha(NodoAVL N, NodoAVL N1){
		NodoAVL N2;
		N2=N1.Derecho;
		N.Izquierdo=N2.Derecho;
		N2.Derecho=N;
		N1.Derecho=N2.Izquierdo;
		N2.Izquierdo=N1;
		if (N2.Factbalance==1)
			N1.Factbalance=-1;
		else
			N1.Factbalance=0;
		if (N2.Factbalance==-1)
			N.Factbalance=1;
		else
			N.Factbalance=0;
		N2.Factbalance=0;
		N=N2;
		return N;
	}
	//Para verificar si esta el autor
	boolean Miembro(int Codau, NodoAVL R){
		NodoAVL Aux = R;
		boolean miembro = false;
		while (Aux != null){
			if (Codau==Aux.Codau){
				miembro = true;
				Aux = null;
			}
			else{
				if (Codau>Aux.Codau)
					Aux = Aux.Derecho;
				else{
					Aux = Aux.Izquierdo;
					if (Aux == null)
						miembro = false;
				}
			}
		}
		return miembro;
	}
	//busca la cantidad de nodos de un arbol avl
	int CantidadNodosAVL(NodoAVL A){
		int cont = 0;
		if (A == null) 
			cont = cont;
		else{
			cont = cont + 1 + CantidadNodosAVL(A.Izquierdo) + CantidadNodosAVL(A.Derecho);
		}
		return cont;
	}
	//altura	
	public int Altura(NodoAVL raiz){
		if (raiz == null)
		return 0;
		else
		return	1 + Math.max(Altura(raiz.Izquierdo), Altura(raiz.Derecho));
	}
	//Despliega la informacion en Postorden
	public void PostOrdenAVL (NodoAVL Nodo){
		if (Nodo == null)
			return;
		else{
			PostOrdenAVL (Nodo.Izquierdo);
			PostOrdenAVL (Nodo.Derecho);
			impresor=impresor+"Autor: "+Nodo.Codau+ "\n    "+" Nombre: " + Nodo.Nombre+ "\n    "+ " Nacionalidad: "+ Nodo.nacionalidad+ "\n---------------------\n";
		}
	}
	//Despliega la informacion en Inorden
	public void InordenAVL (NodoAVL Nodo){
		if (Nodo == null)
			return;
		else{
			InordenAVL (Nodo.Izquierdo);
			impresor=impresor+"Autor: "+Nodo.Codau+ "\n    "+" Nombre: " + Nodo.Nombre+ "\n    "+ " Nacionalidad: "+ Nodo.nacionalidad+ "\n---------------------\n";
			InordenAVL (Nodo.Derecho);
		}
	}
}
// Nodo de un AVL
class NodoAVL{
	int Codau;
	String Nombre;
	String nacionalidad;
	int Factbalance;
	NodoAVL Derecho, Izquierdo;
	NodoAVL (int cod, String Nom, String nac){
		Codau = cod;
		Nombre= Nom;
		nacionalidad = nac;
		Factbalance = 0;
		NodoAVL Derecho=null;
		NodoAVL Izquierdo = null;
	}
}