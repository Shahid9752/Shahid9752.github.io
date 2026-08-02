import { useEffect, useRef, useState } from "react";


function Reveal({ children, delay = 0 }) {


const ref = useRef(null);


const [show,setShow] = useState(false);




useEffect(()=>{


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){

setShow(true);

}

});


},


{

threshold:0.15

}



);



if(ref.current){

observer.observe(ref.current);

}



return ()=>{

if(ref.current){

observer.unobserve(ref.current);

}

};


},[]);






return (


<div


ref={ref}



style={{

transitionDelay:`${delay}ms`

}}



className={

`

transition-all

duration-700

ease-out


${

show

?

"opacity-100 translate-y-0 scale-100"

:

"opacity-0 translate-y-10 scale-95"

}


`

}



>



{children}


</div>



);


}



export default Reveal;