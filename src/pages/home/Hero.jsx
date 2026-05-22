import cons11 from "@/assets/cons11.png"
import cons22 from "@/assets/cons22.png"
import cons33 from "@/assets/cons33.png"
import cons44 from "@/assets/cons44.png"
import cons55 from "@/assets/cons55.png"
import cons66 from "@/assets/cons66.png"
import cons77 from "@/assets/const77.png"
import { Button } from "@/components/ui/button";
import SplitText from "@/components/motion/splitText";

const Hero = () => {

   const handleAnimationComplete = () => {
     console.log("All letters have animated!");
   };
   

    return (
      <>
        <section id="home" className="h-screen w-full bg-[url(@/assets/cons66.png)] bg-cover bg-center">
          <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-between px-5 pt-30">
            <div className="flex flex-1 flex-col text-white py-30">
              <h3 className="w-fit px-4 py-1 text-center bg-orange-100 text-orange-500 rounded-2xl leading-none m-0">
                Level 5 General Contractor
              </h3>
              <h1 className="text-[40px] sm:text-[50px] font-extrabold text-shadow-gray-900 text-shadow-md leading-tight m-0 p-0">
                <SplitText
                  text="Building Modern"
                  // className="text-2xl font-semibold text-center"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                  onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
              </h1>
              <h1 className="text-[40px] sm:text-[50px] font-extrabold text-shadow-gray-900 text-shadow-md leading-tight m-0 p-0">
                <SplitText
                  text="Infrastructure With"
                  // className="text-2xl font-semibold text-center"
                  delay={50}
                  duration={1.25}
                  ease="bounce.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                  onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
              </h1>
              <h1 className="text-[40px] sm:text-[50px] font-extrabold text-orange-400 text-shadow-gray-900 text-shadow-sm leading-tight m-0 p-0">
                <SplitText
                  text="Precision & Excellence"
                  // className="text-2xl font-semibold text-center"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="lines"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                  onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
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