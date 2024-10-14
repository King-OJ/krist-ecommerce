import { Address } from "@/lib/mockdata";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";

export default function AddressAndActionBtns({
  title,
  phoneNo,
  location,
}: Address) {
  return (
    <div className="flex justify-between">
      <div className="space-y-[6px]">
        <h6 className="font-semibold capitalize">{title}</h6>
        <p>{location}</p>
        <a href="tel:1234" className="flex items-center gap-2">
          <TbPhoneCall />
          <span>{phoneNo}</span>
        </a>
      </div>
      <div className="space-y-2">
        <button className="w-20 h-8 justify-center font-normal text-sm rounded-lg flex gap-1 bg-[#d0d0d2] bg-opacity-80 hover:bg-opacity-100 items-center transition-all duration-150">
          <FiEdit />
          <span>Edit</span>
        </button>
        <button className="w-20 h-8 justify-center font-normal text-sm rounded-lg flex gap-1 text-red-500 hover:text-white bg-red-100 hover:bg-red-400 items-center transition-all duration-150">
          <FiTrash2 />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
