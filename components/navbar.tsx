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

export function NavBar() {
    const [visible, setVisible] = React.useState(true);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'} bg-primary border-b border-white border-opacity-20 shadow-md flex items-center min-w-full w-full fixed justify-center p-2 z-[50]`}>
            <div className="flex justify-between items-center w-[86%] text-slate-50 relative p-2">
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
    );
}