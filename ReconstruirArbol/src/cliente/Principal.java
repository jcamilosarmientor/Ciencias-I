package cliente;

import controladores.Controlador;
import estructuras.*;
import java.awt.Color;
import java.awt.Graphics;

/**
 *
 * @author jcamilosarmientor
 */
public class Principal extends javax.swing.JFrame {

    private Controlador controlador;

    public Principal() {
        initComponents();
        radioPreOrden.setSelected(true);
        txtPostOrden.setEditable(false);
        controlador = new Controlador();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        radioPreOrden = new javax.swing.JRadioButton();
        radioPostOrden = new javax.swing.JRadioButton();
        txtInOrden = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        txtPreOrden = new javax.swing.JTextField();
        txtPostOrden = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        cnv = new java.awt.Canvas();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        radioPreOrden.setText("PreOrden");
        radioPreOrden.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                radioPreOrdenActionPerformed(evt);
            }
        });

        radioPostOrden.setText("PostOrden");
        radioPostOrden.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                radioPostOrdenActionPerformed(evt);
            }
        });

        jLabel1.setText("InOrden");

        jButton1.setText("Dibujar");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 711, Short.MAX_VALUE)
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(29, 29, 29)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 63, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(27, 27, 27)
                        .addComponent(txtInOrden, javax.swing.GroupLayout.PREFERRED_SIZE, 190, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(41, 41, 41)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(radioPostOrden)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(txtPostOrden, javax.swing.GroupLayout.PREFERRED_SIZE, 190, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(radioPreOrden)
                                .addGap(18, 18, 18)
                                .addComponent(txtPreOrden, javax.swing.GroupLayout.PREFERRED_SIZE, 190, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 43, Short.MAX_VALUE)
                                .addComponent(jButton1)
                                .addGap(34, 34, 34))))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(cnv, javax.swing.GroupLayout.PREFERRED_SIZE, 711, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(0, 0, Short.MAX_VALUE))))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(cnv, javax.swing.GroupLayout.PREFERRED_SIZE, 412, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(radioPreOrden)
                    .addComponent(txtInOrden, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel1)
                    .addComponent(txtPreOrden, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton1))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(radioPostOrden)
                    .addComponent(txtPostOrden, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(39, 39, 39))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

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
            dibujaTexto(cnv.getGraphics(), p.getValor() + " ", x - 5, y);
            if (p.getIzq() != null) {
                dibujarLinea(cnv.getGraphics(), x, y + 2, x - distancia, y + 60 - 12);
                dibujarArbol(p.getIzq(), x - distancia, y + 60, d);
            }
            if (p.getDer() != null) {
                dibujarLinea(cnv.getGraphics(), x, y + 2, x + distancia, y + 60 - 12);
                dibujarArbol(p.getDer(), x + distancia, y + 60, d);
            }
        }
    }

    private void radioPreOrdenActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_radioPreOrdenActionPerformed
        radioPostOrden.setSelected(false);
        txtPostOrden.setEditable(false);
        txtPreOrden.setEditable(true);
    }//GEN-LAST:event_radioPreOrdenActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed

        //int inOrden[] = { 6, 7, 8, 10, 11, 12, 13, 15 };
        int inOrden[] = {6, 7, 8, 10, 15};
        //int postOrden[] = {6, 8, 7, 13, 12, 11, 15, 10};
        int postOrden[] = { 6 ,8 ,7 ,15 ,10 }; 
        //int preOrden[] = {10, 7, 6, 8, 15, 11, 12, 13};
        int preOrden[] = {10, 7, 6, 8, 15 };

        String in = "6,7,8,10,11,12,13,15";
        String post = "6,8,7,13,12,11,15,10";
        String pre = "10,7,6,8,15,11,12,13";
        
        in = "-1,6,7,8,10,15";
        post = "-1,6,8,7,15,10";
        pre = "10,7,6,8,15";
        
        in = txtInOrden.getText();
        post = txtPostOrden.getText();
        pre = txtPreOrden.getText();

        Nodo raiz;
        if (radioPreOrden.isSelected()) {
            raiz = controlador.reconstruirPreOrden(in, pre);
        } else {
            raiz = controlador.reconstruirPostOrden(in, post);
        }

        dibujarArbol(raiz, 320, 20, 160);
    }//GEN-LAST:event_jButton1ActionPerformed

    private void radioPostOrdenActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_radioPostOrdenActionPerformed
        radioPreOrden.setSelected(false);
        txtPreOrden.setEditable(false);
        txtPostOrden.setEditable(true);
    }//GEN-LAST:event_radioPostOrdenActionPerformed

    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Principal().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private java.awt.Canvas cnv;
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JRadioButton radioPostOrden;
    private javax.swing.JRadioButton radioPreOrden;
    private javax.swing.JTextField txtInOrden;
    private javax.swing.JTextField txtPostOrden;
    private javax.swing.JTextField txtPreOrden;
    // End of variables declaration//GEN-END:variables
}
