import FormLabelAndInput from "@/components/FormLabelAndInput";
import Image from "next/image";

function SignUp() {
  return (
    <main>
      <div className="grid grid-flow-col relative md:grid-cols-4 min-h-screen max-w-5xl mx-auto">
        <div className="hidden md:block col-span-2 h-full relative">
          <Image src="/krist_signUp_img.png" alt="login guy" fill />
        </div>
        <div className="col-span-2 h-full flex items-center w-full px-4 sm:px-6 lg:px-8">
          <form action="#" className="flex-1">
            <h3 className="text-2xl font-bold mb-[1px] capitalize">
              create new account
            </h3>
            <h6 className="text-neutral-400 text-xs lg:text-[14px] font-light mb-6">
              Please enter details
            </h6>
            <FormLabelAndInput
              name={"firstName"}
              type={"text"}
              placeholder={"Enter your first name"}
              label="first name"
            />
            <FormLabelAndInput
              name={"lastName"}
              type={"text"}
              placeholder={"Enter your last name"}
              label="last name"
            />
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
                <label htmlFor="rememberMe">
                  I agree to{" "}
                  <span className="font-semibold">Terms and Condition</span>
                </label>
              </div>
            </div>

            <button className="mt-8 py-[10px] rounded-lg font-thin text-sm bg-black text-white w-full">
              Sign Up
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

export default SignUp;
