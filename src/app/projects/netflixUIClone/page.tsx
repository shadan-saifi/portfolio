'use client'
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
function netflixUIClone() {
    const css: string = "inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark"

    return (
        <div className="min-h-screen w-full">
            <div className="max-h-[400px] aspect-video border-2 border-border dark:border-darkBorder shadow-2xl  dark:shadow-main float-right mt-48 m-16">
                <img src="/netflixUIClone.png" alt="image" className='h-full w-full' />
            </div>
            <div className=" pt-48 p-16">
                <div className='font-bold text-5xl pb-8'>Netflix UI Clone</div>
                <p>
                    Introducing your <b>Netflix UI Clone</b> – a meticulously crafted web application that mirrors the sleek and user-friendly interface of Netflix. This project was a challenge I took on to sharpen my frontend development skills and to demonstrate my ability to build visually appealing, user-friendly web applications. Every detail, from the smooth scrolling to the dynamic content display, has been carefully crafted to provide the same seamless experience users expect from Netflix. This clone is a proud showcase of my commitment to design excellence and my ability to translate complex UI/UX concepts into a fully functional, polished product.
                </p>
                <div className='py-4 text underline'>
                </div>
                <Button variant="neutral" className="text-lg m-8 ml-0">
                    <Link href='https://netflix-ui-clone-tailwind.vercel.app/'>
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
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-6 ">
                        <div className="font-bold text-xl">Features:</div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <div className={css}>
                                    Faithful replication of the original Netflix interface.                                </div>
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