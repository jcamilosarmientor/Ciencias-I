package estructuras;

/**
 *
 * @author jcamilosarmientor
 * @version 1.0
 *
 */
public class ArbolAVL {

    private Nodo raiz;
    
    public ArbolAVL() {
		this.raiz = null;
	}
    
    public Nodo getRaiz() {
    	return this.raiz;
    }
    
    /* Buscar */
    public Nodo buscar(int v, Nodo r) {
    	if (this.raiz == null) {
			return null;
		} else if(r.getValor() == v) {
			 return r;
		} else if(r.getValor() < v) {
			return buscar(v, r.getDer());
		} else {
			return buscar(v, r.getIzq());
		}
    }
    
    /* Obtener el factor de equilibrio */
    public int obtenerFE(Nodo x) {
    	if (x == null) {
			return -1;
		}	else {
			return x.getFe();
		}
    }
    
    /* Rotación simple izquierda */
    public Nodo rotacionIzquierda(Nodo c) {
    	Nodo auxiliar = c.getIzq();
    	c.setIzq(auxiliar.getDer());
    	auxiliar.setDer(c);
    	c.setFe(Math.max(obtenerFE(c.getIzq()), obtenerFE(c.getDer())) + 1);
    	auxiliar.setFe(Math.max(obtenerFE(auxiliar.getIzq()), obtenerFE(auxiliar.getDer())) + 1);
    	return auxiliar;
    }
    
    /* Rotación simple derecha*/
    public Nodo rotacionDerecha(Nodo c) {
    	Nodo auxiliar = c.getDer();
    	c.setDer(auxiliar.getIzq());
    	auxiliar.setIzq(c);
    	c.setFe(Math.max(obtenerFE(c.getIzq()), obtenerFE(c.getDer())) + 1);
    	auxiliar.setFe(Math.max(obtenerFE(auxiliar.getIzq()), obtenerFE(auxiliar.getDer())) + 1);
    	return auxiliar;
    }
    
    /* Rotación doble a la izquierda */
    public Nodo rotacionDobleIzquierda(Nodo c) {
    	Nodo temporal;
    	c.setIzq(rotacionDerecha(c.getIzq()));
    	temporal = rotacionIzquierda(c);
    	return temporal;
    }
    
    /* Rotacion doble a la derecha */
    public Nodo rotacionDobleDerecha(Nodo c) {
    	Nodo temporal;
    	c.setDer(rotacionIzquierda(c.getDer()));
    	temporal = rotacionDerecha(c);
    	return temporal;
    }
    
    /* Insertar AVL */
    private Nodo insertarAVL(Nodo nuevo, Nodo subAr) {
    	Nodo nuevoPadre = subAr;
    	if (nuevo.getValor() < subAr.getValor()) {
			if (subAr.getIzq() == null) {
				subAr.setIzq(nuevo);
			} else {
				subAr.setIzq(insertarAVL(nuevo, subAr.getIzq()));
				if (obtenerFE(subAr.getIzq()) - obtenerFE(subAr.getDer()) == 2) {
					if (nuevo.getValor() < subAr.getIzq().getValor()) {
						nuevoPadre = rotacionIzquierda(subAr);
					} else {
						nuevoPadre = rotacionDobleIzquierda(subAr);
					}
				}
			}
		} else if (nuevo.getValor() > subAr.getValor()) {
			if (subAr.getDer() == null) {
				subAr.setDer(nuevo);
			} else {
				subAr.setDer(insertarAVL(nuevo, subAr.getDer()));
				if(obtenerFE(subAr.getDer()) - obtenerFE(subAr.getIzq()) == 2) {
					if (nuevo.getValor() > subAr.getDer().getValor()) {
						nuevoPadre = rotacionDerecha(subAr);
					} else {
						nuevoPadre = rotacionDobleDerecha(subAr);
					}
				}
			}
		} else {
			System.out.println("Nodo duplicado");
		}
    	
    	// Actualizando la altura(factor de equilibrio)
    	if (subAr.getIzq() == null && subAr.getDer() != null) {
			subAr.setFe(subAr.getDer().getFe() + 1);
		} else if (subAr.getDer() == null && subAr.getIzq() != null) {
			subAr.setFe(subAr.getIzq().getFe() + 1);
		} else {
			subAr.setFe(Math.max(obtenerFE(subAr.getIzq()), obtenerFE(subAr.getDer())) + 1);
		}
    	return nuevoPadre;
    }
    
    /* Método para insertar normal*/
    public void insertar(int v) {
    	Nodo nuevo = new Nodo(v);
    	if (this.raiz == null) {
			this.raiz = nuevo;
		} else {
			raiz = insertarAVL(nuevo, this.raiz);
		}
    }
    
    // Recorridos
    /* inOrden*/
    public void inOrden(Nodo r) {
    	if (r != null) {
    		inOrden(r.getIzq());
			System.out.print(r.getValor() + ",");
			inOrden(r.getDer());
		}
    }
    
    /* preOrden */
    public void preOrden(Nodo r) {
    	if (r != null) {
			System.out.print(r.getValor() + ",");
			preOrden(r.getIzq());
			preOrden(r.getDer());
		}
    }
    
    /* postOrden */
    public void postOrden(Nodo r) {
    	if (r != null) {
			postOrden(r.getIzq());
			postOrden(r.getDer());
			System.out.print(r.getValor() + ",");
		}
    }
}
