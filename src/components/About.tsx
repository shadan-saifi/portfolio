import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

function About() {
    return (
        <section className=" p-8 rounded-lg shadow-xl mx-4 md:mx-12 my-8 max-w-4xl leading-relaxed h-screen flex flex-col justify-center items-start ">
            <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
            <p className="text-lg mb-4">
                Hi there! I am <span className="font-semibold">Shadan Saifi</span>, a web developer with a knack for creating engaging digital experiences using the MERN stack.
            </p>
            <p className="text-lg mb-4">
                From earning a Bachelor&apos;s in Civil Engineering and a Master&apos;s in Sociology to transitioning into a self-taught web developer, my journey is marked by adaptability and a relentless passion for technology. I thrive on the challenge of learning new skills and applying them to innovative projects.
            </p>
            <p className="text-lg mb-4">
                I specialize in both frontend and backend development, crafting user-friendly interfaces and robust server-side functionalities. Whether it&apos;s building a sophisticated fullstack app with secure authentication and interactive features or making only frontend and/or backend apps, I am dedicated to bringing ideas to life through code.
            </p>
            <p className="text-lg">
                Always eager to grow, I enjoy collaborating with like-minded teams where I can contribute to impactful projects and continuously enhance my skill set.
            </p>
        </section>
      
    );
}

export default About;
