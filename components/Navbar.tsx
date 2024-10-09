"use client";
import { TbShoppingBag, TbHeart, TbSearch } from "react-icons/tb";
import LinkButton from "./LinkButton";
import ActionButton from "./ActionButton";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/firebase";
import { toast } from "react-toastify";

type Link = {
  title: string;
  href?: string;
  action?: () => void;
};

interface NavbarProps {
  email?: string;
}

function Navbar({ email }: NavbarProps) {
  const links: Link[] = [
    {
      title: "home",
      href: "/home",
    },
    {
      title: "shop",
      href: "/shop",
    },
    {
      title: "our story",
      href: "/home",
    },
    {
      title: "blog",
      href: "/blog",
    },
    {
      title: "contact us",
      href: "/contact_us",
    },
  ];

  const router = useRouter();

  async function handleLogout() {
    await signOut(getAuth(app));

    await fetch("/api/logout");

    toast("Logout Successfully!");
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }

  return (
    <div className="min-h-12 h-14 md:h-16">
      <div className="flex w-full justify-end h-full">
        <nav className="flex items-center basis-2/3 justify-end md:justify-between pt-4">
          <ul className="md:flex hidden items-center space-x-4 font-medium text-sm lg:text-base lg:space-x-8 lg:font-normal">
            {links.map((link, index) => (
              <li key={index} className="capitalize">
                {link.title}
              </li>
            ))}
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
              {email ? (
                <ActionButton title={"Log out"} action={handleLogout} />
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
