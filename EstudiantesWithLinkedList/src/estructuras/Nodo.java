package estructuras;

/**
 *
 * @author kaffeine
 */
public class Nodo {
    
    private String nomEstudiante; // Nombre del estudiante
    private String codEstudiante; // Código del estudiante
    private Imagen foto;  // foto del estudiante
    private double notas[]; // Notas del estudiante
    private Nodo sig;   // Nodo siguiente
    private Nodo ant;   // Nodo anterior

    public Nodo(String nomEstudiante, String codEstudiante, double[] notas) {
        this.nomEstudiante = nomEstudiante;
        this.codEstudiante = codEstudiante;
        this.notas = notas;
        this.sig = null;
        this.ant = null;
        
    }

    public String getNomEstudiante() {
        return nomEstudiante;
    }

    public void setNomEstudiante(String nomEstudiante) {
        this.nomEstudiante = nomEstudiante;
    }

    public String getCodEstudiante() {
        return codEstudiante;
    }

    public void setCodEstudiante(String codEstudiante) {
        this.codEstudiante = codEstudiante;
    }

    public double[] getNotas() {
        return notas;
    }

    public void setNotas(double[] notas) {
        this.notas = notas;
    }

    public Nodo getSig() {
        return sig;
    }

    public void setSig(Nodo sig) {
        this.sig = sig;
    }

    public Nodo getAnt() {
        return ant;
    }

    public void setAnt(Nodo ant) {
        this.ant = ant;
    }
}
