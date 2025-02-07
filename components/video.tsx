
import React from "react";

export const Video = () => (
    <div>
        <video className=" rounded-lg" controls style={{ maxHeight: '380px' }}>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);