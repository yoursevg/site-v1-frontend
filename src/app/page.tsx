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
import {AlignLeft, LayoutGrid, MapPin} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GlobalApi from "@/app/_utils/GlobalApi";
import PostHorizontal from "@/app/_components/PostHorizontal";
import PostVertical from "@/app/_components/PostVertical";

function Home() {

    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getCategoriesList()
        getPostsList()
    }, [])

    const getPostsList = () => {
        GlobalApi.getPosts().then((res) => {
            setPosts(res?.data.data)
        })
    }

    const getCategoriesList = () => {
        GlobalApi.getCategories().then((res) => {
            setCategories(res?.data.data)
        });
    };

    const handleCategoryClick = async (categoryName:string) => {
        const res = await GlobalApi.getPostsByCategory(categoryName)
        setPosts(res?.data.data)
    }

    const handleSearch = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevent the form from reloading the page
        try {
            const res = await GlobalApi.getPostsBySearch(searchTerm)
            if (res?.data?.data) {
                setPosts(res.data.data)
            } else if (res?.posts?.data) {
                setPosts(res.posts.data)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Tabs defaultValue="lines" className="">
                <div className="flex flex-wrap justify-between">
                    {categories.length > 0 ? categories.map((category:any, index) => {
                            return <Card
                                className="mx-4 pt-4 cursor-pointer hover:scale-110 hover:bg-gray-50 transition-all ease-linear"
                                key={index} onClick={() => handleCategoryClick(category.attributes.name)}>
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
            rounded-lg animate-pulse' key={index}></div>
                        ))
                    }
                </div>
                <div className="flex my-4 justify-between flex-wrap">
                    <div className="flex gap-3">
                        <Select>
                            <SelectTrigger className="w-[80px]">
                                <SelectValue placeholder="Тип"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Тип</SelectLabel>
                                    {categories.length > 0 && categories.map((category:any, index) => {
                                        return <SelectItem value={category.attributes.name} key={index}>
                                            {category.attributes.name}
                                        </SelectItem>
                                    })}
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
                                    <SelectItem value="blueberry">По релевантности</SelectItem>
                                    <SelectItem value="apple">Сначала новые</SelectItem>
                                    <SelectItem value="banana">Сначала старые</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <form onSubmit={handleSearch} className="flex w-full max-w-2xl items-center space-x-2">
                            <Input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Поиск по объявлениям"
                            />
                            <Button type="submit">Найти</Button>
                        <div className="flex items-center h-full p-1 border-hidden cursor-pointer
                                transition ease-linear
                                hover:bg-sky-200 rounded-xl">
                            <MapPin size={20}/>
                            <span className="text-sm">Москва</span>
                        </div>
                    </form>
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
                            return <PostHorizontal key={`horizontal_${index}`} post={post}/>
                        }) : [1, 2, 3].map((item, index) => (
                            <div className='h-[200px] w-full bg-slate-200
            rounded-lg animate-pulse' key={index}></div>))}
                    </div>
                </TabsContent>
                <TabsContent value="grid">
                    <div className="flex gap-4 flex-wrap">
                        {posts.length > 0 && posts.map((post, index) => {
                            return <PostVertical post={post} key={`vertical_${index}`}/>
                        })}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Home;