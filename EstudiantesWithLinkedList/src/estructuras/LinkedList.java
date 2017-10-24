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

    public int insetar(String nomEstudiante, String codEstudiante, double[] notas) {
        BigIntegerStringConverter bg = new BigIntegerStringConverter();
        Nodo p, q;
        Nodo nv = new Nodo(nomEstudiante, codEstudiante, notas);
        if (cab == null) {
            cab = nv;
            return 0;
        } else {
            p = cab;
            q = cab.getAnt();
            while (p != null) {
                // compara si codEstudiante es mayor a p.codEstudiante
                if (bg.fromString(codEstudiante).compareTo(bg.fromString(p.getCodEstudiante())) > 0) {
                    System.out.println("código ingresado mayor");
                    q = p;
                    p = p.getSig();
                } else if (bg.fromString(codEstudiante).compareTo(bg.fromString(p.getCodEstudiante())) == 0) {
                   System.out.println("ya éxiste");
                    return 1;
                } 
                nv.setAnt(q);
                nv.setSig(p);
                q.setSig(nv);
                p.setAnt(nv);
            }
        }
        return 0;
        //System.out.println("Registrado!");
    }

    public void recorrer() {
        Nodo p, q;
        p = cab;
        q = null;

        while (p != null) {
            q = p;
            p = cab.getSig();
            System.out.print(q.getNomEstudiante() + ",");
            if (p != null) {
                System.out.println(p.getNomEstudiante());
            } else {
                System.out.println("");
            }
        }
    }

    public Nodo buscar(String codEstudiante) {
        Nodo p, q;
        p = cab;
        q = null;

        while (p != null) {
            q = p;
            p = cab.getSig();
            if (q.getCodEstudiante().equals(codEstudiante)) {
                return q;
            }
        }
        return null;
    }
}
