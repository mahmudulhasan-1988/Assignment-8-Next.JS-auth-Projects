import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/marble-texture-background-natural-breccia-marble-tiles-ceramic-wall-tiles-floor-tiles-marble-stone-texture-digital-wall-tiles_979495-155181.jpg?semt=ais_hybrid&w=740&q=80')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mb-10">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find your perfect Tiles
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200">
            Our company has a variety of high-quality domestic and foreign Tiles.
          </p>

          <div className="flex gap-4">
            <Link href="#">
                <Button variant="outline" className="text-white">
                Talk To Agent
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                See Our Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;