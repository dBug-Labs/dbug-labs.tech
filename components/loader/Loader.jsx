import { useLayoutEffect } from "react";
import landingCircle from "./landingCircle.svg";

function Loader() {
  useLayoutEffect(() => {
    console.log("uselayout effect entered");
    const loader = document.querySelector(".loader");
    const headingPara = document.querySelector(".headingPara");
    const headingdesc = document.querySelector(".headingdesc");
    loader.addEventListener("animationend", () => {
      console.log("animation end");
      loader.classList.remove("bg-black");
      headingPara.classList.remove("hidden");
      headingdesc.classList.remove("hidden");
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
      <h1 className="loaderHeading font-semibold text-5xl text-white absolute">
        DBUG LABS
      </h1>
    </div>
  );
}

export { Loader };
