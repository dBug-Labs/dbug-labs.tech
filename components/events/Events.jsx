import vector1 from "./vector1.svg";
import vector2 from "./vector2.svg";
import vector3 from "./vector3.svg";
import samplePoster from "./samplePoster.svg";
import dbug from "./dbug.svg"
function Events() {
  return (
    <div id="events" className="h-screen bg-[#0A060F] text-white ">
      <div className="sm:text-lg lg:text-xl  sm:flex-col lg:flex-row justify-between">
        <div className="w-[80%] smw-[80%] lg:w-[50%] hidden lg:flex w-full justify-between h-28">
          <div>
            <h1 className="text-6xl font-bold pt-20 pl-20">EVENTS</h1>
            <h1 className="text-3xl sm:text-lg lg:text-3xl pb-0 pt-8 pl-20 ">
              Upcoming Events
            </h1>
          </div>
        </div>
        <img className="align" src={vector1} alt="blob1" />
        <div className="flex flex-cols items-start">
          <div className="flex flex-cols">
            <img
              className=" relative pt-0 object-none mr-44 sm:pl-44 lg:pl-12"
              src={dbug}
              alt="grab a seat"
            />
          </div>
          <div className="pl-0">
            <img
              className="relative object-fill h-80 w-80 "
              src={samplePoster}
              alt="samplePoster"
            />
            <button className="bg-[#DDA0DD] hover:bg-[#c185c1] active:bg-[#a56ca6] text-[#0D0C0C] font-bold text-xl mt-8 ml-20 pl-4  py-4 px-4 rounded-full">
              Grab Your Seat
            </button>
          </div>
        </div>
        <div className="ml-40 hidden lg:flex w-full justify-between h-28">
        <img className="align" src={vector3} alt="blob"/>
        </div>
        
      </div>
    </div>
  );
}

export { Events };
