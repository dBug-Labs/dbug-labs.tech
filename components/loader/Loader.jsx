import { useLayoutEffect } from "react";
import landingCircle from "./landingCircle.svg"

function Loader() {
  return (
    <div className="loader h-screen overflow-hidden flex justify-center items-center bg-black ">
      <img src={landingCircle} alt="topleftimage" className="topleftcirlce"/>
      <img src={landingCircle} alt="topleftimage" className="toprightcircle"/>
      <img src={landingCircle} alt="topleftimage" className="bottomrightcircle"/>
      <h1 className="loaderHeading font-semibold text-5xl text-white absolute">DBUG LABS</h1>
    </div>
  );
}

export { Loader };
