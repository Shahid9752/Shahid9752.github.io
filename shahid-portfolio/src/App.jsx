import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal";


function App() {


  return (


    <div className="min-h-screen bg-[#050505] text-white">


      {/* Scroll Animation Controller */}

      <ScrollReveal />



      {/* Navigation */}

      <Navbar />



      {/* Main Website */}

      <main>


        {/* Hero Section */}

        <Hero />



        {/* About Section */}

        <About />



        {/* Skills Section */}

        <Skills />



        {/* Projects Section */}

        <Projects />



        {/* Experience Section */}

        <Experience />



        {/* Research Section */}

        <Research />



        {/* Certificates Section */}

        <Certificates />



        {/* Contact Section */}

        <Contact />


      </main>





      {/* Footer */}


      <footer

        className="
          border-t
          border-green-500/20

          py-6

          text-center

          font-mono

          text-sm

          text-gray-500
        "

      >


        <p>

          root@shahid:~$ system_status

        </p>



        <p className="text-green-500 mt-2">

          Portfolio system online ✓

        </p>



        <p className="mt-2">

          © {new Date().getFullYear()} Md Shahidul Islam

        </p>



      </footer>



    </div>


  );


}


export default App;