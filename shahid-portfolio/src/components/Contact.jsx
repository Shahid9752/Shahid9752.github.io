import {
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";


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

      <div className="max-w-4xl mx-auto">


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

            drop-shadow-[0_0_15px_rgba(0,255,136,0.7)]
          "

        >

          $ ./contact.sh

        </h2>



        {/* Terminal Window */}

        <div

          className="
            bg-black/70

            border
            border-green-500/30

            rounded-xl

            overflow-hidden

            shadow-[0_0_30px_rgba(0,255,136,0.08)]
          "

        >


          {/* Terminal Header */}

          <div

            className="
              flex
              items-center
              gap-2

              px-5
              py-3

              border-b
              border-green-500/20

              bg-black/80
            "

          >

            <span className="w-3 h-3 rounded-full bg-red-500/70">
            </span>

            <span className="w-3 h-3 rounded-full bg-yellow-500/70">
            </span>

            <span className="w-3 h-3 rounded-full bg-green-500/70">
            </span>


            <span className="
              ml-3
              text-xs
              font-mono
              text-gray-500
            ">

              shahid@cybersecurity:~

            </span>

          </div>



          {/* Terminal Content */}

          <div

            className="
              p-6
              md:p-10

              font-mono
            "

          >


            {/* Command */}

            <div className="text-sm mb-6">

              <span className="text-green-400">
                root@shahid:~$
              </span>

              {" "}

              ./connect.sh

            </div>



            {/* Message */}

            <p

              className="
                text-gray-400

                leading-relaxed

                mb-8
              "

            >

              Interested in cybersecurity, research collaboration
              or professional opportunities? Feel free to connect
              with me.

            </p>



            {/* Status */}

            <div

              className="
                text-sm

                text-gray-500

                mb-8

                space-y-2
              "

            >

              <p>

                <span className="text-green-400">
                  [+]
                </span>

                {" "}

                Secure connection available

              </p>


              <p>

                <span className="text-green-400">
                  [+]
                </span>

                {" "}

                Communication channel ready

              </p>


              <p>

                <span className="text-green-400">
                  [+]
                </span>

                {" "}

                Awaiting connection...

              </p>

            </div>



            {/* Social Links */}

            <div

              className="
                grid

                grid-cols-1
                sm:grid-cols-3

                gap-4
              "

            >


              {/* Email */}

              <a

                href="mailto:shahid9752.mi@gmail.com"

                className="
                  group

                  flex
                  flex-col

                  items-center
                  justify-center

                  gap-3

                  p-5

                  rounded-lg

                  bg-green-500/5

                  border
                  border-green-500/20

                  text-green-400

                  transition-all
                  duration-300

                  hover:bg-green-500/10

                  hover:border-green-400

                  hover:-translate-y-1

                  hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]
                "

              >

                <FaEnvelope

                  size={32}

                  className="
                    group-hover:scale-110

                    transition
                  "

                />

                <span className="text-sm">
                  Email
                </span>

              </a>



              {/* LinkedIn */}

              <a

                href="https://www.linkedin.com/in/md-shahid-nur/"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  group

                  flex
                  flex-col

                  items-center
                  justify-center

                  gap-3

                  p-5

                  rounded-lg

                  bg-green-500/5

                  border
                  border-green-500/20

                  text-green-400

                  transition-all
                  duration-300

                  hover:bg-green-500/10

                  hover:border-green-400

                  hover:-translate-y-1

                  hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]
                "

              >

                <FaLinkedin

                  size={32}

                  className="
                    group-hover:scale-110

                    transition
                  "

                />

                <span className="text-sm">
                  LinkedIn
                </span>

              </a>



              {/* GitHub */}

              <a

                href="https://github.com/Shahid9752"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  group

                  flex
                  flex-col

                  items-center
                  justify-center

                  gap-3

                  p-5

                  rounded-lg

                  bg-green-500/5

                  border
                  border-green-500/20

                  text-green-400

                  transition-all
                  duration-300

                  hover:bg-green-500/10

                  hover:border-green-400

                  hover:-translate-y-1

                  hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]
                "

              >

                <FaGithub

                  size={32}

                  className="
                    group-hover:scale-110

                    transition
                  "

                />

                <span className="text-sm">
                  GitHub
                </span>

              </a>


            </div>



            {/* Email Address */}

            <div

              className="
                mt-8

                pt-6

                border-t
                border-green-500/10

                text-center

                text-sm

                text-gray-500
              "

            >

              <span className="text-green-400">
                contact:
              </span>

              {" "}

              shahid9752.mi@gmail.com

            </div>


          </div>

        </div>


      </div>

    </section>

  );

}


export default Contact;