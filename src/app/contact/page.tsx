"use client";
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import React from 'react';

function contact() {
    return (
        <div className="min-h-screen">

            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-40 "
                >
  
                    <Highlight className="text-creamyYellow-900 dark:text-white">
                        Let&#39;s Connect!
                    </Highlight>
                    <div className="text-xl font-semibold text-creamyYellow-900 pt-8">Whether you&#39;re interested in collaborating on exciting projects, have a question, or just want to chat about web development, I&#39;m always open to new opportunities and connections.</div>

                    <div className="text-xl font-semibold text-creamyYellow-900 flex flex-col justify-start items-start mt-12">
                        <Highlight className="text-creamyYellow-900 dark:text-white">
                            Get in Touch
                        </Highlight>
                        <ul className="list-inside list-disc flex flex-col justify-start items-start">
                            <li><b>Email:</b> shadansaifi99@gmail.com</li>
                            <li><b>Phone:</b> +91 9012882680</li>
                            <li><b>LinkedIn:</b><a href="http://www.linkedin.com/in/shadan-saifi-b5b98a128">linkedin.com/in/shadan-saifi</a></li>
                            <li><b>Github:</b><a href="https://github.com/shadan-saifi">github.com/shadan-saifi</a></li>
                        </ul>
                    </div>
                    <div className="text-xl font-semibold text-creamyYellow-900 flex flex-col justify-start items-start mt-8">
                        <Highlight className="text-creamyYellow-900 dark:text-white">
                        Why Reach Out?
                        </Highlight>
                        <ul className="list-inside list-disc flex flex-col justify-start items-start">
                            <li><b>Collaborate:</b>  I&#39;m eager to work on innovative projects that make a difference.</li>
                            <li><b>Consult:</b> Need advice on a web development challenge? I&#39;m here to help.</li>
                            <li><b>Connect:</b>Let&#39;s network and explore ideas together.</li>
                        </ul>
                    </div>
                    <div className="text-2xl text-creamyYellow-900 my-8">Looking forward to hear from you!</div>
                </motion.h1>
            </HeroHighlight>


        </div>
    );
}

export default contact;