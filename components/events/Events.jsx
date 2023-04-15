import vector1 from "./vector1.svg";
import vector2 from "./vector2.svg";
import vector3 from "./vector3.svg";
import samplePoster from "./samplePoster.svg";
import dbug from "./dbug.svg"
function Events() {
  return (
    <div id="events" className="min-h-screen bg-[#0A060F] text-white ">
      <div className="sm:text-lg lg:text-xl  sm:flex-col lg:flex-row justify-between">
        <div className="w-[80%] lg:w-[50%] lg:flex w-full h-28">
          <div>
            <h1 className="text-6xl font-bold pt-20 pl-20">EVENTS</h1>
            <h1 className="text-3xl sm:text-lg lg:text-3xl pb-0 pt-8 pl-20 ">
              Upcoming Events
            </h1>
          </div>
        </div>
        <img className="align" src={vector1} alt="blob1" />
        <div className="flex flex-col items-center justify-evenly lg:flex-row ">
            <img
              className=""
              src={dbug}
              alt="grab a seat"
            />
          <div className="">
            <img
              className="relative object-fill h-80 w-80 "
              src={samplePoster}
              alt="samplePoster"
            />
            <a href="https://lu.ma/nojtl1rp" target="_blank" >
            <button className="bg-[#DDA0DD] hover:bg-[#c185c1] active:bg-[#a56ca6] text-[#0D0C0C] font-bold text-xl mt-8 ml-20 pl-4  py-4 px-4 rounded-full">
              Grab Your Seat
            </button>
            </a>
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
