"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { MenuIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[246px] md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="h-12 w-12 text-white cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-3">
            <VideoIcon className="h-12 w-12 bg-blue-1 text-blue-50 px-2 py-1 rounded-xl" />
            <h1 className="text-white font-semibold text-3xl ">zen.meet</h1>
          </Link>

          <div className="flex mt-8 h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-xl w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          width={20}
                          height={20}
                          alt={link.label}
                        />
                        <p className=" font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
