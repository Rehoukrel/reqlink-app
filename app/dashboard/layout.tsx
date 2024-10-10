import MainNavbar from "@/components/navbar/navbar";
import MainSidebar from "@/components/sidebar/sidebar";
import React from "react";

export default function DashboardRoot({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-row">
            <MainSidebar />

            <main className="min-h-screen ml-8 w-full flex flex-col py-8 xl:py-11">
                <MainNavbar />

                <div className="flex-1 pt-12">{children}</div>
            </main>
        </div>
    );
}
