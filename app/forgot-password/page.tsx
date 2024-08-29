import FormLabelAndInput from "@/components/FormLabelAndInput";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className="grid grid-flow-col relative md:grid-cols-4 min-h-screen max-w-5xl mx-auto">
        <div className="hidden md:block col-span-2 h-full relative">
          <Image src="/krist_forgotpassword_img.png" alt="girl" fill />
        </div>
        <div className="col-span-2 h-full flex items-center w-full px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <Link href={"/sign-in"} className="block text-sm font-light mb-6">
              Back
            </Link>
            <form action="#" className="w-full">
              <h3 className="text-2xl font-bold mb-[1px] capitalize">
                forgot password
              </h3>
              <h6 className="text-neutral-400 text-xs lg:text-[14px] font-light mb-6">
                Enter your registered email address. We will send you a code to
                reset your password.
              </h6>
              <FormLabelAndInput
                name={"email"}
                type={"email"}
                placeholder={"Enter your email"}
                label="email address"
              />

              <Link
                href={"/forgot-password/otp"}
                className="mt-2 py-[10px] rounded-lg block text-center font-thin text-sm bg-black text-white w-full"
              >
                Send OTP
              </Link>
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
