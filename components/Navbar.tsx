import { TbShoppingBag, TbHeart, TbSearch } from "react-icons/tb";
import LinkButton from "./LinkButton";

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

  return (
    <div className="min-h-12 h-14 md:h-16">
      <div className="flex w-full justify-end h-full pr-4 mt-2">
        <nav className="flex items-center basis-2/3 justify-end md:justify-between">
          <ul className="md:flex hidden items-center space-x-4 font-medium text-sm lg:text-base lg:space-x-8 lg:font-normal">
            {links.map((link, index) => (
              <li key={index} className="capitalize">
                {link.title}
              </li>
            ))}
          </ul>
          <div className="pr-6">
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
              <LinkButton title={"login"} href="/sign-in" />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
