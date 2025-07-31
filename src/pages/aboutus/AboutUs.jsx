import CompanyInfo from "../../components/aboutus/CompanyInfo";
import Mission from "../../components/aboutus/Mission";
import Partners from "../../components/aboutus/Partners";

function AboutUs() {
    return (
        <div className="aboutus ">
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]">
                <CompanyInfo />
            </div>
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]">
                <Mission />
            </div>
            <div className="bg-white">
                <Partners />
            </div>


        </div>
    );
}

export default AboutUs;