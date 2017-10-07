package ordenamientoconlistas;

import java.util.Scanner;
import estructuras.Lista;

/**
 *
 * @author kaffeine
 */
public class OrdenamientoConListas {

    public static void main(String[] args) {
        //int arr[] = new int[10];
        Lista l = new Lista();
        //llenarArray(arr);
        int arr[] = {4,3,123,68,2,495,302,405,12,999};
        imprimirArray(arr);
        /*
        int numero = (int)(Math.random()*999+1);
        System.out.println("Número: " + numero);
        int primeraCifra = numero%10;
        int terceraCifra = numero/100;
        int segundaCifra = (numero/10)%10;
        
        System.out.println("Primera cifra: " + primeraCifra);
        System.out.println("Segunda cifra: " + segundaCifra);
        System.out.println("Tercera cifra: " + terceraCifra);
        */
        for (int i = 0; i < 3; i++) {
            System.out.println("Agrupada: " + i);
            for (int j = 0; j < arr.length; j++) {
                switch (i){     
                    case 0: // Primera cifra
                        l.insertar(arr[j], arr[j]%10);
                        break;
                    case 1: // Segunda cifra
                        l.insertar(arr[j], (arr[j]/10)%10);
                        break;
                    case 2: // Tercera cifra
                        l.insertar(arr[j], arr[j]/100);
                        break;
                    default:
                        System.out.println("opción no implementada");
                        break;
                }
            }
            l.agrupar(arr);
        }
        imprimirArray(arr);
    }
    
    public static void llenarArray(int arr[]) {
        for (int i = 0; i < 10; i++) {
            arr[i] = (int)(Math.random()*999+1);
        }
    }
    
    public static void imprimirArray(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i+1 < arr.length) {
                System.out.print(",");
            }
        }
        System.out.println();
    }
}
