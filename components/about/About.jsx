import aboutsvg from "./aboutsvg.svg" ;
import vector1 from "./vector1.svg" ;
import vector2 from "./vector2.svg" ;
import vector3 from "./vector3.svg" ;
import vector4 from "./vector4.svg" ;

function About() {
  return (
    <div className=" w-full  bg-black">
      

      <div className="flex flex-col sm:flex-col lg:flex-row justify-between">
        <div className="text-white w-[80%] smw-[80%] lg:w-[50%]">
          <h1 className="text-white text-6xl pb-20 pl-16 pt-16 font-bold">ABOUT DBUG LABS</h1>
          <h1 className="text-lg sm:text-lg lg:text-xl pl-16 pt-11">
         dBug Labs, a student-run club dedicated to the art of debugging & testing! We are a group of passionate students interested in solving complex problems through effective debugging techniques. Our mission is to provide a supportive community for individuals who want to enhance their debugging skills and share their knowledge with others. We strive to create a fun and collaborative environment where students can collaborate to share ideas, work on projects, and learn from each other. 
          </h1>
        </div>        

        <div>
          <div className="hidden lg:flex w-full justify-between h-28 ">
            <img className="relative"  src={vector3} alt="image" />
            <img className="alig"  src={vector1} alt="image" />
          </div>
          <div className="flex w-full justify-center">
            <img className="pr-0 sm:pr-48 lg:pr-16   " src={aboutsvg} alt="image" />
            </div>
        </div>  
      </div>
      <div className="hidden lg:flex w-full justify-between ">
            <img  src={vector3} alt="image" />
            <img  src={vector4} alt="image" />
            <img  src={vector2} alt="image" />
          </div>
    </div>
  );
}

export { About };
