"use client";
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

function HomePage() {
    return (
        <div className="font-base relative flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Shadan Saifi
            </h1>
            <h2 className="mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Full Stack Web Developer (MERN)
            </h2>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-wrap text-center my-16 max-w-[800px]">
                Hi, my name is Shadan Saifi, Web Developer based in Delhi, India. I specialize in both frontend and backend development, crafting user-friendly interfaces and robust server-side functionalities.
            </h4>
            <Link href="#about" className='absolute bottom-16'>
                <Button variant="reverse" className='text-lg mt-8 mb-16 bottom-24'>
                    More About Me
                </Button>
            </Link>
        </div>
    );
}

export default HomePage;
