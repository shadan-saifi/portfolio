'use client'
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
function todo() {
    const css: string = "inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark"

    return (
        <div className="min-h-screen w-full">
            <div className=" max-h-[400px] aspect-video border-2 border-border dark:border-darkBorder shadow-2xl  dark:shadow-main float-right mt-48 m-16">

                <img src="/todo.png" alt="image" className='h-full w-full' />

            </div>

            <div className="pt-48 p-16">
                <div className='font-bold text-5xl pb-8'>Task Manager</div>
                <p>
                    Introducing your <b>Task Manager</b> – the ultimate tool to stay organized and productive. This intuitive web app allows you to effortlessly manage your tasks and to-dos with ease. Whether you&#39;re planning your day or organizing a long-term project, the Task Manager makes it simple to <b>add new tasks, edit existing ones, mark them as completed, or delete them when no longer needed</b>. With full <b>CRUD</b> (Create, Read, Update, Delete) capabilities, you have complete control over your task list, ensuring that nothing slips through the cracks. Simplify your workflow and stay on top of your responsibilities with this powerful Task Manager.
                </p>
                <Button variant="neutral" className="text-lg m-8 ml-0">
                    <Link href='https://todo-using-redux-with-local-storage.vercel.app/'>
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
                                    React
                                </div>
                                <div className={css}>
                                    Tailwind
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-6 ">
                        <div className="font-bold text-xl">Features:</div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <div className={css}>
                                    Add a New Task
                                </div>
                                <div className={css}>
                                    Edit an Existing Task
                                </div>
                                <div className={css}>
                                    Mark Task as Completed
                                </div>
                                <div className={css}>
                                    Delete an Existing Task
                                </div>
                                <div className={css}>
                                    Tasks Remains on Refreshing Page
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default todo;