"use client";

import LandingNavbar from "./navbar/landing-navbar";
import MainNavbar from "./navbar/navbar";

const Header = () => {
    return (
        <header className="py-8 xl:py-11">
            <div>
                <LandingNavbar />
                {/* <MainNavbar /> */}
            </div>
        </header>
    );
};

export default Header;
