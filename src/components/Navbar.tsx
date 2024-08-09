"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-16 inset-x-0 mx-16 z-50",className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <Link href={"/about"}>
                    <MenuItem setActive={setActive} active={active} item="About">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="You-Tube clone"
                            href="/projects/youTubeClone"
                            src="/you tube clone.png"
                            description="Share the fun of your life with others"
                        />
                         <ProductItem
                            title="Password Generator"
                            href="/projects/passwordGenerator"
                            src="/passwordGenerator.png"
                            description="Generate an unique password with our password generator and secure your privacy"
                        />
                       <ProductItem
                            title="Task Manager"
                            href="/projects/todo"
                            src="/todo.png"
                            description="Manage your tasks easily and efficiently with our task manager"
                        />
                       <ProductItem
                            title="Netflix UI Clone"
                            href="/projects/netflixUIClone"
                            src="/netflixUIClone.png"
                            description="Netflix UI clone made using tailwind"
                        />
                    </div>
                </MenuItem>
               
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;