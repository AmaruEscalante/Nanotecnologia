var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

n=1000;m= 2; p=5;
var x = new Array(n);
var y = new Array(n);
var x2 = new Array(n);
var y2 = new Array(n);

var vx2 = new Array(n);
var vy2 = new Array(n);
var vx = new Array(n);
var vy = new Array(n);
var timecounter = 0; 


//Ficks law vars
var D = 2e-14;
var Q = 5.58e14;
 
x3=300; y3=300; vx3= -50; vy3=300;

for (var i = 0; i < n; i++) {
x[i] = 90; y[i]=310;
x2[i] = 300; y2[i]=250;
vx2[i]= -50; vy2[i]=200;
vx[i]= -50; vy[i]=200;

//x3[i] = 400; y3[i]=250;
}

//x = 150; y= 250;
//x2 = 150; y2 = 300;
//vx = 100; vy = 150;
//vx2 = -150; vy2 = 200;
width = 80; height = 500;
pointx = 95; pointy = 95;
counter1 = 0; counter2 = 0;counter3 = 0; counter4 = 0;
counter5 = 0;
timer = 60;
past = 0;





//TIEMPO 
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);
  ctx.clearRect(4,4,100,30);
  ctx.font="20px Arial";
  ctx.fillStyle = 'black';
  ctx.fillText(h + ':' + m+':'+s, 4, 24); 
  var t = setTimeout(startTime, 500);

  if (s != past){
  	timecounter++;	
  }
  
  //ctx.clearRect(4,4,100,30);
  ctx.font="20px Arial";
  ctx.fillStyle = 'white';
  ctx.fillText('Tiempo transcurrido(s): ' + timecounter, 300, 24); 
  past = s;
}
	
function checkTime(i) {
  if (i < 10) {
  	i = "0" + i
  };
  return i;
}
	
function dibujar(){
	//Rectangulos del grafico
	ctx.rect(pointx,pointy,width,height);
	ctx.rect(pointx+width,pointy,width,height);
	ctx.rect(pointx+width*2,pointy,width,height);
	ctx.rect(pointx+width*3,pointy,width,height);
	ctx.rect(pointx+width*4,pointy,width,height);

	ctx.strokeStyle = 'white';
	ctx.stroke();
	//ctx.globalAlpha = 1;


	ctx.fillStyle ='#000000';
	//ctx.globalAlpha=0.01;
	ctx.fillRect(0,0,1000,700);
	ctx.globalAlpha=0.7;


	// Titulos del cuadro
	ctx.font='15pt Calibri';
	ctx.fillStyle='white';
	ctx.fillText("0",width,120+height);
	ctx.fillText("0.2",80+width,120+height);
	ctx.fillText("0.4",80+width*2,120+height);
	ctx.fillText("0.6",80+width*3,120+height);
	ctx.fillText("0.8",80+width*4,120+height);
	ctx.fillText("1",80+width*5,120+height);

	ctx.font='30pt Calibri';
	ctx.fillStyle='white';
	ctx.fillText("Profundidad (um)",40+width,170+height);



	// Drawing 3 rectangles


	for (var i = 0; i < n; i++) {
	ang=Math.PI*2*Math.random();
	x[i]=x[i]+Math.cos(ang)*2;
	y[i]=y[i]+Math.sin(ang)*2;


	if(x[i]>170+width*4){x[i]=170+width*4;vx[i]=-vx}
	if(x[i]<100){x[i]=100;vx[i]=-vx}
	if(y[i]>590){y[i]=590;vy[i]=-vy}
	if(y[i]<100){y[i]=100;vy[i]=-vy}

	if(x[i]<175){
		ctx.fillStyle ='#ff0000';
		counter1++;
	}else if (x[i]<175+width){
		ctx.fillStyle ='#0000ff';
		counter2++;	
	}else if (x[i]<175+width*2){
		ctx.fillStyle ='#00ff00';
		counter3++;	
	}else if (x[i]<175+width*3){
		ctx.fillStyle ='#ffff00';
		counter4++;	
	}else if (x[i]<175+width*4){
		ctx.fillStyle ='#0f5ff0';
		counter5++;	
	}
	
	ctx.beginPath();

	ctx.arc(x[i],y[i],5,0,Math.PI*2,true);
	ctx.fill();
	}

	ctx.font='15pt Calibri';
	ctx.fillStyle='white';
	ctx.fillText(counter1/1000*100+'%',width*1+30,80);
	ctx.fillText(counter2/1000*100+'%',width*2+30,80);
	ctx.fillText(counter3/1000*100+'%',width*3+30,80);
	ctx.fillText(counter4/1000*100+'%',width*4+30,80);
	ctx.fillText(counter5/1000*100+'%',width*5+30,80);


	counter2 = 0;counter1 = 0;	counter3 = 0;counter4 = 0;
	counter5 = 0;

/*
		x3=x3+vx3*(1/60);
	y3=y3+vy3*(1/60);
	if(x3>400){x3=400;vx3=-vx3}
	if(x3<100){x3=100;vx3=-vx3}
	if(y3>400){y3=400;vy3=-vy3}
	if(y3<100){y3=100;vy3=-vy3}
	ctx.beginPath();
	ctx.arc(x3,y3,5,0,3*Math.PI);
	ctx.stroke();

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
	ctx.arc(x2[i],y2[i],10,0,Math.PI*2,true);
	ctx.fill();
	}
*/
	
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
setInterval(startTime, 1000/60);