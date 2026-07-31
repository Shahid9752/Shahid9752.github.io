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

          $ cat research_database.txt

        </h2>



        {/* Terminal Header */}

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
            bg-black/60

            border
            border-green-500/20

            rounded-xl

            p-6
            md:p-8

            mb-8

            transition-all
            duration-300

            hover:-translate-y-2

            hover:border-green-400

            hover:bg-green-500/5

            hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]
          "

        >


          {/* Record Header */}

          <div

            className="
              flex
              flex-wrap
              justify-between
              gap-3

              font-mono
              text-xs

              mb-6
            "

          >

            <span className="text-gray-500">
              RESEARCH_RECORD_01
            </span>

            <span className="text-green-400">
              ● PUBLISHED
            </span>

          </div>



          {/* Publication Title */}

          <h3

            className="
              text-xl
              md:text-2xl

              font-bold
              font-mono

              text-green-400

              mb-5

              leading-relaxed
            "

          >

            Machine learning-based cyber threat detection:
            an approach to malware detection and security
            with explainable AI insights

          </h3>



          {/* Description */}

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



          {/* Research Tags */}

          <div

            className="
              flex
              flex-wrap

              gap-2

              mb-6
            "

          >

            <span className="research-tag">
              Machine Learning
            </span>

            <span className="research-tag">
              Cybersecurity
            </span>

            <span className="research-tag">
              Malware Detection
            </span>

            <span className="research-tag">
              Explainable AI
            </span>

          </div>



          {/* DOI */}

          <div

            className="
              bg-black/50

              border
              border-green-500/10

              rounded-lg

              p-4

              font-mono

              text-sm

              mb-6
            "

          >

            <span className="text-gray-500">
              DOI:
            </span>

            <span className="text-green-400 ml-2 break-all">
              10.1007/s42454-024-00055-7
            </span>

          </div>



          {/* Publication Link */}

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

              transition-all
              duration-300

              hover:bg-green-500/20

              hover:border-green-400

              hover:shadow-[0_0_20px_rgba(0,255,136,0.25)]
            "

          >

            ./view_publication →

          </a>


        </div>



        {/* Thesis */}

        <div

          className="
            bg-black/60

            border
            border-green-500/20

            rounded-xl

            p-6
            md:p-8

            transition-all
            duration-300

            hover:-translate-y-2

            hover:border-green-400

            hover:bg-green-500/5

            hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]
          "

        >


          {/* Record Header */}

          <div

            className="
              flex
              flex-wrap
              justify-between
              gap-3

              font-mono
              text-xs

              mb-6
            "

          >

            <span className="text-gray-500">
              RESEARCH_RECORD_02
            </span>

            <span className="text-green-400">
              ● COMPLETED
            </span>

          </div>



          {/* Thesis Title */}

          <h3

            className="
              text-xl
              md:text-2xl

              font-bold
              font-mono

              text-green-400

              mb-5
            "

          >

            Cyber Threat Detection Using Machine Learning

          </h3>



          {/* Thesis Description */}

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



          {/* Thesis Topics */}

          <div

            className="
              flex
              flex-wrap

              gap-2
            "

          >

            <span className="research-tag">
              Machine Learning
            </span>

            <span className="research-tag">
              Cyber Threat Detection
            </span>

            <span className="research-tag">
              Malware Analysis
            </span>

          </div>


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