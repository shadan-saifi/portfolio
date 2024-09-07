'use client'
import React from 'react';

function Contact() {
    return (
        <div className=" p-8 md:p-16 bg-overlay text-darkText dark:text-darkText">
            <div className="text-4xl font-extrabold text-center mb-12">
                <p>Let's Connect!</p>
            </div>
            <div className="text-lg text-center mb-12 mx-44">
                Whether you're interested in collaborating on exciting projects, have a question, or just want to chat about web development, I’m always open to new opportunities and connections.
            </div>

            <div className="max-w-3xl mx-auto  p-6 rounded-lg shadow-2xl">
                <div className="text-2xl font-semibold border-b pb-4 mb-6">
                    Get in Touch
                </div>
                <ul className="list-inside list-disc space-y-3  text-lg">
                    <li><b>Email:</b> <a href="mailto:shadansaifi99@gmail.com" className="text-blue-500 hover:underline">shadansaifi99@gmail.com</a></li>
                    <li><b>Phone:</b> <a href="tel:+919012882680" className="text-blue-500 hover:underline">+91 9012882680</a></li>
                    <li><b>LinkedIn:</b> <a href="http://www.linkedin.com/in/shadan-saifi-b5b98a128" className="text-blue-500 hover:underline">linkedin.com/in/shadan-saifi</a></li>
                    <li><b>Github:</b> <a href="https://github.com/shadan-saifi" className="text-blue-500 hover:underline">github.com/shadan-saifi</a></li>
                </ul>
            </div>

            <div className="max-w-3xl mx-auto mt-12  p-6 rounded-lg shadow-2xl">
                <div className="text-2xl font-semibold border-b pb-4 mb-6">
                    Why Reach Out?
                </div>
                <ul className="list-inside list-disc space-y-3  text-lg">
                    <li><b>Collaborate:</b> I’m eager to work on innovative projects that make a difference.</li>
                    <li><b>Consult:</b> Need advice on a web development challenge? I’m here to help.</li>
                    <li><b>Connect:</b> Let’s network and explore ideas together.</li>
                </ul>
            </div>

            <div className="text-center mt-8 text-xl ">
                Looking forward to hearing from you!
            </div>
        </div>
    );
}

export default Contact;