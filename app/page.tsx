"use client";
import classNames from "classnames";
import { Container } from "../components/container";
import React from "react";
import { HomepageHero } from "../components/homepage-hero";
import { Button } from "../components/button"
import "../styles/egg.css"
import { HeroImage } from "../components/hero-image";
import { GridLinesLeft } from "../components/icons/grid-lines-left";
import { FilloutPopupEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import posthog from "posthog-js";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { YCLogo } from "../components/icons/yc-logo";
import { Hero, HeroTitle, HeroTitle2, HeroSubtitle, Description, Description2 } from "../components/hero";
import { IoExitOutline } from "react-icons/io5";
import CoolEllipse from "../components/icons/coolellipse";
import ex_1 from "../components/icons/testtest-01.png"
import ex_2 from "../components/icons/testtest-02.png"
import ex_3 from "../components/icons/testtest-03.png"
import graph from "../components/icons/iris performance graph clear.png"
import table from "../components/icons/comparison table clear.png"
import mobile_graph from "../components/icons/mobile graph.png"
import mobile_table from "../components/icons/mobile table.png"
import flag_1 from "../public/flags/flag-1.png"
import flag_2 from "../public/flags/flag-2.png" 
import flag_3 from "../public/flags/flag-3.png"
import flag_4 from "../public/flags/flag-4.png"
import flag_5 from "../public/flags/flag-5.png"
import flag_6 from "../public/flags/flag-6.png"
import flag_7 from "../public/flags/flag-7.png"
import flag_8 from "../public/flags/flag-8.png"
import flag_9 from "../public/flags/flag-9.png"
import flag_10 from "../public/flags/flag-10.png"
import { ShimmerButton } from "../components/shimmer-button";
import { MdOutlineArrowRightAlt } from "react-icons/md";


export default function Homepage() {
  const [isOpen, setOpen] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const FORM_URL = "https://script.google.com/macros/s/AKfycbznSdbmBE7D4pbKiqrEhq9IjAukiAFh2cN55pMdcxnU77qinumzDCPURWmZTvPm-lhY/exec";

  const testimonials = [
    {
      quote: "The projects are straightforward and the whole thing is super easy to manage.",
      author: "PD",
      role: "Program Participant"
    },
    {
      quote: "The whole process was smoother than I expected and perfect for someone like me who has a full-time job and values flexibility.",
      author: "DL",
      role: "Program Participant"
    },
    {
      quote: "I never thought earning money from home could be this easy and fun!",
      author: "JW",
      role: "Program Participant"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const colorCodePerformance = (performance: string) => {
    return performance.split('').map((char, index) => (
      <span key={index} style={{ color: char === 'P' ? 'green' : 'red' }}>
        {char}
      </span>
    ));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.classList.toggle('modal-open', !isModalOpen);
  };

  function SubmitForm (e: React.FormEvent<HTMLFormElement>) {
    const formEle = document.querySelector("form")
    e.preventDefault()
    const formData = new FormData(formEle as HTMLFormElement)

    //cheeck that all fields are filled out
    for (let [key, value] of formData.entries()) {
      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }

    //validate email
    const email = formData.get("Email") as string;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    fetch(FORM_URL, {
      method: "POST",
      body: formData
    }).then(response => {
      if (response.ok) {
        toggleModal(); // Close the modal on successful submission
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    }).catch(error => {
      alert("There was an error submitting the form. Please try again.");
    });
  }

  return (
    <>
      <Header setOpen={setOpen}/>
      <div className="overflow-hidden pb-[8rem] md:pb-[12rem]">
        <div className="fixed top-[-15rem] right-0 bottom-0 left-0 z-[-1]">
          <CoolEllipse />
        </div>
        <Container className="pt-[3rem] sm:pt-[8rem]">
          <div>
          <HomepageHero />


          <div className="rounded-[3rem] mt-8 border border-2 border-transparent-white">
              <HeroSubtitle className="mt-[8rem] text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] font-mono text-2xl">
                <span>How We Operate </span>
              </HeroSubtitle>

              <Description className="text-center mx-[20rem] translate-y-[-2rem] text-base sm:text-lg md:text-xl animate-fade-in opacity-0 [--animation-delay:500ms]">
              <div className="pt-6 pb-5">
                We collaborate with top-tier AI companies that are shaping the future of the industry. All you need is a high-quality microphone and proficiency in your native language.
              </div>
              <div className="pt-6 pb-5">
                Apply in under 10 minutes to start earning competitive pay for flexible, part-time work. Successful candidates will join our community and gain access to exclusive part-time opportunities.
              </div>
              <div className="pt-6 pb-[9rem]">
                Applications rolling until <strong>Feb 20, 2025</strong>.
              </div> 
              </Description>
            </div>


          <div className="rounded-[3rem] mt-8 border border-2 border-transparent-white">
            <HeroSubtitle className="mt-[8rem] text-center">Why Participants Love Our Voice Program</HeroSubtitle>
            <div className="mt-6 mb-[9rem] relative">
              <div className="transition-opacity duration-500 text-center max-w-4xl mx-auto px-4">
                <Description2 className="text-xl text-grey mb-4">&quot;{testimonials[currentTestimonial].quote}&quot;</Description2>
                <Description2 className="text-grey text-lg">{testimonials[currentTestimonial].author}</Description2>
                <Description2 className="text-grey text-lg">{testimonials[currentTestimonial].role}</Description2>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === index ? 'bg-white w-4' : 'bg-grey'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <HeroSubtitle className="mt-[8rem]">Ready to Start Earning?</HeroSubtitle>
            <ShimmerButton className="mt-6 animate-fade-in opacity-0" href="https://docs.google.com/document/d/14SiWhxuY2OGBR0QMq5s6jVUWdlqGN1Tz_vEzsF50GBw/edit?usp=sharing" target="_blank">
                <span className="pl-2 text-lg subtitle-gradient">
                  Apply Today
                </span>
                <MdOutlineArrowRightAlt className="ml-1" size={27} />
              </ShimmerButton> 
          </div>
          </div>
        </Container>
      </div>

      <div className="flex justify-center items-center pl-1 items-center space-x-2">
        <div className="text-lg text-grey">Backed by</div>
          <YCLogo/>
        <div className="text-lg text-grey">Combinator</div>
      </div>

      <div
        className={classNames(
          "hidden sm:block",
          "mask-linear-faded-2 pointer-events-none relative z-[-2] my-[-12.8rem] h-[48rem] overflow-hidden",
          "[--color:rgba(120,119,198)] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.05]",
          "after:absolute after:top-3/4 after:-left-1/2 after:h-[300%] after:w-[200%] after:rounded-[100%] after:border-t after:border-transparent-white after:bg-background"
        )}
      >
        <div id="egg"></div>
      </div>



      <Footer/>


      {isModalOpen && (
        <div className="z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          
          <div className="no-scrollbar text-left bg-background border-2 border-transparent-white p-16 rounded-3xl overflow-y-auto mx-[6rem] h-[80%]">
            <div className="flex justify-between">
              <h2 className="space-grotesk-font text-[3.5rem] mb-2">Request Access</h2>
              <button onClick={toggleModal} className="px-4 py-2 bg-blue-500 text-grey rounded text-md">
                <IoExitOutline className="icon-hover" size={28} />
              </button>
            </div>

            <p className="space-grotesk-font-200 text-md text-grey mb-8">We will be sending out batch invites every.</p>

            <div className="border bg-white bg-opacity-[5%] border-transparent-white py-12 px-12 rounded-lg text-left"> 
              <form className="form flex flex-col" onSubmit={SubmitForm}>
                <div className="mb-1 text-grey text-sm">First Name</div>
                <input className="bg-white bg-opacity-[0%] outline-none rounded-lg h-[5rem] mb-5 border border-transparent-white p-3 text-sm" name="FirstName" type="text" required />
                
                <div className="mb-1 text-grey text-sm">Last Name</div>
                <input className="bg-white bg-opacity-[0%] outline-none rounded-lg h-[5rem] mb-5 border border-transparent-white p-3 text-sm" name="LastName" type="text" required />
                
                <div className="mb-1 text-grey text-sm">Email</div>
                <input className="bg-white bg-opacity-[0%] outline-none rounded-lg h-[5rem] mb-5 border border-transparent-white p-3 text-sm" name="Email" type="email" required />
                
                <div className="mb-1 text-grey text-sm">Company</div>
                <input className="bg-white bg-opacity-[0%] outline-none rounded-lg h-[5rem] mb-5 border border-transparent-white p-3 text-sm" name="Company" type="text" required />
                
                <div className="mb-1 text-grey text-sm">Describe the dataset you need labeled. (Ex. the approx. # of images/videos in your dataset, the class names you would like labeled, project deadlines). </div>
                <textarea className="bg-white bg-opacity-[0%] text-left align-top outline-none rounded-lg h-[8rem] mb-8 border border-transparent-white p-3 text-sm" name="UseCase" required />
                
                <input className="h-[5.5rem] border border-transparent-white bg-white bg-opacity-[5%] rounded-lg button text-md hover:bg-opacity-[15%]" type="submit" value="Request Access"/>
              </form>
            </div>
          
          </div>

        </div>
      )}

    </>
  );
}