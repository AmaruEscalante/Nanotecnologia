var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

n=50
var x = new Array(n);
for (var i = 0; i < n; i++) {  x[i] = new Array(n);}
var y = new Array(n);
for (var i = 0; i < n; i++) {  y[i] = new Array(n);}

for (var i = 0; i < n; i++) {
for (var j = 0; j < n; j++) {
  x[i][j] = 0;
  y[i][j] = 0;
}}

for (var i = 1; i < n-1; i++) {
for (var j = 1; j < n-1; j++) {
  x[i][j] = Math.floor(2*Math.random());
  y[i][j] = 0;
}}

function draw_Menu(){
ctx.fillStyle ='#000000';
ctx.fillRect(0,0,601,601);

for (var i = 0; i < n; i++) 
{
for (var j = 0; j < n; j++) 
{
ctx.fillStyle ='#000000';
if(x[i][j]>0)	{ctx.fillStyle ='#00aa00';}

ctx.beginPath();
ctx.arc(i*10+5,j*10+5,3,0,Math.PI*2,true);
ctx.fill();
}
}

for (var i = 1; i < n-1; i++) {
for (var j = 1; j < n-1; j++) {
  v=x[i-1][j-1]+x[i-1][j]+x[i-1][j+1]+x[i+1][j-1]+x[i+1][j]+x[i+1][j+1]+x[i][j+1]+x[i][j-1];
if(v<2)	{y[i][j]=0;}  
if(v>4)	{y[i][j]=0;}  
if(v==3){y[i][j]=1;}
if(v==2){y[i][j]=x[i][j];}    
}}

for (var i = 1; i < n-1; i++) {
for (var j = 1; j < n-1; j++) {
x[i][j]=y[i][j];
}}


}


setInterval(draw_Menu,1000/30);