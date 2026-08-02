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
        "Completed a corporate internship with practical exposure to professional work environments, security testing methodologies and technology-related activities."

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





        {/* Title */}


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






        {/* Terminal */}


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








        {/* Cards */}


        <div

          className="
            grid

            grid-cols-1

            md:grid-cols-2

            gap-8
          "

        >



        {certificates.map((cert,index)=>(



          <div


            key={index}


            className="

              group

              relative


              bg-black/60


              border


              border-green-500/20



              rounded-xl



              p-5



              transform-gpu



              transition-all



              duration-500



              hover:-translate-y-4



              hover:rotate-1



              hover:border-green-400



              hover:bg-green-500/5



              hover:shadow-[0_0_40px_rgba(0,255,136,0.25)]



              active:scale-105



              active:shadow-[0_0_45px_rgba(0,255,136,0.3)]

            "

          >




          {/* Glow */}

          <div

            className="

              absolute

              inset-0

              rounded-xl

              bg-green-400/10

              opacity-0

              group-hover:opacity-100

              transition

              pointer-events-none

            "

          />







          <div className="relative z-10">






          {/* Image */}


          <button

            onClick={()=>setSelectedImage(cert.image)}

            className="

              w-full

              cursor-zoom-in

            "

          >



            <div

              className="

                h-52

                md:h-60


                rounded-lg


                overflow-hidden


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



                  group-hover:scale-110



                "

              />



            </div>


          </button>









          <div

            className="
              text-xs

              text-gray-600

              font-mono

              mb-3
            "

          >

            CERTIFICATE_

            {String(index+1).padStart(2,"0")}


            <span className="text-green-400 ml-3">

              [VALID]

            </span>


          </div>








          <h3

            className="
              text-xl

              md:text-2xl

              font-bold

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
              text-sm

              font-mono

              text-gray-500

            "

          >

            Issued by:

            <span className="text-green-400 ml-2">

              {cert.issuer}

            </span>


          </p>





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

          2 credentials verified.


          <span className="text-green-400">

            {" "}✓

          </span>


        </div>





      </div>









      {/* Image Preview */}



      {selectedImage && (



      <div

        onClick={()=>setSelectedImage(null)}

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

      >




        <img


          src={selectedImage}


          onClick={(e)=>e.stopPropagation()}


          className="

            max-w-full

            max-h-[90vh]


            object-contain


            rounded-xl


            border


            border-green-400


            shadow-[0_0_50px_rgba(0,255,136,0.4)]

          "


        />



      </div>



      )}



    </section>


  );


}


export default Certificates;