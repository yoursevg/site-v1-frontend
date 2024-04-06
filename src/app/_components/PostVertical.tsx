import React from 'react';
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Calendar} from "lucide-react";
import Link from "next/link";
import {useTimeAgo} from "next-timeago";

function PostVertical({post}:{post:any}) {

    const {TimeAgo} = useTimeAgo()

    return (
        <Link href={`/posts?postId=${post.id}`}> <Card
            className="rounded-xl w-[300px] h-[400px]
            transition duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-50">
            <CardContent className="flex justify-between px-0">
                <div className="flex flex-col w-full">
                    <div className="w-full h-48 relative">
                        <Image className="rounded-t-xl w-full h-full"
                               src={post.attributes.images?.data[0].attributes.url} alt="photo"
                               layout="fill" objectFit="cover"/>
                    </div>
                    <div className="ml-3">
                        <CardTitle className="my-4">{post.attributes.title}</CardTitle>
                        <div className="flex flex-col gap-3">
                                                <span
                                                    className="font-bold text-black text-lg">{post.attributes.price}₽</span>
                            <p>{post.attributes.stock} шт. в наличии</p>
                            <div className="flex items-center gap-2">
                                <Calendar size={15}/>
                                <TimeAgo date={post.attributes.createdAt}
                                                               locale='ru'/>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        </Link>
    );
}

export default PostVertical;