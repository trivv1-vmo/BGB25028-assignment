type IRoom = {
  _id: string | null;
  id: string;
  altText: string;
  type: string;
  url: string | null;
  index: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  __v: number | null;
  products: Product[] | null;
};

type Product = {
  _id: string;
  room_id: string;
  id: string;
  index: number;
  tagPosition: "top" | "right" | "bottom" | "left";
  dotCoordinates: DotCoordinates;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type DotCoordinates = {
  x: number;
  y: number;
  _id: string;
};

type IProductPrice = {
  productName: string;
  description: string;
  currency: string;
  price: string;
  productUrl: string;
};
