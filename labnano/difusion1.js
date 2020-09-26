var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

n=1
var x = new Array(n);
var y = new Array(n);
var x2 = new Array(n);
var y2 = new Array(n);

for (var i = 0; i < n; i++) {
x[i] = 200; y[i]=250;
x2[i] = 300; y2[i]=250;
}

function draw_Menu(){
	ctx.fillStyle ='#000000';
	ctx.globalAlpha=0.01;
	ctx.fillRect(0,0,601,601);
	ctx.globalAlpha=1;

	for (var i = 0; i < n; i++) {
	ang=Math.PI*2*Math.random();
	x[i]=x[i]+Math.cos(ang);
	y[i]=y[i]+Math.sin(ang);

	ctx.fillStyle ='#0000ff';
	ctx.beginPath();
	ctx.arc(x[i],y[i],1,0,Math.PI*2,true);
	ctx.fill();
	}

	for (var i = 0; i < n; i++) {
	ang=Math.PI*2*Math.random();
	x2[i]=x2[i]+Math.cos(ang)/2;
	y2[i]=y2[i]+Math.sin(ang)/2;

	ctx.fillStyle ='#ff0000';
	ctx.beginPath();
	ctx.arc(x2[i],y2[i],1,0,Math.PI*2,true);
	ctx.fill();
	}

	for (var i = 0; i < n; i++) {
	ang=Math.PI*2*Math.random();
	x2[i]=x2[i]+Math.cos(ang)/2;
	y2[i]=y2[i]+Math.sin(ang)/2;

	ctx.fillStyle ='#fff001';
	ctx.beginPath();
	ctx.arc(x2[i],y2[i],1,0,Math.PI*2,true);
	ctx.fill();
	}

}


setInterval(draw_Menu,0.002);

