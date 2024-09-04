"use client";
import { cn } from "@/lib/utils";
import { MenuIcon } from 'lucide-react';
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Logo from "@/public/Revend2.png";
import Image from "next/image";

// Debounce function
function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout>; // Correct typing for timeout
    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


export function NavBar() {
    const [visible, setVisible] = React.useState(true);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = debounce(() => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;
            const isAtTop = currentScrollPos < 10;

            setVisible(isScrollingUp || isAtTop);
            setPrevScrollPos(currentScrollPos);
        }, 80); // 100ms delay

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`transition-transform duration-500 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 right-0 z-[50] py-4 bg-transparent`}>
            <div className="flex justify-center items-center w-full px-4">
                <div className="flex justify-between items-center w-[86%] max-w-7xl text-slate-50 relative bg-primary border border-white shadow-sm border-opacity-20 rounded-lg p-2">
                    <Dialog>
                        <SheetTrigger className="min-[825px]:hidden p-2 transition">
                            <MenuIcon />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>ReVend</SheetTitle>
                                <SheetDescription>
                                Pioneers of a Greener Tomorrow
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                                <DialogClose asChild>
                                    <Link href="#about-us">
                                        <Button variant="outline" className="w-full">About Us</Button>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="#How-it-works">
                                        <Button variant="outline" className="w-full">How It Works</Button>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="#Features">
                                        <Button variant="outline" className="w-full">Features</Button>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="#footer">
                                        <Button variant="outline" className="w-full">Contact Us</Button>
                                    </Link>
                                </DialogClose>
                            </div>
                        </SheetContent>
                    </Dialog>

                    <Link href="/" className="pl-2">
                        <h3 className="sr-only">Revend</h3>
                        <Image
                        src={Logo}
                        alt="Logo"
                        width={120}
                        height={37.37}
                        className="transition-all hover:opacity-75 dark:invert"
                        />
                    </Link>

                    <NavigationMenu className="flex-grow justify-center max-[825px]:hidden">
                        <NavigationMenuList className="space-x-1">
                            <Link href="#about-us">
                                <Button variant="ghost" size="sm">About Us</Button>
                            </Link>
                            <Link href="#How-It-Works">
                                <Button variant="ghost" size="sm">How It Works</Button>
                            </Link>
                            <Link href="#Features">
                                <Button variant="ghost" size="sm">Features</Button>
                            </Link>
                            <Link href="#Pricing">
                                <Button variant="ghost" size="sm">Pricing</Button>
                            </Link>
                            <Link href="#FAQ">
                                <Button variant="ghost" size="sm">FAQ</Button>
                            </Link>
                            <Link href="#Contact">
                                <Button variant="ghost" size="sm">Contact</Button>
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>
                    
                    <Button className="bg-bggg text-black hover:bg-bghov max-[825px]:hidden">Take a Survey</Button>
                </div>
            </div>
        </div>
    );
}