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

            drop-shadow-[0_0_15px_rgba(0,255,136,0.7)]
          "

        >

          $ ./security_tools --list

        </h2>



        {/* Terminal Status */}

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



        {/* Skills Grid */}

        <div

          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4

            gap-4
            md:gap-5
          "

        >

          {skills.map((skill, index) => (

            <div

              key={index}

              className="
                group

                bg-black/60

                border
                border-green-500/15

                rounded-lg

                p-5

                font-mono

                transition-all
                duration-300

                hover:-translate-y-1

                hover:bg-green-500/5

                hover:border-green-400/50

                hover:shadow-[0_0_20px_rgba(0,255,136,0.12)]

                cursor-default
              "

            >

              {/* Number */}

              <div

                className="
                  text-xs

                  text-gray-600

                  mb-4
                "

              >

                SKILL_{String(index + 1).padStart(2, "0")}

              </div>



              {/* Skill */}

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



              {/* Status */}

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

          ))}

        </div>



        {/* Footer */}

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