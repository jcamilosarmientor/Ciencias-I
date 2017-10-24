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
        lista = new LinkedList(1000);
    }
    
    public int registrar(String nombre, String codigo, double[] notas) {
        System.out.println("lista");
        lista.recorrer();
        return lista.insetar(nombre, codigo, notas);
    }
    
    public String buscar(String codigo) {
        Nodo n = lista.buscar(codigo);
        lista.recorrer();
        if (n == null) {
            return "Estudiante no encontrado";
        } else {
            this.nombre = n.getNomEstudiante();
            this.codigo = n.getCodEstudiante();
            this.notas = n.getNotas();
            return null;
        }
    }
    
    
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
