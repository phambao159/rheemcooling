import image1 from "../../images/aboutus/image1.jpg"
import image2 from "../../images/aboutus/image2.jpg"
import image3 from "../../images/aboutus/image3.jpg"
function CompanyInfo() {
    return (
        <div className="companyinfo ounded-2xl  p-6 md:p-10 space-y-4 grid-cols-1 md:grid-cols-5 items-center gap-30">
            <div className="col-span-1 md:col-span-3 mb-0">
                <h2 className="text-5xl font-bold text-gray-800 mb-4 pb-2">Company Information</h2>
                <p className="text-gray-600 leading-relaxed">
                    Founded in 1998, <span className="font-semibold text-[#DC143C]">Rheem Cooling</span> is a global leader in heating and cooling solutions. With nearly a century of experience, we are committed to delivering high-quality, innovative, and energy-efficient air conditioning systems tailored for both residential and commercial needs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    We serve customers across continents, providing comfort and reliability through our extensive range of cooling products. Our team of engineers and service professionals work together to ensure every unit meets international standards of performance and durability.
                </p>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-row items-center">
                <img src={image1} className="w-45 !h-70 border border-gray-300 rounded-xl object-cover object-center" alt="Image 1" />
                <div className="hidden lg:block ms-10 ">
                    <img src={image2} className="w-45 !h-70 border border-gray-300 rounded-xl mb-5  object-cover object-center" alt="Image 2" />
                    <img src={image3} className="w-45 !h-70 border border-gray-300 rounded-xl  object-cover object-center" alt="Image 3" /></div>
            </div>
        </div>
    );
}

export default CompanyInfo;
