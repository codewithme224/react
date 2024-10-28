import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from '../utils';
import { useState, useEffect } from "react";
const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);

    const handleVideoSrc = () => {
        setVideoSrc(window.innerWidth > 760 ? heroVideo : smallHeroVideo);
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrc);
        return () => window.removeEventListener('resize', handleVideoSrc);
    }, [])
    useGSAP(() => {
        gsap.to('#hero', 
            {opacity: 1, delay: 2, ease: 'power2.inOut'}
        )
        gsap.to('#cta', 
            {opacity: 1, y: -50, delay: 2, ease: 'power2.inOut'}
        )
    }, [])
  return (
    <section className="relative w-full bg-black nav-height">
        <div className="flex-col w-full h-5/6 flex-center">
            <h1 id="hero" className="hero-title">iPhone 15 pro</h1>
            <div className="w-9/12 md:w-10/12">
               <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none">
                <source src={videoSrc} type="video/mp4" />
               </video>
            </div>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className="text-xl font-normal">From $199/mo. or $999</p>
        </div>
    </section>
  )
}

export default Hero