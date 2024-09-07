"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ModeToggle";

function Navbar() {
   
    return (
        <NavigationMenu className="z-50 m750:max-w-[300px] ">
            <NavigationMenuList className="m750:max-w-[300px]">
                <NavigationMenuItem>
                    <Link href="/#home" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="m750:max-w-[80px] m750:text-xs" >
                                Home
                            </span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="m750:max-w-[80px] m750:text-xs">
                                About
                            </span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#skills" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="m750:max-w-[80px] m750:text-xs">
                                Skills
                            </span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#projects" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="m750:max-w-[80px] m750:text-xs">
                                Projects
                            </span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="m750:max-w-[80px] m750:text-xs">
                                Contact
                            </span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <span className="m750:max-w-[80px] m750:text-xs">
                        <ModeToggle />
                    </span>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>


    );
}

export default Navbar;

