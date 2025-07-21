import Link from "next/link";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobileNav";

const Header = () => {
    return ( 
        <header className="py-8 xl:py-12 px-4 xl:px-20">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                <h1 className="text-4xl font-semibold">Arsalan<span className="text-accent">.</span></h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                    <Button className="cursor-pointer">Hire me</Button>                    
                    </Link>
                </div>
                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
