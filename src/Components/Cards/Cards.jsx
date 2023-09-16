import { useEffect, useState } from "react";
import Card from "./Card/Card";


const Cards = ({handleClick}) => {
    const [cardData, setCardData] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCardData(data));

    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                cardData.map((card,idx) => <Card handleClick={handleClick}  key={idx} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;