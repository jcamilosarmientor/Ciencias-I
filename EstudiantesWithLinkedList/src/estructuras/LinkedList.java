package estructuras;

import javafx.util.converter.BigIntegerStringConverter;

/**
 *
 * @author kaffeine
 */
public class LinkedList {
    //private Nodo listaNodos[];
    private Nodo cab;

    public LinkedList(int tamanio) {
        //listaNodos = new Nodo[10000];
        cab = null;
    }
    
    public void insetar(String nomEstudiante, String codEstudiante, int[] notas) {
        BigIntegerStringConverter bg = new BigIntegerStringConverter();
        Nodo p,q;
        Nodo nv = new Nodo(nomEstudiante, codEstudiante, notas);
        if (cab == null) {
            cab = nv;
        } else {
            p = cab;
            q = null;
            while(p != null) {
                // compara si codEstudiante es mayor a p.codEstudiante
                if (bg.fromString(codEstudiante).compareTo(bg.fromString(p.getCodEstudiante()))  > 0) {
                    q = p;
                    p = p.getSig();
                }  
                nv.setAnt(q);
                nv.setSig(p);
                q.setSig(nv);
                p.setAnt(nv);
            }
        }
    }
    
    public void recorrer() {
        Nodo p,q;
        p = cab;
        q = null;
        
        while(p != null) {
            q = p;
            p = cab.getSig();
        }
    }
    
    public void buscar() {
        
    }
}
