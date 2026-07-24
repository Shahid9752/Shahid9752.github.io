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

      planetRef.current.rotation.y += 0.003;

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

        roughness={0.7}

      />

    </mesh>

  );

}





// Stars

function MovingStars(){

  const starsRef = useRef();


  const positions = useMemo(()=>{

    const arr = new Float32Array(9000*3);


    for(let i=0;i<9000;i++){


      const radius = 120 + Math.random()*180;

      const angle = Math.random()*Math.PI*2;


      arr[i*3] =
        Math.cos(angle)*radius;


      arr[i*3+1] =
        (Math.random()-0.5)*200;


      arr[i*3+2] =
        Math.sin(angle)*radius-150;


    }


    return arr;


  },[]);



  useFrame(()=>{


    if(starsRef.current){

      starsRef.current.rotation.y += 0.0005;

      starsRef.current.rotation.z += 0.0001;

    }


  });



  return(

    <points ref={starsRef}>


      <bufferGeometry>


        <bufferAttribute

          attach="attributes-position"

          count={9000}

          array={positions}

          itemSize={3}

        />

      </bufferGeometry>


      <pointsMaterial

        size={0.012}

        color="white"

      />


    </points>

  );

}







function SpaceScene(){

return(

<>


{/* Better Earth Lighting */}

<ambientLight intensity={0.5}/>


<directionalLight

position={[10,5,5]}

intensity={8}

/>



<pointLight

position={[8,3,5]}

intensity={6}

color="#fff0c0"

/>



<pointLight

position={[-8,0,-5]}

intensity={2}

color="#4466ff"

/>





<MovingStars />





{/* Earth - Front */}

<Planet

texture="earth"

position={[0,0,2]}

size={2.7}

/>





{/* Very Far Planets */}



<Planet

texture="jupiter"

position={[-35,12,-90]}

size={5}

/>



<Planet

texture="mars"

position={[40,5,-80]}

size={3}

/>



<Planet

texture="venus"

position={[-35,-15,-75]}

size={2.8}

/>



<Planet

texture="mercury"

position={[35,15,-100]}

size={2}

/>



</>

);

}







export default function SpaceBackground(){

return(

<div className="fixed inset-0">


<Canvas

camera={{

position:[0,0,15]

}}

>


<SpaceScene />


<OrbitControls

enableZoom={false}

/>


</Canvas>


</div>

);

}