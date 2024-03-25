import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Calendar, Heart, MapPin, Star} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {useTimeAgo} from "next-timeago";
import {useUser} from "@clerk/clerk-react";
import GlobalApi from "@/app/_utils/GlobalApi";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

function PostHorizontal({post, index}:{post:any, index:any}) {

    const {isSignedIn, isLoaded, user} = useUser()
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        setLiked(false)
        if (user && post.attributes.users_favorites?.data[0]?.attributes.identificator === user?.id) {
            setLiked(true)
        }
        console.log(post)
    }, [user, post])

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
        )
    }

    const handleHeartClick = async (postId: number, userId: string | undefined) => {
        try {
            const result = await GlobalApi.updateFavoritesByUserAndPostId(postId, userId);
            console.log(result);
            setLiked(!liked); // Переключаем состояние только после успешного ответа
        } catch (error) {
            console.error(error);
        }
    };

    const truncateTitle = (title: string) => {
        return title.length > 25 ? title.substring(0, 25) + '...' : title;
    };

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <Card className="w-full rounded-xl h-[200px]
        transition duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-50" key={index}>
            <CardContent className="flex justify-between px-0 h-full">
                <div className="flex h-full">
                    <div className="h-full relative w-64">
                        <Image className="rounded-l-xl"
                               src={post.attributes.images?.data[0]?.attributes.url} alt="photo"
                               objectFit="cover" layout="fill"/>
                    </div>
                    <div className="ml-3">
                        <Link href={`/posts?postId=${post.id}`}>
                            <CardTitle className="my-4 w-[350px]">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            {truncateTitle(post.attributes.title)}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{post.attributes.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </CardTitle>
                        </Link>
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-black text-lg">{post.attributes.price}₽</span>
                            <p>{post.attributes.stock} шт. в наличии</p>
                            <div className="flex items-center">
                                <MapPin size={15}/> {post.attributes.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={15}/> <TimeAgo date={post.attributes.createdAt} locale='ru'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-between p-5">
                    <Heart className={`cursor-pointer ${liked && "fill-black"}`}
                           onClick={() => handleHeartClick(post.id, user?.id)}/>
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
                                зарегистрирован:{"\n"}
                                <TimeAgo date={post.attributes.author.data.attributes.createdAt}
                                         locale='ru'/>
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default PostHorizontal;