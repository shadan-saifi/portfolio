"use client";
import React from "react";
import Link from "next/link";
function page() {

    return (
        <div className="min-h-screen w-full dark:bg-black bg-creamyYellow-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">

            <div className="hover:opacity-95 active:scale-[0.99] max-h-[400px] aspect-video border-2 border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600 float-right mt-48 m-16">
                <Link href='https://youtube-twitter-app-frontend.vercel.app/'>
                    <img src="/you tube clone.png" alt="image" className='h-full w-full' />
                </Link>
            </div>

            <div className="text-creamyYellow-900 dark:text-creamyYellow-200 pt-48 p-8  ">
                <div className='font-bold text-5xl text-creamyYellow-900 dark:text-creamyYellow-200 px-8 pb-4'>Video-Streaming App</div>

                <p className="p-8 leading-loose">This video streaming application integrates robust authentication mechanisms, employing <b>bcrypt</b> for hashing and <b>JSON Web Token</b> for secure access, ensuring user privacy and security. Dive into a world of interactive features, including <b>video filtering, CRUD operations, likes, comments, playlists, subscriptions, and fuzzy search</b>, all easily accessible via an intuitive dashboard. Utilizing <b>React, Redux, Tailwind, shadcn, and videojs for the frontend, and Express & Node.js for the backend, alongside MongoDB for database management and axios for APIs</b>, our platform guarantees a smooth and responsive user experience. With added <b>functionalities</b> such as <b>playlist creation, video liking, commenting, subscribing, and seamless login/signup</b> processes using <b>React Hook Form,</b> our application caters to every user's needs. Furthermore, with <b>deployment on Vercel's serverless architecture,</b> expect unparalleled performance and accessibility. Welcome to the ultimate video streaming experience, where every feature enhances your journey through digital entertainment.</p>
                <div className='py-4 text underline'>
                    Click on the image to open the project.
                </div>
                <div className="px-8 space-y-8">
                    <div className="flex flex-col justify-center items-start space-y-6 ">
                        <div className="font-bold text-xl">Skills Used:</div>
                        <div className="space-y-4">
                            <div className="font-semibold text-lg">Frontend-</div>
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
                                    React Hook Form
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Redux
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Tailwind
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Shadcn
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Videojs
                                </div>
                            </div>

                        </div>
                        <div className="space-y-4">
                            <div className="font-semibold text-lg">Backend-</div>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Expressjs</div>
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Nodejs</div>
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">MongoDB</div>
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Bcrypt</div>
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">JSON Web Token</div>
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Javascript</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="font-semibold text-lg">Other-</div>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Git & Github</div>
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Deployed frontend on Vercel </div>
                                <div className="bg-creamyYellow-200 w-auto py-2 px-4  rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Deployed backend on Vercel's serverless architecture</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="font-bold text-xl">Features:</div>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Authentication</div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">SignIn & Register User</div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Make Channel </div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Upload & Delete your Video</div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">CRUD on Video & Channel Details </div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">CRUD on Comments & Replies</div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Like & Unlike video</div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Search Videos by Detail or Description</div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Search Channel Videos</div>
                            <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">Get Channel Statistics</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default page;