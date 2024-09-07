'use client'
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
function netflixUIClone() {
    const css: string = "inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark"

    return (
        <div className="min-h-screen w-full">
            <div className="max-h-[400px] aspect-video border-2 border-border dark:border-darkBorder shadow-2xl  dark:shadow-main float-right mt-48 m-16">
                <img src="/MusicUIClone.png" alt="image" className='h-full w-full' />
            </div>
            <div className=" pt-48 p-16">
                <div className='font-bold text-5xl pb-8'>Music App UI Clone</div>
                <p>
                This project replicates a sophisticated music app interface using <b>Next.js</b>, Tailwind CSS, and Aceternity UI, reflecting modern web design trends and responsive functionality. The design emphasizes a polished and user-friendly layout, making it easy for users to interact with dynamic elements and navigate smoothly. Leveraging Tailwind CSS ensures a clean and contemporary aesthetic, while Aceternity UI provides additional style and usability enhancements. The application is fully responsive, adapting seamlessly across various device sizes, from mobile phones to desktops. Overall, it demonstrates a high level of proficiency in creating stylish, interactive web applications with a focus on user experience.
                </p>
                <div className='py-4 text underline'>
                </div>
                <Button variant="neutral" className="text-lg m-8 ml-0">
                    <Link href='https://music-ui-clone-nextjs.vercel.app/'>
                        Click here to open the project.
                    </Link>
                </Button>
                <div className=" space-y-8">
                    <div className="flex flex-col justify-center items-start space-y-6 mt-8">
                        <div className="font-bold text-xl">Skills Used:</div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <div className={css}>
                                    Javascript
                                </div>
                                <div className={css}>
                                    CSS
                                </div>
                                <div className={css}>
                                    HTML
                                </div>
                                <div className={css}>
                                    Tailwind CSS
                                </div>
                                <div className={css}>
                                Aceternity UI
                                </div>
                                <div className={css}>
                                    Next.js
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-6 ">
                        <div className="font-bold text-xl">Features:</div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <div className={css}>
                                    A replication of a genuine music app interface.                                </div>
                                <div className={css}>
                                    Smooth and intuitive user experience.                                </div>
                                <div className={css}>
                                    Responsive design for seamless viewing across devices.                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default netflixUIClone;