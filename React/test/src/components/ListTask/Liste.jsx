import React from "react";

export default function Liste({ text }) {
    return (
        <div className="bg-teal-600 w-50 hover:bg-teal-400">
            <p className=" text-white p-4 border border-white">{text}</p>
        </div>
    );
}
