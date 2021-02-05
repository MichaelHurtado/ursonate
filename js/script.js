let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = window.innerWidth
hydraCanvas.height = window.innerHeight
hydraCanvas.id = "hydraCanvas";
hydraCanvas.style.position = "absolute";
hydraCanvas.style.zIndex = 2;
hydraCanvas.style.top = 0;
hydraCanvas.style.left = 0;
hydraCanvas.getContext("webgl", { preserveDrawingBuffer: true });
hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
  width: 1920,
  height:1080,
});
document.querySelector(".placeholder").appendChild(hydraCanvas)

s0.initImage('/hydra+p5/kurt.jpg')
src(o0)
.modulate(noise(50).pixelate(10,5),0.001)
.modulateScale(noise().pixelate(5,10),-0.01)
.blend(o0,0.1)
.modulate(o0,-0.001)
.colorama(-0.002)
.scale(0.995)
.layer(noise(50,1).thresh().pixelate([20,10,100],[10,5,30]).luma().mult(src(s0).modulate(noise(2))))
.out()

render(o1)

// var p1 = new P5;
// p1.draw = ()=>{
// //p1.clear();
// p1.textSize(50);
// p1.strokeWeight(5);
// p1.stroke(0,0,0);
// p1.fill(200,150,0);
// p1.text('De noche se ven otras cosas',p1.mouseX,p1.mouseY);
// }

var elt;
var wordset = ['RrRrRrRrummpff?','Rakete rinnzekete','fö \n bö','fümmsböwötää','zee tee wee bee','kwiiee kwiiee','RrRrRrRrRrRr','böwöböpö','Rattatata tattatata tattatata'];
var word;
var i;
const s = ( p1 ) => {

  let x = 100;
  let y = 100;

  p1.setup = () => {
    let canvas = p1.createCanvas(hydraCanvas.width, hydraCanvas.height);
    p1.pixelDensity(1);
    elt = canvas.elt;
    s1.init({src:elt})
    canvas.hide();
    p1.iniciar();
  };

  p1.draw = () => {
    //p1.clear();
    p1.textSize(50);
    p1.strokeWeight(5);
    p1.stroke(0,0,0);
    p1.fill(252,190,17);
    p1.text(word,p1.mouseX,p1.mouseY);
  };

  p1.mousePressed = ()=> {
    p1.clear();
    p1.iniciar();

    var audio = new Audio('/hydra+p5/kurt.webm');
    audio.play();
  }
  p1.iniciar = ()=> {
    i=p1.int(p1.random(9));
    word=wordset[i];  
  }
};

let myp5 = new p5(s);

//src(o0).modulateScale(gradient().g(),0.9).color(0.5,0.9,1.2).layer(src(s1)).out(o1)

src(o0).modulateScale(gradient().g(),0.9).color(1.0,1.0,1.0).layer(src(s1)).out(o1)


//src(s1).out(o1)

// const codeblocks = document.getElementsByClassName("codeblock");

// let curCanvas;



// for (const cb of codeblocks) {
//   const cd = cb.querySelector("div");
//   cd.style.width = "512px";
//   cd.style.height = "512px";
//   cd.style.left = "50%";
//   cd.style.position = "relative";
//   cd.style.transform = "translate(-50%, 0%)";

//   let dummyCanvas = document.createElement("canvas");
//   dummyCanvas.width = 1920;
//   dummyCanvas.height = 1080;
//   dummyCanvas.style.zIndex = 1;
//   dummyCanvas.style.position = "absolute";
//   dummyCanvas.style.top = 0;
//   dummyCanvas.style.left = 0;

//   if (curCanvas === undefined) curCanvas = dummyCanvas;
//   cd.appendChild(dummyCanvas);

//   const linkEl = document.createElement("p");
//   linkEl.className = "openin";
//   linkEl.innerHTML = `<a href="https://hydra.ojack.xyz/?code=${btoa(
//     encodeURIComponent(cb.querySelector("code").textContent)
//   )}" target="_blank" class="openin">open in editor⤴</a>`;

//   cd.insertAdjacentElement("afterend", linkEl);

//   const spaceEl = document.createElement("div");
//   spaceEl.className = "spacer";

//   linkEl.insertAdjacentElement("afterend", spaceEl);

//   var observer = new IntersectionObserver(
//     function(entries) {
//       if (entries[0].isIntersecting === true) {
//         // probably you dont need this
//         // hush();
//         // solid(0, 0, 0, 0).out(o0);
//         // solid(0, 0, 0, 0).out(o1);
//         // solid(0, 0, 0, 0).out(o2);
//         // solid(0, 0, 0, 0).out(o3);
//         // render(o0);
//         setTimeout(() => {
//           eval(cb.querySelector("code").textContent);
//         }, 60);
//         cd.appendChild(hydraCanvas);
//         curCanvas = dummyCanvas;
//       }
//     },
//     { threshold: [0.7] }
//   );

//   observer.observe(cb);
// }

// setInterval(() => {
//   if (curCanvas != undefined) {
//     curCanvas.getContext("2d").drawImage(hydraCanvas, 0, 0);
//   }
// }, 300);