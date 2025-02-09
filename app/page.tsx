import {
  Banner,
  CategoriesSlider,
  PopularProducts,
  ProductsTabs,
  Promo,
  SmallerBanners,
} from "@/components/shared";

export default function Home() {
  return (
    <main>
      <Banner />
      <SmallerBanners />
      <CategoriesSlider />
      <ProductsTabs />
      <PopularProducts />
      <Promo />
    </main>
  );
}
