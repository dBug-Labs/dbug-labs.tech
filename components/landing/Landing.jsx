import { Loader } from "../loader/Loader";

function Landing() {
  return (
    <div className="overflow-hidden h-screen bg-[#0A060F]">
      <div className="headingPara hidden lg:max-w-[60%] font-bold text-3xl sm:text-5xl text-white relative top-48 px-8">
        "Every bug is just a hidden feature waiting to be discovered!"
      </div>

      <div className="headingdesc hidden opacity-80 text-white text-xl sm:text-2xl lg:max-w-[60%] relative top-64 px-8">
        In the programming and software development world, debugging is
        essential, and having a community to learn from and practice can be very
        beneficial. Also, companies like JP Morgan and Wells Fargo do unit
        testing before the software development, this shows the importance of
        unit testing and debugging in today's world.
      </div>
      <div className="absolute triangle hidden 2xl:block -bottom-10 left-0">
        <img
          className="triangle-image triangle1"
          src="landing-images/triangles-left.svg"
          alt="Left triangle"
        />
      </div>
      <div className="absolute triangle hidden md:block -bottom-10 right-0">
        <img
          className="triangle-image triangle2"
          src="landing-images/triangles-right.svg"
          alt="Right triangle"
        />
      </div>

      <Loader />
    </div>
  );
}

export { Landing };
