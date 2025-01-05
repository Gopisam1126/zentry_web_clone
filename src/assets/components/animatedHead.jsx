import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/* eslint-disable react/prop-types */
function AnimatedHeading({ title, containerClass }) {
  const contaienrRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const titleAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: contaienrRef.current,
                start: '100 bottom',
                end: 'center bottom',
                toggleActions: 'play none none reverse'
            }
        });
        titleAnimation.to('.animated-word', {
            opacity: 1,
            transform: 'translate3d(0, 0, 0) rotateY(1deg) rotateX(0deg)',
            ease: 'power2.inOut',
            duration: 1,
            stagger: 0.02
        })
    }, contaienrRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={`animated-title ${containerClass}`} ref={contaienrRef}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedHeading;
