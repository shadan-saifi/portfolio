"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function page() {
const css:string="inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark"
    return (
        <div className="min-h-screen w-full ">

            <div className=" pt-48 p-8">
                <div className='font-bold text-5xl px-8 pb-4'>Authentication App</div>

                <p className="p-8 pb-0 leading-loose">This project implements a robust authentication system using the <b>MERN stack</b>, with <b>MySQL</b> integrated as the database instead of MongoDB. Utilizing Express and <b>Node.js</b> for backend logic, it ensures secure and efficient authentication processes. The frontend is built with React, offering a seamless user interface and interaction. By incorporating MySQL for relational data storage, the project demonstrates the capability to blend traditional SQL databases with modern full-stack frameworks. Overall, it highlights expertise in creating secure and scalable authentication solutions within a contemporary tech stack.</p>
                <div className='py-4 text underline'>
                </div>
                <Button variant="neutral" className="text-lg m-8 ">
                    <Link href='https://github.com/shadan-saifi/authFullstackMERN-MySQL'>
                        Click here to see code on Github.
                    </Link>
                </Button>
                <div className="px-8 space-y-8">
                    <div className="flex flex-col justify-center items-start space-y-6 ">
                        <div className="font-bold text-xl">Skills Used:</div>
                        <div className="space-y-4">
                            <div className="font-semibold text-lg">Frontend-</div>
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
                        <div className="space-y-4">
                            <div className="font-semibold text-lg">Backend-</div>
                            <div className="flex flex-wrap gap-4">
                                <div className={css}>
                                    Express.js</div>
                                <div className={css}>
                                    Node.js</div>
                                <div className={css}>
                                    MySQL</div>
                                <div className={css}>
                                    Bcrypt</div>
                                <div className={css}>
                                    JSON Web Token</div>
                                <div className={css}>
                                    Javascript</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="font-semibold text-lg">Other-</div>
                            <div className="flex flex-wrap gap-4">
                                <div className={css}>
                                    Git & Github</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="font-bold text-xl">Features:</div>
                        <div className="flex flex-wrap gap-4">
                                <div className={css}>
                                Authentication</div>
                                <div className={css}>
                                SignIn & Register User</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default page;