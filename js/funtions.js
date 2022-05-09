// document.body.onload = function (){
    //   aler /alert (" hola mundo")
    //}



function suma(){

var a=0;
var b=0;
var suma=0;

alert ("este algoritmo  realiza una suma de sos valores ingresados por el usuario");
a=parseFloat(prompt("por favor ingrese el primer valor"));
b=parseFloat(prompt("por favor ingrese el segundo valor"));

suma=a+b;

alert("el resultado de la suma es:"+suma);



}





function operaciones(){
    var a=0;
    var b= 0;
    var suma,resta,multi,divi;
    

    alert (" este algoritmo se realizapara para la suma,resta,multiplicacion,divicion de dos numeros ingresados" ) ;

    a= parseFloat(prompt("por favor ingrese el primer valor"));
    b= parseFloat(prompt( "por favor ingrese el segundo valor"));

    suma = a+b;
    resta = a-b;
    multi = a*b;
    divi = a/b;

    alert (" el resultado de la suma es"+ suma);
    alert (" el resultado de la resta es"+resta);
    alert (" el resultado de la multi es"+multi);
    alert (" el resultado de la suma es"+ divi);

}

function numeroMayor(){
var a=0;
var b=0;
var nummayor=0

alert (" este algoritmo se realiza para determinar el mayor de dos numeros ingresados" );


a= parseFloat ( prompt (" por favor ingrese el primer numero"));
b= parseFloat (prompt ("ingrese el segundo numero"));

nummayor = a<b;

if (a < b) {
    alert("el  primer valor es mayor ") ;
  } else {
     alert("el segundo valor es menor");
 }
}


function numeroMenor (){
var a=0
var b=0
var c=0
var NME=0

alert ("este algoritmo se realiza para determinar el menor de tres numeros");

a= parseFloat (prompt("por favor ingrese el primer numero"));
b= parseFloat (prompt("por favor ingrese el segundo numero"));
c= parseFloat (prompt("por favor ingrese el tecer numero"));

NME= a<b<c;

if((a<=b) && (a<=c)) {

    alert ("el primer valor  son iguales ");
} else if( a==c ) { 
    alert ("el segundo valor  ");

} else  ((a<=c))
alert (("el tercer  valor es menor"));



}





function parimpar () {
var a=0
var b=0
var parimpar=0


alert ("este algoritmo se realiza para determinar si un numero es par o impar");

a= parseFloat (prompt ("por favor ingrese el primer  numero "));
b= parseFloat (prompt("por favor ingrese el segundo numero"));

parimpar=a<b

if ((a<b)){
alert ("el  valor es par");


}else {
alert(("el valor es impar"));

}

}


function elevado (){
    var lado=0
    var elevado=0
    



    alert ("este algoritmo se realiza para determinar el cuadrado de un numero");

lado= parseFloat (prompt ("por favor ingrese medida de lado del cuadrado "));

elevado=lado*lado;

alert("el cuadrado numero es:"+ elevado);

}



function area (){
    var b=0
    var c=0
    var d=o

    alert("este algoritmo se realiza para determinar el area de triangulo");

    b=parseFloat(prompt("por favor ingresar la base del triangulo"));
    c=parseFloat(prompt("por favor ingresar la altura del triangulo"));

d=(b*c)/2;

alert (" el area del triangulo es: " +d +"2" );


}





function cenmetr(){

var g=0
var h=o

alert("este algoritmo se realiza para determinar los centrimetros de un valor dado en metros")



metr=parseFloat(prompt("por favor ingrese la medida en metros"));


h= g*100;

alert("los centimetros son:"+h);

}




function edad (){
var a=0
var b=0


alert ("este algoritmo se realiza para determinar el año que nacio el usuario ingresando su edad")

b=parseFloat(prompt("por favor ingrese su edad"));


a=b-2022


alert ("en que año nacio:"+ a);




}




function invencion (){
    var d=0
    var e=0
    var f=0



alert ("este algoritmo realiza para determinar cuanto dinero ganara despues de numeros de años ,teniendo encuenta que el banco pagara el 2% de interes")


d=parseFloat(prompt("por favor ingrese su capital"));
e=parseFloat(prompt("por favor ingrese tiempo que va durar"));

f=(d*0.2)*e


alert("su ganancia es "+f);

}






function notas(){
    var n1=0;
    var n2=0;
    var n3=0;
    var n4=0;
    var n5=0;
    var pro=0;
    var n=0;

    alert ("este algoritmo para determinar requiere un sistema que le permita calcular el promedio de un de un alumno que tiene 5 calificaciones en la materia de ingles");

    n1=parseFloat(prompt("dijite la primera nota"));
    n2=parseFloat(prompt("dijite la primera nota"));
    n3=parseFloat(prompt("dijite la primera nota"));
    n4=parseFloat(prompt("dijite la primera nota"));
    n5=parseFloat(prompt("dijite la primera nota"));

    pro=n1+n2+n3+n4+n5
    n=pro/5

    alert("su promedio es: "+n);

    if (n<29){
        alert("usted perdio la asignatura");
    }else{
        alert("usted aprobo la asignatura");
    }
    


}
function manzanas (){

var a=0
var b=0
var p=0
var c=0

aler ("este algoritmo mostrara el descuento que tiene un usuario por la compra de manzanas");
a=parseInt(prompt("por favor digite ccuantos kilos de manzanas adquirio"));

if (a<3){

c=a*4500

}else if (a<5 ){

    b=a *4500
    p=b*0.10
    c= b-p

}

else if (a<10){
    b =a *4500
    p= b*0.20
    c=b-p

}


}
























