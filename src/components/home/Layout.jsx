// import Hero from "@/src/pages/home/Hero";

import About from "@/pages/home/About";
import Hero from "@/pages/home/Hero";
import Services from "@/pages/home/Services";
import Projects from "@/pages/home/Projects";


const Home = () => {
   
    return <>
        <section className="w-full">
          <Hero/>
          <About />
          <Services />
          <Projects />
        </section>
    </>
}


export default Home;