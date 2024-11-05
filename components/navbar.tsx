"use client"

import { cn } from "@/lib/utils"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { Dialog, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Image from "next/image"
import Logo from "@/public/Revend2.png"

const navItems = [
  { href: "#about-us", label: "About Us" },
  { href: "#How-It-Works", label: "How It Works" },
  { href: "#Pricing", label: "Pricing" },
  { href: "#Testimonial", label: "Testimonial" },
  { href: "#Team", label: "Team" },
  { href: "#FAQ", label: "FAQ" },
]

export function NavBar() {
  const [isVisible, setIsVisible] = useState(true)
  const prevScrollPos = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return

      const currentScrollPos = window.pageYOffset
      const isScrollingDown = prevScrollPos.current < currentScrollPos

      setIsVisible(!isScrollingDown)
      prevScrollPos.current = currentScrollPos
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-primary border-b-4 border-white shadow-sm border-opacity-20 p-2 transition-transform duration-500 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center w-[86%] text-slate-50 relative">
          <Dialog>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="min-[825px]:hidden" aria-label="Open menu">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>ReVend</SheetTitle>
                <SheetDescription>Pioneers of a Greener Tomorrow</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-3 mt-4" aria-label="Mobile Navigation">
                {navItems.map((item) => (
                  <DialogClose asChild key={item.href}>
                    <Link href={item.href}>
                      <Button variant="outline" className="w-full">
                        {item.label}
                      </Button>
                    </Link>
                  </DialogClose>
                ))}
                <DialogClose asChild>
                  <Link href="/survey">
                    <Button variant="outline" className="w-full">
                      Take a Survey
                    </Button>
                  </Link>
                </DialogClose>
              </nav>
            </SheetContent>
          </Dialog>

          <Link href="/" aria-label="Revend Home" className="pl-2">
            <Image
              src={Logo}
              alt="Revend Logo"
              width={90}
              height={30}
              className="transition-all hover:opacity-75 dark:invert"
              priority
            />
          </Link>

          <NavigationMenu className="flex-grow justify-center max-[825px]:hidden">
            <NavigationMenuList className="space-x-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button variant="ghostt">
                    {item.label}
                  </Button>
                </Link>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/survey" className="max-[825px]:hidden" aria-label="Take a Survey">
            <Button className="bg-bggg text-black hover:bg-bghov">Take a Survey</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}