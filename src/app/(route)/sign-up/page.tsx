import React from 'react';
import {SignUp} from "@clerk/nextjs";

function SignInComponent() {
    return (
        <div className="flex justify-center">
            <SignUp />
        </div>
    );
}

export default SignInComponent;