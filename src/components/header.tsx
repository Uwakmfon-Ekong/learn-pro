"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/Frame 16.svg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0  z-50 sticky border-b border-border bg-background font-inter">
      <div className="container m-auto w-full flex items-center justify-between py-6 px-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" className=""/>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-8">
          <Link
            href="/"
            className="text-[18px] font-bold text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="https://www.notion.so/preshpie/Tech-Path-26f919f0b4d380bc959bd723eafd6ce5"
            className="text-[18px] font-bold text-foreground hover:text-primary transition-colors"
          >
            Courses
          </Link>

          <Link
            href="https://x.com/WhakeeSui"
            className="text-[18px] font-bold text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="
          https://www.notion.so/preshpie/Tech-Path-26f919f0b4d380bc959bd723eafd6ce5"
          >
            <Button className="hidden sm:inline-flex !text-primary border-2 border-primary bg-transparent">
              Get Started
            </Button>
          </Link>
          <Link href="https://x.com/WhakeeSui">
            <Button className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us
            </Button>
          </Link>

          <Button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-primary" />
            ) : (
              <Menu className="text-primary" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-[18px] font-bold text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="https://www.notion.so/preshpie/Tech-Path-26f919f0b4d380bc959bd723eafd6ce5"
              className="text-[18px] font-bold text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>

            <Link
              href="https://x.com/WhakeeSui"
              className="text-[18px] font-bold text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="
          https://www.notion.so/preshpie/Tech-Path-26f919f0b4d380bc959bd723eafd6ce5"
            >
              <Button className=" sm:inline-flex !text-primary border-2 border-primary bg-transparent">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
