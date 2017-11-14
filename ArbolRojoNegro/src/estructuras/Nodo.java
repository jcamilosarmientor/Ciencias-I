package estructuras;

public class Nodo {
	public int numero; // el numero del nodo
	public boolean rojo; // indica true es rojo; false es negro
	public Nodo izquierdo; // apuntador al nodo hijo izquierdo
	public Nodo derecho; // apuntador al nodo hijo derecho
	public Nodo padre; // apuntador al nodo padre
	public String texto; // texto del nodo

	// contruye un nuevo nodo asignadole numero, texto y su color
	public Nodo(int numero, String texto, boolean rojo) {
		this.numero = numero;
		this.texto = texto;
		this.rojo = rojo;
		izquierdo = null;
		derecho = null;
		padre = null;
	}
}
