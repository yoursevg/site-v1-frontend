import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {MessageSquareText} from "lucide-react";

function News() {

    const cards = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deserunt laborum nemo quod ratione reiciendis.",
            date:"26.01.24",
            comments: 24,
            image_url: "/trash.jpg"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deserunt laborum nemo quod ratione reiciendis.",
            date:"26.01.24",
            comments: 24,
            image_url: "/trash.jpg"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deserunt laborum nemo quod ratione reiciendis.",
            date:"26.01.24",
            comments: 24,
            image_url: "/trash.jpg"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deserunt laborum nemo quod ratione reiciendis.",
            date:"26.01.24",
            comments: 24,
            image_url: "/trash.jpg"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deserunt laborum nemo quod ratione reiciendis.",
            date:"26.01.24",
            comments: 24,
            image_url: "/trash.jpg"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, deserunt laborum nemo quod ratione reiciendis.",
            date:"26.01.24",
            comments: 24,
            image_url: "/trash.jpg"
        }
    ]
    return (
        <div>
            <div className="flex flex-wrap justify-between">
                {cards.map((card) => {
                    return <Card className="w-[350px] py-2 cursor-pointer mb-7">
                        <CardContent className="py-2">
                            <CardTitle>
                                {card.title}
                            </CardTitle>
                            <CardDescription className="py-2">
                                {card.description}
                            </CardDescription>
                            <AspectRatio ratio={3 / 2}>
                                <Image src={card.image_url} alt="" width={300} height={300}
                                       className="rounded-md object-cover"/>
                            </AspectRatio>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <p className="mx-2">
                                {card.date}
                            </p>
                            <div className="flex">
                                <p className="mx-2 flex gap-1">
                                    <MessageSquareText/> {card.comments}
                                </p>
                            </div>
                        </CardFooter>
                    </Card>
                })}
            </div>
        </div>
    );
}

export default News;