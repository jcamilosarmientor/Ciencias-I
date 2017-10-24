package launcher;

import javafx.util.converter.BigIntegerStringConverter;

/**
 *
 * @author jcamilosarmientor
 */
public class EstudiantesWithLinkedList {

    public static void main(String[] args) {
        BigIntegerStringConverter bg = new BigIntegerStringConverter();
        if (bg.fromString("20152020067").compareTo(bg.fromString("20142020069")) > 0) {
            System.out.println("x");
        } else {
            System.out.println("y");
        }
        System.out.println();
    }
    
}
