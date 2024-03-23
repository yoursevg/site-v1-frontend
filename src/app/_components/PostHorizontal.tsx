import React from 'react';
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Calendar, Heart, MapPin, Star} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {useTimeAgo} from "next-timeago";

function PostHorizontal({post, index}:{post:any, index:any}) {

    const {TimeAgo} = useTimeAgo()

    const StarRating = ({rating}: {rating:number}) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= Math.round(rating)) {
                stars.push(<Star size={12} className="fill-black"/>)
            } else {
                stars.push(<Star size={12} />)
            }
        }

        return (
            <div className="flex">
                {stars}
            </div>
        );
    }



    return (
        <Link href={`/posts?postId=${post.id}`}> <Card className="w-full rounded-xl h-[200px]" key={index}>
            <CardContent className="flex justify-between px-0 h-full">
                <div className="flex h-full">
                    <div className="h-full relative w-64">
                        <Image className="rounded-l-xl"
                               src={post.attributes.images.data[0].attributes.url} alt="photo"
                               objectFit="cover" layout="fill"/>
                    </div>
                    <div className="ml-3">
                        <CardTitle className="my-4">{post.attributes.title}</CardTitle>
                        <div className="flex flex-col gap-3">
                                                <span
                                                    className="font-bold text-black text-lg">{post.attributes.price}₽</span>
                            <p>{post.attributes.stock} шт. в наличии</p>
                            <div className="flex items-center">
                                <MapPin size={15}/> {post.attributes.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={15}/> <TimeAgo date={post.attributes.createdAt}
                                                               locale='ru'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-between p-5">
                    <Heart className="cursor-pointer hover:fill-black"/>
                    <div className="flex gap-2 items-center">
                        <Avatar className="border">
                            <AvatarImage src={post.attributes.author.data.attributes.profile_image_url}/>
                            <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-black">
                                {post.attributes.author.data.attributes.first_name ??
                                    post.attributes.author.data.attributes.username
                                }
                            </p>
                            <div className="flex items-center gap-1">
                                <StarRating rating={4}/>
                                <span className="text-sm">13300</span>
                            </div>
                            <span className="text-sm">
                                зарегистрирован:
                                <TimeAgo date={post.attributes.author.data.attributes.createdAt}
                                         locale='ru'/>
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        </Link>
    );
}

export default PostHorizontal;