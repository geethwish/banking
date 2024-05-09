"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-white">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <Image
              src={"/icons/logo.svg"}
              width={34}
              height={34}
              alt="Horizon"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-8 text-white">
                {sidebarLinks.map((menu) => {
                  const isActive =
                    pathname === menu.route ||
                    pathname.startsWith(`${menu.route}/`);
                  return (
                    <SheetClose asChild key={menu.route}>
                      <Link
                        key={menu.route}
                        href={menu.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bankGradient": isActive,
                        })}
                      >
                        <Image
                          src={menu.imgURL}
                          alt={menu.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />

                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {menu.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            Footer
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
