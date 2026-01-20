const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = [];
const count = 80;

for(let i=0;i<count;i++){
  particles.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*0.6,
    dy: (Math.random()-0.5)*0.6
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(56,189,248,0.6)";
    ctx.fill();

    p.x+=p.dx;
    p.y+=p.dy;

    if(p.x<0||p.x>w) p.dx*=-1;
    if(p.y<0||p.y>h) p.dy*=-1;
  });

  requestAnimationFrame(animate);
}
animate();