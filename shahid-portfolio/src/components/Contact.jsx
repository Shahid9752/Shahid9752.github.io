import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact() {


  return (


    <section

      id="contact"

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

          $ ./contact.sh

        </h2>






        <div

          className="
            bg-black/60

            border
            border-green-500/20

            rounded-xl

            p-6
            md:p-10

            font-mono

            transition-all
            duration-500

            hover:border-green-400

            hover:shadow-[0_0_40px_rgba(0,255,136,0.2)]

            active:scale-[1.02]
          "

        >




          <p className="text-gray-500 mb-6">

            <span className="text-green-400">

              root@shahid:~$

            </span>

            {" "}

            establish_connection

          </p>





          <p

            className="
              text-gray-400

              leading-relaxed

              mb-8
            "

          >

            Interested in cybersecurity projects,
            security research or collaboration?
            Feel free to contact me.

          </p>







          <div

            className="
              flex

              flex-col

              sm:flex-row

              gap-5

            "

          >





          <a

            href="mailto:shahid9752.mi@gmail.com"

            className="
              flex
              items-center
              justify-center

              gap-3

              px-5
              py-3


              rounded-lg


              bg-green-500/10


              border
              border-green-500/30


              text-green-400


              transition-all
              duration-300


              hover:scale-105

              active:scale-110


              hover:shadow-[0_0_25px_rgba(0,255,136,0.3)]
            "

          >

            <FaEnvelope/>

            Email

          </a>





          <a

            href="https://github.com/Shahid9752"

            target="_blank"

            className="
              flex
              items-center
              justify-center

              gap-3

              px-5
              py-3


              rounded-lg


              border
              border-gray-700


              text-gray-400


              hover:text-green-400


              transition


              hover:scale-105

              active:scale-110
            "

          >

            <FaGithub/>

            Github

          </a>






          <a

            href="#"

            className="
              flex
              items-center
              justify-center

              gap-3

              px-5
              py-3


              rounded-lg


              border
              border-gray-700


              text-gray-400


              hover:text-green-400


              transition


              hover:scale-105

              active:scale-110
            "

          >

            <FaLinkedin/>

            LinkedIn

          </a>





          </div>





        </div>




      </div>



    </section>


  );

}


export default Contact;