import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


function Contact(){

return(

<section
id="contact"
className="
text-white
px-8
py-20
"
>


<div className="max-w-4xl mx-auto">



<h2
className="
text-4xl
font-bold

text-purple-400

mb-10

text-center

hover:drop-shadow-[0_0_20px_rgba(168,85,247,1)]

transition
"
>

Contact Me

</h2>




<div

className="

bg-white/5

backdrop-blur-xl


border

border-purple-500/30


rounded-3xl


p-10


text-center

shadow-[0_0_25px_rgba(168,85,247,0.2)]

"

>



<p

className="
text-gray-300

text-lg

mb-10

"

>

Interested in cybersecurity, research collaboration
or professional opportunities? Feel free to connect with me.

</p>





<div

className="
flex

justify-center

gap-12

"

>





{/* Gmail */}

<a

href="mailto:shahid9752.mi@gmail.com"

className="

text-red-400


transition-all

duration-500


hover:scale-150

hover:-translate-y-3


hover:drop-shadow-[0_0_35px_rgba(248,113,113,1)]

"

>


<FaEnvelope size={55}/>


</a>







{/* LinkedIn */}

<a

href="https://www.linkedin.com/in/md-shahid-nur/"

target="_blank"

rel="noopener noreferrer"


className="

text-blue-400


transition-all

duration-500


hover:scale-150

hover:-translate-y-3


hover:drop-shadow-[0_0_35px_rgba(96,165,250,1)]

"

>


<FaLinkedin size={55}/>


</a>







{/* Github */}

<a

href="https://github.com/Shahid9752"

target="_blank"

rel="noopener noreferrer"


className="

text-gray-200


transition-all

duration-500


hover:scale-150

hover:-translate-y-3


hover:drop-shadow-[0_0_35px_rgba(255,255,255,1)]

"

>


<FaGithub size={55}/>


</a>




</div>






<div

className="
mt-10

text-purple-300

font-semibold

"

>

shahid9752.mi@gmail.com

</div>



</div>



</div>


</section>


)

}


export default Contact;