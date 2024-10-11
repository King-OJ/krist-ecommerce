import Image from "next/image";
import Link from "next/link";
import {
  TbArrowRight,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandX,
  TbMail,
  TbMapPin,
  TbPhoneCall,
} from "react-icons/tb";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-black text-white">
      <div>
        <div className="divide-y-[1px]">
          <div className="py-8 flex flex-wrap gap-1 md:gap-6 justify-between">
            <div>
              <Link href={"/"} className="z-10 flex items-center space-x-[2px]">
                <Image
                  src="/krist_white_logo.png"
                  alt="kriss logo"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
                <h3 className="text-3xl">Krist</h3>
              </Link>
              <ul className="text-sm">
                <li className="mt-6">
                  <a
                    href="tel:+2348063824618"
                    className="flex items-center space-x-3"
                  >
                    <TbPhoneCall />
                    <span>(234)-8063824618</span>
                  </a>
                </li>
                <li className="mt-6">
                  <a
                    href="email:talk@clemzy1@gmail.com"
                    className="flex items-center space-x-3"
                  >
                    <TbMail />
                    <span>clem@example.com</span>
                  </a>
                </li>
                <li className="mt-6">
                  <a
                    href="location:long(xxx)lat(xyz)"
                    className="flex items-center space-x-3"
                  >
                    <TbMapPin />
                    <span>Nigeria, West Africa.</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-sm">
              <h6 className="font-semibold mb-6">information</h6>
              <ul className="space-y-4 capitalize font-light">
                <li>my account</li>
                <li>login</li>
                <li>my cart</li>
                <li>my wishlist</li>
                <li>checkout</li>
              </ul>
            </div>
            <div className="text-sm">
              <h6 className="font-semibold mb-6">service</h6>
              <ul className="space-y-4 capitalize font-light">
                <li>about us</li>
                <li>career</li>
                <li>delivery information</li>
                <li>privacy policy</li>
                <li>terms & condition</li>
              </ul>
            </div>

            <div className="text-sm">
              <h6 className="font-semibold mb-6">subscribe</h6>
              <p className="text-sm max-w-80">
                Enter your email below to be the first to know about new
                collection and product launches
              </p>
              <form action="#" className="mt-4">
                <div className=" border flex items-center px-2 space-x-2 py-2 border-white rounded-lg w-full">
                  <label htmlFor="email" className="text-lg">
                    <TbMail />
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-inherit flex-1 outline-none placeholder:text-white text-sm"
                  />
                  <button type="submit" className="">
                    <TbArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <ul className="flex items-center space-x-2">
              <li>
                <Image
                  src="/Visa.png"
                  alt="visa"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-auto"
                />
              </li>
              <li>
                <Image
                  src="/GooglePay.png"
                  alt="google pay"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-auto"
                />
              </li>
              <li>
                <Image
                  src="/Amex.png"
                  alt="amex"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-auto"
                />
              </li>
              <li>
                <Image
                  src="/Mastercard.png"
                  alt="mastercard"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-auto"
                />
              </li>
              <li>
                <Image
                  src="/Paypal.png"
                  alt="Paypal"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-auto"
                />
              </li>
            </ul>

            <div className="text-xs">
              &copy; {date.getFullYear()} All rights reserved
            </div>
            <ul className="flex items-center space-x-2">
              <li>
                <TbBrandFacebook />
              </li>
              <li>
                <TbBrandInstagram />
              </li>
              <li>
                <TbBrandX />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
