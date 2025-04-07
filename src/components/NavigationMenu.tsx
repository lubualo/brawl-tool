"use client"

import * as React from "react"

import {
  NavigationMenu as NavigationMenuShadcn,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image";

export default function NavigationMenu() {
  return (
    <NavigationMenuShadcn>
      <NavigationMenuList>
        <NavigationMenuItem className="pl-4">
            <Image
                src="/brawl-stars-logo.svg"
                alt="Brawl Stars logo"
                width={24}
                height={24}
            />
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Trophies calculator
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/level-up-calculator" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Level up cost calculator
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuShadcn>
  )
}
