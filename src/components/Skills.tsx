import React from 'react';

function Skills() {
    return (
        <div className="px-8 space-y-8 flex flex-col justify-center items-start h-screen">
            <div className="flex flex-col justify-center items-start space-y-6 ">
                <div className="text-3xl font-extrabold mb-4">Skills:</div>
                <div className="space-y-4">
                    <div className="font-semibold text-lg">Frontend-</div>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            HTML
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            CSS
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Javascript
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            React
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            React Hook Form
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Redux
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Tailwind
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Shadcn
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Videojs
                        </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Axios
                        </div>
                    </div>

                </div>
                <div className="space-y-4">
                    <div className="font-semibold text-lg">Backend-</div>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Expressjs</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Nodejs</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            MongoDB</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            MySQL</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Bcrypt</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            JSON Web Token</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            CORS</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Mongoose</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Cloudinary</div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="font-semibold text-lg">Other skills-</div>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Git & Github</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Next.js</div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Deployed frontend on Vercel </div>
                        <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                            Deployed backend on Vercel&#39;s serverless architecture</div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
            <div className="font-semibold text-lg">Languages-</div>
            <div className="flex flex-wrap gap-4">
                    <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                        English</div>
                    <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                        Hindi</div>
                    <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                        Urdu </div>
                    <div className="bg-main text-text dark:text-text inline-block py-2 px-4 rounded-sm  border-2 border-border dark:border-darkBorder shadow-dark">
                        Arabic(beginner)</div>
                </div>
            </div>
        </div>
    );
}

export default Skills;