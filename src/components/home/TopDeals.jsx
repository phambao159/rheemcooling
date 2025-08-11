import windowAC_vuong from "../../images/home/windowAC_vuong.jpg";
import { Link } from "react-router-dom";

const TopDeals = () => {
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(to left, #e6e6e6ff, #ffffffff)",
      }}
      className="my-2 px-4 sm:px-6 md:px-10 py-5 sm:py-8 md:py-10 border rounded-lg"
    >
      <div className="grid grid-cols-10 gap-4 md:gap-6">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#dc143c] mb-2">
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

        <div className="col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array(6)
            .fill(0)
            .map((deal, index) => (
              <div
                key={index}
                className={`bg-gray-50 text-black rounded-md shadow p-1 sm:p-2 md:p-3 ${
                  index < 2 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex justify-center items-center mb-3">
                  <img
                    src={require("../../images/home/splitAC_hcn.jpg")}
                    alt=""
                    className="w-9/10 max-h-30 object-contain rounded-md"
                  />
                </div>
                <p className="font-semibold text-sm sm:text-base mb-2">
                  New Smart Air Conditioner
                </p>
                <button className="bg-[#dc143c] font-semibold text-white text-sm sm:text-base px-2 py-1 rounded-md hover:bg-red-700 transition">
                  Shop now
                </button>
              </div>
            ))}
        </div>

        <div className="col-span-10 mt-6">
          <h3 className="text-black font-bold text-lg sm:text-xl mb-4">
            Shop deals by category
          </h3>

          <div className="flex justify-start sm:justify-center items-center gap-4 overflow-x-auto scrollbar-hide">
            {["Window AC", "Split AC", "Cassette AC"].map((cat, index) => (
              <Link to="/topsellingAC" className="block">
                <div
                  key={index}
                  className="flex-shrink-0 w-32 sm:w-40 text-center"
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
