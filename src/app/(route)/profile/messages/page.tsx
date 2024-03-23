import React from 'react';
import {CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";

function Messages() {

    const companions = [
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
        {
            name: "Григорий",
            last_message: "Привет, дружище, как дела?",
            last_message_time: "28 янв",
            image_url: "/user.jpeg",
        },
    ]

    return (
        <div>
            <CardTitle>Мои сообщения</CardTitle>
            <div className="flex w-full mt-2">
                <div>
                    <div className="relative">
                        <Input className="pl-8 rounded-none border-r-0 border-l-0 border-b-0" placeholder="Поиск"/>
                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                            <Search size={19} className="text-gray-500 focus:text-black" />
                        </div>
                    </div>
                    <ScrollArea className="h-[600px] w-72 rounded-t-none border border-r-0">
                        <div className="">
                            {companions.map((companion, key) => {
                                return <div key={key}>
                                    <div className="flex gap-2 items-center py-1 px-2 cursor-pointer hover:bg-gray-200 transition ease-linear">
                                        <Avatar className="border">
                                            <AvatarImage src="/user.jpeg" />
                                            <AvatarFallback>AVTR</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{companion.name}</span>
                                                <span className="text-sm">{companion.last_message_time}</span>
                                            </div>
                                            <div className="text-sm">
                                                {companion.last_message.slice(0, 30) + "..."}
                                            </div>
                                        </div>
                                    </div>
                                    <Separator className=""/>
                                </div>
                            })}
                        </div>
                    </ScrollArea>
                </div>
                <div className="w-full max-w-[600px] mx-auto border">
                    content
                </div>
            </div>
        </div>
    );
}

export default Messages;