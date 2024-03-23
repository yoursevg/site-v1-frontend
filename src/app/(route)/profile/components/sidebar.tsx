"use client"
import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useUser} from "@clerk/clerk-react";

function Sidebar() {

    const pathname = usePathname()
    const { isSignedIn, user } = useUser();

    if (!user) return null;

    if (!isSignedIn) {
        return <div className="h-[80vh] bg-gray-300">
            Loading...
        </div>
    }

    return (
        <aside className="flex flex-col gap-3 p-6">
            <div className="flex flex-col gap-3">
                <Avatar className="border w-20 h-20">
                    <AvatarImage src={user?.imageUrl}/>
                    <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <CardTitle>{user?.firstName ? user.firstName : user?.username}</CardTitle>
                <div className="flex gap-3 items-center justify-around">
                    <span>0,0</span>
                    <span className="w-[65px]">Нет отзывов</span>
                </div>
            </div>
            <Separator/>
            <div className="flex flex-col gap-3">
                <Link href="/profile/posts">
                    Мои объявления
                </Link>
                <Link href="/profile/reviews">
                    Мои отзывы
                </Link>
                <Link href="/profile/favourites">
                    Избранное
                </Link>
            </div>
            <Separator/>
            <div className="flex flex-col gap-3">
                <Link href="/profile/messages">
                    Сообщения
                </Link>
                <Link href="/profile/notifications">
                    Уведомления
                </Link>
            </div>
            <Separator/>
            <div className="flex flex-col gap-3">
                <Link href="/announcements">
                    Управление профилем
                </Link>
                <Link href="/reviews">
                    Защита профиля
                </Link>
                <Link href="/favourites">
                    Настройки
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;