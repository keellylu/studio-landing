"use client";

import { CodeSnippet } from "./code-snippet";
import eggs_img from "../components/icons/eggs_example.png"
import labeled_eggs_img from "../components/icons/labeled_eggs_example.png"
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { FaArrowUp } from "react-icons/fa6";

const code_string = `from overeasy import *

workflow = Workflow([
    BoundingBoxSelectAgent(classes=["egg"], model=GroundingDINO()),
])

# Execute the workflow
image = Image.open(IMAGE_PATH)
result, graph = workflow.execute(image)
`


export const HeroImage = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="w-full z-5 mt-16 flex justify-center items-center">

      <div className="mask-radial-faded rounded-t-lg w-[95vw] border-t border-l border-r border-transparent-white bg-white bg-opacity-5">
        <div className="flex justify-between border-b border-transparent-white bg-white bg-opacity-5 text-white items-center">
          <div className="flex px-3 py-3 items-center space-x-2">
            <div className="w-[1rem] h-[1rem] border border-transparent-white bg-white bg-opacity-5 rounded-full"/>
            <div className="w-[1rem] h-[1rem] border border-transparent-white bg-white bg-opacity-5 rounded-full"/>
            <div className="w-[1rem] h-[1rem] border border-transparent-white bg-white bg-opacity-5 rounded-full"/>
          </div>
          {/* just adding this chunk for even spacing */}
          <div className="w-[24rem] h-[2rem] border border-transparent-white rounded-lg bg-white bg-opacity-5 text text-center text-grey font-inter">iris.overeasy.sh</div>
          <div className="flex px-3 py-3 items-center space-x-2">
            <div className="w-[1rem] h-[1rem] rounded-full"/>
            <div className="w-[1rem] h-[1rem] rounded-full"/>
            <div className="w-[1rem] h-[1rem] border border-transparent-white bg-white bg-opacity-5 rounded-full"/>
          </div>
          {/* ends here */}
        </div>
        {/* prompt */}
        <div className="mx-4 my-4 border border-transparent-white bg-white bg-opacity-[2%] rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 flex justify-center items-center rounded-full border border-transparent-white text-sm text-white uppercase">k</div>
            <div className="flex text-sm tracking-tight">You</div>
          </div>
          <div>
            <div className="ml-8 md:ml-9 mt-3 text-grey text-sm text-left">
              <div className="mb-3 font-inter">
                Draw a bounding box around each egg.
              </div>
              <Image alt="eggs" src={eggs_img} width={150} className="rounded-lg"/>
            </div>    
          </div>
        </div>
        
        {/* result */}
        <div className="mx-4 mb-4 border border-transparent-white bg-white bg-opacity-[2%] rounded-lg p-4">
          <div className="flex mb-3 items-center space-x-2">
            <div className="w-7 h-7 flex justify-center items-center rounded-full border border-transparent-white text-sm text-white">
              I
            </div>
            <div className="text-sm tracking-tight">Iris</div>
          </div>
          <div className="ml-8">
          <div 
          className="hover:bg-white hover:bg-opacity-5 text-left text-grey text-sm font-inter border border-transparent-white rounded-lg p-2 mb-3 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <div className="flex items-center"> <span className="mr-2">See Code</span> <IoIosArrowDown size={20}/></div> : <div className="mt-2"><CodeSnippet code_string={code_string} /></div> }
        </div>

        <div className="text-left text-grey text-sm font-inter border border-transparent-white rounded-lg p-2">
          <div className="mt-3 mb-1">
            <Image alt="eggs" src={labeled_eggs_img} width={150} className="rounded-lg"/>
          </div> 
        </div>
          </div>
          {/*           
          <div className="mx-2 my-3">
            <CodeSnippet code_string={code_string}/>
          </div> */}
        </div>

        <div className="flex justify-center mx-4 mb-4 px-6 rounded-full h-[3.5rem]">
          <div className="bg-white bg-opacity-5 relative font-inter flex items-center justify-center text-grey text-xs border border-transparent-white rounded-full">
            <div className="flex items-center space-x-2 p-5">
              <span>Send IRIS a Message</span>
              <div className="rounded-lg border border-transparent-white p-1"><FaArrowUp size={13}/></div>
            </div>
          </div>

         
        </div>
        
        
      </div>
    </div>
  );
};
