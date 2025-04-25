import React, { useState } from "react";
import { useFormState } from "react-dom";

export default function Card({ avatar, name, jobtitle }) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    let style = amountOfClicks > 5 ? "bg-green-400" : "bg-white";

    return (
        <div className={` shadow-lg m-4 hover:cursor-pointer ${style}`}
            onClick={() => { setAmountOfClicks(amountOfClicks + 1); }}>
            <img src={avatar} />
            <div>
                <p className="font-bold">{name}</p>
                <p className="mt-2">{jobtitle}</p>
                <div> Amount of Clicks: {amountOfClicks}</div>
            </div>
        </div>
    );
}

