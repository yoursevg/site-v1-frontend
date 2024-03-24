import React from 'react';
import {CardTitle} from "@/components/ui/card";
import {UserProfile} from "@clerk/nextjs";
import {dark, neobrutalism} from "@clerk/themes";

function Management() {
    return (
        <div className="w-full">
            <CardTitle className="mb-5">Управление профилем</CardTitle>
            <div className="w-full">
                <UserProfile appearance={{
                    baseTheme:  neobrutalism,
                    elements: {
                        navbarButton:
                        "mt-3"
                    }
                }} />
            </div>
        </div>
    );
}

export default Management;