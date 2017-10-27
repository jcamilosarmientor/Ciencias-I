package estructuras;

public class Estudiante {
    
    private String nomEstudiante; // Nombre del estudiante
    private String codEstudiante; // Código del estudiante
    private String foto;  // foto del estudiante
    private double notas[]; // Notas del estudiante

    public Estudiante(String nomEstudiante, String codEstudiante, String foto, double[] notas) {
        this.nomEstudiante = nomEstudiante;
        this.codEstudiante = codEstudiante;
        this.foto = foto;
        this.notas = notas;
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

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public double[] getNotas() {
        return notas;
    }

    public void setNotas(double[] notas) {
        this.notas = notas;
    }
}
