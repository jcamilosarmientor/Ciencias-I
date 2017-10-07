package estructuras;

/**
 *
 * @author kaffeine
 */
public class Nodo {
    private int dato;
    private Nodo sig;

    public Nodo(int x) {
        this.dato = x;
        this.sig = null;
    }

    public int getDato() {
        return dato;
    }

    public void setDato(int dato) {
        this.dato = dato;
    }

    public Nodo getSig() {
        return sig;
    }

    public void setSig(Nodo sig) {
        this.sig = sig;
    }
}
