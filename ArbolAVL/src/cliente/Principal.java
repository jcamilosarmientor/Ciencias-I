package cliente;

import java.awt.EventQueue;
import java.awt.Graphics;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.JLabel;
import java.awt.Canvas;
import java.awt.Color;

import estructuras.*;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Panel;

public class Principal extends javax.swing.JFrame {

	private JPanel contentPane;
	private JTextField txtLetra;
	Canvas canvas = new Canvas();
	
	private ArbolAVL arbol = new ArbolAVL();

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Principal frame = new Principal();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
	
	private void limpiarCanvas(Graphics g) {
		g.setColor(getBackground());
        g.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
	}
	
	public void dibujaTexto(Graphics g, String texto, int x, int y) {
        g.setColor(Color.BLACK);
        g.drawString(texto, x, y);
    }

    public void dibujarLinea(Graphics g, int x, int y, int x1, int y1) {
        g.setColor(Color.red);
        g.drawLine(x, y, x1, y1);
    }

    public void dibujarArbol(Nodo p, int x, int y, int distancia) {
        if (p != null) {
            int d = distancia / 2;
            dibujaTexto(canvas.getGraphics(), p.getValor() + " ", x - 5, y);
            if (p.getIzq() != null) {
                dibujarLinea(canvas.getGraphics(), x, y + 2, x - distancia, y + 60 - 12);
                dibujarArbol(p.getIzq(), x - distancia, y + 60, d);
            }
            if (p.getDer() != null) {
                dibujarLinea(canvas.getGraphics(), x, y + 2, x + distancia, y + 60 - 12);
                dibujarArbol(p.getDer(), x + distancia, y + 60, d);
            }
        }
    }

	/**
	 * Create the frame.
	 */
	public Principal() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 871, 547);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		
		txtLetra = new JTextField();
		txtLetra.setBounds(202, 440, 177, 20);
		txtLetra.setColumns(15);
		
		JLabel lblIngresaLaLetra = new JLabel("Ingresa el número");
		lblIngresaLaLetra.setBounds(68, 443, 300, 14);
		
		JButton btnInsertar = new JButton("Insertar");
		
		btnInsertar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//Nodo nodo = new Nodo(Integer.parseInt(txtLetra.getText()));
				arbol.insertar(Integer.parseInt(txtLetra.getText()));
				limpiarCanvas(canvas.getGraphics());
				dibujarArbol(arbol.getRaiz(), 320, 20, 160);
			}
		});
		
		
		btnInsertar.setBounds(487, 439, 71, 23);
		contentPane.setLayout(null);
		contentPane.add(lblIngresaLaLetra);
		contentPane.add(txtLetra);
		contentPane.add(btnInsertar);
		
		canvas.setBounds(48, 28, 755, 386);
		contentPane.add(canvas);
		
	}
}
