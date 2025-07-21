"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet >
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className=""></SheetTitle>
        <div className="">
          <div className="mt-28 mb-28 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Arsalan<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose key={index} asChild>            
                <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "border-b-2 text-accent border-accent"
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
