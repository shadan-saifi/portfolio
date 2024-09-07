'use client'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useRouter } from 'next/router';

function Projects() {
    interface Project {
        id: Number;
        title: String;
        description: String;
        content: String;
        liveLink?: string;
        github: string;
        githubBackend?: string;
        href: string;
    }
    const projects: Project[] = [
        {
            id:1,
            title: "You Tube Clone",
            description: "An interactive full-stack Video Streaming App",
            content: "This video streaming app provides secure authentication with bcrypt and JSON Web Token, and interactive features like video filtering, CRUD operations, and playlists. Built with React, Redux, Tailwind, and videojs for the frontend, and Express & Node.js with MongoDB for the backend. Deployed on Vercel, it ensures top-notch performance and accessibility.",
            liveLink: "http://youtube-twitter-app-frontend.vercel.app",
            github: "https://github.com/shadan-saifi/Youtube-Twitter-App-Frontend",
            githubBackend: "https://github.com/shadan-saifi/YouTube-Twitter-App",
            href: "/projects/youTubeClone"
        },
        {
            id:2,
            title: "Task Manager",
            description: "An easy way to manage your daily Tasks",
            content: "Introducing Task Manager – your ultimate tool for staying organized and productive.Effortlessly manage tasks with full CRUD capabilities: add, edit, complete, or delete tasks.Streamline your workflow and keep track of responsibilities with ease.",
            liveLink: "https://todo-using-redux-with-local-storage.vercel.app/",
            github: "https://github.com/shadan-saifi/todoUsingReduxWithLocalStorage",
            href: "/projects/todo"
        },
        {
            id:3,
            title: "Password Generator",
            description: "Secure Your Digital Life with PasswordGenerator",
            content: "Introducing PasswordGenerator – your ultimate tool for creating secure, custom passwords. Easily generate strong passwords with options for numbers, special characters, and specific lengths. Enhance your digital security and ensure your passwords are both robust and memorable.",
            liveLink: "https://password-generator-jet-six-50.vercel.app/",
            github: "https://github.com/shadan-saifi/passwordGenerator",
            href: "/projects/passwordGenerator"
        },
        {
            id:4,
            title: "Netflix UI Clone",
            description: "Netflix UI Clone: A Showcase of Frontend Excellence",
            content: "Introducing the Netflix UI Clone – a polished web app that replicates Netflix's sleek, user-friendly interface. This project highlights my frontend development skills and attention to design detail, featuring smooth scrolling and dynamic content. It's a testament to my ability to create visually appealing, functional web applications.",
            liveLink: "https://netflix-ui-clone-tailwind.vercel.app/",
            github: "https://github.com/shadan-saifi/Netflix-UI-Clone",
            href: "/projects/netflixUIClone"
        },
        {
            id:5,
            title: "Music App UI clone",
            description: "A Stylish Next.js & Tailwind CSS Implementation using Aceternity UI",
            content: "This project replicates a music app interface using Next.js, Tailwind CSS, and Aceternity UI, showcasing modern web design and responsive functionality. It features a polished, user-friendly layout with dynamic elements and smooth navigation. Ideal for demonstrating proficiency in building stylish and interactive web applications.",
            liveLink: "https://music-ui-clone-nextjs.vercel.app/",
            github: "https://github.com/shadan-saifi/music-ui-clone-nextjs",
            href: "/projects/musicAppUIClone"
        },
        {
            id:6,
            title: "Authentication app",
            description: "Authentication System with MERN Stack and MySQL Integration",
            content: "Implemented a robust authentication system using the MERN stack with MySQL as the database, substituting MongoDB. This project leverages Express and Node.js for backend logic, React for the frontend, and MySQL for secure, relational data storage. The solution demonstrates proficiency in integrating traditional SQL databases within a modern full-stack framework.",
            github: "https://github.com/shadan-saifi/music-ui-clone-nextjs",
            href: "/projects/authenticationApp"
        }
    ]

    return (
        <div className="flex flex-wrap gap-24 p-12 my-20">
            {
                projects.map((project) => (
                    <Card className="max-w-[400px] inline-block " key={project?.id?.toString()}>
                        <CardHeader>
                            <CardTitle>{project?.title}</CardTitle>
                            <CardDescription>{project?.description}</CardDescription>
                        </CardHeader>
                        <CardContent >
                            <div>
                                {project?.content}
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-wrap gap-4 mt-4">
                           {project?.liveLink && <Button variant="neutral" className="flex-1 min-w-[120px] ">
                                <a href={project?.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Live Link</a>
                            </Button>}
                            <Button variant="neutral" className="flex-1 min-w-[120px]">
                                <a href={project?.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >{project?.githubBackend ? "Frontend code" : "Code on Github"}</a>
                            </Button>
                            {project?.githubBackend && <Button variant="neutral" className="flex-1 min-w-[120px]">
                                <a href={project?.githubBackend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Backend code</a>
                            </Button>}
                            <Button variant="neutral" className="flex-1 min-w-[120px]">
                                <a href={project?.href}
                                >Know more</a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))
            }

        </div>
    );
}

export default Projects;