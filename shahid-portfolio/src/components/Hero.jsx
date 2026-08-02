import { useEffect, useState } from "react";
import Reveal from "./Reveal";


function Hero() {


  const fullText =
    "Cybersecurity & Penetration Tester";


  const [text, setText] = useState("");

  const [index, setIndex] = useState(0);



  useEffect(() => {


    if(index < fullText.length){


      const timer = setTimeout(()=>{


        setText(
          fullText.slice(0,index+1)
        );


        setIndex(index+1);



      },70);



      return ()=>clearTimeout(timer);


    }


  },[index]);






return (


<section

id="home"

className="
min-h-screen

flex
items-center

px-6
md:px-8

pt-28
pb-16

text-white
"



>


<Reveal>



<div


className="
max-w-6xl

mx-auto

w-full

grid

md:grid-cols-2

gap-12

items-center
"



>



{/* LEFT TERMINAL */}



<div

className="
order-2
md:order-1

font-mono
"



>



<div


className="
bg-black/70

border
border-green-500/20

rounded-xl

overflow-hidden

transition-all
duration-500

hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]

active:shadow-[0_0_35px_rgba(0,255,136,0.25)]
"



>



<div

className="
flex

items-center

gap-2

px-4

py-3

bg-black/80

border-b
border-green-500/10
"

>


<span className="w-3 h-3 rounded-full bg-red-500/60"/>

<span className="w-3 h-3 rounded-full bg-yellow-500/60"/>

<span className="w-3 h-3 rounded-full bg-green-500/60"/>


<span className="ml-3 text-xs text-gray-600">

shahid@cybersecurity:~

</span>


</div>






<div

className="
p-6
md:p-8
"

>


<div className="text-sm text-gray-500 mb-6">


<span className="text-green-400">

root@shahid:~$

</span>

{" "}

whoami


</div>






<h1

className="
text-3xl
sm:text-4xl
md:text-5xl

font-bold

text-green-400

mb-5

leading-tight
"

>


Md Shahidul Islam


</h1>






<div

className="
min-h-[32px]

text-lg
md:text-xl

text-green-300

mb-6
"

>


<span className="text-gray-500">

&gt;

</span>


{" "}


{text}



<span

className="
inline-block

w-[2px]

h-5

ml-1

bg-green-400

animate-pulse

align-middle
"

/>



</div>







<div

className="
text-sm

text-gray-500

space-y-2

mb-7
"

>


<p>

<span className="text-green-400">

[+]

</span>

{" "}

Web Application Security


</p>



<p>

<span className="text-green-400">

[+]

</span>

{" "}

Penetration Testing


</p>



<p>

<span className="text-green-400">

[+]

</span>

{" "}

Cyber Threat Detection


</p>


</div>








<p

className="
text-gray-400

leading-relaxed

mb-8

text-sm
md:text-base
"



>


Passionate about cybersecurity, web application security,
vulnerability assessment, penetration testing and machine
learning-based cyber threat detection.


</p>








<div

className="
flex

flex-col
sm:flex-row

gap-4
"



>


<a


href="/CV.pdf"

download


className="
px-6
py-3

rounded-lg

bg-green-500/10

border
border-green-500/30

text-green-400

text-center

font-mono
font-semibold

transition-all

duration-300

hover:bg-green-500/15

hover:border-green-400

hover:-translate-y-1

hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]

active:scale-95

active:shadow-[0_0_25px_rgba(0,255,136,0.3)]
"



>


./download_cv.sh


</a>





<a


href="#contact"


className="
px-6
py-3

rounded-lg

border
border-gray-700

text-gray-400

text-center

font-mono
font-semibold

transition-all

duration-300

hover:text-green-400

hover:border-green-500/40

hover:-translate-y-1

active:scale-95

active:shadow-[0_0_25px_rgba(0,255,136,0.3)]
"



>


./contact.sh


</a>



</div>





<div

className="
mt-8

text-xs

text-gray-600
"



>


<span className="text-green-500">

root@shahid:~$

</span>


{" "}

system_ready


<span className="text-green-400 ml-2">

✓

</span>


</div>




</div>



</div>



</div>







{/* RIGHT IMAGE */}



<div


className="
order-1
md:order-2

flex

justify-center

items-center
"



>



<div


className="
relative

animate-[pulse_4s_ease-in-out_infinite]
"



>



<div


className="
absolute

-inset-3

rounded-full

border

border-green-500/20

animate-pulse
"



>
</div>






<img


src="/profile.jpg"


alt="Md Shahidul Islam"



className="
relative

w-52
h-52

sm:w-64
sm:h-64

md:w-72
md:h-72

object-cover

rounded-full

border-2

border-green-500/40

shadow-[0_0_30px_rgba(0,255,136,0.12)]

transition-all

duration-500

hover:border-green-400/70

hover:scale-105

active:scale-110

hover:shadow-[0_0_40px_rgba(0,255,136,0.2)]
"



/>



</div>


</div>





</div>



</Reveal>



</section>


);


}


export default Hero;