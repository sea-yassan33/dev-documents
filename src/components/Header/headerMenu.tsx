import {Menubar,MenubarContent,MenubarItem,MenubarMenu,MenubarTrigger,} from "@/components/ui/menubar"
import { documentData } from "../data/documentData";
import Link from "next/link";


export default function HeaderMenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          {documentData.headerLinks.map((link) => (
            <MenubarItem key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Python</MenubarTrigger>
        <MenubarContent>
          {documentData.pythonLinks.map((link) => (
            <MenubarItem key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Next.js</MenubarTrigger>
        <MenubarContent>
          {documentData.nextjsLinks.map((link) => (
            <MenubarItem key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}