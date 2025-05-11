import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Solana Agent Kit helps developers build AI-powered Solana agents
            </h2>
          </div>
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={500}
                  height={500}
                  alt="Planet"
                />
                <Image
                  className="absolute -right-64 -top-20 z-10 max-w-none"
                  src={PlanetOverlayImg}
                  width={789}
                  height={755}
                  alt="Planet decoration"
                />
                {/* ✅ Robots centrados sobre el planeta */}
                <div className="absolute inset-0 flex justify-center items-center gap-4 z-20">
                  <Image
                    src={PlanetTagImg01}
                    width={220}
                    height={60}
                    alt="Tag 01"
                  />
                  <Image
                    src={PlanetTagImg02}
                    width={220}
                    height={60}
                    alt="Tag 02"
                  />
                  <Image
                    src={PlanetTagImg03}
                    width={220}
                    height={60}
                    alt="Tag 03"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {/* Aquí va el contenido de artículos que dejaste igual */}
          </div>
        </div>
      </div>
    </section>
  );
}
