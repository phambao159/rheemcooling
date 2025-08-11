import mission from "../../images/aboutus/mission.jpg"
function Mission() {
    return (
        <div className="mission rounded-2xl p-6 md:p-10 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <div className=" grid grid-cols-1 md:grid-cols-5 gap-8 mb-5 pb-5">
                <div className="md:col-span-3 space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                        At <span className="font-semibold text-[#DC143C]">Rheem Cooling</span>, our mission is to make sustainable comfort accessible for everyone.
                    </p>
                    <p className="text-gray-600">We strive to:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Develop environmentally friendly and energy-saving cooling technologies.</li>
                        <li>Deliver outstanding customer service from purchase to long-term maintenance.</li>
                        <li>Build long-term relationships with our clients through trust and reliability.</li>
                    </ul>
                    <p className="text-gray-600 italic">We're not just cooling your spaces—we’re improving your lifestyle.</p>
                </div>
                <div className="col-span-2 px-0 md:px-5 lg:px-30">
                    <div className="mb-5">
                        <h2 className="text-3xl font-bold text-[#DC143C] mb-2" style={{ fontFamily: "Inter" }}>30%  </h2>
                        <p className="text-sm">Energy Reduction by 2030</p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-3xl font-bold text-[#DC143C] mb-2 " style={{ fontFamily: "Inter" }}> 50 Countries</h2>
                        <p className="text-sm">will have our branch by 2028</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#DC143C] mb-2" style={{ fontFamily: "Inter" }}>98% </h2>
                        <p className="text-sm">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 pt-5">
                <img src={mission} alt="Misson Image" className="w-full !h-150 object-cover object-center border border-gray-200 rounded-3xl" />
            </div>
        </div>
    );
}

export default Mission;
