"use client"

import React from 'react';
import {Spotlight} from "@/components/ui/spotlight";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import {Navigation} from "lucide-react";

const HeroSection = () => {
    return (
        <div className="pb-20 pt-32">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>

            <div
                className="h-screen w-full bg-black-100 bg-grid-white/[0.05] absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        From Beginner to Builder: Join the Software Engineering Chapter! 👨🏽‍💻
                    </p>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words={"UCU Software Engineering Chapter"}
                    />

                    <p className="text-center text-white-100 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi there, excited to have you check us out
                    </p>

                    <Link href={"#"}>
                        <MagicButton
                            title={"Join Now"}
                            icon={<Navigation/>}
                            position={"right"}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;