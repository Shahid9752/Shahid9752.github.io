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

          $ cat experience.log

        </h2>






        <div

          className="
            bg-black/60

            border
            border-green-500/20

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








        <div className="space-y-6">





          {experiences.map((exp,index)=>(



            <div


              key={index}


              className="

                group

                relative


                bg-black/60


                border

                border-green-500/15



                rounded-xl



                p-6

                md:p-8




                font-mono



                transform-gpu



                transition-all



                duration-500



                ease-out



                hover:-translate-y-4



                hover:rotate-1



                hover:bg-green-500/5



                hover:border-green-400/60



                hover:shadow-[0_0_40px_rgba(0,255,136,0.25)]



                active:scale-105



                active:-translate-y-3



                active:border-green-400



                active:shadow-[0_0_45px_rgba(0,255,136,0.35)]



                overflow-hidden

              "



            >





              <div

                className="

                  absolute

                  inset-0


                  bg-gradient-to-br


                  from-green-400/10


                  via-transparent


                  to-transparent



                  opacity-0



                  group-hover:opacity-100



                  transition



                  duration-500

                "

              />







              <div className="relative z-10">





                <div


                  className="

                    flex

                    flex-col

                    sm:flex-row


                    sm:justify-between



                    gap-3



                    mb-5



                    text-xs

                  "


                >



                  <span className="text-gray-600">


                    EXPERIENCE_RECORD_{String(index+1).padStart(2,"0")}


                  </span>





                  <span


                    className="

                      text-green-400


                      border

                      border-green-500/30



                      px-3



                      py-1



                      rounded-md



                      w-fit

                    "


                  >


                    ACTIVE


                  </span>



                </div>







                <h3


                  className="

                    text-xl

                    md:text-2xl



                    font-bold



                    text-green-400



                    mb-3



                    group-hover:text-green-300



                    transition

                  "


                >


                  {exp.role}



                </h3>







                <h4


                  className="

                    text-gray-300



                    text-lg



                    mb-2

                  "


                >


                  {exp.company}


                </h4>








                <p


                  className="

                    text-sm



                    text-green-500/70



                    mb-5

                  "


                >


                  {exp.period}


                </p>








                <p


                  className="

                    text-gray-400



                    leading-relaxed



                    text-sm



                    md:text-base

                  "


                >


                  <span className="text-green-500">

                    &gt;

                  </span>


                  {" "}


                  {exp.description}



                </p>







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