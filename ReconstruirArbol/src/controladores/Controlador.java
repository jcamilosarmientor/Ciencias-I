package controladores;

import estructuras.*;
import java.util.ArrayList;

/**
 * 
 * @author jcamilosarmientor
 */
public class Controlador {
    
    private Arbol arbol;
    private Nodo nodo;
    
    int inOrden[] = { 6, 7, 8, 10, 11, 12, 13, 15 };

		int postOrden[] = { 6, 8, 7, 12, 11, 15, 10 };

		int preOrden[] = { 10, 7, 6, 8, 15, 11, 12, 13 };
    
    public Controlador() {
        arbol = new Arbol();
    }
    
    /* Reconstruye el árbol recibiendo el recorrido en preorden */
    public Nodo reconstruirPreOrden(String inOrden, String preOrden) {
        int pre[] = construirArreglo(preOrden);
        int inOr[] = construirArreglo(inOrden);
        Nodo raiz = arbol.reconstruirArbolPre(inOr, pre);
        return raiz;
    }
    
    /* Reconstruye el árbol recibiendo el recorrido en postOrden */
    public Nodo reconstruirPostOrden(String inOrden, String postOrden) {
        int pre[] = construirArreglo(postOrden);
        int inOr[] = construirArreglo(inOrden);
        Nodo raiz = arbol.reconstruirArbolPost(inOr, pre);
        return raiz;
    }
    
    
    private int[] construirArreglo(String valores) {
        int arr[] = new int[valores.split(",").length];
        
        for (int i = 0; i < valores.split(",").length; i++) {
            arr[i] = Integer.parseInt(valores.split(",")[i]);
        }
        
        return arr;
    }
    
}
