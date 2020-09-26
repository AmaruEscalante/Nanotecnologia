var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

n=10;m= 10; p=5;
var x = new Array(n);
var y = new Array(n);
var x2 = new Array(n);
var y2 = new Array(n);

var vx2 = new Array(n);
var vy2 = new Array(n);
 

for (var i = 0; i < n; i++) {
x[i] = 110; y[i]=110;
x2[i] = 300; y2[i]=250;
vx2[i]= -50; vy2[i]=200;
//x3[i] = 400; y3[i]=250;
}

//x = 150; y= 250;
//x2 = 150; y2 = 300;
//vx = 100; vy = 150;
//vx2 = -150; vy2 = 200;
width = 80; height = 500;

	
function dibujar(){
	ctx.fillStyle ='#000000';
	ctx.globalAlpha=0.01;
	ctx.fillRect(0,0,1000,700);
	ctx.globalAlpha=1;


	// Drawing 3 rectangles
	ctx.rect(95,95,width,height);
	ctx.rect(95+width,95,width,height);
	ctx.rect(95+width*2,95,width,height);
	ctx.rect(95+width*3,95,width,height);
	ctx.rect(95+width*4,95,width,height);
	ctx.rect(95+width*5,95,width,height);
	ctx.rect(95+width*6,95,width,height);
	ctx.strokeStyle = 'white';
	ctx.stroke();
	ctx.globalAlpha = 1;

	for (var i = 0; i < n; i++) {
	ang=Math.PI*2*Math.random();
	x[i]=x[i]+Math.cos(ang)*10;
	y[i]=y[i]+Math.sin(ang)*10;


	if(x[i]>170){x[i]=170;vx[i]=-vx}
	if(x[i]<100){x[i]=100;vx[i]=-vx}
	if(y[i]>590){y[i]=590;vy[i]=-vy}
	if(y[i]<100){y[i]=100;vy[i]=-vy}




	ctx.fillStyle ='#ff0000';
	ctx.beginPath();
	ctx.arc(x[i],y[i],5,0,Math.PI*2,true);
	ctx.fill();


	}

	for (var i = 0; i < m; i++) {	
	ang=Math.PI*2*Math.random();
	x2[i]=x2[i]+Math.cos(ang)*10;
	y2[i]=y2[i]+Math.sin(ang)*10;

	//x2[i]=x2[i]+vx2[i]*(1/60);
	//y2[i]=y2[i]+vy2[i]*(1/60);


    if(x2[i]>170+width){x2[i]=170+width;vx2[i]=-vx2}
	if(x2[i]<100+width){x2[i]=100+width;vx2[i]=-vx2}
	if(y2[i]>590){y2[i]=590;vy2[i]=-vy2}
	if(y2[i]<100){y2[i]=100;vy2[i]=-vy2}

	ctx.fillStyle ='#0000ff';
	ctx.beginPath();
	ctx.arc(x2[i],y2[i],5,0,Math.PI*2,true);
	ctx.fill();
	}
	
/*	for (var i = 0; i < p; i++) {	
	ang=Math.PI*3*Math.random();
	x3[i]=x3[i]+Math.cos(ang)*10;
	y3[i]=y3[i]+Math.sin(ang)*10;

    if(x3[i]>170+width*2){x3[i]=170+width*2;vx3[i]=-vx3}
	if(x3[i]<100+width*2){x3[i]=100+width*2;vx3[i]=-vx3}
	if(y3[i]>590){y3[i]=590;vy3[i]=-vy3}
	if(y3[i]<100){y3[i]=100;vy3[i]=-vy3}

	ctx.fillStyle ='#0000ff';
	ctx.beginPath();
	ctx.arc(x3[i],y3[i],5,0,Math.PI*3,true);
	ctx.fill();
	}*/
}

setInterval(dibujar, 1000/60);