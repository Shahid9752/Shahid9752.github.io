function Skills(){

const skills = [

"Web Application Security",
"Penetration Testing",
"OWASP Top 10",
"Burp Suite",
"Nmap",
"SQLMap",
"Nuclei",
"Acunetix",
"Linux",
"OSINT",
"Vulnerability Assessment",
"Network Security"

];


return(

<section

id="skills"

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


mb-8

md:mb-10



text-center

md:text-left



hover:drop-shadow-[0_0_20px_rgba(168,85,247,1)]


transition

"

>

Technical Skills

</h2>







<div

className="

grid


grid-cols-1


sm:grid-cols-2


lg:grid-cols-4


gap-6


md:gap-8

"

>


{

skills.map((skill,index)=>(


<div


key={index}



className="


bg-white/5


backdrop-blur-xl



border

border-purple-500/30



rounded-2xl



p-5

md:p-6



text-center



text-gray-200



font-semibold



transition-all


duration-700


ease-out




hover:scale-110


hover:-translate-y-4




hover:bg-purple-500/10




hover:text-purple-200




hover:border-purple-300




hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]



cursor-pointer


"

>


{skill}



</div>


))


}


</div>





</div>


</section>


)

}


export default Skills;