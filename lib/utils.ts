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
