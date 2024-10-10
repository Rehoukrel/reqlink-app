"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const links = [
    { name: "home", href: "/" },
    { name: "documentation", href: "/documentation" },
    { name: "support", href: "/support" },
];

const LandingNavbar = () => {
    return (
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <nav className="flex gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="capitalize"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
            <div>
                <nav className="flex gap-8">
                    <Link href="/login">
                        <Button className="text-md" variant={"link"}>
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button className="text-md">Join Now</Button>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default LandingNavbar;
