import { useState } from "react";


function Navbar(){

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



return(

<nav

className="
fixed
top-0
left-0

w-full

z-50

bg-black/50

backdrop-blur-xl

border-b

border-purple-500/30

"

>


<div

className="
max-w-6xl

mx-auto

px-8

py-5


flex

justify-between

items-center

"

>


{/* Logo */}

<a

href="#home"

className="
text-3xl

font-bold

text-purple-400


hover:text-purple-200


hover:drop-shadow-[0_0_20px_rgba(168,85,247,1)]


transition

"

>

Md Shahidul Islam

</a>






{/* Desktop Menu */}

<div

className="
hidden

md:flex

gap-8

text-gray-300

"

>


{

menuItems.map((item)=>(


<a

key={item}

href={`#${item.toLowerCase()}`}

className="

transition-all

duration-500


hover:text-purple-300


hover:scale-125


hover:-translate-y-1


hover:drop-shadow-[0_0_15px_rgba(168,85,247,1)]

"

>

{item}

</a>


))


}


</div>







{/* Mobile Button */}

<button

onClick={()=>setOpen(!open)}

className="

md:hidden


text-purple-400


text-3xl

"

>

☰

</button>



</div>







{/* Mobile Menu */}


{

open &&

<div

className="

md:hidden

bg-black/80

backdrop-blur-xl


border-t

border-purple-500/30


px-8

py-6

"

>


<div

className="
flex

flex-col

gap-6

"

>


{

menuItems.map((item)=>(


<a

key={item}

href={`#${item.toLowerCase()}`}

onClick={()=>setOpen(false)}

className="

text-gray-300


transition-all

duration-500


hover:text-purple-300


hover:scale-110


"

>

{item}

</a>


))

}


</div>


</div>


}


</nav>


)

}


export default Navbar;