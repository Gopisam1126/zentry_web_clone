import { useRef } from "react";
import AnimatedHeading from "./animatedHead";
import gsap from "gsap";
import Button from "./button";

function Story() {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 500,
    })
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col size-full items-center pb-24 py-10">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The multiversal IP World
        </p>
        <div className="relative size-full">
          <AnimatedHeading
            title="The st<b>o</b>ry of <br /> Hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="img\entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button id="realm-button" title="discover prologue" containerclass="mt-5"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
