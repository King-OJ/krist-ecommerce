import {
  BestSellers,
  Categories,
  DealsOfTheMonth,
  Footer,
  Hero,
  OurStories,
  Navbar,
  WhatCustomersSay,
} from "@/components";
import { clientConfig, serverConfig } from "@/config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const HomePage = async () => {
  const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!tokens) {
    notFound();
  }

  return (
    <>
      <Navbar email={tokens?.decodedToken.email} />
      <Hero />
      <Categories />
      <BestSellers />
      <DealsOfTheMonth />
      <WhatCustomersSay />
      <OurStories />
      <Footer />
    </>
  );
};
export default HomePage;
