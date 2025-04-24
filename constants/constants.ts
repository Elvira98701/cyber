import { INavItem, IPopularProduct } from "@/@types";

export const navList: INavItem[] = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "Catalog", link: "/catalog" },
  { id: "3", name: "Contact us", link: "/contact" },
];

export const popularProducts: IPopularProduct[] = [
  {
    id: "1",
    name: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/1.png",
    color: "#FFFFFF",
  },
  {
    id: "2",
    name: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/2.png",
    color: "#F9F9F9",
  },
  {
    id: "3",
    name: "Samsung Galaxy ",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/3.png",
    color: "#EAEAEA",
  },
  {
    id: "4",
    name: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/4.png",
    color: "#2C2C2C",
  },
];
