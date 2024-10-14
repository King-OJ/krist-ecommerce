import ActionButton from "./ActionButton";
import AddAddressModal from "./AddAddressModal";
import OTPModal from "./OTPModal";

type ModalBoxProps = {
  onClose: (route?: string) => void;
  modalType: string;
};

export default function ModalBox({ onClose, modalType }: ModalBoxProps) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-20">
      <div className="absolute top-0 bottom-0 right-0 -z-10 left-0 backdrop-filter brightness-90 backdrop-blur-sm "></div>
      <div className="h-full w-full grid place-content-center py-4">
        {modalType == "OTPModal" && <OTPModal />}
        {modalType == "AddressModal" && <AddAddressModal />}
      </div>
    </div>
  );
}
