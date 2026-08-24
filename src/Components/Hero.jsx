import { ArrowRight, Play } from "lucide-react";
import bgGradient from '../assets/bg_gradient.webp';


function Hero() {
    const divStyle ={
        backgroundImage: `url(${bgGradient})`,
        
    }

  return (
  <section  className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={divStyle}>
<div>A div inside the section</div>
<div></div>
  </section>
  );
}

export default Hero;