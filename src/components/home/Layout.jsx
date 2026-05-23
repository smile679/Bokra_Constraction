// import Hero from "@/src/pages/home/Hero";

import About from "@/pages/home/About";
import Hero from "@/pages/home/Hero";
import Services from "@/pages/home/Services";


const Home = () => {
   
    return <>
        <section className="w-full">
          <Hero/>
          <About />
          <Services />
        </section>
    </>
}


export default Home;