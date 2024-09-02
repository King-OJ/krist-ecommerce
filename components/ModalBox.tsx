import ActionButton from "./ActionButton";

export default function ModalBox({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-20">
      <div className="absolute top-0 bottom-0 right-0 -z-10 left-0 backdrop-filter brightness-90 backdrop-blur-sm "></div>
      <div className="h-full w-full grid place-content-center">
        <div className="bg-white p-4">
          <div className="text-center space-y-1">
            <h6 className="font-semibold capitalize text-sm">
              password changed successfully
            </h6>
            <p className="text-xs font-thin">
              Your password has been updated successfully!
            </p>
          </div>

          <ActionButton title={"Back to login"} action={onClose} />
        </div>
      </div>
    </div>
  );
}
