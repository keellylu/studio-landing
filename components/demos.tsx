
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "./button";


import dynamic from 'next/dynamic'
import { CodeSnippet } from "./code-snippet";

const ex_1_code = `from overeasy import *

frames = ... # Read frames from video

workflow = Workflow([
    # Select basketball from each frame
    BoundingBoxSelectAgent(classes=["basketball"]), 
    # Non-maximum suppression
    NMSAgent(score_threshold=0.55, iou_threshold=0.8), 
])
    
results, graph = workflow.execute_multiple(frames)
`;

const ex_2_code = `hello
`;

const ex_3_code = `goodbye
`;

const code_strings = [ex_1_code, ex_2_code, ex_3_code]

export default function Demo() {
    const [value, setValue] = React.useState('0');
    const videoUrl = "/bball_ex_compressed.mp4";
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };


    return (
       
        <div className="mb-[8rem] z-5 flex justify-center items-center max-w-[1200px] mx-auto">
            <div className="py-3 mask-radial-faded rounded-lg border border-transparent-white bg-white bg-opacity-5">

            <div className="px-4 pt-[2px] flex space-x-3">
                <Button variant="secondary" onClick={() => setValue('0')}>ex1.py</Button>
                {/* <Button variant="secondary" onClick={() => setValue('1')}>ex2.py</Button>
                <Button variant="secondary" onClick={() => setValue('2')}>ex3.py</Button> */}
            </div>
            
            <div className="flex justify-center">
                <div className="w-full mx-4 border border-transparent-white bg-white bg-opacity-5 rounded-lg lg:p-4 p-2">
                    <CodeSnippet code_string={code_strings[parseInt(value)]} />
                </div>

                <div className="hidden xl:flex xl:items-center xl:block mr-4 border border-transparent-white bg-white bg-opacity-5 rounded-lg p-3">
                    <video className="rounded-lg" controls loop autoPlay muted src={videoUrl}/>
                    
                </div>
            </div>

            <div className="block xl:hidden">
                <div className="mt-2 mx-4 border border-transparent-white bg-white bg-opacity-5 rounded-lg p-3">
                    <video className="rounded-lg" controls loop autoPlay muted src={videoUrl}/>
                </div>
            </div>

                
            </div>
      </div>
  
    );
    // <div style={{ display: 'flex' }}>
      

    //     <div>
    //         <CodeSnippet code_string={ex_1_code} />
    //     </div>
      
    // </div>
}