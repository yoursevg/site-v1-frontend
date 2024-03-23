"use client"

import React, {useEffect} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import { Loader } from 'rsuite';

function Navbar() {
    const { setTheme } = useTheme()

    // const {user} = useKindeBrowserClient()
    // useEffect(() => {
    //     console.log(user)
    // }, [user]);

    const Menu = [
        {
            id: 1,
            name: "Главная страница",
            path: "/"
        },
        {
            id: 2,
            name: "Новостная лента",
            path: "/news"
        },
        {
            id: 3,
            name: "Форум",
            path: "/forum"
        },
    ]

    return (
        <div className='flex items-center
    justify-between p-4 shadow-sm md:px-20 sm:px-10 mb-7'>
            <div className='flex items-center gap-10'>
                <Image src='/logo.svg' alt='logo'
                       width={180} height={80}
                />
                <ul className='md:flex gap-8 hidden'>
                    {Menu.slice(0,3).map((item, index) => (
                        <Link href={item.path} key={index}>
                            <li className='hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flex items-center gap-10'>
                <ul className='md:flex gap-5 hidden  items-center'>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun
                                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                    <Moon
                                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Светлая
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Тёмная
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    Системная
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <SignedIn>
                        <Link href="/profile">
                            <li className="hover:text-primary
                    cursor-pointer hover:scale-105 transition-all ease-in-out">Профиль</li>
                        </Link>
                    </SignedIn>
                    <li className="flex items-center">
                        <ClerkLoading>
                            <span>Загрузка...</span>
                        </ClerkLoading>
                        <ClerkLoaded>
                            <SignedOut>
                                <Link href="/sign-in">
                                    <Button variant="outline">Войти</Button>
                                </Link>
                            </SignedOut>
                            <SignedIn>
                                <UserButton/>
                            </SignedIn>
                        </ClerkLoaded>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;