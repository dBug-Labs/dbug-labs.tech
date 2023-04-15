import { useLayoutEffect } from "react";
import landingCircle from "./landingCircle.svg";

function Loader() {
  useLayoutEffect(() => {
    console.log("uselayout effect entered");
    const loader = document.querySelector(".loader");
    const headingPara = document.querySelector(".headingPara");
    const headingdesc = document.querySelector(".headingdesc");
    const homebutton = document.querySelector(".homebutton");
    loader.addEventListener("animationend", () => {
      console.log("animation end");
      loader.classList.remove("bg-black");
      headingPara.classList.remove("hidden");
      headingdesc.classList.remove("hidden");
      homebutton.classList.remove("hidden");
      document.querySelector(".topleftcirlce").remove();
    });
  });
  return (
    <div className="loader h-screen overflow-hidden flex justify-center items-center bg-black ">
      <img src={landingCircle} alt="topleftimage" className="topleftcirlce" />
      <img src={landingCircle} alt="topleftimage" className="toprightcircle" />
      <img
        src={landingCircle}
        alt="topleftimage"
        className="bottomrightcircle"
      />
      <div className="loaderHeading absolute">
        <nav className="flex text-white justify-between font-semibold w-full mb-6 h-full tracking-wide">
          <div className="inline-flex gap-10 items-center">
            <img src="landing-images/logo.svg"></img>
            <img
              className="hidden md:block"
              src="landing-images/dbugnav.svg"></img>
            <div className="flex homebutton hidden items-center">
              <img src="landing-images/home.svg"></img>
              <div className="text-xl font-light">HOME</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export { Loader };
