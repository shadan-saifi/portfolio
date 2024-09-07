"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function page() {
const css:string="inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark"
    return (
        <div className="min-h-screen w-full ">

            <div className="max-h-[400px] aspect-video border-2 border-border dark:border-darkBorder shadow-2xl  dark:shadow-main float-right mt-48 m-16">
                <img src="/you tube clone.png" alt="image" className='h-full w-full shadow-2xl' />
            </div>

            <div className=" pt-48 p-8">
                <div className='font-bold text-5xl px-8 pb-4'>YouTube Clone</div>

                <p className="p-8 pb-0 leading-loose">This video streaming application integrates robust authentication mechanisms, employing <b>bcrypt</b> for hashing and <b>JSON Web Token</b> for secure access, ensuring user privacy and security. Dive into a world of interactive features, including <b>video filtering, CRUD operations, likes, comments, playlists, subscriptions, and fuzzy search</b>, all easily accessible via an intuitive dashboard. Utilizing <b>React, Redux, Tailwind, shadcn, and videojs for the frontend, and Express & Node.js for the backend, alongside MongoDB for database management and axios for APIs</b>, our platform guarantees a smooth and responsive user experience. With added <b>functionalities</b> such as <b>playlist creation, video liking, commenting, subscribing, and seamless login/signup</b> processes using <b>React Hook Form,</b> our application caters to every user&#39;s needs. Furthermore, with <b>deployment on Vercel&#39;s serverless architecture,</b> expect unparalleled performance and accessibility. Welcome to the ultimate video streaming experience, where every feature enhances your journey through digital entertainment.</p>
                <div className='py-4 text underline'>
                </div>
                <Button variant="neutral" className="text-lg m-8 ">
                    <Link href='https://youtube-twitter-app-frontend.vercel.app/'>
                        Click here to open the project.
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
                                    React Hook Form
                                </div>
                                <div className={css}>
                                    Redux
                                </div>
                                <div className={css}>
                                    Tailwind CSS
                                </div>
                                <div className={css}>
                                    Shadcn
                                </div>
                                <div className={css}>
                                    Video.js
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
                                    MongoDB</div>
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
                                <div className={css}>
                                    Deployed frontend on Vercel </div>
                                <div className={css}>
                                    Deployed backend on Vercel&#39;s serverless architecture</div>
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
                                <div className={css}>
                                Make Channel </div>
                                <div className={css}>
                                Upload & Delete your Video</div>
                                <div className={css}>
                                CRUD on Video & Channel Details </div>
                                <div className={css}>
                                CRUD on Comments & Replies</div>
                                <div className={css}>
                                Like & Unlike video</div>
                                <div className={css}>
                                Search Videos by Detail or Description</div>
                                <div className={css}>
                                Search Channel Videos</div>
                                <div className={css}>
                                Get Channel Statistics</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default page;