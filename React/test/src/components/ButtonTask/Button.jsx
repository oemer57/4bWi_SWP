import React from "react";

export default function Button({ text }) {
    return (
        <button className="bg-green-500 w-40 p-4 m-4 text-white font-bold text-center  hover:bg-green-600">
            {text}
        </button>
    );
}
