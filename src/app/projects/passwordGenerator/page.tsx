'use client'
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
function passwordGenerator() {
    const css:string="inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark"

    return (
        <div className="min-h-screen w-full  ">
            <div className=" max-h-[400px] aspect-video border-2 border-border dark:border-darkBorder shadow-2xl  dark:shadow-main float-right mt-48 m-16">
                <img src="/passwordGenerator.png" alt="image" className='h-full w-full' />
            </div>
            <div className="pt-48 p-16">
                <div className='font-bold text-5xl pb-8'>Password Generator</div>
                <p>
                    Introducing <b>PasswordGenerator</b>- your go-to tool for creating secure, random passwords tailored to your needs. With PasswordGenerator, you can effortlessly generate strong passwords to keep your online accounts safe. Whether you prefer a simple password without numbers or special characters, or a more complex one with them, this tool has you covered. Customize your password settings to include or exclude numbers, special characters, or even specific length requirements, ensuring that you get a password that&#39;s both secure and easy to remember. Say goodbye to weak, easily guessable passwords, and take control of your digital security with PasswordGenerator.
                </p>
                <Button variant="neutral" className="text-lg m-8 ml-0">
                <Link href='https://password-generator-jet-six-50.vercel.app/'>
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
                                    React.js
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
                                    Generate a Strong Unique Password
                                </div>
                                <div className={css}>
                                    Customizable Password Length
                                </div>
                                <div className={css}>
                                    Option to Include Numbers
                                </div>
                                <div className={css}>
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