import Link from "next/link";
import { Button } from "./ui/button";

// component
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
    return <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href={"/"}>
                <h1 className="text-4xl font-semibold">
                    Osman <span className="text-accent">Goni</span>
                </h1>
            </Link>
            {/* desktop navbar & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Navbar />
                <Link href="/contact">
                <Button>hire me</Button>
                </Link>
            </div>
            {/* mobile navbar */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
}

export default Header
