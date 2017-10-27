package estructuras;

import javafx.util.converter.BigIntegerStringConverter;

/**
 *
 * @author kaffeine
 */
public class LinkedList {

    //private Nodo listaNodos[];
    private Nodo cab;

    public LinkedList() {
        //listaNodos = new Nodo[10000];
        cab = null;
    }

    public int insertar(String nomEstudiante, String codEstudiante, String foto, double[] notas) {
        BigIntegerStringConverter bg = new BigIntegerStringConverter();
        Nodo p, q;
        int cont = 1;
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
                    System.out.println("es mayor");
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
                    System.out.println("es menor");
                    q = p;
                    p = p.getSig();
                    
                    nv.setAnt(q);
                    nv.setSig(p);
                    q.setSig(q);
                    
                    if (p !=  null) {
                        p.setAnt(nv);
                        return 0;
                    }
                }
            }
            System.out.println("termino de insertar");
            this.recorrer();
            return 0;
        }

        //System.out.println("Registrado!");
    }

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
