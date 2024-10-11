"use client";

import { createContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ModalBox from "./ModalBox";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Tokens } from "next-firebase-auth-edge";

export type ModalContextType = {
  showModal: boolean;
  openModal: () => void;
  closeModal: (route?: string) => void;
};

export type UserContextType = {
  userId: string | undefined;
};

export const ModalContext = createContext<ModalContextType | null>(null);

const ClientLayout = ({
  children,
  token,
}: Readonly<{
  children: React.ReactNode;
  token: Tokens | null;
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
    "/register",
    "/login",
    "/login/*",
    "/forgot-password",
    "/forgot-password/otp",
  ].includes(pathname);

  return (
    <main className="max-w-7xl mx-auto relative">
      <ModalContext.Provider value={{ showModal, closeModal, openModal }}>
        {noNavbar ? null : <Navbar token={token} />}
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
        {children}
        {noNavbar ? null : <Footer />}
        {showModal && <ModalBox onClose={closeModal} />}
      </ModalContext.Provider>
      <ToastContainer theme="dark" transition={Slide} />
    </main>
  );
};
export default ClientLayout;
