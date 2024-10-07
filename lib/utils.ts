export enum productCategories {
  casual,
  western,
  ethnic,
  kids,
}

export type ProductCategory = {
  id: string;
  category: productCategories;
  imgUrl: string;
};

export type productDetail = {
  id: string;
  title?: string;
  subtitle?: string;
  price: number;
  oldPrice?: number;
  productImgUrl: Array<string>;
  description?: string;
  category?: productCategories;
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
