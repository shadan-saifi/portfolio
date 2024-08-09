'use client'

import React from 'react';
import Link from 'next/link';
function todo() {
    return (
        <div className="min-h-screen w-full dark:bg-black bg-creamyYellow-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
             <div className="hover:opacity-95 active:scale-[0.99] max-h-[400px] aspect-video border-2 border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600 float-right mt-48 m-16">
                <Link href='https://todo-using-redux-with-local-storage.vercel.app/'>
                    <img src="/todo.png" alt="image" className='h-full w-full' />
                </Link>
            </div>

            <div className="text-creamyYellow-900 dark:text-creamyYellow-200 pt-48 p-16">
                <div className='font-bold text-5xl text-creamyYellow-900 dark:text-creamyYellow-200 pb-8'>Task Manager</div>
                <p>
                    Introducing your <b>Task Manager</b> – the ultimate tool to stay organized and productive. This intuitive web app allows you to effortlessly manage your tasks and to-dos with ease. Whether you're planning your day or organizing a long-term project, the Task Manager makes it simple to <b>add new tasks, edit existing ones, mark them as completed, or delete them when no longer needed</b>. With full <b>CRUD</b> (Create, Read, Update, Delete) capabilities, you have complete control over your task list, ensuring that nothing slips through the cracks. Simplify your workflow and stay on top of your responsibilities with this powerful Task Manager.
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
                                    Add a New Task
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Edit an Existing Task
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Mark Task as Completed
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
                                    Delete an Existing Task
                                </div>
                                <div className="bg-creamyYellow-200 inline-block py-2 px-4 rounded-xl border border-creamyYellow-600 shadow-2xl shadow-creamyYellow-600">
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