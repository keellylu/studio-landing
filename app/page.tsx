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
import { Hero, HeroTitle, HeroTitle2, HeroSubtitle, Description } from "../components/hero";
import { IoExitOutline } from "react-icons/io5";
import CoolEllipse from "../components/icons/coolellipse";
import ex_1 from "../components/icons/testtest-01.png"
import ex_2 from "../components/icons/testtest-02.png"
import ex_3 from "../components/icons/testtest-03.png"
import graph from "../components/icons/iris performance graph clear.png"
import table from "../components/icons/comparison table clear.png"
import mobile_graph from "../components/icons/mobile graph.png"
import mobile_table from "../components/icons/mobile table.png"

export default function Homepage() {
  const [isOpen, setOpen] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const FORM_URL = "https://script.google.com/macros/s/AKfycbznSdbmBE7D4pbKiqrEhq9IjAukiAFh2cN55pMdcxnU77qinumzDCPURWmZTvPm-lhY/exec";


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
          <div >
            <HomepageHero />
          </div>
        </Container>
        

        {/* <Container className="pt-[8rem]">
          <div className="border border-transparent-white rounded-3xl p-[7rem]">
            <HeroSubtitle className="mt-8 mb-6">IRIS enables performance at speeds 100x faster than GPT4o.</HeroSubtitle>

            <Description className="mb-2"> We measured IRIS&apos; performance on several object detection examples from the COCO validation dataset.</Description>
            <Description className="mb-8">IRIS&apos; detections are shown in <span style={{ color: '#00FF39' }}> GREEN</span>, GPT-4V&apos;s detections are shown in <span style={{ color: '#FF362A' }}> RED</span>.</Description>

            <div className="flex mb-8">
              <div className="w-1/3 mx-1">
                  <img src={ex_1.src} alt="Example 1" className="rounded-lg my-2" />
                  <p className="text-center text-sm mt-2 text-grey">1. Zebra</p>
              </div>
              <div className="w-1/3 mx-1">
                  <img src={ex_2.src} alt="Example 2" className="rounded-lg my-2" />
                  <p className="text-center text-sm mt-2 text-grey">2. Girl</p>
              </div>
              <div className="w-1/3 mx-1">
                  <img src={ex_3.src} alt="Example 3" className="rounded-lg my-2" />
                  <p className="text-center text-sm mt-2 text-grey">3. Surfer</p>
              </div>
          </div>
          </div>
        </Container> */}

      {/* <Container className="pt-[4rem] sm:pt-[8rem]">
        <div className="border border-transparent-white rounded-3xl p-[2rem] sm:p-[7rem]">
          <HeroSubtitle className="mb-4">IRIS Announcement</HeroSubtitle>
          <div className="pt-[2rem] sm:pt-[4rem] pb-[1rem] sm:pb-[2rem] rounded-lg">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/aa10GQpWY4A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>  
      </Container> */}

        {/* <Container className="pt-[8rem]">
        <div id="benchmarks" className="border border-transparent-white rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16">
            <HeroSubtitle className="mb-4">Benchmarks</HeroSubtitle>

            <Description className="mb-4">IRIS reaches <a href="https://paperswithcode.com/sota/zero-shot-object-detection-on-lvis-v1-0" className="underline blue" target="_blank">SOTA zero-shot performance</a> on datasets like COCO and LVIS</Description>
            <div className="mb-8 w-full flex justify-center items-center">
        
              <img 
                src={mobile_graph.src} 
                alt="Performance graph (mobile)" 
                className="rounded-lg my-2 pb-4 pt-2 w-full max-w-[100%] sm:max-w-[800px] h-auto block"
              />
            </div>
            <HeroSubtitle className="mb-4">Selected Examples</HeroSubtitle>
            <Description className="mb-4">
              Here are a few examples of how IRIS stacks up against other zero-shot models like GroundingDINO.
              <br className=""/>
              IRIS does particularly well on long-tail tasks for uncommon objects where other models struggle.
            </Description>

            <div className="w-full flex justify-center items-center">
              <img 
                src={table.src} 
                alt="Comparison table" 
                className="rounded-lg pt-2 w-full max-w-[100%] sm:max-w-[800px] h-auto hidden sm:block"
              />
              <img 
                src={mobile_table.src} 
                alt="Comparison table (mobile)" 
                className="rounded-lg pt-2 w-full max-w-[100%] sm:max-w-[800px] h-auto sm:hidden"
              />
            </div>
          </div>
        </Container> */}

      

      </div>

      <div className="flex justify-center items-center pl-1 items-center space-x-2">
        <div className="text-lg text-grey">  Backed by</div>
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