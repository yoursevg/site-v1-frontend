import React from 'react';
import {SignIn} from "@clerk/nextjs";

function SignInComponent() {
    return (
        <div className="flex justify-center">
            <SignIn />
        </div>
    );
}

export default SignInComponent;