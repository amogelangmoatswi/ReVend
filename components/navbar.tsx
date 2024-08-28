"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from 'lucide-react';
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Logo from "@/public/Revend2.png";
import Image from "next/image";


export function NavBar() {
    return (
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[1rem]">
            <div className="flex justify-between w-[80%] border bg-bgcol text-slate-50 relative backdrop-filter backdrop-blur-lg border-white border-opacity-20 rounded-xl p-2 shadow-lg">
                <Dialog>
                    <SheetTrigger className="min-[825px]:hidden p-2 transition">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>

                            <SheetTitle>ReVend</SheetTitle>
                            <SheetDescription>
                                Innovators. Creators. Visionaries.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild>
                                <Link href="#about-us">
                                    <Button variant="outline" className="w-full">AboutUs</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="#features">
                                    <Button variant="outline" className="w-full">Features</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="#services">
                                    <Button variant="outline" className="w-full">Services</Button>
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
                <NavigationMenu>
                    <NavigationMenuList className="max-[825px]:hidden">
                    <Link href="/" className="pl-2">
                        <h3 className="sr-only">Revend</h3>
                        <Image
                        src={Logo}
                        alt="Logo"
                        width={120}
                        height={37.37}
                        className="transition-all hover:opacity-75 dark:invert"
                        ></Image>
                        </Link>
                       
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 max-[825px]:hidden">
                    <Link href="#about-us">
                        <Button variant="ghost">AboutUs</Button>
                    </Link>
                    <Link href="#features">
                        <Button variant="ghost">Features</Button>
                    </Link>
                    <Link href="#services">
                        <Button variant="ghost">Services</Button>
                    </Link>
                    <Link href="#footer">
                        <Button variant="ghost">Contact Us</Button>
                    </Link>

                    <Button className=" bg-bggg hover:bg-bghov">Take a Survey</Button>
                  
                </div>
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";