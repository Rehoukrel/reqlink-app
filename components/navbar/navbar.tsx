"use client";

import Link from "next/link";

import { FileDownIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

// const MainNavbar = () => {
//     return (
//         <div className="container mx-auto flex justify-between items-center">
//             <div>
//                 <nav className="flex gap-8">
//                     {links.map((link) => (
//                         <a
//                             key={link.name}
//                             href={link.href}
//                             className="capitalize"
//                         >
//                             {link.name}
//                         </a>
//                     ))}
//                 </nav>
//             </div>
//             <div>
//                 <div className="flex">
//                     tess
//                     <Avatar>
//                         {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
//                         <AvatarImage src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj' />
//                         <AvatarFallback>CN</AvatarFallback>
//                     </Avatar>
//                 </div>
//                 {/* <Avatar>
//                     <AvatarImage
//                         src="https://avatars.githubusercontent.com/u/14043102?v=4"
//                         alt="avatar"
//                     />
//                     <AvatarFallback>U</AvatarFallback>
//                 </Avatar> */}
//             </div>
//         </div>
//     );
// };

// export default MainNavbar;

export default function MainNavbar() {
    const links = [
        { href: "/dashboard/project", name: "project" },
        { href: "/dashboard/documentation", name: "documentation" },
        { href: "/dashboard/support", name: "support" },
    ];

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
                <div className="flex items-center gap-6">
                    Username
                    <Avatar>
                        <AvatarImage src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" />
                        <AvatarFallback>TT</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
}
