import FormLabelAndInput from "@/components/FormLabelAndInput";
import Image from "next/image";

function SignIn() {
  return (
    <main>
      <div className="grid grid-flow-col lg:grid-cols-4 grid-cols-5 min-h-screen max-w-5xl mx-auto">
        <div className="lg:col-span-2 col-span-3 h-full relative">
          <Image src="/krist_signIn_img.png" alt="login guy" fill />
        </div>
        <div className="col-span-2 h-full flex items-center w-full px-8">
          <form action="#" className="flex-1">
            <h3 className="text-3xl font-bold mb-1">Welcome</h3>
            <h6 className="text-neutral-400 text-[14px] font-light mb-6">
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

              <button className="font-thin">Forgot password?</button>
            </div>

            <button className="mt-8 py-[10px] rounded-lg font-extralight bg-black text-white w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
