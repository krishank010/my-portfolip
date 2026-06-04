import React from 'react'
import  Typewriter  from 'typewriter-effect';

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full-Stack Developer",
                    "AI, ML & DL Engineer",
                    "Cyber Security Engineer",
                    "Data Science & Analytics Engineer",
                    "IoT & Robotics Engineer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
