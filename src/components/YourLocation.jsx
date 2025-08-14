import { useEffect, useState } from "react";

function YourLocation() {
    const [time, setTime] = useState(new Date());
    const [location, setLocation] = useState("Loading...");


    useEffect(() => {
        // Cập nhật giờ mỗi giây
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Lấy vị trí người dùng
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
                        const data = await res.json();
                        const city = data.address.city || data.address.town || data.address.village || "";
                        const country = data.address.country || "";
                        setLocation(`${city}, ${country}    `);
                    } catch (error) {
                        setLocation("Location unavailable");
                    }
                },
                () => setLocation("Permission denied")
            );
        } else {
            setLocation("Geolocation not supported");
        }

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hidden md:block fixed bottom-0 right-0 bg-white border border-gray-300 rounded-l-lg shadow-lg text-sm p-2 text-gray-700 z-50 md:flex gap-2 items-center">
            <div className="font-medium">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="font-bold">
                {time.toLocaleDateString()}
            </div>
            <div className="italic font-bold text-[#DC143C]">{location}</div>
        </div >
    );
}

export default YourLocation;
