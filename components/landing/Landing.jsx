import { Loader } from "../loader/Loader";
import { useLayoutEffect } from "react";

function Landing() {
  useLayoutEffect(()=>{
    console.log("uselayout effect entered")
    const loader = document.querySelector(".loader");
    const headingPara = document.querySelector(".headingPara");
    const headingdesc = document.querySelector(".headingdesc");
    loader.addEventListener("animationend", ()=>{
      console.log("animation end")
      loader.classList.remove("bg-black");
      headingPara.classList.remove("hidden")
      headingdesc.classList.remove("hidden")
      document.querySelector(".topleftcirlce").remove();

    })
  })

  return (
    <div className="h-screen overflow-hidden bg-black">
      <div className="headingPara hidden text-4xl text-white relative top-56 left-20">
        <div>"Every bug is just a hidden feature</div>
        <div> &nbsp; waiting to be discovered!"</div>
      </div>

      <div className="headingdesc hidden text-white text-xl max-w-[60%] relative top-64 left-20">In the programming and software development world, debugging is essential, and having a community to learn from and practice can be very beneficial. Also, companies like JP Morgan and Wells Fargo do unit testing before the software development, this shows the importance of unit testing and debugging in today's world.</div>

      <Loader/>
    </div>
  );
}

export { Landing };
