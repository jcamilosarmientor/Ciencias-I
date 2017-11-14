package cliente;
import java.awt.*;
import java.awt.event.*;
import estructuras.Nodo;


public class Window extends Frame implements ActionListener {
	private TextField textoNumero; // campo para ingresar el numero del nuevo nodo que se desea insertar
	private TextField textoString; // campo para ingresar el texto del nuevo nodo que se desea insertar
	private Button botonInserta; // boton para la accion de insertar un nuevo nodo
	private TextField texto2Numero; // campo para ingresar el numero del nodo que se desea buscar
	private Button botonBusca; // boton para la accion de buscar un nodo
	private TextField textoMensaje; // campo para mandar mensajes al usuario
	private Nodo primerNodo; // nodo raiz del arbol
	private ScrollPane scrollpane; // area para desplegar el arbol graficamente
	private Label grafica; // control utilizado para graficar el arbol
	private Nodo nodEncontrado; // para busquedas guarda la referencia del nodo encontrado para resaltarlo

	// constructor de la clase crea la ventana y sus controles
	public Window() {
		// creando los controles y sus caracteristicas
		Panel pan1 = new Panel(new GridLayout(3, 0));
		Panel reg1 = new Panel(new FlowLayout());
		textoNumero = new TextField(5);
		textoString = new TextField(35);
		Button botonInserta = new Button("Insertar");
		botonInserta.addActionListener(this);
		Panel reg2 = new Panel(new FlowLayout());
		texto2Numero = new TextField(5);
		botonBusca = new Button("Buscar");
		botonBusca.addActionListener(this);
		Panel reg3 = new Panel(new FlowLayout());
		textoMensaje = new TextField(65);
		textoMensaje.setEditable(false);
		grafica = new Label() { // sobrecarga del metodo paint del control para hacer que dibuje el arbol
			public void paint(Graphics grph) {
				dibujaArbol(grph);
			};
		};
		scrollpane = new ScrollPane(ScrollPane.SCROLLBARS_AS_NEEDED);
		scrollpane.add(grafica);
		pan1.add(reg1);
		pan1.add(reg2);
		pan1.add(reg3);
		reg1.add(botonInserta);
		reg1.add(new Label("Numero:"));
		reg1.add(textoNumero);
		reg1.add(new Label("String:"));
		reg1.add(textoString);
		reg2.add(botonBusca);
		reg2.add(new Label("Numero:"));
		reg2.add(texto2Numero);
		reg3.add(new Label("Mensaje:"));
		reg3.add(textoMensaje);
		add(pan1, BorderLayout.NORTH);
		add(scrollpane, BorderLayout.CENTER);
		addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
		primerNodo = null;
		nodEncontrado = null;
		// dandole caracteristicas a la ventana
		setTitle("Arbol roji-negro");
		setSize(666, 578);
		setVisible(true);
	}

	// realiza lass opciones de los botones
	public void actionPerformed(ActionEvent e) {
		Button fuente = (Button) e.getSource();
		int numero = 0;
		String textonum = "";
		textoMensaje.setText("");
		nodEncontrado = null;
		try {
			if (fuente.getLabel().equals("Insertar")) {
				// inserta un nuevo nodo si el numero ingresado es un entero valido y la string
				// no esta vacia
				if (textoString.getText().length() == 0) {
					// si la cadena string no fue ingresada enviar mensaje de error
					textoMensaje.setText("String vacia");
					return;
				}
				textonum = textoNumero.getText();
				numero = Integer.parseInt(textonum);
				insertaUnNodo(numero, textoString.getText());
				textoMensaje.setText("Insertado " + numero);
			} else if (fuente.getLabel().equals("Buscar")) {
				// busca un nodo si el numero ingresado es un entero valido
				textonum = texto2Numero.getText();
				numero = Integer.parseInt(textonum);
				nodEncontrado = buscaUnNodo(numero);
				if (nodEncontrado == null)
					textoMensaje.setText("No se encontro");
				else
					textoMensaje.setText("Encontrado: [" + nodEncontrado.numero + "," + nodEncontrado.texto + "]");
			}
		} catch (NumberFormatException ex) {
			// si el numero no es valido enviar mensaje de error
			textoMensaje.setText("Error numero: [" + textonum + "]");
		}
		grafica.repaint();
	}

	// metodo que inserta el nodo en el arbol recibe el numero y texto del nuevo
	// nodo
	private void insertaUnNodo(int numero, String texto) {
		Nodo nuevoNodo;
		boolean esHijoDer;
		if (primerNodo == null) // ve si el arbol esta vacio y crea el nodo como raiz
			primerNodo = new Nodo(numero, texto, false);
		else {
			nuevoNodo = new Nodo(numero, texto, true);
			nuevoNodo.padre = primerNodo;
			while (true) {
				// recorre los nodos que existan para buscar el lugar del nuevo nodo en base a
				// su numero
				if (numero < nuevoNodo.padre.numero) {
					if (nuevoNodo.padre.izquierdo != null)
						nuevoNodo.padre = nuevoNodo.padre.izquierdo;
					else {
						nuevoNodo.padre.izquierdo = nuevoNodo;
						esHijoDer = false;
						break;
					}
				} else {
					if (nuevoNodo.padre.derecho != null)
						nuevoNodo.padre = nuevoNodo.padre.derecho;
					else {
						nuevoNodo.padre.derecho = nuevoNodo;
						esHijoDer = true;
						break;
					}
				}
			}
			;
			// en caso de que se presente que el padre del nuevo nodo es rojo envia al
			// metodo que soluciona esto
			if (nuevoNodo.padre.rojo)
				casoRojoRojo(nuevoNodo.padre, esHijoDer);
		}
		// actualizar la grafica del arbol
		grafica.repaint();
	}

	// soluciona si al insertar se presenta un caso donde el nodo padre del nuevo
	// nodo es rojo
	private void casoRojoRojo(Nodo n, boolean hijoDer) {
		Nodo padreDePadre = n.padre;
		Nodo hermanoDePadre;
		Nodo temporal;
		if (padreDePadre.izquierdo != null && padreDePadre.derecho != null) {
			// caso uno y dos: volver a colorear
			if (n == padreDePadre.izquierdo)
				hermanoDePadre = padreDePadre.derecho;
			else
				hermanoDePadre = padreDePadre.izquierdo;
			if (hermanoDePadre.rojo) {
				hermanoDePadre.rojo = false;
				n.rojo = false;
				if (padreDePadre != primerNodo)
					padreDePadre.rojo = true;
				if (padreDePadre.padre != null) {
					if (padreDePadre.padre.rojo) // revisar que no se haya creado un caso rojo-rojo hacia arriba
						casoRojoRojo(padreDePadre.padre, padreDePadre.padre.izquierdo != padreDePadre);
				}
				return;
			}
		}
		if (!hijoDer && padreDePadre.izquierdo == n) {
			// caso tres: reestructurar
			n.rojo = false;
			padreDePadre.rojo = true;
			temporal = n.derecho;
			n.derecho = padreDePadre;
			n.padre = padreDePadre.padre;
			padreDePadre.padre = n;
			padreDePadre.izquierdo = temporal;
			if (temporal != null)
				temporal.padre = padreDePadre;
			if (n.padre != null) {
				temporal = n.padre;
				if (temporal.izquierdo == n.derecho)
					temporal.izquierdo = n;
				else
					temporal.derecho = n;
			} else
				primerNodo = n;
		} else if (hijoDer && padreDePadre.derecho == n) {
			// caso cuatro: reestructurar
			n.rojo = false;
			padreDePadre.rojo = true;
			temporal = n.izquierdo;
			n.izquierdo = padreDePadre;
			n.padre = padreDePadre.padre;
			padreDePadre.padre = n;
			padreDePadre.derecho = temporal;
			if (temporal != null)
				temporal.padre = padreDePadre;
			if (n.padre != null) {
				temporal = n.padre;
				if (temporal.izquierdo == n.izquierdo)
					temporal.izquierdo = n;
				else
					temporal.derecho = n;
			} else
				primerNodo = n;
		} else if (hijoDer && padreDePadre.izquierdo == n) {
			// caso cinco: reestructurar
			hermanoDePadre = n.derecho;
			temporal = hermanoDePadre.izquierdo;
			padreDePadre.izquierdo = hermanoDePadre;
			hermanoDePadre.padre = padreDePadre;
			hermanoDePadre.izquierdo = n;
			n.padre = hermanoDePadre;
			n.derecho = temporal;
			if (temporal != null)
				temporal.padre = n;
			// lleva al caso tres
			casoRojoRojo(hermanoDePadre, false);
		} else if (!hijoDer && padreDePadre.derecho == n) {
			// caso seis: reestructurar
			hermanoDePadre = n.izquierdo;
			temporal = hermanoDePadre.derecho;
			padreDePadre.derecho = hermanoDePadre;
			hermanoDePadre.padre = padreDePadre;
			hermanoDePadre.derecho = n;
			n.padre = hermanoDePadre;
			n.izquierdo = temporal;
			if (temporal != null)
				temporal.padre = n;
			// lleva al caso cuatro
			casoRojoRojo(hermanoDePadre, true);
		}
	}

	// metodo para buscar un nodo si no lo encuentra regresa null
	private Nodo buscaUnNodo(int numero) {
		Nodo temporal = primerNodo;
		if (temporal == null)
			return null;
		do {
			if (numero == temporal.numero)
				return temporal;
			else if (numero < temporal.numero)
				temporal = temporal.izquierdo;
			else if (numero > temporal.numero)
				temporal = temporal.derecho;
		} while (temporal != null);
		return null;
	}

	// funcion que prepara el control grafica para dibujar el arbol
	private void dibujaArbol(Graphics grph) {
		// tamaño del nodo 50x50 espacio entre nodos vertical 20 horizontal minimo 20
		// calcular tamaño de toda la grafica
		int altura = calculaProfundidad(primerNodo);
		int anchura = (int) Math.pow(2, (altura - 1));
		if (altura == 0)
			return;
		grafica.setPreferredSize(new Dimension((anchura * 70) + 40, (70 * altura) + 20));
		grph.setColor(Color.WHITE);
		grph.clearRect(0, 0, (anchura * 70) + 40, (70 * altura) + 20);
		// enviar a dibujar el nodo raiz y este a su vez enviara al resto de los nodos
		dibujaNodo(grph, primerNodo, 25, (int) ((70 * anchura)) / 2);
		scrollpane.doLayout();
	}

	// calcula la el numero de nodos de profundidad del arbol para calcular el arrea
	// que ocupara el grafico
	// segun el numero de nodos
	private int calculaProfundidad(Nodo inicial) {
		int profIzq = 0;
		int profDer = 0;
		if (inicial == null)
			return 0;
		if (inicial.izquierdo != null)
			profIzq = calculaProfundidad(inicial.izquierdo);
		if (inicial.derecho != null)
			profDer = calculaProfundidad(inicial.derecho);
		return (profIzq > profDer ? profIzq : profDer) + 1;
	}

	// dibuja un nodo y si este nodo tiene al menos un hijo tambien lo envia a
	// dibujar
	private void dibujaNodo(Graphics grph, Nodo nodo, int y, int x) {
		Color color = (nodo != null ? (nodo.rojo ? Color.RED : Color.BLACK) : Color.YELLOW);
		int altura = calculaProfundidad(nodo) - 1;
		int anchura = (int) Math.pow(2, altura);
		anchura = ((anchura * 70) + 40) / 4;
		if (nodo != null && (nodo.izquierdo != null || nodo.derecho != null)) {
			grph.setColor(Color.GREEN);
			grph.drawLine(x + 25, y + 25, x - anchura + 25, y + 95);
			grph.drawLine(x + 25, y + 25, x + anchura + 25, y + 95);
		}
		grph.setColor(color);
		if (nodo != null && nodo.rojo)
			grph.fillRect(x, y, 50, 50);
		grph.fillOval(x, y, 50, 50);
		if (nodo != null) {
			if (nodo == nodEncontrado) {
				grph.setColor(Color.GREEN);
				for (int c = 2; c <= 3; c++)
					if (!nodEncontrado.rojo)
						grph.drawOval(x + c, y + c, 48 - (2 * c), 48 - (2 * c));
					else
						grph.drawRect(x + c, y + c, 49 - (2 * c), 49 - (2 * c));
			}
			grph.setColor(nodo.rojo ? Color.BLACK : Color.WHITE);
			grph.drawString("" + nodo.numero, x + 20, y + 30);
			if (nodo.izquierdo != null || nodo.derecho != null) {
				dibujaNodo(grph, nodo.izquierdo, y + 70, (x - anchura));
				dibujaNodo(grph, nodo.derecho, y + 70, (x + anchura));
			}
		} else {
			grph.setColor(Color.BLACK);
			grph.drawString("null", x + 15, y + 30);
		}
	}

	public static void main(String[] args) {
		Window win = new Window();
	}
}
