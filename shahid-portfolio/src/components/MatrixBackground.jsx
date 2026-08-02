import { useEffect, useRef } from "react";


function MatrixBackground(){


const canvasRef = useRef(null);



useEffect(()=>{


const canvas = canvasRef.current;

const ctx = canvas.getContext("2d");



let width = canvas.width = window.innerWidth;

let height = canvas.height = window.innerHeight;



const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&";


const fontSize = 14;


let columns = Math.floor(width / fontSize);



let drops = Array(columns).fill(1);





function draw(){


ctx.fillStyle = "rgba(3,6,4,0.08)";

ctx.fillRect(0,0,width,height);



ctx.fillStyle = "#00ff88";

ctx.font = `${fontSize}px monospace`;



for(let i=0;i<drops.length;i++){



const text = letters.charAt(

Math.floor(Math.random()*letters.length)

);



ctx.fillText(

text,

i*fontSize,

drops[i]*fontSize

);



if(

drops[i]*fontSize > height

&& Math.random()>0.975

){

drops[i]=0;

}



drops[i]++;



}



}



const interval=setInterval(draw,45);





function resize(){


width = canvas.width = window.innerWidth;

height = canvas.height = window.innerHeight;


columns=Math.floor(width/fontSize);


drops=Array(columns).fill(1);


}



window.addEventListener(

"resize",

resize

);




return()=>{


clearInterval(interval);


window.removeEventListener(

"resize",

resize

);


};


},[]);






return(


<canvas


ref={canvasRef}


className="

fixed

inset-0

pointer-events-none

opacity-[0.12]

z-[-1]

"


/>


);


}



export default MatrixBackground;