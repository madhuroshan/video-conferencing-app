import { VideoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-3">
        <VideoIcon className="h-12 w-12 bg-blue-1 text-blue-50 px-2 py-1 rounded-xl" />
        <h1 className="text-white font-semibold text-3xl max-sm:hidden">
          zen.meet
        </h1>
      </Link>

      <div className="flex flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
