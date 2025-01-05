import { useEffect, useRef, useState } from "react";
import Button from "./button";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  const navItems = ["Nexus", "Voult", "Prologue", "About", "Contact"];
  const navRef = useRef(null);
  const audioRef = useRef(null);

  const [isAudioPlaying, setIsAudioPLaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollPosY, setLastScrollPosY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const {y: currentScrollPosY} = useWindowScroll();

  useEffect(() => {
    if (currentScrollPosY === 0) {
        setIsNavVisible(true);
        navRef.current.classList.remove('floating-nav');
    } else if (currentScrollPosY > lastScrollPosY) {
        setIsNavVisible(false);
        navRef.current.classList.add('floating-nav');
    } else if (currentScrollPosY < lastScrollPosY) {
        setIsNavVisible(true);
        navRef.current.classList.add('floating-nav');
    }
    setLastScrollPosY(currentScrollPosY);
  }, [currentScrollPosY, lastScrollPosY]);

  useGSAP(() => {
    gsap.to(navRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2
    })
  }, [isNavVisible])

  function toggleAudio() {
    setIsAudioPLaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  }

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      ref={navRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="\img\logo.png" alt="logo" className="w-10" />
            <Button
              title="Products"
              rightIcon={<NearMeIcon />}
              id="product-button"
              containerclass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  className="nav-hover-btn"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudio}
            >
              <audio
                src="\audio\loop.mp3"
                ref={audioRef}
                className="hidden"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
