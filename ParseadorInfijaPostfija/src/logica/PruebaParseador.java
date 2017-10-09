package logica;

/**
 *Programa realizado por Alexander Borb�n Alp�zar
 *profesor del Instituto Tecnol�gico de Costa Rica
 *
 *Para comentarios o sugerencias esccribir a
 *aborbon@itcr.ac.cr
 */

import java.applet.*;
import java.awt.*;

public class PruebaParseador extends java.applet.Applet {
	Parseador miparser=new Parseador(); //Constructor del parseador
	String expresion=new String(); //Expresi�n a parsear
	double valor=0; //Valor en el que se va a evaluar
	TextField inputexpresion = new TextField("x + 5"); //Textfield donde se digita la expresi�n a parsear
	TextField inputvalor = new TextField("0",5); //Textfield donde se digita el valor a evaluar en la expresi�n
	Button boton= new Button("Evaluar la expresi�n"); //Bot�n para evaluar
	TextField outputparseo = new TextField("          "); //Resultado de parsear la expresi�n
	TextField outputevaluar = new TextField("         "); //Resultado de la evaluaci�n en la expresi�n
	Label info = new Label("Informaci�n en extremo importante           ", Label.CENTER); //Label donde se dan los errores

	public void init(){ //Todo se pone en el applet
		add(inputexpresion);
		add(inputvalor);
		add(boton);
		add(outputparseo);
		add(outputevaluar);
		add(info);
	}//init

	public boolean action(Event evt, Object arg){
		if (evt.target instanceof Button){ //Si se apret� el bot�n
			try{
				info.setText(""); //Se pone el Label de los errores vac�o
				expresion=inputexpresion.getText(); //Se lee la expresi�n
				valor=Double.valueOf(inputvalor.getText()).doubleValue(); //Se lee el valor a evaluar
				outputparseo.setText(miparser.parsear(expresion)); //Se parsea la expresi�n
				outputevaluar.setText(""+redondeo(miparser.f(valor),5)); //Se eval�a el valor y se redondea
			}catch(Exception e){ //Si hubo error lo pone en el Label correspondiente
				info.setText(e.toString());
			}
		}//if del bot�n
		return true;
	}//action

	/*
	 *Se redondea un n�mero con los decimales dados
	 */
	private double redondeo(double numero, int decimales){
		return ((double)Math.round(numero*Math.pow(10,decimales)))/Math.pow(10,decimales);
	}

}//PolCero