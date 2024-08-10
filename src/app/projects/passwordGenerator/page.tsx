'use client'

import React from 'react';
import Link from 'next/link';
function passwordGenerator() {
    return (
        <div className="min-h-screen w-full dark:bg-black bg-creamyYellow-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
            <div className="hover:opacity-95 active:scale-[0.99] max-h-[400px] aspect-video border-2 border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600 float-right mt-48 m-16">
                <Link href='https://password-generator-jet-six-50.vercel.app/'>
                    <img src="/passwordGenerator.png" alt="image" className='h-full w-full' />
                </Link>
            </div>
            <div className="text-creamyYellow-900 dark:text-creamyYellow-200 pt-48 p-16">
                <div className='font-bold text-5xl text-creamyYellow-900 dark:text-creamyYellow-200 pb-8'>Password Generator</div>
                <p>
                    Introducing <b>PasswordGenerator</b>- your go-to tool for creating secure, random passwords tailored to your needs. With PasswordGenerator, you can effortlessly generate strong passwords to keep your online accounts safe. Whether you prefer a simple password without numbers or special characters, or a more complex one with them, this tool has you covered. Customize your password settings to include or exclude numbers, special characters, or even specific length requirements, ensuring that you get a password that&#39;s both secure and easy to remember. Say goodbye to weak, easily guessable passwords, and take control of your digital security with PasswordGenerator.
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
                                    React
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
                                    Generate a Strong Unique Password
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Customizable Password Length
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Option to Include Numbers
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Option to Include Special Characters
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default passwordGenerator;