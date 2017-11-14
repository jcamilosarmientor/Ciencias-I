package estructuras;

public class Nodo {
	private int valor, fe; // fe: Factor de equilibrio
	private Nodo izq;
	private Nodo der;
	
	public Nodo(int v) {
		this.valor = v;
		this.fe = 0;
		this.izq = null;
		this.der = null;
	}
	
	// Getter and setters
	public int getValor() {
		return valor;
	}

	public void setValor(int valor) {
		this.valor = valor;
	}

	public Nodo getIzq() {
		return izq;
	}

	public void setIzq(Nodo izq) {
		this.izq = izq;
	}

	public Nodo getDer() {
		return der;
	}

	public void setDer(Nodo der) {
		this.der = der;
	}

	public int getFe() {
		return fe;
	}

	public void setFe(int fe) {
		this.fe = fe;
	}
	
}
