import FormLabelAndInput from "@/components/FormLabelAndInput";
import Image from "next/image";
import Link from "next/link";

function SignIn() {
  return (
    <main>
      <div className="grid grid-flow-col relative md:grid-cols-4 min-h-screen max-w-5xl mx-auto">
        <div className="hidden md:block col-span-2 h-full relative">
          <Image src="/krist_signIn_img.png" alt="login guy" fill />
        </div>
        <div className="col-span-2 h-full flex items-center w-full px-4 sm:px-6 lg:px-8">
          <form action="#" className="flex-1">
            <h3 className="text-2xl font-bold mb-[1px] capitalize">
              welcome &#x1F44B;
            </h3>
            <h6 className="text-neutral-400 text-xs lg:text-[14px] font-light mb-6">
              Please login here
            </h6>
            <FormLabelAndInput
              name={"email"}
              type={"email"}
              placeholder={"Enter your email"}
              label="email address"
            />
            <FormLabelAndInput
              name={"password"}
              type={"password"}
              placeholder={"Enter your password"}
              label="password"
            />
            <div className="flex w-full justify-between text-xs">
              <div className="flex items-center space-x-2 font-light">
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 inline-block checked:accent-black"
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>

              <Link href={"/forgot-password"} className="font-thin">
                Forgot password?
              </Link>
            </div>

            <button className="mt-8 py-2 rounded-lg font-thin text-sm bg-black text-white w-full">
              Login
            </button>
          </form>
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

export default SignIn;
