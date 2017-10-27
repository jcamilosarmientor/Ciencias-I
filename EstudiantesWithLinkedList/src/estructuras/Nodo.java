package estructuras;

/**
 *
 * @author kaffeine
 */
public class Nodo {
    
    private Nodo sig;   // Nodo siguiente
    private Nodo ant;   // Nodo anterior
    private Estudiante estudiante;

    public Nodo(String nomEstudiante, String codEstudiante, String foto,double[] notas) {
        estudiante = new Estudiante(nomEstudiante, codEstudiante, foto, notas);
        this.sig = null;
        this.ant = null;
        
    }

    public Estudiante getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
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
