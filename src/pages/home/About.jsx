import cons11 from "@/assets/cons11.png"
import { Construction, Shapes, ShieldCogCorner, UserStar } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="w-full py-10 md:py-20" id="about">
        <h1 className="text-center text-2xl font-bold ">About us</h1>
        <div className="w-full max-w-6xl mx-auto flex items-center gap-5">
          <div className="flex flex-1 justify-content items-center ">
            <img src={cons11} alt="about" className="object-center" />
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="text-center mb-5">
              <h3 className="text-md font-bold">
                Company Introduction Section
              </h3>
              <h2 className="text-2xl font-bold text-orange-400">
                Building Strong Foundation For The Future
              </h2>
              <p className="w-full max-w-lg text-sm font-semibold py-2">
                We are a trusted Level 5 construction company specializing in
                commercial, industrial, and infrastructure projects. With a
                commitment to quality, safety, and modern engineering, we
                deliver durable construction solutions built with precision and
                excellence.
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
              <div className="w-full flex-col shadow-gray-300 shadow-md p-5 rounded-md">
                <div className="flex justify-content items-center w-10 h-10 p-2 rounded-full bg-gray-200">
                  <UserStar className="text-orange-400" />
                </div>
                <p className="text-lg font-bold">Licensed Engineers</p>
              </div>
              <div className="w-full flex-col shadow-gray-300 shadow-md p-5 rounded-md">
                <div className="flex justify-content items-center w-10 h-10 p-2 rounded-full bg-gray-200">
                  <ShieldCogCorner className="text-orange-400" />
                </div>
                <p className=" font-bold">Safety Compliance</p>
              </div>
              <div className="w-full flex-col shadow-gray-300 shadow-md p-5 rounded-md">
                <div className="flex justify-content items-center w-10 h-10 p-2 rounded-full bg-gray-200">
                  <Shapes className="text-orange-400" />
                </div>
                <p className=" font-bold">Modern Equipment</p>
              </div>
              <div className="w-full flex-col shadow-gray-300 shadow-md p-5 rounded-md">
                <div className="flex justify-content items-center w-10 h-10 p-2 rounded-full bg-gray-200">
                  <Construction className="text-orange-400" />
                </div>
                <p className=" font-bold">Sustainable Constraction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;