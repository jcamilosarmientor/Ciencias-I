package logica;

import estructuras.*;

/**
 *
 * @author Juan Camilo
 */
public class Controlador {
    
    private LinkedList lista;
    private Nodo nodo;
    private String nombre;
    private String codigo;
    private double notas[];

    public Controlador() {
        lista = new LinkedList();
    }
    
    public int registrar(String nombre, String codigo, String foto, double[] notas) {
        return lista.insertar(nombre, codigo,foto, notas);
    }
    
    public String buscar(String codigo) {
        Nodo n = lista.buscar(codigo);
        lista.recorrer();
        if (n == null) {
            return "Estudiante no encontrado";
        } else {
            this.nombre = n.getEstudiante().getNomEstudiante();
            this.codigo = n.getEstudiante().getCodEstudiante();
            this.notas = n.getEstudiante().getNotas();
            return null;
        }
    }
    
    /*public Estudiante[] recorrer() {
        lista.recorrer();
    }*/
    
    
    // Getter
    public String getNombre() {
        return nombre;
    }

    public String getCodigo() {
        return codigo;
    }

    public double[] getNotas() {
        return notas;
    }
}
