import About from "./assets/components/about";
import Features from "./assets/components/features";
import Hero from "./assets/components/hero";
import Navbar from "./assets/components/navbar";
import Story from "./assets/components/story";
import "./assets/compStyles/common.css";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
    </main>
  );
}

export default App;
