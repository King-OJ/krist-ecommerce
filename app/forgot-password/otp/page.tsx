import OTPInputs from "@/components/OTPInputs";
import Image from "next/image";
import Link from "next/link";
import { TfiAngleLeft } from "react-icons/tfi";

export default function page() {
  function OTPinputComplete() {}

  return (
    <section>
      <div className="flex h-screen lg:mr-20">
        <div className="hidden md:block md:flex-1 h-full">
          <Image
            src="/krist_otp_img.png"
            alt="girl"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full aspect-auto"
          />
        </div>
        <div className="h-full flex items-center max-w-lg mx-auto md:max-w-none md:mx-0 w-full md:w-[45%] px-4 md:px-8">
          <div className="flex-1">
            <div className="text-right md:text-left">
              <Link
                href={"/sign-in"}
                className="flex items-center text-sm font-light mb-6"
              >
                <span className="mr-1">
                  <TfiAngleLeft />
                </span>
                Back
              </Link>
            </div>
            <form action="#" className="w-full text-center md:text-left">
              <h3 className="text-2xl font-bold mb-1 capitalize">enter OTP</h3>
              <h6 className="text-grey text-xs lg:text-[14px] font-light mb-6">
                We have share a code of your registered email address
                robertfox@example.com
              </h6>

              <OTPInputs length={5} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
