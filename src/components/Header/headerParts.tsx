import Link from "next/link";
import { tv } from 'tailwind-variants';
import Image from "next/image";
import HeaderMenu from "./headerMenu";
export default function HeaderParts() {
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
  return (
    <header className={twStayles({ style: 'header_top' })}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="logo" width={50} height={50} />
            <h1 className="text-xl font-semibold text-blue-900">DDOC</h1>
          </Link>
          <HeaderMenu />
          {/* <nav className="hidden md:flex items-center gap-6" aria-label="メインメニュー">
            {headerLinks.map((link) => (
              <Link key={link.title} href={link.href} className={twStayles({ style: 'header_nav' })}>
                {link.title}
              </Link>
            ))}
          </nav> */}
        </div>
      </div>
    </header>
  );
}