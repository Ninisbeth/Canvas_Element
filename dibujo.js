var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);


var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
//var lineas = 30;
//var l = 0;
//var colorcito = "red";
/*var m = 29;
var yi, xf;
var xi2, yf2;
var yi3;
var colorcito = "red";
var colorcito2 = "green";
var colorcito3 = "blue";
var colorcito4 = "yellow";*/

//while(l<lineas && m>-1)
/*while(l<lineas && m>-1)
{
    yi=10*l;
    xf=10*(l+1);
    yf2=10*(m+1);
    xf3=10*m;

    dibujarLinea(colorcito,0,yi,xf,300);
    //dibujarLinea(colorcito2,xf3,0,300,yf2);
    //dibujarLinea(colorcito3,300,yi,xf3,300);
    //dibujarLinea(colorcito4,xf3,0,0,yf2);
    l++;
    //m--;
}*/

/*dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);*/

/*dibujarLinea(colorcito2,299,299,299,1);
dibujarLinea(colorcito2,1,1,299,1);

dibujarLinea(colorcito3,299,1,299,299);
dibujarLinea(colorcito3,299,299,1,299);*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath(); 

    /*for(var i=0; i<31; i++)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial,yinicial +10*i);
        lienzo.lineTo(xfinal+10*i,yfinal);
        lienzo.stroke();
        lienzo.closePath(); 

    }*/
}

function dibujoPorClick()
{
    var xxx= parseInt(texto.value);
    var lineas = 30;
    var l = 0;
    var colorcito = "red" 
    var yi, xf;
    for(l=0; l<lineas; l++)
    {
        yi=10*l;
        xf=10*(l+1);
        dibujarLinea(colorcito,0,yi,xf,300);
    }

}