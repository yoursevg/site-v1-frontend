
import React from 'react';
import Sidebar from "@/app/(route)/profile/components/sidebar";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

interface SettingsLayoutProps {
    children: React.ReactNode
}
function Layout({ children }: SettingsLayoutProps) {
    return (
        <Card>
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <CardHeader className="-mx-4 lg:w-1/5">
                    <Sidebar />
                </CardHeader>
                <CardContent className="flex-1 py-6 w-full">{children}</CardContent>
            </div>
        </Card>
    );
}

export default Layout;