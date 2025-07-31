import React from "react";

function Branches() {
    const branches = [
        {
            country: "Canada",
            address: "125 Edgeware Rd Unit 1, Brampton, Ontario",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8073253125476!2d-79.74887682409977!3d43.73483234968964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3e5e2ce25c2f%3A0x8669c1fd46dd3c06!2s125%20Edgeware%20Rd%2C%20Brampton%2C%20ON%20L6Y%200P5%2C%20Canada!5e0!3m2!1sen!2sca!4v1722318542979!5m2!1sen!2sca",
        },
        {
            country: "Australia",
            address: "2-10 Captain Cook Dr, Caringbah NSW 2229",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.755405158046!2d151.11993567636056!3d-34.04378297317407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c46e89194a71%3A0xe9d72535d01ef9db!2s2-10%20Captain%20Cook%20Dr%2C%20Caringbah%20NSW%202229%2C%20Australia!5e0!3m2!1sen!2sau!4v1722318768983!5m2!1sen!2sau",
        },
        {
            country: "Germany",
            address: "Wittestraße 30, 13509 Berlin",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.961501830424!2d13.312099615777318!3d52.57817387983279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a853b9446a6b2d%3A0x5a94727e2dc8289a!2sWittestra%C3%9Fe%2030%2C%2013509%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1722318877552!5m2!1sen!2sde",
        },
        {
            country: "Singapore",
            address: "1 Kallang Sector, Singapore 349276",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.670491488514!2d103.86782924179688!3d1.3182180310660537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17726b10e77b%3A0x156d77c8c7d4ae46!2s1%20Kallang%20Sector%2C%20Singapore%20349276!5e0!3m2!1sen!2ssg!4v1722318976432!5m2!1sen!2ssg",
        },
        {
            country: "United Kingdom",
            address: "3 St James's Square, London SW1Y 4JU",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.9429869240672!2d-0.13704864017711652!3d51.50719235178137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb0c20a86f%3A0xf60b02149ecfcb88!2s3%20St%20James&#39;s%20Square%2C%20St.%20James&#39;s%2C%20London%20SW1Y%204JU%2C%20UK!5e0!3m2!1sen!2suk!4v1722319052143!5m2!1sen!2suk",
        },
    ];

    const [selected, setSelected] = React.useState(branches[0]);

    return (
        <div className="branches">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Our Branches</h2>
            <p className="text-gray-600 mb-6 max-w-lg">
                Trusted service, wherever you are
            </p>
            <select
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 w-full  mb-6"
                value={selected.address}
                onChange={(e) =>
                    setSelected(branches.find((b) => b.address === e.target.value))
                }
            >
                {branches.map((b) => (
                    <option key={b.address} value={b.address}>
                        {b.address}
                    </option>
                ))}
            </select>
            <div className="text-sm text-gray-700 mb-2">
                Address: {selected.address}
            </div>
            <div className="w-full h-100 overflow-hidden rounded-md border border-gray-200">
                <iframe
                    src={selected.mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    title={selected.label}
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}

export default Branches;
