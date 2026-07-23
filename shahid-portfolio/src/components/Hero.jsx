function Hero(){

return(

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

overflow-hidden

"
>


<div

className="
max-w-6xl

mx-auto


grid

md:grid-cols-2


gap-10


items-center

"

>




{/* LEFT CONTENT */}

<div

className="
text-center

md:text-left

"

>


<p

className="
text-purple-400

text-lg

md:text-xl

mb-4

hover:drop-shadow-[0_0_15px_rgba(168,85,247,1)]

transition

"

>

Hello, I'm

</p>






<h1

className="

text-4xl

sm:text-5xl

md:text-6xl


font-bold


mb-5


hover:text-purple-200


transition


hover:drop-shadow-[0_0_25px_rgba(168,85,247,1)]

"

>

Md Shahidul Islam

</h1>







<h2

className="

text-xl

sm:text-2xl

md:text-3xl


font-semibold


text-purple-300


mb-6

"

>

Cybersecurity & Penetration Tester

</h2>







<p

className="

text-gray-300


text-base

md:text-lg


leading-relaxed


mb-8

"

>

Passionate about cybersecurity, web application security,
penetration testing, vulnerability assessment and machine
learning based cyber threat detection. Experienced with
OWASP methodology and security tools including Burp Suite,
Nmap, SQLMap, Nuclei and Acunetix.

</p>







<div

className="

flex

flex-col

sm:flex-row


gap-5


justify-center

md:justify-start

"

>





<a

href="/CV.pdf"

download


className="

px-7

py-3


rounded-xl


bg-purple-600


font-semibold



text-center


transition-all


duration-500



hover:scale-110


hover:-translate-y-2



hover:bg-purple-500



hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]

"

>

Download CV

</a>







<a

href="#contact"


className="

px-7

py-3


rounded-xl


border

border-purple-500


font-semibold



text-center


transition-all


duration-500



hover:scale-110


hover:-translate-y-2



hover:bg-purple-500/20



hover:shadow-[0_0_35px_rgba(168,85,247,0.8)]

"

>

Contact Me

</a>





</div>



</div>









{/* IMAGE */}


<div

className="

flex

justify-center


order-first

md:order-last

"

>



<div

className="

relative


transition-all

duration-700



hover:scale-110


hover:-translate-y-5

"

>



<div

className="

absolute

inset-0


rounded-full


bg-purple-600


blur-3xl


opacity-40


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


border-4


border-purple-500



shadow-[0_0_50px_rgba(168,85,247,0.8)]



transition-all


duration-700



hover:border-purple-300

"

/>



</div>



</div>






</div>


</section>


)

}


export default Hero;