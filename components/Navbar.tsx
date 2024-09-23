import { TbShoppingBag, TbHeart, TbSearch } from "react-icons/tb";
import LinkButton from "./LinkButton";
import { useAuth } from "@/context/AuthUserContext";
import ActionButton from "./ActionButton";

type Link = {
  title: string;
  href?: string;
  action?: () => void;
};

function Navbar() {
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

  const { authUser: user } = useAuth();
  // console.log(authUser);

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
              {user ? (
                <ActionButton title={"sign out"} />
              ) : (
                <LinkButton title={"login"} href="/sign-in" />
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
