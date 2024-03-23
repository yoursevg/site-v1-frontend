"use client"
import React from 'react';
import Posts from "@/app/(route)/profile/posts/page";
import {useUser} from "@clerk/clerk-react";

function Profile() {

    const {isSignedIn} = useUser()

    if (!isSignedIn) {
        return <div className="h-[80vh] bg-gray-300">
            Loading...
        </div>
    }

    return (
        <div className="w-full">
            <Posts/>
        </div>
    );
}

export default Profile;