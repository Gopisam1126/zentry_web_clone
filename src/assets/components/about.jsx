import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedHeading from "./animatedHead";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const clipTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipTimeline.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div className="min-h-screen w-screen" id="about">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>
        <AnimatedHeading
          title="Disc<b>o</b>ver the w<b>o</b>rld's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>The MetaGame begins - Your life now an epic MMORPG</p>
          <p>
            Zentry is the unified play layer that bridges players, agentic AI,
            and blockchains, creating a new economic paradigm
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="\img\about.webp"
            alt="about-bg-img"
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
