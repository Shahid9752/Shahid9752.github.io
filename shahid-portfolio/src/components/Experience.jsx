function Experience() {

  const experiences = [

    {
      role: "Cybersecurity Intern",
      company: "Arena Web Security",
      period: "Internship",

      description:
        "Worked on web application security, vulnerability assessment and penetration testing. Performed security testing using OWASP methodology and security tools including Burp Suite, Nmap, SQLMap, Nuclei and Acunetix."
    },


    {
      role: "Data Analyst",
      company: "Inalyze Property Management",
      period: "Professional Experience",

      description:
        "Worked on data analysis, reporting and business data management to support operational decision making and improve business processes."
    },


    {
      role: "Manager",
      company: "Abriana IT",
      period: "Professional Experience",

      description:
        "Managed operational tasks and technology-related activities while coordinating business operations."
    }

  ];


  return (

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

          $ cat experience.log

        </h2>



        {/* Terminal Status */}

        <div

          className="
            bg-black/60

            border
            border-green-500/15

            rounded-xl

            p-5

            mb-10

            font-mono

            text-sm
          "

        >

          <p className="text-gray-500">

            <span className="text-green-400">
              root@shahid:~$
            </span>

            {" "}

            ./load_experience.sh

          </p>


          <p className="text-green-400 mt-2">

            [OK] Experience records loaded

          </p>

        </div>



        {/* Experience List */}

        <div className="space-y-6">


          {experiences.map((exp, index) => (

            <div

              key={index}

              className="
                relative

                bg-black/60

                border
                border-green-500/15

                rounded-xl

                p-6
                md:p-8

                font-mono

                transition-all
                duration-300

                hover:-translate-y-2

                hover:bg-green-500/5

                hover:border-green-400/40

                hover:shadow-[0_0_25px_rgba(0,255,136,0.1)]
              "

            >


              {/* Top Row */}

              <div

                className="
                  flex

                  flex-col
                  sm:flex-row

                  sm:items-center

                  sm:justify-between

                  gap-2

                  mb-5
                "

              >

                <div className="flex items-center gap-3">

                  <span className="text-green-500">

                    [{String(index + 1).padStart(2, "0")}]

                  </span>


                  <span className="text-gray-600">

                    EXPERIENCE_RECORD

                  </span>

                </div>


                <span

                  className="
                    text-xs

                    text-green-500

                    border
                    border-green-500/20

                    rounded-md

                    px-3
                    py-1

                    w-fit
                  "

                >

                  ACTIVE

                </span>

              </div>



              {/* Role */}

              <h3

                className="
                  text-xl
                  md:text-2xl

                  font-bold

                  text-green-400

                  mb-3
                "

              >

                {exp.role}

              </h3>



              {/* Company */}

              <h4

                className="
                  text-base
                  md:text-lg

                  text-gray-300

                  mb-2
                "

              >

                {exp.company}

              </h4>



              {/* Period */}

              <p

                className="
                  text-sm

                  text-green-500/70

                  mb-5
                "

              >

                {exp.period}

              </p>



              {/* Description */}

              <p

                className="
                  text-gray-400

                  text-sm
                  md:text-base

                  leading-relaxed

                  max-w-4xl
                "

              >

                <span className="text-green-500">
                  &gt;
                </span>

                {" "}

                {exp.description}

              </p>



              {/* Record Footer */}

              <div

                className="
                  mt-6

                  pt-4

                  border-t
                  border-green-500/10

                  text-xs

                  text-gray-600
                "

              >

                record_status:

                <span className="text-green-500 ml-2">

                  verified

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

            text-gray-600
          "

        >

          <span className="text-green-400">

            root@shahid:~$

          </span>

          {" "}

          experience_module loaded

          <span className="text-green-400 ml-2">

            ✓

          </span>

        </div>


      </div>

    </section>

  );

}


export default Experience;