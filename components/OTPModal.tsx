"use client";
import { useContext } from "react";
import ActionButton from "./ActionButton";
import { ModalContext, ModalContextType } from "./ClientLayout";

export default function OTPModal() {
  const { closeModal } = useContext(ModalContext) as ModalContextType;

  return (
    <div className="bg-white p-4">
      <div className="text-center space-y-1">
        <h6 className="font-semibold capitalize text-sm">
          password changed successfully
        </h6>
        <p className="text-xs font-normal">
          Your password has been updated successfully!
        </p>
      </div>

      <div className="mt-6">
        <ActionButton
          title={"Back to login"}
          action={() => closeModal("/login")}
        />
      </div>
    </div>
  );
}
