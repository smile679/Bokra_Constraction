import {
  Paintbrush,
  Layers,
  Droplets,
  Grid2x2,
  Hammer,
  Lightbulb,
  DoorOpen,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "General Finishing Works",
    amharic: "አጠቃላይ የፍጻሜ ሥራዎች",
    description:
      "End-to-end finishing packages covering all trades — we coordinate everything from first fix to handover so you get a seamless, punch-list-free result.",
    highlights: [
      "Full Project Finishing",
      "Snagging & Handover",
      "Multi-trade Coordination",
    ],
  },
  {
    icon: Lightbulb,
    title: "Electrical Finishing",
    amharic: "የኤሌክትሪክ ፍጻሜ ሥራ",
    description:
      "Final fix electrical works including switch plates, socket installation, lighting fixtures, and conduit finishing to a clean, professional standard.",
    highlights: [
      "Lighting Fixtures",
      "Switch & Socket Plates",
      "Conduit Finishing",
    ],
  },
  {
    icon: Layers,
    title: "Plastering & Rendering",
    amharic: "ፕላስተር እና ሬንደሪንግ",
    description:
      "Smooth internal plastering and external rendering to Level 5 standard — flawless, paint-ready surfaces with zero imperfections under raking light.",
    highlights: ["Skimming", "Sand & Cement Render", "Thin-coat Systems"],
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    amharic: "ቀለም ቅባት እና ማስዋብ",
    description:
      "Premium interior and exterior painting using high-grade materials. We prepare, prime, and finish every surface to a flawless, long-lasting result.",
    highlights: [
      "Interior Emulsion",
      "Exterior Masonry Paint",
      "Feature Walls",
    ],
  },
  {
    icon: Grid2x2,
    title: "Tiling & Flooring",
    amharic: "ሰሌዳ ንጣፍ እና ወለል",
    description:
      "Precision tiling for walls and floors using ceramic, porcelain, and natural stone. Epoxy and screed flooring for commercial and residential spaces.",
    highlights: ["Porcelain & Ceramic", "Epoxy Flooring", "Marble & Stone"],
  },
  {
    icon: Sparkles,
    title: "Ceiling Works",
    amharic: "የጣሪያ ሥራዎች",
    description:
      "Suspended ceilings, gypsum board, and decorative cornice installation crafted with precision for both aesthetic appeal and acoustic performance.",
    highlights: ["Suspended Ceilings", "Gypsum Board", "Decorative Cornice"],
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    amharic: "የውሃ መከላከያ",
    description:
      "Comprehensive waterproofing systems for basements, wet rooms, rooftops, and foundations — protecting your structure for decades.",
    highlights: ["Basement Tanking", "Roof Membranes", "Wet Room Systems"],
  },
  {
    icon: DoorOpen,
    title: "Joinery & Carpentry",
    amharic: "አናጺነት",
    description:
      "Bespoke joinery including fitted wardrobes, skirting boards, door frames, and custom cabinetry crafted by skilled artisans.",
    highlights: [
      "Door Frames & Architraves",
      "Skirting & Coving",
      "Custom Cabinetry",
    ],
  },
];

const Services = () => {
  return (
    <section
      className="w-full py-10 md:py-20 px-5"
      id="services"
      style={{
        background:
          "linear-gradient(135deg, #fff7ed 0%, #ffedd5 60%, #fed7aa 100%)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        {/* <p className="text-sm font-black uppercase tracking-widest text-orange-400 mb-2">
          What We Do · የምናደርገው
        </p> */}
        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
          Our Services
        </h2>
        <p className="text-base font-semibold text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
          As a certified{" "}
          <span className="text-orange-500 font-black">Level 5</span> finishing
          contractor, we deliver precision finishing across all trades on time,
          on spec, and built to last.
        </p>
        <p className="text-lg text-orange-500 mt-2 font-bold" lang="am">
          ጥራት፣ አመኔታ እና ብቃት — የእኛ መሠረት ነው፡፡
        </p>
      </div>

      {/* Services grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map(
          ({ icon: Icon, title, amharic, description, highlights }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 p-5 rounded-2xl border-2 border-orange-100 bg-white shadow-sm
              hover:shadow-xl hover:border-orange-400 hover:-translate-y-2 hover:bg-orange-500
              transition-all duration-300 ease-out cursor-pointer overflow-hidden"
            >
              {/* Decorative circle on hover */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 border border-orange-100
              group-hover:bg-white group-hover:border-white transition-all duration-300"
              >
                <Icon
                  className="text-orange-400 group-hover:text-orange-500 transition-colors duration-300"
                  size={22}
                />
              </div>

              {/* Title */}
              <div>
                <p className="font-black text-md text-gray-900 group-hover:text-white transition-colors duration-300">
                  {title}
                </p>
                <p
                  className="text-md font-bold text-orange-400 mt-0.5 group-hover:text-orange-100 transition-colors duration-300"
                  lang="am"
                >
                  {amharic}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm font-semibold text-gray-500 leading-relaxed flex-1 group-hover:text-orange-50 transition-colors duration-300">
                {description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-1.5 pt-3 border-t border-orange-100 group-hover:border-orange-300 transition-colors duration-300">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-bold text-gray-700 group-hover:text-white transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 group-hover:bg-white transition-colors duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <p className="text-gray-600 font-bold text-sm mb-4">
          Ready to start your project? · ፕሮጀክትዎን ለመጀመር ዝግጁ ነዎት?
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black text-sm px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          Get a Free Quote · ነፃ ዋጋ ይጠይቁ
        </a>
      </div>
    </section>
  );
};

export default Services;