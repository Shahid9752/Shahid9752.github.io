function Skills() {

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


  return (

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
            font-mono

            text-green-400

            mb-10

            text-center
            md:text-left

            drop-shadow-[0_0_15px_rgba(0,255,136,0.7)]
          "

        >

          $ ./security_tools --list

        </h2>



        <div

          className="
            bg-black/60

            border
            border-green-500/20

            rounded-xl

            p-5

            mb-8

            font-mono

            text-sm
          "

        >

          <p className="text-gray-500">

            <span className="text-green-400">
              root@shahid:~$
            </span>

            {" "}

            scanning_security_stack...

          </p>


          <p className="text-green-400 mt-2">

            [OK] 12 security capabilities detected

          </p>


        </div>




        <div

          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4

            gap-5
          "

        >


          {skills.map((skill,index)=>(


            <div

              key={index}

              className="
                group

                relative

                bg-black/60

                border
                border-green-500/15

                rounded-xl

                p-5

                font-mono


                transform-gpu

                transition-all

                duration-500

                ease-out


                hover:-translate-y-3

                hover:rotate-1


                hover:border-green-400/60


                hover:bg-green-500/5


                hover:shadow-[0_0_35px_rgba(0,255,136,0.25)]


                active:scale-105

                active:-translate-y-3


                active:border-green-400


                active:shadow-[0_0_40px_rgba(0,255,136,0.35)]


                overflow-hidden

              "

            >



              <div

                className="
                  absolute

                  inset-0

                  bg-gradient-to-br

                  from-green-400/10

                  to-transparent

                  opacity-0

                  group-hover:opacity-100

                  transition

                  duration-500
                "

              />




              <div

                className="
                  relative
                  z-10
                "

              >


                <div

                  className="
                    text-xs

                    text-gray-600

                    mb-4
                  "

                >

                  SKILL_{String(index+1).padStart(2,"0")}


                </div>




                <div

                  className="
                    text-green-400

                    font-semibold

                    text-sm

                    md:text-base

                    group-hover:text-green-300

                    transition
                  "

                >

                  <span className="text-green-600">

                    $

                  </span>


                  {" "}


                  {skill}


                </div>




                <div

                  className="
                    mt-4

                    text-xs

                    text-gray-600
                  "

                >

                  status:

                  <span className="text-green-500 ml-1">

                    available

                  </span>


                </div>


              </div>


            </div>


          ))}


        </div>





        <div

          className="
            mt-8

            font-mono

            text-sm

            text-gray-500
          "

        >

          <span className="text-green-400">

            root@shahid:~$

          </span>


          {" "}

          security stack initialized.


          <span className="text-green-400">

            {" "}✓

          </span>


        </div>



      </div>


    </section>


  );

}


export default Skills;