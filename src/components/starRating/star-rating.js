
import React, { useState } from "react";
import {FaStar} from "react-icons/fa";

const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = length => [...Array(length)];

export default function StarRating ({totalStars = 5}) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
            {createArray(totalStars).map((n,i) => (
                <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}


// export default function StarRating () {
//     return [
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="grey" />,
//         <FaStar color="grey" />
//     ]
// }