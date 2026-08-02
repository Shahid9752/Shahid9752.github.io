function Research() {


  return (

    <section

      id="research"

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

          $ cat research_database.txt

        </h2>





        <div

          className="
            bg-black/70

            border

            border-green-500/30

            rounded-xl

            px-5

            py-4

            mb-8

            font-mono

            text-sm

            text-gray-400
          "

        >

          <span className="text-green-400">

            root@shahid:~$

          </span>


          {" "}

          loading_research_records...


          <span className="text-green-400 ml-2">

            [OK]

          </span>


        </div>







        {/* Publication */}


        <div

          className="

            group

            relative


            bg-black/60


            border

            border-green-500/20



            rounded-xl



            p-6

            md:p-8



            mb-8



            transform-gpu



            transition-all



            duration-500



            hover:-translate-y-4



            hover:rotate-1



            hover:border-green-400/70



            hover:bg-green-500/5



            hover:shadow-[0_0_40px_rgba(0,255,136,0.25)]



            active:scale-105



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


              transparent



              opacity-0



              group-hover:opacity-100



              transition

            "

          />




          <div className="relative z-10">



            <div

              className="
                flex
                justify-between
                flex-wrap

                gap-3

                mb-6

                text-xs

                font-mono
              "

            >

              <span className="text-gray-500">

                RESEARCH_RECORD_01

              </span>


              <span className="text-green-400">

                ● PUBLISHED

              </span>


            </div>






            <h3

              className="
                text-xl

                md:text-2xl

                font-bold

                text-green-400

                mb-5

                leading-relaxed
              "

            >

              Machine learning-based cyber threat detection:
              an approach to malware detection and security
              with explainable AI insights


            </h3>






            <p

              className="
                text-gray-400

                leading-relaxed

                mb-6
              "

            >

              This research focuses on developing machine
              learning-based approaches for cyber threat detection,
              particularly malware detection and security analysis
              using explainable AI techniques.


            </p>






            <div

              className="
                flex

                flex-wrap

                gap-2

                mb-6
              "

            >

              {[
                "Machine Learning",
                "Cybersecurity",
                "Malware Detection",
                "Explainable AI"

              ].map((tag,index)=>(


                <span

                  key={index}

                  className="research-tag"

                >

                  {tag}

                </span>


              ))}


            </div>






            <div

              className="
                bg-black/50

                border

                border-green-500/10

                rounded-lg

                p-4

                mb-6

                font-mono

                text-sm
              "

            >

              <span className="text-gray-500">

                DOI:

              </span>


              <span className="text-green-400 ml-2 break-all">

                10.1007/s42454-024-00055-7

              </span>


            </div>







            <a

              href="https://doi.org/10.1007/s42454-024-00055-7"

              target="_blank"

              rel="noopener noreferrer"


              className="

                inline-block

                px-5

                py-3


                rounded-lg


                bg-green-500/10


                border


                border-green-500/30


                text-green-400


                font-mono


                font-semibold


                transition


                hover:bg-green-500/20


                hover:border-green-400

              "

            >

              ./view_publication →

            </a>



          </div>



        </div>









        {/* Thesis Card */}


        <div

          className="

            group

            relative


            bg-black/60


            border

            border-green-500/20



            rounded-xl



            p-6

            md:p-8



            transform-gpu



            transition-all



            duration-500



            hover:-translate-y-4



            hover:rotate-1



            hover:border-green-400/70



            hover:bg-green-500/5



            hover:shadow-[0_0_40px_rgba(0,255,136,0.25)]



            active:scale-105



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

            "

          />





          <div className="relative z-10">



            <div

              className="
                flex
                justify-between
                flex-wrap
                gap-3

                mb-6

                text-xs
              "

            >

              <span className="text-gray-500">

                RESEARCH_RECORD_02

              </span>


              <span className="text-green-400">

                ● COMPLETED

              </span>


            </div>





            <h3

              className="
                text-xl

                md:text-2xl

                font-bold

                text-green-400

                mb-5
              "

            >

              Cyber Threat Detection Using Machine Learning

            </h3>






            <p

              className="
                text-gray-400

                leading-relaxed

                mb-6
              "

            >

              Bachelor's thesis focused on developing a
              machine learning-based cyber threat detection
              approach for malware detection and security
              analysis. The study explored different machine
              learning algorithms for identifying cyber threats
              and improving security solutions.


            </p>





            <div

              className="
                flex

                flex-wrap

                gap-2
              "

            >

              {[
                "Machine Learning",
                "Cyber Threat Detection",
                "Malware Analysis"

              ].map((tag,index)=>(

                <span

                  key={index}

                  className="research-tag"

                >

                  {tag}

                </span>


              ))}


            </div>



          </div>


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

          research database loaded successfully.


          <span className="text-green-400">

            {" "}✓

          </span>


        </div>



      </div>


    </section>


  );

}



export default Research;