var c=document.getElementById("canvas");
var ctx=c.getContext("2d");


  ctx.font='20pt Calibri';
  ctx.fillStyle='white';
  ctx.fillText("Hola mundo pestilente", 50,50);
      
x=200; y=250; vx= 100; vy=150
x2=300; y2=300; vx2= -50; vy2=200

function dibujar(){

	ctx.fillStyle='#0fd1f0'			//color blanco
	ctx.fillRect(0,0,500,500);		//tamaño del cuadrado a rellenar
	ctx.beginPath();			//inicio de un cuadrado
	ctx.rect(95,95,310,310);		//tamaño del cuadrado(esquina sup izq, esquina inf der)
	ctx.stroke();


	//Define el movimiento de las bolas
	x=x+vx*(1/60);
	y=y+vy*(1/60);

	x2=x2+vx2*(1/60);
	y2=y2+vy2*(1/60);

	if(x>400){x=400;vx=-vx}
	if(x<100){x=100;vx=-vx}
	if(y>400){y=400;vy=-vy}
	if(y<100){y=100;vy=-vy}
	ctx.beginPath();
	ctx.arc(x,y,5,0,2*Math.PI);
	ctx.stroke();

	if(x2>400){x2=400;vx2=-vx2}
	if(x2<100){x2=100;vx2=-vx2}
	if(y2>400){y2=400;vy2=-vy2}
	if(y2<100){y2=100;vy2=-vy2}
	ctx.beginPath();
	ctx.arc(x2,y2,5,0,2*Math.PI);
	ctx.stroke();
}
setInterval(dibujar,1000/60);

