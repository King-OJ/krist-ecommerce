"use client";

import { createContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import ModalBox from "./ModalBox";

export type ModalContextType = {
  showModal: boolean;
  openModal: () => void;
  closeModal: (route?: string) => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function closeModal(route?: string) {
    setShowModal(false);
    if (route) {
      setTimeout(() => {
        router.push(route);
      }, 1000);
    }
  }
  function openModal() {
    setShowModal(true);
  }
  const pathname = usePathname();
  const noNavbar = [
    "/sign-in",
    "/sign-up",
    "/forgot-password",
    "/forgot-password/otp",
  ].includes(pathname);

  return (
    <main className="max-w-7xl mx-auto relative">
      <ModalContext.Provider value={{ showModal, closeModal, openModal }}>
        <Link
          href={"/"}
          className="z-10 absolute left-4 top-6 sm:top-6 md:left-10 flex items-center space-x-[2px]"
        >
          <Image
            src="/krist_logo.png"
            alt="kriss logo"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
          <h3 className="text-2xl">Krist</h3>
        </Link>
        {noNavbar ? null : <Navbar />}
        {children}
        {showModal && <ModalBox onClose={closeModal} />}
      </ModalContext.Provider>
    </main>
  );
};
export default ClientLayout;
