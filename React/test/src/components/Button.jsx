import React from "react";

export default function Button({ text }) {
    return (
        <div className="bg-green-500 w-20 p-4 m-4">
            <p className="font-bold">{text}</p>
        </div>
    );
}

