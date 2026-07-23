function Certificates(){

const certificates = [

{
title:"Ethical Hacking and Cybersecurity",
issuer:"Arena Web Security",
details:
"Completed training focused on ethical hacking, cybersecurity fundamentals, web application security, vulnerability assessment and penetration testing."
}

];



return(

<section

id="certificates"

className="

text-white

px-6

md:px-8

py-16

md:py-20

"

>


<div className="max-w-6xl mx-auto">



<h2

className="

text-3xl

md:text-4xl


font-bold


text-purple-400


mb-10



text-center

md:text-left



hover:drop-shadow-[0_0_20px_rgba(168,85,247,1)]


transition

"

>

Certificates

</h2>







<div

className="

grid

grid-cols-1

md:grid-cols-2


gap-8

"

>


{

certificates.map((cert,index)=>(


<div

key={index}


className="

bg-white/5


backdrop-blur-xl



border

border-purple-500/30



rounded-2xl



p-6

md:p-8




transition-all


duration-700



hover:scale-105


hover:-translate-y-4



hover:bg-purple-500/10



hover:border-purple-300



hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]

"

>







<div

className="

h-40

md:h-52



rounded-xl



flex

items-center

justify-center



bg-purple-500/10



border

border-purple-400/30



mb-6



text-6xl

"

>

🏆

</div>







<h3

className="

text-xl

md:text-2xl


font-bold


text-purple-300


mb-4

"

>

{cert.title}

</h3>







<p

className="

text-gray-300


leading-relaxed


mb-5

"

>

{cert.details}

</p>







<p

className="

text-purple-400


font-semibold

"

>

Issued by: {cert.issuer}

</p>





</div>


))

}



</div>





</div>


</section>


)

}


export default Certificates;