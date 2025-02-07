import React from 'react';
import { Sparkle } from "./icons/sparkle";

function SparkleGenerator() {
    const generateRandomPosition = () => {
        const randomX = Math.random() * 5;
        const randomY = Math.random() * 30;
        return { left: randomX, top: randomY };
    };

    const sparkles = Array.from({ length: 10 }).map((_, index) => (
        <div
            key={index}
            style={{
                position: 'absolute',
                ...generateRandomPosition()
            }}
        >
            <Sparkle />
        </div>
    ));

    return <div>{sparkles}</div>;
}

export default SparkleGenerator;