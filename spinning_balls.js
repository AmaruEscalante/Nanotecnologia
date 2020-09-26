var c=document.getElementById("canvas");
var ctx=c.getContext("2d");



x = 150; y= 250;
x2 = 150; y2 = 300;
vx = 100; vy = 150;
vx2 = -150; vy2 = 200;


function dibujar(){
	ctx.globalAlpha = 0.1;
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0,0,1000,700);
	ctx.beginPath();
	ctx.rect(95,95,310,310);
	ctx.stroke();
	ctx.globalAlpha = 1;

	vx = vx + (250-x)*(1/60)*50;
	vy = vy + (250-y)*(1/60)*50;
	vx2 = vx2 + (250-x2)*(1/60)*50;
	vy2 = vy2 + (250-y2)*(1/60)*50;


	//vy = vy + 981*(1/60);

	x = x + vx*(1/60);
	y = y + vy*(1/60);

	x2 = x2 + vx2*(1/60);
	y2 = y2 + vy2*(1/60);

	if (x > 400) {
		x = 400;
		vx = -vx;
	}

	if (x < 100) {
		x = 100;
		vx = -vx;
	}

	if (y > 400) {
		y = 400;
		vy = -vy;
	}

	if (y < 100) {
		y = 100;
		vy = -vy;
	}

	if (x2 > 400) {
		x2 = 400;
		vx2 = -vx2;
	}

	if (x2 < 100) {
		x2 = 100;
		vx2 = -vx2;
	}

	if (y2 > 400) {
		y2 = 400;
		vy2 = -vy2;
	}

	if (y2 < 100) {
		y2 = 100;
		vy2 = -vy2;
	}



	ctx.beginPath();
	ctx.arc(x, y, 5, 0, 2*Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(x2, y2, 5, 0, 2*Math.PI);
	ctx.stroke();


}


setInterval(dibujar, 1000/60);