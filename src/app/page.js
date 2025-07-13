import FeaturedProdcut from "@/Components/home/FeatuedProduct";
import HeroSection from "@/Components/home/HeroSection";
import RecentlyAdded from "@/Components/home/RecentlyAdded";
import Footer from "@/Components/main/Foooter";

export const metadata = {
  title: "Pasha-Store",
  description: "Welcome to MyStore - Shop latest trends online.",
}


export default function Home() {
  return (
    <> 
    <HeroSection/>
    <RecentlyAdded/>
    <FeaturedProdcut/>
    </>
  );
}
