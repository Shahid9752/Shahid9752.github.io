function Projects(){

const projects = [

{
title:"Cyber Threat Detection Using Machine Learning",
description:
"Machine learning based cyber threat detection system focused on malware detection and security analysis with explainable AI insights.",
tech:[
"Machine Learning",
"Cybersecurity",
"Explainable AI",
"Malware Detection"
]
},


{
title:"Flutter Ecommerce App",
description:
"Developed a mobile ecommerce application with modern user interface, product management and shopping features.",
tech:[
"Flutter",
"Dart",
"Firebase"
]
},


{
title:"Stylista Ecommerce Website",
description:
"Designed and developed a responsive ecommerce website with modern UI design and product management functionality.",
tech:[
"HTML",
"CSS",
"JavaScript"
]
},


{
title:"Weather Application",
description:
"A weather application providing real-time weather information using API integration.",
tech:[
"API",
"JavaScript",
"Frontend"
]
},


{
title:"Library Management System",
description:
"A software system for managing books, users and library operations efficiently.",
tech:[
"C++",
"Database",
"Software Development"
]
}

];



return(

<section

id="projects"

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

Projects

</h2>






<div

className="

grid


grid-cols-1


md:grid-cols-2



gap-8

md:gap-10

"

>



{

projects.map((project,index)=>(


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



cursor-pointer

"

>



<h3

className="

text-xl

md:text-2xl


font-bold



text-purple-300



mb-4

"

>

{project.title}

</h3>





<p

className="

text-gray-300



leading-relaxed



mb-6

"

>

{project.description}

</p>







<div

className="

flex

flex-wrap


gap-3

"

>


{

project.tech.map((item,i)=>(


<span

key={i}

className="

px-3

py-2


rounded-full



bg-purple-500/20



border

border-purple-400/30



text-sm



transition-all



duration-500



hover:scale-110



hover:bg-purple-500/40

"

>

{item}

</span>


))


}



</div>





</div>


))


}


</div>





</div>


</section>


)

}


export default Projects;