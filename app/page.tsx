import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import DealsOfTheMonth from "@/components/DealsOfTheMonth";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurStories from "@/components/OurStories";
import WhatCustomersSay from "@/components/WhatCustomersSay";

const HomePage = () => {
  return (
    <>
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
