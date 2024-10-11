"use client";
import { TbShoppingBag, TbHeart, TbSearch } from "react-icons/tb";
import LinkButton from "./LinkButton";
import ActionButton from "./ActionButton";
import { usePathname, useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import Link from "next/link";
import { Tokens } from "next-firebase-auth-edge";

type Link = {
  title: string;
  href: string;
  action?: () => void;
};

interface NavbarProps {
  token: Tokens | null;
}

function Navbar({ token }: NavbarProps) {
  const links: Link[] = [
    {
      title: "shop",
      href: "/shop",
    },
    {
      title: "our story",
      href: "/home",
    },
    {
      title: "contact us",
      href: "/contact_us",
    },
    {
      title: "My Profile",
      href: "/profile",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    setIsLoading(false);
    try {
      setIsLoading(true);
      await signOut(getAuth(app));
      await fetch("/api/logout");
      setIsLoading(false);
      if (pathname == "/") {
        router.refresh();
      } else {
        router.push("/login");
      }

      toast.warning("You're logged out!");
    } catch (error) {
      toast((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-12 h-14 md:h-16">
      <div className="flex w-full justify-end h-full">
        <nav className="flex items-center basis-4/5 justify-end md:justify-between pt-4">
          <ul className="md:flex hidden items-center space-x-4 font-medium text-sm lg:text-base lg:space-x-8 lg:font-normal">
            {links.map((link, index) => {
              if (!token && index == links.length - 1) {
                return null;
              }
              return (
                <li key={index} className="capitalize">
                  <Link href={link.href}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="pr-16">
            <ul className="space-x-3 lg:space-x-4 text-xl flex items-center ">
              <li className="font-semibold">
                <TbSearch className="" />
              </li>
              <li className="x">
                <TbHeart />
              </li>
              <li className="x">
                <TbShoppingBag />
              </li>
              {token ? (
                <ActionButton
                  title={isLoading ? "logging out" : "log out"}
                  action={handleLogout}
                  disabled={isLoading}
                />
              ) : (
                <LinkButton title={"login"} href="/login" />
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
