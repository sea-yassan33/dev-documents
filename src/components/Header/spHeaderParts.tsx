"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { tv } from 'tailwind-variants';
import headerLinks from "./headerLink";
export default function SpHeaderParts() {
  const twStayles = tv({
    variants: {
      style: {
        header_top: 'sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        header_nav: 'text-sm hover:text-blue-600 transition-colors',
        hum01: 'md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        hum_link: 'text-sm py-2 hover:text-blue-600 transition-colors',
      },
    },
  });
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <div className="flex items-center gap-4">
        {/* ハンバーガーボタン */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="メニューを開閉"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      {/* SP_ハンバーガーメニュー */}
      {open && (
        <div id="mobile-menu" className={twStayles({ style: 'hum01' })}>
          <nav className="container py-4 flex flex-col gap-3" aria-label="モバイルメニュー">
            {headerLinks.map((link) => (
              <Link key={link.title} href={link.href} className={twStayles({ style: 'hum_link' })} onClick={closeMenu}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}