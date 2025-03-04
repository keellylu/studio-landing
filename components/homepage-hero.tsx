import React, {useState} from "react";
import { Button} from "./button";
import { Hero, HeroTitle, HeroSubtitle, Description } from "./hero";
import { ShimmerButton } from "./shimmer-button";
import posthog from "posthog-js";
import { FaGithub } from "react-icons/fa";
import { HeroImage } from "./hero-image";
import Demo from "./demos";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";




export const HomepageHero = () => {

  return (
    <Hero>
      <div className="sm:rounded-custom sm:custom-gradient backdrop-blur flex flex-col justify-center sm:border-2 sm:border-transparent-white">
        <div className="flex justify-center text-left w-[90%]">
          <div className="w-[75%]">
            <div className="h-[6rem] sm:h-[5rem]"></div>

            {/* <HeroSubtitle className=" translate-y-[-2rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
              We Source<br className="hidden md:block" />
            </HeroSubtitle> */}
{/* 
            <a className="space-grotesk-font btn-shine text-3xl">Meet IRIS,</a> */}
            <div 
              className="phone-call cbh-phone cbh-green cbh-show cbh-static" 
              id="clbh_phone_div" 
              style={{
                zIndex: 80,
                position: 'relative',
                left: '-4rem',
                transform: 'scale(1.25)',
              }}
            >
              <a 
                id="WhatsApp-button" 
                href="whatsapp://send?text= Haute Corset Siparişi Vermek istiyorum Yardımcı Olurmusunuz ?&phone=+905511448014" 
                className="phoneJs" 
                title="Mesaj Gönder!"
              >
                <div className="cbh-ph-circle"></div>
                <div className="cbh-ph-circle-fill"></div>
                <div className="cbh-ph-img-circle1"></div>
              </a>
            </div>

            <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] font-mono text-2xl">
              <span>Talk, Record, Earn. </span>
            </HeroTitle>

            <Description className="translate-y-[-2rem] text-base sm:text-lg md:text-xl animate-fade-in opacity-0 [--animation-delay:500ms]">
            <div className="pt-3">
              At Overeasy, we&apos;re seeking native speakers from around the world for flexible, part‐time roles with competitive compensation.
            </div>
            </Description>





            {/* <button className="text-lg bg-white bg-opacity-5 hover:bg-opacity-0 border border-transparent-white p-5 mt-[3rem] rounded-xl">
              Start Working with IRIS -->
            </button>  */}
{/* 
            <div className="mt-6">
              <a href="https://usecheck.com/" className="text-[#ffffff] opacity-40 hover:btn-shine text-lg" target="_blank">Start Working with IRIS --> </a>
            </div> */}

            <ShimmerButton className="mt-8 mb-[14rem] translate-y-[-3rem] animate-fade-in opacity-0 [--animation-delay:450ms] px-6 py-3" href="https://docs.google.com/document/d/14SiWhxuY2OGBR0QMq5s6jVUWdlqGN1Tz_vEzsF50GBw/edit?usp=sharing" target="_blank">
              <span className="y-1 pl-2 text-2xl subtitle-gradient">
                <div>Apply Today</div>
              </span>
              <MdOutlineArrowRightAlt className="ml-2" size={32} />
            </ShimmerButton> 

          </div>
        </div>

        {/* <div className="mx-auto w-[85%] translate-y-[-0.5rem] animate-fade-in opacity-0 [--animation-delay:500ms] font-mono">
          <HeroImage />
        </div> */}
      </div>

      
    </Hero>

    
  );
};