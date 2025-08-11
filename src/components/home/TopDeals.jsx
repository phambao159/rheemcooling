import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";
import { Link } from "react-router-dom";

const TopDeals = ({ db }) => {
  // const topProducts = [
  //   { ac_id: "mitsubishi_ac01", bestImageIndex: 1 },
  //   { ac_id: "daikin_ac10", bestImageIndex: 2 },
  //   { ac_id: "samsung_ac05", bestImageIndex: 1 },
  //   { ac_id: "hitachi_ac10", bestImageIndex: 1 },
  //   { ac_id: "panasonic_ac03", bestImageIndex: 2 },
  //   { ac_id: "toshiba_ac01", bestImageIndex: 1 },
  // ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <section
      style={{
        backgroundImage: "linear-gradient(to left, #e6e6e6ff, #ffffffff)",
      }}
      className="my-2 px-4 sm:px-6 md:px-10 py-5 sm:py-8 md:py-10 border rounded-lg"
    >
      <div className="grid grid-cols-10 gap-4 md:gap-6">
        <div className="col-span-10 md:col-span-3 flex flex-col items-start justify-center">
          <h2 className="text-4xl md:text-6xl text-[#dc143c] mb-2">
            TOP <div className="font-bold ">DEALS</div>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#dc143c] mb-4">
            Don't miss it
          </p>
          <Link to="/topsellingAC">
            <button className="bg-[#dc143c] font-semibold text-white text-base sm:text-lg md:text-xl px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition">
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
              const imageUrl = `https://storage.googleapis.com/rheemcooling/${productData.brand
                }/${item.ac_id}/${item.ac_id}_img${item.bestImageIndex || 1
                }.webp`;
              return (
                <div
                  key={index}
                  className={`bg-gray-50 text-black rounded-md shadow p-1 sm:p-2 md:p-3 ${index < 2 ? "lg:col-span-2" : ""
                    }`}
                >
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
                      <button className="w-full bg-[#dc143c] font-semibold text-white text-sm sm:text-base px-2 py-1 rounded-md hover:bg-red-700 transition mb-2">
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
            {["Window AC", "Split AC", "Cassette AC"].map((cat, index) => (
              <Link to="/topsellingAC" className="block">
                <div
                  key={index}
                  className="flex-shrink-0 w-32 sm:w-40 text-center pb-4 md:pb-0"
                >
                  <div className="flex justify-center items-center bg-white w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2 border-2 border-black rounded-full overflow-hidden">
                    <img
                      src={windowAC_vuong}
                      alt=""
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                  <p className="text-base sm:text-lg text-black">{cat}</p>
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
