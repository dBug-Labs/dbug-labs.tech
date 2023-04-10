import aboutsvg from "./aboutsvg.svg" ;

function About() {
  return (
    <div className="h-screen max-h-screen w-full max-w-screen-2xl bg-black pl-16 pt-16 ">
      

      <div className="flex justify-between pr-6">
        <div className="text-white w-[50%]">
          <h1 className="text-white text-6xl pb-14">ABOUT DBUG LABS</h1>
          <h1 className=" text-xl">
            So introducing dBug Labs, a student-run club dedicated to the art of debugging & testing! We are a group of passionate students interested in solving complex problems through effective debugging techniques. Our mission is to provide a supportive community for individuals who want to enhance their debugging skills and share their knowledge with others. We strive to create a fun and collaborative environment where students can collaborate to share ideas, work on projects, and learn from each other. 
          </h1>
        </div>        

        <div>
          <img className="" src={aboutsvg} alt="image" />
        </div>  


      </div>
    </div>
  );
}

export { About };
