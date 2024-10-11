import {
  BestSellers,
  Categories,
  DealsOfTheMonth,
  Hero,
  OurStories,
  WhatCustomersSay,
} from "@/components";

const HomePage = async () => {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <DealsOfTheMonth />
      <WhatCustomersSay />
      <OurStories />
    </>
  );
};
export default HomePage;
