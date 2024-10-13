import { LinkButton } from "@/components";

export default function error() {
  return (
    <section className="min-h-[50vh]">
      <div className="w-full my-24 grid place-content-center space-y-6">
        <p className="text-base text-center md:text-xl font-medium">
          The URL you entered does not exist! Kindly check the URL or click
          below.
        </p>
        <div className="max-w-md mx-auto">
          <LinkButton title="back home" href="/" />
        </div>
      </div>
    </section>
  );
}
