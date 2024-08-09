'use client'

import React from 'react';
import Link from 'next/link';
function netflixUIClone() {
    return (
        <div className="min-h-screen w-full dark:bg-black bg-creamyYellow-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
            <div className="hover:opacity-95 active:scale-[0.99] max-h-[400px] aspect-video border-2 border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600 float-right mt-48 m-16">
                <Link href='https://netflix-ui-clone-tailwind.vercel.app/'>
                    <img src="/netflixUIClone.png" alt="image" className='h-full w-full' />
                </Link>
            </div>
            <div className="text-creamyYellow-900 dark:text-creamyYellow-200 pt-48 p-16">
                <div className='font-bold text-5xl text-creamyYellow-900 dark:text-creamyYellow-200 pb-8'>Netflix UI Clone</div>
                <p>
                    Introducing your <b>Netflix UI Clone</b> – a meticulously crafted web application that mirrors the sleek and user-friendly interface of Netflix. This project was a challenge I took on to sharpen my frontend development skills and to demonstrate my ability to build visually appealing, user-friendly web applications. Every detail, from the smooth scrolling to the dynamic content display, has been carefully crafted to provide the same seamless experience users expect from Netflix. This clone is a proud showcase of my commitment to design excellence and my ability to translate complex UI/UX concepts into a fully functional, polished product.
                </p>
                 <div className='py-4 text underline'>            
                        Click on the image to open the project.
                 </div>
                <div className=" space-y-8">
                    <div className="flex flex-col justify-center items-start space-y-6 mt-8">
                        <div className="font-bold text-xl">Skills Used:</div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Javascript
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    CSS
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    HTML
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Tailwind
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-6 ">
                        <div className="font-bold text-xl">Features:</div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Faithful replication of the original Netflix interface.                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Smooth and intuitive user experience.                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
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