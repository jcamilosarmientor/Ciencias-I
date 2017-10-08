package estructuras;

public class Lista {

    private Nodo[] cab = new Nodo[10];
    private int operElementales; // Operaciones elementales
    
    public Lista() {
        this.operElementales = 0;
        for (int i = 0; i < this.cab.length; i++) {
            cab[i] = null;
        }
    }

    /**
     * Agrega un valor a una cabeza corrrespondiente
     * @param n el número que debe ir en el nodo
     * @param l la lista a la que corresponde
     */
    public void insertar(int n, int l) {
        Nodo p, q;
        Nodo nv = new Nodo(n);
        p = cab[l];
        this.operElementales += 7;
        if (p == null) {
            this.operElementales += 2;
            cab[l] = nv;
            return;
        }
        q = null;
        this.operElementales += 2;
        while (p != null) {
            q = p;
            p = p.getSig();
            this.operElementales += 3;
        }
        q.setSig(nv);
        this.operElementales++;
    }
    
    /**
     * Agrupa los valores de las cabecas desde 0 hasta 9 en el arreglo original
     * @param a El arreglo original
     */
    public void agrupar(int a[]) {
        Nodo p, q;
        int j = 0;
        this.operElementales += 3;
        for (int i = 0; i < this.cab.length; i++) {
            p = cab[i];
            //System.out.println("Cabeza["+i+"]");
            this.operElementales += 5;
            while (p != null) {
                a[j] = p.getDato();
                j++;
                //System.out.println(p.getDato());
                p = p.getSig();
                this.operElementales += 6;
            }
            cab[i] = null;
            this.operElementales += 2;
        }
        /*for (int k = 0; k < a.length; k++) {
                System.out.print(a[k]+",");   
                if (k+1 == a.length) {
                    System.out.println();
                }
            }*/
    }

    public int getOperElementales() {
        return operElementales;
    }

    public void setOperElementales(int operElementales) {
        this.operElementales = operElementales;
    }
}
