function About() {

  return (

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


        {/* Section Title */}

        <h2

          className="
            text-3xl
            md:text-4xl

            font-bold
            font-mono

            text-green-400

            mb-10

            text-center
            md:text-left

            drop-shadow-[0_0_15px_rgba(0,255,136,0.6)]
          "

        >

          $ cat about_me.txt

        </h2>



        {/* About Terminal */}

        <div

          className="
            bg-black/60

            border
            border-green-500/15

            rounded-xl

            overflow-hidden

            mb-8
          "

        >

          {/* Terminal Header */}

          <div

            className="
              flex

              items-center

              gap-2

              px-4
              py-3

              bg-black/70

              border-b
              border-green-500/10
            "

          >

            <span className="w-3 h-3 rounded-full bg-red-500/50">
            </span>

            <span className="w-3 h-3 rounded-full bg-yellow-500/50">
            </span>

            <span className="w-3 h-3 rounded-full bg-green-500/50">
            </span>

            <span className="ml-3 text-xs text-gray-600 font-mono">
              about_me.txt
            </span>

          </div>



          {/* About Content */}

          <div

            className="
              p-6
              md:p-8

              font-mono
            "

          >

            <p

              className="
                text-gray-400

                text-sm
                md:text-base

                leading-relaxed

                mb-5
              "

            >

              <span className="text-green-500">
                &gt;
              </span>

              {" "}

              I am Md Shahidul Islam, a Cybersecurity and
              Penetration Testing enthusiast with a Bachelor
              of Science in Computer Science and Engineering.

            </p>



            <p

              className="
                text-gray-400

                text-sm
                md:text-base

                leading-relaxed

                mb-5
              "

            >

              <span className="text-green-500">
                &gt;
              </span>

              {" "}

              My primary interests include web application
              security, vulnerability assessment, penetration
              testing and machine learning-based cyber threat
              detection.

            </p>



            <p

              className="
                text-gray-400

                text-sm
                md:text-base

                leading-relaxed
              "

            >

              <span className="text-green-500">
                &gt;
              </span>

              {" "}

              I have hands-on experience with security testing
              methodologies and tools including OWASP, Burp Suite,
              Nmap, SQLMap, Nuclei, Acunetix and Linux-based
              security environments.

            </p>

          </div>

        </div>



        {/* Information Cards */}

        <div

          className="
            grid

            grid-cols-1

            md:grid-cols-2

            gap-6
            md:gap-8
          "

        >


          {/* Education */}

          <div

            className="
              bg-black/60

              border
              border-green-500/15

              rounded-xl

              p-6

              font-mono

              transition-all
              duration-300

              hover:-translate-y-2

              hover:bg-green-500/5

              hover:border-green-400/40

              hover:shadow-[0_0_25px_rgba(0,255,136,0.1)]
            "

          >

            <div className="text-xs text-gray-600 mb-4">

              MODULE_01

            </div>



            <h3

              className="
                text-xl

                font-bold

                text-green-400

                mb-5
              "

            >

              Education

            </h3>



            <div className="space-y-2 text-sm">

              <p className="text-gray-300">

                BSc in Computer Science & Engineering

              </p>


              <p className="text-gray-500">

                Shanto-Mariam University of Creative Technology

              </p>


              <p className="text-gray-500">

                Duration:

                <span className="text-green-400 ml-2">

                  2019 - 2024

                </span>

              </p>

            </div>

          </div>



          {/* Research Interest */}

          <div

            className="
              bg-black/60

              border
              border-green-500/15

              rounded-xl

              p-6

              font-mono

              transition-all
              duration-300

              hover:-translate-y-2

              hover:bg-green-500/5

              hover:border-green-400/40

              hover:shadow-[0_0_25px_rgba(0,255,136,0.1)]
            "

          >

            <div className="text-xs text-gray-600 mb-4">

              MODULE_02

            </div>



            <h3

              className="
                text-xl

                font-bold

                text-green-400

                mb-5
              "

            >

              Research Interest

            </h3>



            <div className="space-y-3 text-sm">


              <p className="text-gray-400">

                <span className="text-green-500">

                  [+]

                  
                </span>

                {" "}

                Cyber Threat Detection

              </p>



              <p className="text-gray-400">

                <span className="text-green-500">

                  [+]

                  
                </span>

                {" "}

                Machine Learning Security

              </p>



              <p className="text-gray-400">

                <span className="text-green-500">

                  [+]

                  
                </span>

                {" "}

                Web Application Security

              </p>



              <p className="text-gray-400">

                <span className="text-green-500">

                  [+]

                  
                </span>

                {" "}

                Malware Analysis

              </p>


            </div>

          </div>


        </div>



        {/* Status */}

        <div

          className="
            mt-8

            font-mono

            text-sm

            text-gray-600
          "

        >

          <span className="text-green-400">

            root@shahid:~$

          </span>

          {" "}

          about_module loaded

          <span className="text-green-400 ml-2">

            ✓

          </span>

        </div>


      </div>

    </section>

  );

}


export default About;