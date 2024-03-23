"use client"
import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {AlignLeft, LayoutGrid, MapPin, Star} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GlobalApi from "@/app/_utils/GlobalApi";
import { useTimeAgo } from 'next-timeago';
import PostHorizontal from "@/app/_components/PostHorizontal";
import PostVertical from "@/app/_components/PostVertical";


function Home() {

    const {TimeAgo} = useTimeAgo()

    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getCategoriesList()
        getPostsList()
    }, [])

    const getPostsList = () => {
        GlobalApi.getPosts().then((res) => {
            setPosts(res.data.data)
        })
    }

    const getCategoriesList = () => {
        GlobalApi.getCategories().then((res) => {
            setCategories(res.data.data)
        });
    };

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
        <div>
            <Tabs defaultValue="lines" className="">
                <div className="flex flex-wrap justify-between">
                    {categories.length > 0 ? categories.map((category, index) => {
                            return <Card
                                className="mx-4 pt-4 cursor-pointer hover:scale-110 hover:bg-gray-50 transition-all ease-linear"
                                key={index}>
                                <CardContent className="flex flex-col items-center">
                                    <CardTitle className="text-lg">
                                        {category.attributes.name}
                                    </CardTitle>
                                    <Image src={category.attributes?.image?.data.attributes.url} alt={""} width={100}
                                           height={100}/>
                                </CardContent>
                            </Card>
                        }) :
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div className='h-[144px] w-[148px] mx-4 bg-slate-200
            rounded-lg animate-pulse'></div>
                        ))
                    }
                </div>
                <div className="flex my-4 justify-between flex-wrap">
                    <div className="flex gap-3">
                        <Select>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Тип"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Тип</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[130px]">
                                <SelectValue placeholder="Сортировка"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Сортировка</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex w-full max-w-2xl items-center space-x-2">
                        <Input type="email" placeholder="Поиск по объявлениям"/>
                        <Button type="submit">Найти</Button>
                        <div className="flex items-center h-full p-1 border-hidden cursor-pointer
                     transition ease-linear
                     hover:bg-sky-200 rounded-xl">
                            <MapPin size={20}/>
                            <span className="text-sm">Москва</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <TabsList>
                            <TabsTrigger value="lines"><AlignLeft/></TabsTrigger>
                            <TabsTrigger value="grid"><LayoutGrid/></TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <TabsContent value="lines">
                    <div className="flex flex-col gap-5">
                        {posts.length > 0 ? posts.map((post, index) => {
                            return <PostHorizontal post={post} index={index}/>
                        }) : [1, 2, 3].map((item, index) => (
                            <div className='h-[200px] w-full bg-slate-200
            rounded-lg animate-pulse'></div>))}
                    </div>
                </TabsContent>
                <TabsContent value="grid">
                    <div className="flex gap-4 flex-wrap justify-between">
                        {posts.length > 0 && posts.map((post, index) => {
                            return <PostVertical post={post} index={index}/>
                        })}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Home;