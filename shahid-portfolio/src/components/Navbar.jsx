import { useState } from "react";


function Navbar() {

  const [open, setOpen] = useState(false);


  const menuItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Research",
    "Certificates",
    "Contact"
  ];


  return (

    <nav

      className="
        fixed

        top-0
        left-0

        w-full

        z-50

        bg-[#030604]/90

        backdrop-blur-md

        border-b

        border-green-500/20
      "

    >

      <div

        className="
          max-w-6xl

          mx-auto

          px-6
          md:px-8

          py-4

          flex

          justify-between

          items-center
        "

      >


        {/* Logo */}

        <a

          href="#home"

          className="
            font-mono

            text-lg
            md:text-xl

            font-bold

            text-green-400

            hover:text-green-300

            transition

            whitespace-nowrap
          "

        >

          <span className="text-gray-500">
            &lt;
          </span>

          Shahid

          <span className="text-gray-500">
            /&gt;
          </span>

        </a>



        {/* Desktop Menu */}

        <div

          className="
            hidden

            md:flex

            items-center

            gap-6

            font-mono

            text-sm
          "

        >

          {menuItems.map((item) => (

            <a

              key={item}

              href={`#${item.toLowerCase()}`}

              className="
                text-gray-400

                transition-all
                duration-300

                hover:text-green-400

                hover:-translate-y-0.5
              "

            >

              <span className="text-green-600">
                ./ 
              </span>

              {item}

            </a>

          ))}

        </div>



        {/* Mobile Button */}

        <button

          type="button"

          onClick={() => setOpen(!open)}

          className="
            md:hidden

            text-green-400

            text-2xl

            font-mono

            hover:text-green-300

            transition
          "

          aria-label="Toggle navigation"

        >

          {open ? "×" : "☰"}

        </button>


      </div>



      {/* Mobile Menu */}

      {open && (

        <div

          className="
            md:hidden

            bg-[#030604]/95

            backdrop-blur-md

            border-t

            border-green-500/10

            px-6

            py-5
          "

        >

          <div

            className="
              flex

              flex-col

              gap-4

              font-mono

              text-sm
            "

          >

            {menuItems.map((item) => (

              <a

                key={item}

                href={`#${item.toLowerCase()}`}

                onClick={() => setOpen(false)}

                className="
                  text-gray-400

                  py-2

                  border-b

                  border-green-500/10

                  transition

                  hover:text-green-400
                "

              >

                <span className="text-green-500">
                  $ cd
                </span>

                {" "}

                {item}

              </a>

            ))}

          </div>

        </div>

      )}

    </nav>

  );

}


export default Navbar;