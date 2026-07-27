import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef, useMemo } from "react";


// Planet Component
function Planet({ texture, position, size }) {

  const planetRef = useRef();

  const image = useLoader(
    TextureLoader,
    `/textures/${texture}.jpg`
  );


  useFrame(() => {

    if (planetRef.current) {
      planetRef.current.rotation.y += 0.004;
    }

  });


  return (

    <mesh
      ref={planetRef}
      position={position}
    >

      <sphereGeometry
        args={[size,64,64]}
      />


      <meshStandardMaterial

        map={image}

        roughness={0.6}

        metalness={0.1}

      />


    </mesh>

  );

}



// Moving Stars
function MovingStars(){

  const starsRef = useRef();


  const positions = useMemo(()=>{

    const arr = new Float32Array(7000 * 3);


    for(let i=0;i<7000;i++){

      const radius = 40 + Math.random()*80;

      const angle = Math.random()*Math.PI*2;


      arr[i*3] =
      Math.cos(angle)*radius;


      arr[i*3+1] =
      (Math.random()-0.5)*80;


      arr[i*3+2] =
      Math.sin(angle)*radius;


    }


    return arr;


  },[]);



  useFrame(()=>{

    if(starsRef.current){

      starsRef.current.rotation.y += 0.001;

      starsRef.current.rotation.x += 0.0002;

    }

  });



  return (

    <points ref={starsRef}>


      <bufferGeometry>

        <bufferAttribute

          attach="attributes-position"

          count={7000}

          array={positions}

          itemSize={3}

        />

      </bufferGeometry>


      <pointsMaterial

        size={0.015}

        color="white"

      />


    </points>

  );

}





function SpaceScene(){


return (

<>


{/* Lighting */}

<ambientLight intensity={0.4}/>


<directionalLight

position={[5,5,5]}

intensity={2.5}

/>


<pointLight

position={[3,2,4]}

intensity={4}

color="#ffe6b3"

/>



<MovingStars />





{/* Earth Front */}

<Planet

texture="earth"

position={[0,0,0]}

size={2.5}

/>





{/* Other Planets */}

<Planet

texture="jupiter"

position={[-10,3,-8]}

size={3.2}

/>



<Planet

texture="mars"

position={[10,2,-12]}

size={2}

/>



<Planet

texture="venus"

position={[-8,-4,-15]}

size={2.2}

/>



<Planet

texture="mercury"

position={[9,-3,-18]}

size={1.5}

/>



</>

);


}






export default function SpaceBackground(){


return (

<div className="fixed inset-0 bg-black">


<Canvas

camera={{

position:[0,0,12],

fov:45

}}

>


<SpaceScene />


<OrbitControls

enableZoom={false}

autoRotate

autoRotateSpeed={0.3}

/>


</Canvas>


</div>

);


}