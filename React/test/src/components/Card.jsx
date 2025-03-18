import React from "react";

export default function Card({ avatar, name, jobtitle }) {
    return (
        <div className="bg-white shadow-lg m-4">
            <img src={avatar} />
            <div>
                <p className="font-bold">{name}</p>
                <p className="mt-2">{jobtitle}</p>
            </div>
        </div>
    );
}

