import React from "react";
import branches from "../../data/branches.json";

function Branches() {
    const activeBranches = branches.filter(b => b.in_active);
    const [selected, setSelected] = React.useState(activeBranches[0]);

    return (
        <div className="branches">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Our Branches</h2>
            <p className="text-gray-600 mb-6 max-w-lg">
                Trusted service, wherever you are
            </p>

            <select
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 w-full mb-6"
                value={selected?.address}
                onChange={(e) =>
                    setSelected(activeBranches.find((b) => b.address === e.target.value))
                }
            >
                {activeBranches.map((b) => (
                    <option key={b.id} value={b.address}>
                        {b.country} – {b.address}
                    </option>
                ))}
            </select>

            <div className="text-sm text-gray-700 mb-2">
                <div><strong>Country:</strong> {selected?.country}</div>
                <div><strong>Address:</strong> {selected?.address}</div>
                <div><strong>Email:</strong> {selected?.email}</div>
                <div><strong>Phone:</strong> {selected?.phone}</div>
            </div>

            <div className="w-full h-[400px] overflow-hidden rounded-md border border-gray-200">
                <iframe
                    src={selected?.mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    title={selected?.country}
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}

export default Branches;
