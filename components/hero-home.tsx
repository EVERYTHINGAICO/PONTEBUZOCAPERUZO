"use client";

import { useState } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "XXXXXXXXXXXXpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <section className="relative">
      {/* ✅ VIDEO DE FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/fondo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <PageIllustration />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6" data-aos="zoom-y-out">
              <div className="-mx-0.5 flex justify-center">
                <Image
                  className="box-content rounded-full border-2 border-white"
                  src="/images/solana kit.png"
                  width={200}
                  height={200}
                  alt="Solana Kit"
                />
              </div>
            </div>
            <h1
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              The Solana AI Agent Toolkit you’ve <br className="max-lg:hidden" />
              been searching for
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-white"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Solana Agent Kit helps you build AI-driven autonomous agents that interact seamlessly with the Solana blockchain.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  {/* ✅ Botón copiar al portapapeles */}
                  <button
                    onClick={handleCopy}
                    className="btn group mb-4 w-full cursor-pointer bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  >
                    <span className="relative inline-flex items-center">
                      {copied ? "Copied!" : `CA ${contractAddress}`}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>

                  {/* ✅ View Docs lleva al GitHub */}
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="https://github.com/sendaifun/solana-agent-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Docs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl">
              <div className="relative mb-8 flex items-center justify-between">
                <span className="text-[13px] font-medium text-white">
                  solana-agent-kit
                </span>
              </div>
              <div className="font-mono text-gray-300">
                <span>npm install solana-agent-kit</span>
                <br />
                <span>import {"{"} SolanaAgentKit {"}"} from "solana-agent-kit";</span>
                <br />
                <span>import {"{"} TokenPlugin, NFTPlugin {"}"} from "@solana-agent-kit/plugins";</span>
                <br />
                <span>const agent = new SolanaAgentKit();</span>
                <br />
                <span>agent.use(TokenPlugin).use(NFTPlugin);</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
