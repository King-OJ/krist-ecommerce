"use client";

import { useContext } from "react";
import ActionButton from "./ActionButton";
import FormLabelAndInput from "./FormLabelAndInput";
import { ModalContext, ModalContextType } from "./ClientLayout";

export default function AddAddressModal() {
  const { closeModal } = useContext(ModalContext) as ModalContextType;

  return (
    <div className="bg-white p-4 max-w-md w-[90vw] overflow-y-auto">
      <div className="space-y-1">
        <h6 className="font-semibold capitalize text-sm">Address Modal</h6>
        <form action="#" className="w-full">
          <FormLabelAndInput
            name={"name"}
            type={"text"}
            label={"name"}
            placeholder={"Enter your name"}
            value={""}
            onChange={() => {}}
          />
          <FormLabelAndInput
            name={"phone"}
            type={"tel"}
            label={"Mobile number"}
            placeholder={"Enter your mobile number"}
            value={""}
            onChange={() => {}}
          />
          <FormLabelAndInput
            name={"address"}
            type={"text"}
            label={"flat, house number, building, apartment"}
            placeholder={"Enter your address"}
            value={""}
            onChange={() => {}}
          />
          <FormLabelAndInput
            name={"name"}
            type={"text"}
            label={"name"}
            placeholder={"Enter your name"}
            value={""}
            onChange={() => {}}
          />
          <FormLabelAndInput
            name={"name"}
            type={"text"}
            label={"name"}
            placeholder={"Enter your name"}
            value={""}
            onChange={() => {}}
          />
          <FormLabelAndInput
            name={"name"}
            type={"text"}
            label={"name"}
            placeholder={"Enter your name"}
            value={""}
            onChange={() => {}}
          />
        </form>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <ActionButton
          title={"Cancel"}
          action={() => closeModal()}
          transparent
        />
        <ActionButton title={"Add new address"} action={() => {}} />
      </div>
    </div>
  );
}
