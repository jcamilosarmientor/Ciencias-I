package cliente;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartFrame;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

/**
 *
 * @author Juan Camilo
 */
public class Graficadora {

    private int arreglos[][] = {};
    private XYSeries series;

    public Graficadora() {
        this.series = new XYSeries("Radix sort");
    }

    public void agregarValores(int tamanioArreglo, int operaciones) {
        // x,y
        series.add(tamanioArreglo, operaciones);
    }

    public void graficar() {
        XYSeriesCollection dataset = new XYSeriesCollection();
        dataset.addSeries(series);

        JFreeChart chart = ChartFactory.createXYLineChart(
                "Radix Sort", // Título
                "Tamño arreglo (x)", // Etiqueta Coordenada X
                "Operaciones elementales", // Etiqueta Coordenada Y
                dataset, // Datos
                PlotOrientation.VERTICAL,
                true, // Muestra la leyenda de los productos (Producto A)
                false,
                false
        );

        // Mostramos la grafica en pantalla
        ChartFrame frame = new ChartFrame("Radix sort", chart);
        frame.pack();
        frame.setVisible(true);
    }

}
