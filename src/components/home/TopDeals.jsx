import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";
import { Link } from "react-router-dom";

const TopDeals = ({ db }) => {
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shopByCategoryIcons = [
    {
      label: "Window AC",
      imageUrl:
        "https://storage.googleapis.com/rheemcooling/samsung/samsung_ac01/samsung_ac01_img1.webp",
      link: "/windowAC",
    },
    {
      label: "Split AC",
      imageUrl:
        "https://storage.googleapis.com/rheemcooling/daikin/daikin_ac10/daikin_ac10_img1.webp",
      link: "/splitAC",
    },
    {
      label: "Cassette AC",
      imageUrl:
        "https://storage.googleapis.com/rheemcooling/toshiba/toshiba_ac06/toshiba_ac06_img1.webp",
      link: "/cassetteAC",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "linear-gradient(to left, #e6e6e6ff, #ffffffff)",
      }}
      className="my-2 px-4 sm:px-6 md:px-10 py-5 sm:py-8 md:py-10 border rounded-lg"
    >
      <div className="grid grid-cols-10 gap-4 md:gap-6">
        <div className="col-span-10 md:col-span-3 flex flex-col items-start justify-center">
          <h2 className="text-4xl md:text-6xl text-[#DC143C] mb-2">
            TOP <div className="font-bold ">DEALS</div>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#DC143C] mb-4">
            Don't miss it
          </p>
          <Link to="/topsellingAC">
            <button className="bg-[#DC143C] font-semibold text-white text-base sm:text-lg md:text-xl px-3 sm:px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-200 animate-pulse">
              Shop now
            </button>
          </Link>
        </div>

        <div className="col-span-10 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* topProducts.map() cũng OK */}
          {shuffleArray(db)
            .slice(0, 6)
            .map((item, index) => {
              const productData = db.find((p) => p.ac_id === item.ac_id);
              const discount =
                item.old_price && item.old_price > item.price
                  ? Math.round(
                      ((item.old_price - item.price) / item.old_price) * 100
                    )
                  : 0;
              const imageUrl = `https://storage.googleapis.com/rheemcooling/${
                productData.brand
              }/${item.ac_id}/${item.ac_id}_img${
                item.bestImageIndex || 1
              }.webp`;

              return (
                <div
                  key={index}
                  className={`relative bg-gray-50 text-black rounded-md shadow p-1 sm:p-2 md:p-3 ${
                    index < 2 ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Label */}
                  {item.isNew && (
                    <span className="absolute top-2 md:top-3 left-2 md:left-3 bg-[#DC143C] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded animate-bounce">
                      New
                    </span>
                  )}

                  {discount > 0 && (
                    <span className="absolute top-2 md:top-3 right-2 md:right-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded animate-pulse">
                      -{discount}%
                    </span>
                  )}

                  <div className="flex justify-center items-center mb-3 h-36 sm:h-40 md:h-44">
                    <img
                      src={imageUrl}
                      //{require("../../images/home/splitAC_hcn.jpg")}
                      alt=""
                      className="max-w-9/10 max-h-full object-contain rounded-md"
                    />
                  </div>

                  <p className="font-semibold text-sm sm:text-base mb-2 line-clamp-3 flex-grow">
                    {productData.name}
                  </p>

                  <div className="flex justify-center mt-2 md:mt-3 lg:mt-4">
                    <Link to={`/product/${item.ac_id}`}>
                      <button className="w-full bg-[#DC143C] font-semibold text-white text-sm sm:text-base px-2 py-1 rounded-md hover:bg-blue-700 transition mb-2">
                        Shop now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Shop deals by category */}
        <div className="col-span-10 mt-6">
          <h3 className="text-black font-bold text-lg sm:text-xl mb-4">
            Shop deals by category
          </h3>

          <div className="flex justify-center items-center md:gap-4 md:overflow-x-auto scrollbar-hide">
            {shopByCategoryIcons.map((p) => (
              <Link to={p.link} className="block">
                <div
                  key={p.label}
                  className="flex-shrink-0 w-32 sm:w-40 text-center pb-4 md:pb-0"
                >
                  <div className="flex justify-center items-center bg-white w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2 border-2 border-black rounded-full overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt=""
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                  <p className="text-base sm:text-lg text-black">{p.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
