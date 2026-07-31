import { useState } from "react";


function Certificates() {

  const [selectedImage, setSelectedImage] = useState(null);


  const certificates = [

    {
      title: "Ethical Hacking & Cybersecurity",
      issuer: "Arena Web Security",
      image: "/certificate.jpg",

      details:
        "Completed training focused on ethical hacking, cybersecurity fundamentals, web application security, vulnerability assessment and penetration testing."
    },


    {
      title: "Corporate Internship Certificate",
      issuer: "Arena Web Security",
      image: "/intern.jpg",

      details:
        "Completed a corporate internship with practical exposure to professional work environments, operational activities and technology-related tasks."
    }

  ];


  return (

    <section

      id="certificates"

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

          $ ls /certificates

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

          loading_credentials...

          <span className="text-green-400 ml-2">
            [VERIFIED]
          </span>

        </div>



        {/* Certificates Grid */}

        <div

          className="
            grid

            grid-cols-1
            md:grid-cols-2

            gap-8
          "

        >

          {certificates.map((cert, index) => (

            <div

              key={index}

              className="
                group

                bg-black/60

                border
                border-green-500/20

                rounded-xl

                p-5
                md:p-6

                transition-all
                duration-300

                hover:-translate-y-2

                hover:border-green-400

                hover:bg-green-500/5

                hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]
              "

            >


              {/* Certificate Image */}

              <button

                type="button"

                onClick={() => setSelectedImage(cert.image)}

                className="
                  block

                  w-full

                  cursor-zoom-in

                  focus:outline-none
                "

              >

                <div

                  className="
                    relative

                    h-48
                    md:h-56

                    rounded-lg

                    overflow-hidden

                    bg-black

                    border
                    border-green-500/20

                    mb-6
                  "

                >

                  <img

                    src={cert.image}

                    alt={cert.title}

                    className="
                      w-full
                      h-full

                      object-cover

                      transition-transform
                      duration-500

                      group-hover:scale-105
                    "

                  />


                  {/* Image Overlay */}

                  <div

                    className="
                      absolute
                      inset-0

                      bg-black/0

                      group-hover:bg-black/20

                      transition

                      flex
                      items-center
                      justify-center
                    "

                  >

                    <span

                      className="
                        opacity-0

                        group-hover:opacity-100

                        transition

                        bg-black/70

                        border
                        border-green-400/50

                        text-green-400

                        px-4
                        py-2

                        rounded-lg

                        font-mono

                        text-sm
                      "

                    >

                      [ CLICK TO VIEW ]

                    </span>

                  </div>

                </div>

              </button>



              {/* Certificate Information */}

              <div

                className="
                  font-mono

                  text-xs

                  text-gray-600

                  mb-3
                "

              >

                CERTIFICATE_{String(index + 1).padStart(2, "0")}

                <span className="text-green-500 ml-3">
                  [VALID]
                </span>

              </div>



              <h3

                className="
                  text-xl
                  md:text-2xl

                  font-bold

                  font-mono

                  text-green-400

                  mb-4
                "

              >

                {cert.title}

              </h3>



              <p

                className="
                  text-gray-400

                  leading-relaxed

                  mb-5
                "

              >

                {cert.details}

              </p>



              <p

                className="
                  font-mono

                  text-sm

                  text-gray-500
                "

              >

                Issued by:

                <span className="text-green-400 ml-2">
                  {cert.issuer}
                </span>

              </p>


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

          2 credentials verified.

          <span className="text-green-400">
            {" "}✓
          </span>

        </div>


      </div>



      {/* Full Image Modal */}

      {selectedImage && (

        <div

          className="
            fixed

            inset-0

            z-[100]

            bg-black/90

            backdrop-blur-sm

            flex

            items-center
            justify-center

            p-4
          "

          onClick={() => setSelectedImage(null)}

        >


          {/* Close Button */}

          <button

            type="button"

            onClick={() => setSelectedImage(null)}

            className="
              absolute

              top-5
              right-5

              z-10

              w-10
              h-10

              rounded-full

              bg-black

              border
              border-green-500/50

              text-green-400

              text-xl

              font-mono

              hover:bg-green-500/10

              hover:border-green-400

              transition
            "

          >

            ×

          </button>



          {/* Full Certificate */}

          <img

            src={selectedImage}

            alt="Certificate preview"

            onClick={(e) => e.stopPropagation()}

            className="
              max-w-full

              max-h-[90vh]

              object-contain

              rounded-lg

              border
              border-green-500/40

              shadow-[0_0_40px_rgba(0,255,136,0.15)]
            "

          />

        </div>

      )}

    </section>

  );

}


export default Certificates;