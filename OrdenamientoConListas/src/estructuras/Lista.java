package estructuras;

public class Lista {

    private Nodo[] cab = new Nodo[10];

    public Lista() {
        for (int i = 0; i < this.cab.length; i++) {
            cab[i] = null;
        }
    }

    /**
     *
     * @param n el número
     * @param l la lista a la que corresponde
     */
    public void insertar(int n, int l) {
        Nodo p, q;
        Nodo nv = new Nodo(n);
        p = cab[l];
        if (p == null) {
            cab[l] = nv;
            return;
        }
        q = null;
        while (p != null) {
            q = p;
            p = p.getSig();
        }
        q.setSig(nv);
    }

    public void agrupar(int a[]) {
        Nodo p, q;
        int j = 0;
        
        for (int i = 0; i < this.cab.length; i++) {
            p = cab[i];
            System.out.println("Cabeza["+i+"]");
            while (p != null) {
                //a[j] = p.getDato();
                //j++;
                System.out.println(p.getDato());
                p = p.getSig();
            }
            cab[i] = null;
        }
        
    }
}
