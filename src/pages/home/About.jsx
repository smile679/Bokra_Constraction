import cons11 from "@/assets/cons55.png";
import CountUp from "@/components/motion/CountUp";
import { Construction, Shapes, ShieldCheck, UserStar } from "lucide-react";

const features = [
  {
    icon: UserStar,
    title: "Licensed Engineers",
    amharic: "ፈቃድ ያላቸው መሐንዲሶች",
    description:
      "Our team holds full government certifications across structural, civil, and mechanical disciplines.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Compliance",
    amharic: "የደህንነት ተጣጣሚነት",
    description:
      "Zero-incident culture backed by ISO 45001 safety standards on every project site.",
  },
  {
    icon: Shapes,
    title: "Modern Equipment",
    amharic: "ዘመናዊ መሣሪያዎች",
    description:
      "We invest in the latest machinery and technology to deliver precise, efficient results.",
  },
  {
    icon: Construction,
    title: "Sustainable Construction",
    amharic: "ዘላቂ ግንባታ",
    description:
      "Eco-conscious building practices that reduce waste and meet green certification standards.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Expert Engineers" },
  { value: "98%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section className="w-full py-10 md:py-20 px-5" id="about">
      {/* Section heading */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-2">
          Who We Are
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900">
          About Us
        </h2>
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto flex flex-row-reverse  max-md:flex-col-reverse items-center gap-10">
        {/* Image */}
        <div className="w-full h-full flex flex-1 flex-col justify-between gap-y-5">
          <img
            src={cons11}
            alt="Construction site overview"
            className="w-full h-full object-cover rounded-xl drop-shadow-orange-500 drop-shadow-lg"
          />
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3 py-4 border-y border-gray-100">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center flex flex-col items-center justify-center"
              >
                <p className="text-2xl font-extrabold text-orange-400">
                  <CountUp
                    from={0}
                    to={value}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text"
                    delay={0}
                  />
                  +
                </p>
                <p className="text-md font-bold text-gray-500 mt-1 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <h3 className="text-3xl font-extrabold text-orange-400 text-center  text-shadow-sm">
              Building Strong Foundations For The Future
            </h3>
            <p className="text-md font-bold text-gray-600 mt-4 leading-relaxed">
              We are a trusted Level 5 construction company specializing in
              commercial, industrial, and infrastructure projects. With a
              commitment to quality, safety, and modern engineering, we deliver
              durable construction solutions built with precision and
              excellence.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, amharic, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-4 rounded-xl border border-gray-200 shadow-gray-300 shadow-md hover:bg-orange-100 hover:scale-105
                 hover:border-orange-200 transition-all duration-200"
              >
                <div className="flex max-sm:flex-col gap-5 items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50">
                    <Icon className="text-orange-400" size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-md">{title}</p>
                    <p
                      className="text-md text-orange-400 font-bold mt-0.5"
                      lang="am"
                    >
                      {amharic}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;