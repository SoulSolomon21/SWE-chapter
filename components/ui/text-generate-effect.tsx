"use client";
import {useEffect} from "react";
import {motion, stagger, useAnimate} from "framer-motion";
import {cn} from "@/lib/utils";

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                   }: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={`${idx == 1 || idx == 2 ? "text-blue-400" : "text-white"} opacity-0`}>
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className="text-white leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};