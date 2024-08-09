'use client'
import React from 'react';

function About() {
    return (
        <div className='min-h-screen w-full flex flex-row justify-center items-start '>
            <div className='min-h-screen w-1/2 bg-creamyYellow-100 '>
                <div className='min-h-screen shadow-2xl shadow-creamyYellow-600  my-16 ml-16 bg-creamyYellow-100'>
                    <div className=' text-creamyYellow-900 pt-28 p-8 my-auto'>
                        <p className=' text-wrap text-start indent-10 leading-loose'>
                            Hi there! I'm Shadan Saifi, a web developer with a knack for creating engaging digital experiences using the MERN stack.
                        </p>
                        <br />
                        <p className=' text-wrap text-start indent-10 leading-loose'>
                            From earning a Bachelor's in Civil Engineering and a Master's in Sociology to transitioning into a self-taught web developer, my journey is marked by adaptability and a relentless passion for technology. I thrive on the challenge of learning new skills and applying them to innovative projects.
                        </p>
                        <br />
                        <p className=' text-wrap text-start indent-10 leading-loose'>
                            I specialize in both frontend and backend development, crafting user-friendly interfaces and robust server-side functionalities. Whether it's building a sophisticated video-streaming app with secure authentication and interactive features or cloning the sleek design of Netflix's UI, I am dedicated to bringing ideas to life through code.
                        </p>
                        <br />
                        <p className=' text-wrap text-start indent-10 leading-loose'>
                            Always eager to grow, I enjoy collaborating with like-minded teams where I can contribute to impactful projects and continuously enhance my skill set.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className='min-h-screen w-1/2 bg-creamyYellow-200'>
                <div className='min-h-screen flex flex-col justify-start items-center shadow-2xl shadow-creamyYellow-100  my-16 mr-16 bg-creamyYellow-200'>
                <div className='p-8 space-y-4 my-auto'>
                        <div className=' text-creamyYellow-900'>
                            <div className='py-4 font-bold'>Tech Skills-</div>
                            <ul className='list-inside list-disc'>
                                <li><b>Frontend:</b> JavaScript,Typescript, React, Tailwind, HTML, CSS, Axios, Redux</li>
                                <li><b>Backend:</b>  MongoDB, Express, Node.js, bcrypt</li>
                                <li><b>Other</b> GitHub, Vercel, Nextjs</li>
                            </ul>
                        </div>
                        <div className=' text-creamyYellow-900'>
                            <div className='py-4 font-bold'>Highlight Projects-</div>
                            <ul className='list-inside list-disc'>
                                <li><b> Video-Streaming App: </b>Built a feature-rich app with secure authentication, CRUD operations, video filters, comments, playlists, subscriptions, and a dashboard.</li>
                                <li><b>Password Generator: </b>Created a simple yet efficient tool for generating secure passwords.</li>
                                <li><b>UI Clones</b>UI clones of Netflix, Amazon, Music App and a dummy website</li>
                                <li>Go to projects section to see all</li>
                            </ul>
                        </div>
                        <div className=' text-creamyYellow-900'>
                            <div className='py-4 font-bold'>other Skills-</div>
                            <ul className='list-inside list-disc'>
                                <li><b>Languages: </b>English, Urdu, Hindi, beginner in Arabic</li>
                                <li>Continuously updating my skills with the latest tech trends.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;