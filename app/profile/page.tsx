import { ActionButton } from "@/components";
import AddNewAddressBtn from "@/components/AddNewAddressBtn";
import AddressAndActionBtns from "@/components/AddressAndActionBtns";
import RoundImg from "@/components/RoundImg";
import { clientConfig, serverConfig } from "@/config";
import { addresses } from "@/lib/mockdata";
import { fetchUserInfo } from "@/lib/utils";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import { BsInboxes } from "react-icons/bs";
import {
  FaRegUser,
  FaRegCreditCard,
  FaRegBell,
  FaRegHeart,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { TbMapPin } from "react-icons/tb";

type ProfileLinks = {
  title: string;
  icon: ReactNode;
};

const profileLinks: Array<ProfileLinks> = [
  {
    title: "personal information",
    icon: <FaRegUser />,
  },
  {
    title: "my orders",
    icon: <BsInboxes />,
  },
  {
    title: "my wishlists",
    icon: <FaRegHeart />,
  },
  {
    title: "manage addresses",
    icon: <TbMapPin />,
  },
  {
    title: "saved cards",
    icon: <FaRegCreditCard />,
  },
  {
    title: "notifications",
    icon: <FaRegBell />,
  },
  {
    title: "settings",
    icon: <GoGear />,
  },
];

export default async function ProfilePage() {
  const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  let docSnap;

  if (tokens) {
    const { uid } = tokens?.decodedToken;
    docSnap = await fetchUserInfo(uid);
  }

  return (
    <section className="min-h-[50vh]">
      <div>
        <h1 className="text-2xl font-normal mb-6">My Profile</h1>
        <div className="flex flex-wrap gap-8">
          <div className="border border-gray-300 divide-y">
            <div className="flex px-6 py-4 items-center space-x-4">
              <RoundImg imgUrl="/profile_img2.jpeg" />
              <div className="space-y-[2px]">
                <p className="text-sm">Hello &#x1F44B;</p>
                <div className="font-bold flex items-center space-x-1 text-base capitalize whitespace-nowrap">
                  <p>{docSnap?.data()?.firstName}</p>
                  <p>{docSnap?.data()?.lastName}</p>
                </div>
              </div>
            </div>
            <ul className="capitalize pt-2">
              {profileLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:bg-black transition-all hover:cursor-pointer duration-150 hover:text-white text-sm md:text-base px-6 py-4 space-x-4 flex items-center"
                >
                  {link.icon}
                  <p className="font-medium">{link.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="max-w-xs">
              <AddNewAddressBtn />
            </div>
            <ul className="my-6">
              {addresses.map((address, index) => (
                <li key={index} className="py-4 border-b">
                  <AddressAndActionBtns
                    title={address.title}
                    location={address.location}
                    phoneNo={address.phoneNo}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
