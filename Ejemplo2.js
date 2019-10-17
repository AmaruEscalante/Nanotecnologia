var c = document.getElementById("canvas");
var ctx = c.getContext("2d"); //Se borra lo de abajo

	ctx.font = '20pt Calibri';
	ctx.fillStyle = 'black';
	ctx.fillText("Hola Mundo CRUD!", 50,50);

x = 250; y = 250; vx = 100; vy = 150;

function dibujar() {
	// body...
 ctx.fillStyle = '#ffffff';
 ctx.fillRect(0,0,1000,700);
 ctx.beginPath();
 ctx.rect(95,95,310,310);
 ctx.stroke();

 ctx.beginPath();
 ctx.arc(x,y,5,0,2*Math.PI)
 ctx.stroke();

 if(x>400){x=400;vx=-vx;}
 if(x<100){x=100;vx=-vx;}
 if(y>400){y=400;vy=-vy;}
 if(y<100){y=100;vy=-vy;}

 //vy = vy + 100*9.81*(1/60); Linea de la gravedad
 x = x + vx * (1/60);
 y = y + vy * (1/60);

}
setInterval(dibujar,1000/60);