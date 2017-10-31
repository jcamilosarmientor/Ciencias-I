package estructuras;

import javafx.util.converter.BigIntegerStringConverter;

/**
 *
 * @author kaffeine
 */
public class LinkedList {

    //private Nodo listaNodos[];
    private Nodo cab;
    private int size;

    public LinkedList() {
        //listaNodos = new Nodo[10000];
        cab = null;
    }

    public int insertar(String nomEstudiante, String codEstudiante, String foto, double[] notas) {
        BigIntegerStringConverter bg = new BigIntegerStringConverter();
        Nodo p, q;
        Nodo nv = new Nodo(nomEstudiante, codEstudiante, foto, notas);
        if (cab == null) {
            cab = nv;
            return 0;
        } else {
            p = cab;
            q = null;
            while (p != null) {
                // compara si codEstudiante es mayor a p.codEstudiante
                if (bg.fromString(codEstudiante).compareTo(bg.fromString(p.getEstudiante().getCodEstudiante())) > 0) {
                    q = p;
                    p = p.getSig();

                    if (p == null) {
                        nv.setAnt(q);
                        nv.setSig(p);
                        q.setSig(nv);
                    } else {
                        p.setAnt(nv);
                    }
                    // Aquí el estudiante ya está registrado    
                } else if (bg.fromString(codEstudiante).compareTo(bg.fromString(p.getEstudiante().getCodEstudiante())) == 0) {
                    return 1;
                    // Aqui el estudiante registrado tiene un código menor
                } else {
                    if (q == null) {
                        Nodo tmp = cab;
                        cab = nv;
                        cab.setSig(tmp);
                        cab.setAnt(q);
                        this.recorrer();
                        size++;
                        return 0;
                    } else {
                        nv.setAnt(q);
                        nv.setSig(p);
                        q.setSig(nv);
                        p.setAnt(nv);
                    }
                    
                    
                    q = p;
                    p = p.getSig();
                    
                    //q.setSig(q);
                }
            }
            size++;
            this.recorrer();
            return 0;
        }
    }
    
    /**
     * Retorna el tamaño de la lista
     * @return un entero con el tamaño de la lista
     */
    public int size() { return size; }
    
    public void recorrer() {
        Nodo p, q;
        p = cab;
        while (p != null) {
            q = p;
            p = p.getSig();
            System.out.print("[" + q.getEstudiante().getCodEstudiante() + "]" + q.getEstudiante().getNomEstudiante() + ",");
        }
        System.out.println("");
    }

    public Nodo buscar(String codEstudiante) {
        Nodo p, q;
        p = cab;
        q = null;

        while (p != null) {
            q = p;
            p = p.getSig();
            if (q.getEstudiante().getCodEstudiante().equals(codEstudiante)) {
                return q;
            }
        }
        return null;
    }
}
