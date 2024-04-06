"use client"

import React, {useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import GlobalApi from "@/app/_utils/GlobalApi";
import ChatComponent from "@/app/_components/ChatComponent";
import {useUser} from "@clerk/clerk-react";

interface ImageData {
    id: number;
    attributes: {
        url: string;
        formats: {
            thumbnail: {
                url: string;
            };
        };
    };
}

interface AuthorData {
    data: {
        id: number;
    };
}

interface PostData {
    title: string;
    location: string;
    condition: string;
    stock: number;
    description: string;
    images: {
        data: ImageData[];
    };
    author: AuthorData;
}


function Post() {
    const [postData, setPostData] = useState<PostData | null>(null);
    ;
    const [imageUrl, setImageUrl] = useState("")
    const [userId, setUserId] = useState(NaN)

    const searchParams = useSearchParams()
    const id = searchParams.get("postId")

    const {isLoaded, isSignedIn, user} = useUser();

    useEffect(() => {
        if (id && isLoaded && isSignedIn && user) {
            GlobalApi.getPostByPostId(id).then((res) => {
                setPostData(res?.data.data.attributes);
                setImageUrl(res?.data.data.attributes?.images.data[0].attributes.url);
            });

            GlobalApi.getUserIdByIdentificator(user.id).then(res => {
                setUserId(res?.data[0].id)
            });
        }
    }, [id, isLoaded, isSignedIn, user]);

    if (!postData || Number.isNaN(userId)) {
        return <Card>
            <div className='h-[80vh] w-full bg-slate-200 rounded-lg animate-pulse'></div>
        </Card>;
    }

    return (<Card className="px-3 py-8">
            <CardHeader className="pt-0">
                <CardTitle>{postData?.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
                <div className="flex flex-col gap-3">
                    <div className="photos flex flex-col gap-2">
                        <Image src={imageUrl}
                               width={600}
                               height={500}
                               alt="photo"
                               className="rounded-3xl"/>
                        <div className="flex px-8">
                            <Carousel opts={{
                                align: "start",
                            }} className="w-full max-w-sm">
                                <CarouselContent className="items-center">
                                    {postData?.images.data.map((img: any, index: any) => (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                            <div className="px-0">
                                                <Card className="cursor-pointer">
                                                    <CardContent
                                                        className="flex aspect-auto items-center justify-center p-0">
                                                        <Image
                                                            src={img.attributes.formats.thumbnail.url}
                                                            width={120}
                                                            height={100}
                                                            alt="photo"
                                                            className="rounded-md"
                                                            onClick={() => setImageUrl(img.attributes.url)}
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious/>
                                <CarouselNext/>
                            </Carousel>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <span className="font-bold">Адрес</span>
                            <span>{postData.location}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold">Характеристика</span>
                            <span>{postData.condition}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold">Остаток</span>
                            <span>{postData.stock}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold">Описание</span>
                            <span>{postData.description}</span>
                        </div>
                    </div>
                </div>
                <div className="w-[300px] border">
                    {userId && postData &&
                        <ChatComponent userId={userId} sellerId={postData.author?.data.id}/>}
                </div>
            </CardContent>
        </Card>
    );
}

export default Post;
