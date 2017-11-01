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
        this.recorrer();
        return lista.insertar(nombre, codigo,foto, notas);
    }
    
    public String buscar(String codigo) {
        Nodo n = lista.buscar(codigo);
        if (n == null) {
            return "Estudiante no encontrado";
        } else {
            this.nombre = n.getEstudiante().getNomEstudiante();
            this.codigo = n.getEstudiante().getCodEstudiante();
            this.notas = n.getEstudiante().getNotas();
            return null;
        }
    }
    
    public String[][] recorrer() {
        int tamanio = lista.size();
        String notas;
        String info[][] = new String[tamanio][4];
        Estudiante arrEstudiantes[] = lista.recorrer();
        for (int i = 0; i < arrEstudiantes.length; i++) {
            notas = "";
            info[i][0] = arrEstudiantes[i].getCodEstudiante();
            info[i][1] = arrEstudiantes[i].getNomEstudiante();
            
            for (int j = 0; j < arrEstudiantes[i].getNotas().length ;j++) {
                if (j != 0) {
                  notas += " | ";
                } 
                notas += arrEstudiantes[i].getNotas()[j];
            }
            info[i][2] = notas;
            
            info[i][3] = arrEstudiantes[i].getFoto();
        }
        return info;
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
