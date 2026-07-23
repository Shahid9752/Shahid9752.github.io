function Experience(){

const experiences = [

{
role:"Cybersecurity Intern",
company:"Arena Web Security",
period:"Internship",

description:
"Worked on web application security, vulnerability assessment and penetration testing. Performed security testing using OWASP methodology and industry-standard tools including Burp Suite, Nmap, SQLMap, Nuclei and Acunetix."
},


{
role:"Data Analyst",
company:"Inalyze Property Management",
period:"Professional Experience",

description:
"Worked on data analysis, reporting and business data management to support operational decision making and improve business processes."
},


{
role:"Manager",
company:"Abriana IT",
period:"Professional Experience",

description:
"Managed operational tasks and technology-related activities while coordinating business operations."
}

];



return(

<section

id="experience"

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

Experience

</h2>






<div

className="

relative


border-l-2


border-purple-500/50



ml-3


md:ml-5


pl-6

md:pl-10



space-y-8

"

>


{

experiences.map((exp,index)=>(


<div

key={index}

className="

relative



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




{/* Timeline Dot */}

<div

className="

absolute


w-5

h-5



rounded-full



bg-purple-500



-left-[37px]



top-8



shadow-[0_0_25px_rgba(168,85,247,1)]

"

>

</div>







<h3

className="

text-xl

md:text-2xl


font-bold


text-purple-300


mb-3

"

>

{exp.role}

</h3>





<h4

className="

text-lg


text-gray-200


mb-2

"

>

{exp.company}

</h4>





<p

className="

text-purple-400


mb-4

"

>

{exp.period}

</p>





<p

className="

text-gray-300


leading-relaxed

"

>

{exp.description}

</p>



</div>


))

}


</div>





</div>


</section>


)

}


export default Experience;