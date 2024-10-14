"use client";

import { FaPlus } from "react-icons/fa6";
import ActionButton from "./ActionButton";
import { useContext } from "react";
import { ModalContext, ModalContextType } from "./ClientLayout";

export default function AddNewAddressBtn() {
  const { openModal } = useContext(ModalContext) as ModalContextType;

  function openAddressModal() {
    openModal("AddressModal");
  }

  return (
    <ActionButton
      title="add new address"
      action={openAddressModal}
      icon={<FaPlus />}
    />
  );
}
