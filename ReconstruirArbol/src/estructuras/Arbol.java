package estructuras;

/**
 *
 * @author jcamilosarmientor
 * @version 1.0
 *
 */
public class Arbol {

    private Nodo raiz;

    /* Cuando se quiere iniciar un árbol sin raíz vacio */
    public Arbol() {
        this.raiz = null;
    }

    /* Cuando se quiere iniciar un árbol con raíz establecida */
    public Arbol(int valor) {
        this.raiz = new Nodo(valor);
    }

    public Arbol(Nodo raiz) {
        this.raiz = raiz;
    }

    /* Agregar nodo */
    private void agregarNodo(Nodo nodo, Nodo raiz) {
        if (raiz == null) {
            this.raiz = nodo;
        } else {
            if (nodo.getValor() <= raiz.getValor()) {

                if (raiz.getIzq() == null) {
                    raiz.setIzq(nodo);
                } else {
                    agregarNodo(nodo, raiz.getIzq());
                }

            } else {
                if (raiz.getDer() == null) {
                    raiz.setDer(nodo);
                } else {
                    agregarNodo(nodo, raiz.getDer());
                }
            }
        }
    }

    public void agregarNodo(int valor) {
        Nodo nodo = new Nodo(valor);
        this.agregarNodo(nodo, this.raiz);
    }

    /* Buscar nodo */
    private String buscar(Nodo nodo, Nodo raiz, int nivel) {
        if (raiz != null) {
            if (nodo.getValor() == raiz.getValor()) {
                return "El número " + nodo.getValor() + " está en el nivel: " + nivel;

            } else if (nodo.getValor() < raiz.getValor()) {
                return buscar(nodo, raiz.getIzq(), nivel + 1);

            } else {
                return buscar(nodo, raiz.getDer(), nivel + 1);

            }
        } else {
            return "El número " + nodo.getValor() + " no forma parte del árbol";
        }
    }

    public String buscar(int valor) {
        Nodo nodo = new Nodo(valor);
        return this.buscar(nodo, this.raiz, 0);
    }

    public void getAltura() {
        if (this.raiz == null) {

        }
    }

    /* Reconstruir arbol con los recorridos inOrden y preOrden */
    public Nodo reconstruirArbolPre(int[] inOrden, int[] preOrden) {
        this.agregarNodo(preOrden[0]);
        int inIzq[], preIzq[], inDer[], preDer[], contador = 0;

        while (inOrden[contador] != preOrden[0]) {
            contador++;
        }

        preIzq = new int[contador];
        inIzq = new int[contador];
        if (inIzq.length != 0) {

            for (int i = 0; i < contador; i++) {
                inIzq[i] = inOrden[i];
                preIzq[i] = preOrden[i + 1];
            }

            this.reconstruirArbolPre(inIzq, preIzq);
        }

        preDer = new int[inOrden.length - (contador + 1)];
        inDer = new int[inOrden.length - (contador + 1)];
        if (inDer.length != 0) {
            int cont = 0;

            for (int i = contador + 1; i < inOrden.length; i++) {
                inDer[cont] = inOrden[i];
                preDer[cont] = preOrden[i];
                cont++;

            }

            this.reconstruirArbolPre(inDer, preDer);
        }
        return this.raiz;
    }

    /* Recostruir el árbol con los recorridos inOrden y postOrden*/
    public Nodo reconstruirArbolPost(int[] inOrden, int[] postOrden) {
        this.agregarNodo(postOrden[postOrden.length - 1]);
        int inIzq[], postIzq[], inDer[], postDer[], contador = 0;

        while (inOrden[contador] != postOrden[postOrden.length - 1]) {
            contador++;
        }

        /* Izquierda */
        postIzq = new int[contador];
        inIzq = new int[contador];
        if (inIzq.length != 0) {
            for (int i = 0; i < contador; i++) {
                inIzq[i] = inOrden[i];
                postIzq[i] = postOrden[i];
            }
            this.reconstruirArbolPost(inIzq, postIzq);
        }

        /* Derecha */
        postDer = new int[inOrden.length - (contador + 1)];
        inDer = new int[inOrden.length - (contador + 1)];
        if (inDer.length != 0) {
            int cont = 0;
            for (int i = contador + 1; i < inOrden.length; i++) {
                inDer[cont] = inOrden[i];
                postDer[cont] = postOrden[i-1];
                cont++;
            }
            this.reconstruirArbolPost(inDer, postDer);
        }
        return this.raiz;
    }

    // Getter y settters
    public Nodo getRaiz() {
        return raiz;
    }

    public void setRaiz(Nodo raiz) {
        this.raiz = raiz;
    }

}
