package estructuras;

import java.awt.Graphics;
import javax.swing.ImageIcon;
import javax.swing.JPanel;

/** Clase para obtener y guardar la ruta de la imagen
 *
 * @author kaffeine
 */
public class Imagen extends javax.swing.JPanel {
    private String codBusqueda; // Código del estudiante para buscar la imagen
    private int x,y; // Posiciones de la imagen

    public Imagen(JPanel jpanel) {
        this.x = jpanel.getWidth();
        this.y = jpanel.getHeight();
        this.setSize(x,y);
    }

    @Override
    public void paint(Graphics g) {
        ImageIcon img = new ImageIcon(getClass().getResource(codBusqueda+".png"));
        g.drawImage(img.getImage(), 0,0,x,y,null);
    }
}
