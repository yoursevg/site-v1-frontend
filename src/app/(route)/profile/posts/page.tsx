"use client"
import React, {useEffect, useState} from 'react';
import {CardTitle} from "@/components/ui/card";
import {useUser} from "@clerk/clerk-react";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useTimeAgo} from "next-timeago";
import PostHorizontal from "@/app/_components/PostHorizontal";

function Posts() {

    const {TimeAgo} = useTimeAgo()

    const [posts, setPosts] = useState([])
    const {user} = useUser()

    useEffect(() => {
        if(user){
            getPostsList()
        }
    }, [user])

    const getPostsList = () => {
        GlobalApi.getPostsByUsername(user?.username).then(res => {
            setPosts(res.data.data)
        })
    }

    if (!user) return null;

    return (
        <div className="w-full">
            <CardTitle className="mb-5">Мои объявления</CardTitle>
            <div className="w-full">
                {posts.length > 0 && posts.map((post, index) => {
                    console.log(post)
                return <PostHorizontal post={post} index={index}/>})}
            </div>
        </div>
    );
}

export default Posts;