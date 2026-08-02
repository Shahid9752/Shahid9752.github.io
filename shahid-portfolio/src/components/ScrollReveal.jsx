import { useEffect } from "react";


function ScrollReveal() {


  useEffect(() => {


    const elements = document.querySelectorAll(
      "section, .group"
    );


    elements.forEach((el)=>{

      el.classList.add("reveal");

    });



    const observer = new IntersectionObserver(


      (entries)=>{


        entries.forEach((entry)=>{


          if(entry.isIntersecting){


            entry.target.classList.add(
              "show"
            );


          }


        });


      },


      {
        threshold:0.15
      }


    );



    elements.forEach((el)=>{


      observer.observe(el);


    });



    return ()=>{


      elements.forEach((el)=>{


        observer.unobserve(el);


      });


    };


  },[]);



  return null;


}


export default ScrollReveal;