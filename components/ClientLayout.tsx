"use client";

import { createContext, useState } from "react";
import ModalBox from "./ModalBox";
import Image from "next/image";
import Link from "next/link";

export type ModalContextType = {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }

  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto relative">
        <ModalContext.Provider value={{ showModal, closeModal, openModal }}>
          <Link
            href={"/"}
            className="z-10 absolute left-4 top-6 md:left-10 flex items-center space-x-[2px]"
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
          {showModal && <ModalBox onClose={closeModal} />}
        </ModalContext.Provider>
      </body>
    </html>
  );
};
export default ClientLayout;
