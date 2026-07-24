import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import SpaceBackground from "./components/SpaceBackground";


function App(){

return(

<div className="relative min-h-screen bg-[#080014]">


{/* Space Animation */}

<div className="fixed inset-0 -z-0">

<SpaceBackground />

</div>



{/* Website Content */}

<div className="relative z-10">


<Navbar/>

<Hero/>

<About/>

<Skills/>

<Projects/>

<Experience/>

<Research/>

<Certificates/>

<Contact/>


</div>


</div>

)

}


export default App;