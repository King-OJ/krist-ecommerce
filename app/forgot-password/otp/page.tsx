import OTPInputs from "@/components/OTPInputs";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className="grid grid-flow-col relative md:grid-cols-4 min-h-screen max-w-5xl mx-auto">
        <div className="hidden md:block col-span-2 h-full relative">
          <Image src="/krist_otp_img.png" alt="girl" fill />
        </div>
        <div className="col-span-2 h-full flex items-center w-full px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <Link href={"/sign-in"} className="block text-sm font-light mb-6">
              Back
            </Link>
            <form action="#" className="w-full">
              <h3 className="text-2xl font-bold mb-[1px] capitalize">
                enter OTP
              </h3>
              <h6 className="text-neutral-400 text-xs lg:text-[14px] font-light mb-6">
                We have share a code of your registered email address
                robertfox@example.com
              </h6>

              <OTPInputs />
              <button className="mt-6 py-[10px] rounded-lg font-thin text-sm bg-black text-white w-full">
                Verify
              </button>
            </form>
          </div>
        </div>
        <div className="absolute left-6 top-6 md:left-10 md:top-10 flex items-center space-x-[2px]">
          <Image
            src="/krist_logo.png"
            alt="kriss logo"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
          <h3 className="text-2xl">Krist</h3>
        </div>
      </div>
    </main>
  );
}
