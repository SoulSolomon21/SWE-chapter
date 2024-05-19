"use client"

import React from 'react';
import {useScroll, useTransform} from "framer-motion";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect";

const HeroSection = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <div
            className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
            pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
            ]}
            title={"Software Engineering Chapter"}
            description={"From Beginner to Builder: Join the Software Engineering Chapter!"}
            className="px-2 top-10"
        />
        </div>
    );
};

export default HeroSection;