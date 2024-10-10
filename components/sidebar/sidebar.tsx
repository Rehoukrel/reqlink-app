"use client";

import { HomeIcon, MixIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";
import { FileSpreadsheetIcon } from "lucide-react";

const MainSidebar = () => {
    return (
        <div className="flex flex-row">
            <Card className="h-full bg-white text-black ">
                <CardHeader className="justify-center mt-8 gap-8">
                    <Link href="/dashboard">
                        <HomeIcon className="w-8 h-8" />
                    </Link>
                    <Link href="/dashboard">
                        <FileSpreadsheetIcon className="w-8 h-8" />
                    </Link>
                    <Link href="/dashboard">
                        <MixIcon className="w-8 h-8" />
                    </Link>
                    <Link href="/dashboard">
                        <ReaderIcon className="w-8 h-8" />
                    </Link>
                </CardHeader>
            </Card>
        </div>
    );
};

export default MainSidebar;
