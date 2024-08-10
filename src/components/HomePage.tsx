"use client";
import React from 'react';
import { TypewriterEffectSmooth, TypewriterEffect } from "./ui/typewriter-effect";

function HomePage() {
    const words = [
        {
            text: "Hii",
        },
        {
            text: "folks,",
        },
        // {
        //     text: "Shadan",
        // },
        // {
        //     text: "Saifi,",
        // }, 
        // {
        //     text: "A Fullstack web developer.",
        // },
        {
            text: "Let&#39;s explore my work.",
            className: "text-creamyYellow-900 dark:text-creamyYellow-200 font-bold",
        },
    ];
    
    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-center h-[40rem] '>
            <TypewriterEffectSmooth words={words} className='absolute top-1/4 z-50' cursorClassName='bg-creamyYellow-900 pt-4'/>
            <div className='min-h-screen w-full flex flex-row justify-center items-center '>
                <div className='min-h-screen w-1/2 bg-creamyYellow-100 '>
                    <div className='shadow-2xl shadow-creamyYellow-600  h-[640px] my-16 ml-16 bg-creamyYellow-100 flex flex-col justify-end items-center'>
                       <div className=' max-h-[320px] max-w-[320px] md:mb-12 object-cover shadow-2xl shadow-creamyYellow-600  ring-2 ring-creamyYellow-600'>
                       <img src="/image.jpg" alt="myImage" />
                       </div>
                    </div>
                </div>
                <div className='min-h-screen w-1/2 bg-creamyYellow-200'>
                    <div className='pb-28 md:pb-40 flex flex-col justify-end items-center shadow-2xl shadow-creamyYellow-100  h-[640px] my-16 mr-16 bg-creamyYellow-200'>
                        <div className='font-semibold text-5xl flex-wrap text-creamyYellow-900'>Shadan Saifi</div>
                        <div className='font-semibold text-2xl flex-wrap text-creamyYellow-800'>Web Developer</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomePage;