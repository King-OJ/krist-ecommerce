import { productCategories, ProductCategory, productDetail } from "./utils";

export const bestSellers: Array<productDetail> = [
  {
    id: "1",
    title: "roadstar",
    subtitle: "printed cotton t-shirt",
    price: 38.0,
    oldPrice: 40.0,
    description: "xyz",
    category: productCategories.casual,
    productImgUrl: ["/fashion_img4.png"],
  },
  {
    id: "2",
    title: "allen sally",
    subtitle: "women totured handheld bag",
    price: 38.0,
    oldPrice: 40.0,
    description: "xyz",
    category: productCategories.casual,
    productImgUrl: ["/fashion_img5.png"],
  },
  {
    id: "3",
    title: "lious phillip sport",
    subtitle: "polo collar t-shirt",
    price: 38.0,
    oldPrice: 40.0,
    description: "xyz",
    category: productCategories.casual,
    productImgUrl: ["/fashion_img6.png"],
  },
  {
    id: "4",
    title: "trendyol",
    subtitle: "floral embroided maxi dress",
    price: 38.0,
    oldPrice: 40.0,
    description: "xyz",
    category: productCategories.casual,
    productImgUrl: ["/fashion_img.png"],
  },
  {
    id: "5",
    title: "trendyol",
    subtitle: "floral embroided maxi dress",
    price: 38.0,
    oldPrice: 40.0,
    description: "xyz",
    category: productCategories.casual,
    productImgUrl: ["/fashion_img8.png"],
  },
  {
    id: "6",
    title: "trendyol",
    subtitle: "floral embroided maxi dress",
    price: 38.0,
    oldPrice: 40.0,
    description: "xyz",
    category: productCategories.casual,
    productImgUrl: ["/fashion_img9.png"],
  },
];
export const categories: Array<ProductCategory> = [
  {
    id: "1",
    category: productCategories.casual,
    imgUrl: "/fashion_img.png",
  },
  {
    id: "2",
    category: productCategories.western,
    imgUrl: "/fashion_img1.png",
  },
  {
    id: "3",
    category: productCategories.ethnic,
    imgUrl: "/fashion_img2.png",
  },
  {
    id: "4",
    category: productCategories.kids,
    imgUrl: "/fashion_img3.png",
  },
];

export const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibus",
    author: "Leslie Alexander",
    occupation: "model",
    imgUrl: "/profile_img2.jpeg",
    rating: 3,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibus accusamus neque esse, accusantium dolorem laudantium iusto enim illum cum quasi?",
    author: "Jacob Jones",
    occupation: "co-founder",
    imgUrl: "/profile_img2.jpeg",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus neque esse, accusantium dolorem laudantium iusto enim illum cum quasi?",
    author: "Jenny Wilson",
    occupation: "fashion designer",
    imgUrl: "/profile_img2.jpeg",
    rating: 2,
  },
];

export const stories = [
  {
    link: "/",
    imgUrl: "/krist_signIn_img.png",
  },
  {
    link: "/",
    imgUrl: "/krist_signUp_img.png",
  },
  {
    link: "/",
    imgUrl: "/krist_otp_img.png",
  },
  {
    link: "/",
    imgUrl: "/krist_signIn_img.png",
  },
];

export type Address = {
  title: string;
  location: string;
  phoneNo: string;
};

export const addresses: Address[] = [
  {
    title: "robert fox",
    location: "4517 Washington Ave, Manchester, Kentucky 39495",
    phoneNo: "23480123456",
  },
  {
    title: "john williams",
    location: "3891 Ranchview Dr. Richardson, California 62639",
    phoneNo: "23480123456",
  },
  {
    title: "alexa johnson",
    location: "4517 Washington Ave, Manchester, Kentucky 39495",
    phoneNo: "23480123456",
  },
];
