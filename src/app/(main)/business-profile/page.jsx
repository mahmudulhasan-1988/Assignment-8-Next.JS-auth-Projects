import Image from "next/image";

const BusinessProfile = () => {
  return (
    <div className="bg-gray-50">

    
      <div className="relative h-[400px] mb-10 mt-10">
        <Image
          src="/tiles-banner.png"
          alt="Business Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Hasan Tiles Gallery
          </h1>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 py-10  rounded-2xl mb-5 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-400">
          Elite Ceramic Tiles Ltd. is a leading supplier and distributor of high-quality ceramic and porcelain tiles. We provide stylish, durable, and affordable tiling solutions for residential, commercial, and industrial projects. With a strong focus on quality and customer satisfaction, we help bring design ideas to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 rounded-2xl mb-5 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p className="text-gray-400">
          Our mission is to deliver premium-quality ceramic tiles that combine durability, aesthetics, and value, ensuring customer satisfaction in every project.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 rounded-2xl mb-5 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Vision</h2>
        <p className="text-gray-400">
          Our vision is to become a trusted name in the tile industry by offering innovative designs, superior quality, and reliable service.
        </p>
      </div>

      
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 shadow rounded-xl">
              <h3 className="font-bold text-xl">Floor Tiles</h3>
              <p className="text-gray-400 mt-2">
                We offer a wide range of high-quality floor tiles designed for durability and style. Our floor tiles are suitable for living rooms, bedrooms, kitchens, and outdoor areas. They are scratch-resistant, easy to clean, and available in various sizes, textures, and finishes such as matte, glossy, and anti-slip surfaces.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="font-bold text-xl">Wall Tiles</h3>
              <p className="text-gray-400 mt-2">
                Our wall tiles are crafted to enhance the beauty of interior and exterior walls. Ideal for bathrooms, kitchens, and feature walls, these tiles come in modern, classic, and custom designs. They are moisture-resistant, easy to maintain, and perfect for creating elegant wall aesthetics.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="font-bold text-xl">Commercial Tiles</h3>
              <p className="text-gray-400 mt-2">
                We provide heavy-duty commercial tiles specially designed for high-traffic areas such as offices, shopping malls, hotels, and public spaces. These tiles are highly durable, slip-resistant, and built to withstand wear and tear while maintaining a professional and stylish look.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="font-bold text-xl">Decorative & Designer Tiles</h3>
              <p className="text-gray-400 mt-2">
                Our decorative and designer tiles are perfect for adding a unique and artistic touch to any space. Available in a variety of patterns, colors, and textures, these tiles are ideal for accent walls, backsplashes, and interior design projects that require creativity and elegance.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="font-bold text-xl">Porcelain Tiles</h3>
              <p className="text-gray-400 mt-2">
                Our decorative and designer tiles are perfect for adding a unique and artistic touch to any space. Available in a variety of patterns, colors, and textures, these tiles are ideal for accent walls, backsplashes, and interior design projects that require creativity and elegance.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="font-bold text-xl">Tile Installation Support & Consultation</h3>
              <p className="text-gray-400 mt-2">
                We provide professional guidance and consultation to help clients choose the right tiles for their projects. Our team also offers installation support, ensuring proper tile placement, alignment, and finishing for a flawless result. We focus on quality workmanship and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BusinessProfile;