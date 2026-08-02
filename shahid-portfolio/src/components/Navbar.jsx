import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function Navbar() {


const [open,setOpen] = useState(false);



const menuItems = [

"About",
"Skills",
"Projects",
"Experience",
"Research",
"Certificates",
"Contact"

];





return (


<motion.nav


initial={{

y:-100,

opacity:0

}}


animate={{

y:0,

opacity:1

}}


transition={{

duration:.6

}}



className="
fixed

top-0

left-0

w-full

z-50

bg-[#030604]/90

backdrop-blur-md

border-b

border-green-500/20
"

>


<div


className="
max-w-6xl

mx-auto

px-6

md:px-8

py-4

flex

justify-between

items-center
"

>





{/* Logo */}


<motion.a


href="#home"



whileHover={{

scale:1.08

}}



transition={{

duration:.2

}}



className="
font-mono

text-lg

md:text-xl

font-bold

text-green-400

hover:text-green-300

transition

whitespace-nowrap

drop-shadow-[0_0_10px_rgba(0,255,136,.6)]
"

>


<span className="text-gray-500">

&lt;

</span>


Shahid


<span className="text-gray-500">

/&gt;

</span>



</motion.a>









{/* Desktop Menu */}



<div


className="
hidden

md:flex

items-center

gap-6

font-mono

text-sm
"

>



{


menuItems.map((item,index)=>(


<motion.a


key={item}



href={`#${item.toLowerCase()}`}



initial={{

opacity:0,

y:-10

}}



animate={{

opacity:1,

y:0

}}



transition={{

delay:index*.08

}}



whileHover={{

y:-3,

scale:1.05

}}



className="
text-gray-400

transition-all

duration-300

hover:text-green-400
"

>


<span className="text-green-600">

./

</span>


{item}



</motion.a>



))


}



</div>









{/* Mobile Button */}



<motion.button


type="button"



onClick={()=>setOpen(!open)}



whileTap={{

scale:.8

}}



className="
md:hidden

text-green-400

text-3xl

font-mono

hover:text-green-300

transition
"



aria-label="Toggle navigation"


>


{


open ? "×" : "☰"


}


</motion.button>






</div>









{/* Mobile Menu */}




<AnimatePresence>


{


open && (




<motion.div



initial={{

height:0,

opacity:0

}}



animate={{

height:"auto",

opacity:1

}}



exit={{

height:0,

opacity:0

}}



transition={{

duration:.3

}}



className="
md:hidden

overflow-hidden

bg-[#030604]/95

backdrop-blur-md

border-t

border-green-500/10

px-6

py-5
"

>



<div


className="
flex

flex-col

gap-4

font-mono

text-sm
"

>



{


menuItems.map((item,index)=>(



<motion.a



key={item}



href={`#${item.toLowerCase()}`}



onClick={()=>setOpen(false)}



initial={{

opacity:0,

x:-30

}}



animate={{

opacity:1,

x:0

}}



transition={{

delay:index*.05

}}



whileTap={{

scale:.95

}}



className="
text-gray-400

py-2

border-b

border-green-500/10

transition

hover:text-green-400
"

>



<span className="text-green-500">

$

</span>


{" "}


cd


{" "}


{item}



</motion.a>



))


}





</div>





</motion.div>




)


}



</AnimatePresence>







</motion.nav>


);


}



export default Navbar;