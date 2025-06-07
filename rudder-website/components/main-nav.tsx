"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white bg-transparent hover:bg-slate-800">
            Solutions
          </NavigationMenuTrigger>
          {
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-700 to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        Rudder Enterprise
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Complete enterprise solutions for your business needs
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                      href="/"
                    >
                      <div className="text-sm font-medium leading-none">
                        IT Infrastructure
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                        Robust and scalable IT infrastructure solutions
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                      href="/"
                    >
                      <div className="text-sm font-medium leading-none">
                        Cloud Services
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                        Secure and efficient cloud solutions
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                      href="/"
                    >
                      <div className="text-sm font-medium leading-none">
                        Cybersecurity
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                        Advanced protection for your digital assets
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          }
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white bg-transparent hover:bg-slate-800">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Consulting
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                      Expert guidance for your technology strategy
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Implementation
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                      Seamless deployment of technology solutions
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Managed Services
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                      Ongoing support and management of your IT systems
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Training
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                      Comprehensive training programs for your team
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-white bg-transparent hover:bg-slate-800"
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
