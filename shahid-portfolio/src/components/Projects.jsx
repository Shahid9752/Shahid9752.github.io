function Projects() {


  const projects = [

    {
      title: "Cyber Threat Detection Using Machine Learning",

      description:
        "Machine learning based cyber threat detection system focused on malware detection and security analysis with explainable AI insights.",

      tech: [
        "Machine Learning",
        "Cybersecurity",
        "Explainable AI",
        "Malware Detection"
      ]

    },


    {
      title: "Flutter Ecommerce App",

      description:
        "Developed a mobile ecommerce application with modern user interface, product management and shopping features.",

      tech: [
        "Flutter",
        "Dart",
        "Firebase"
      ]

    },


    {
      title: "Stylista Ecommerce Website",

      description:
        "Designed and developed a responsive ecommerce website with modern UI design and product management functionality.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript"
      ]

    },


    {
      title: "Weather Application",

      description:
        "A weather application providing real-time weather information using API integration.",

      tech: [
        "API",
        "JavaScript",
        "Frontend"
      ]

    },


    {
      title: "Library Management System",

      description:
        "A software system for managing books, users and library operations efficiently.",

      tech: [
        "C++",
        "Database",
        "Software Development"
      ]

    }

  ];



  return (


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

            font-mono

            text-green-400

            mb-10

            text-center
            md:text-left

            drop-shadow-[0_0_15px_rgba(0,255,136,0.7)]
          "

        >

          $ ls -la /projects

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

            access_project_repository


          </p>



          <p className="text-green-400 mt-2">

            [OK] Project repository unlocked

          </p>


        </div>






        <div

          className="
            grid

            grid-cols-1

            md:grid-cols-2

            gap-6

          "

        >




          {projects.map((project,index)=>(



            <article


              key={index}


              className="

                group

                relative


                bg-black/60


                border

                border-green-500/15


                rounded-xl


                p-6


                md:p-7



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

                    justify-between

                    items-center


                    mb-5


                    text-xs

                  "


                >


                  <span className="text-gray-600">


                    PROJECT_{String(index+1).padStart(2,"0")}


                  </span>




                  <span className="text-green-500">


                    [ACTIVE]


                  </span>



                </div>








                <h3


                  className="

                    text-xl

                    md:text-2xl


                    font-bold



                    text-green-400



                    mb-4



                    leading-tight



                    group-hover:text-green-300



                    transition

                  "


                >


                  {project.title}


                </h3>








                <p


                  className="

                    text-gray-400


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

                    gap-2

                  "


                >



                  {project.tech.map((item,i)=>(



                    <span


                      key={i}


                      className="

                        px-3

                        py-1.5


                        rounded-md



                        bg-green-500/5



                        border

                        border-green-500/15



                        text-green-400



                        text-xs



                        transition-all



                        duration-300



                        hover:border-green-400



                        hover:bg-green-500/10

                      "


                    >



                      {item}



                    </span>



                  ))}



                </div>








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



                  <span className="text-green-500">


                    $

                  </span>


                  {" "}


                  project --status



                  <span className="text-green-400 ml-2">


                    OK


                  </span>


                </div>





              </div>





            </article>





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



          {projects.length} projects loaded.



          <span className="text-green-400 ml-2">


            ✓


          </span>


        </div>





      </div>



    </section>



  );

}


export default Projects;