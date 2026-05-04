import TopViewCard from "@/components/TopViewCard";
import Banner from "@/components/Banner";
import Image from "next/image";
import BannerSlider from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <TopViewCard></TopViewCard>
    </div>
  );
}
