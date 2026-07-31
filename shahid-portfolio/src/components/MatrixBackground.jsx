import { useEffect, useRef } from "react";


export default function MatrixBackground(){

  const canvasRef = useRef(null);


  useEffect(()=>{


    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");


    let width = window.innerWidth;

    let height = window.innerHeight;


    canvas.width = width;

    canvas.height = height;



    const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";


    const fontSize = 18;


    let columns =
    Math.floor(width / fontSize);


    let drops = [];



    for(let i = 0; i < columns; i++){

      drops[i] =
      Math.random() * height;

    }





    function draw(){


      // Smooth dark trail

      ctx.fillStyle =
      "rgba(0,0,0,0.06)";


      ctx.fillRect(
        0,
        0,
        width,
        height
      );



      // Neon green but clean

      ctx.fillStyle =
      "#00ff88";


      ctx.font =
      `${fontSize}px monospace`;




      for(let i = 0; i < drops.length; i++){


        const text =
        characters[
          Math.floor(
            Math.random() *
            characters.length
          )
        ];



        ctx.fillText(

          text,

          i * fontSize,

          drops[i]

        );



        // Medium slow speed

        drops[i] +=
        fontSize * 0.3;



        if(drops[i] > height){

          drops[i] = 0;

        }


      }



      requestAnimationFrame(draw);


    }


    draw();





    function resize(){


      width =
      window.innerWidth;


      height =
      window.innerHeight;


      canvas.width =
      width;


      canvas.height =
      height;



      columns =
      Math.floor(
        width / fontSize
      );



      drops =
      Array(columns).fill(0);


    }



    window.addEventListener(
      "resize",
      resize
    );



    return ()=>{

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
      z-0
      opacity-25
      pointer-events-none
      "

    />

  );


}