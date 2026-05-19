import cons11 from "@/assets/cons11.png"
import cons22 from "@/assets/cons22.png"
import cons33 from "@/assets/cons33.png"
import cons44 from "@/assets/cons44.png"
import cons55 from "@/assets/cons55.png"
import cons66 from "@/assets/cons66.png"
import cons77 from "@/assets/const77.png"
import { Button } from "@/components/ui/button";

const Hero = () => {

    return (
      <>
        <section className="h-screen w-full bg-[url(@/assets/cons66.png)] bg-cover bg-center">
          <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-between gap-5 px-5 pt-20">
            <div className="flex-1 flex-col text-white">
              <h3 className="w-1/2 text-center bg-orange-100 text-orange-500 py-1 rounded-2xl">
                Level 5 General Contractor
              </h3>
              <h1 className="text-[40px] sm:text-[50px] font-extrabold text-shadow-gray-900 text-shadow-md">
                Building Modern
              </h1>
              <h1 className="text-[40px] sm:text-[50px] font-extrabold text-shadow-gray-900 text-shadow-md">
                Infrustracture With
              </h1>
              <h1 className="text-[40px] sm:text-[50px] font-extrabold text-orange-400 text-shadow-gray-900 text-shadow-sm">
                Precision & Excellence
              </h1>
              <div className="flex max-sm:flex-col items-center gap-5 my-5">
                <Button className="max-sm:w-full px-10 py-5 bg-orange-400 text-white hover:bg-orange-500 cursor-pointer transition-all duration-300">
                  Projects
                </Button>
                <Button
                  variant="outline"
                  className="max-sm:w-full px-10 py-5 bg-transparent font-bold text-white border-2 border-white cursor-pointer transition-all duration-300"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="hidden md:flex md:flex-1 justify-center items-center">
              <img src={cons77} className="w-full object-cover" />
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero;