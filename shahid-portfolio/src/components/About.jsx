function About(){

return(

<section
id="about"
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

About Me

</h2>






<div

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


hover:-translate-y-3



hover:bg-purple-500/10



hover:border-purple-300



hover:shadow-[0_0_45px_rgba(168,85,247,0.6)]

"

>



<p

className="

text-gray-300


text-base

md:text-lg


leading-relaxed


mb-5

"

>

I am Md Shahidul Islam, a Cybersecurity and Penetration
Testing enthusiast with a Bachelor of Science in Computer
Science and Engineering. My primary interests include web
application security, vulnerability assessment, penetration
testing, and machine learning-based cyber threat detection.

</p>






<p

className="

text-gray-300


text-base

md:text-lg


leading-relaxed

"

>

I have hands-on experience with security testing tools and
methodologies including OWASP, Burp Suite, Nmap, SQLMap,
Nuclei, Acunetix and Linux-based security environments.
My research focuses on improving cybersecurity solutions
through machine learning approaches.

</p>



</div>








<div

className="

grid

grid-cols-1

md:grid-cols-2


gap-8


mt-8

md:mt-10

"

>






{/* Education */}

<div

className="

bg-white/5

backdrop-blur-xl


border

border-purple-500/30


rounded-2xl


p-6



transition-all


duration-700



hover:scale-105


hover:-translate-y-3



hover:bg-purple-500/10



hover:border-purple-300



hover:shadow-[0_0_45px_rgba(168,85,247,0.7)]

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

Education

</h3>



<p className="text-gray-300">
BSc in Computer Science & Engineering
</p>


<p className="text-gray-300">
Shanto-Mariam University of Creative Technology
</p>


<p className="text-gray-300">
CGPA: 3.38 / 4.00
</p>


<p className="text-gray-300">
2019 - 2024
</p>



</div>







{/* Research Interest */}


<div

className="

bg-white/5

backdrop-blur-xl


border

border-purple-500/30


rounded-2xl


p-6



transition-all


duration-700



hover:scale-105


hover:-translate-y-3



hover:bg-purple-500/10



hover:border-purple-300



hover:shadow-[0_0_45px_rgba(168,85,247,0.7)]

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

Research Interest

</h3>



<p className="text-gray-300">
Cyber Threat Detection
</p>


<p className="text-gray-300">
Machine Learning Security
</p>


<p className="text-gray-300">
Web Application Security
</p>


<p className="text-gray-300">
Malware Analysis
</p>



</div>




</div>




</div>


</section>


)

}


export default About;