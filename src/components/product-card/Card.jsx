import { React } from "react";
import "./card.css";

export default function Card({ image, name, price, func }) {
    return (
        <div className="Card">
            <img src={image} alt=''></img>
            <h1>{name}</h1>
            <span>R$ {price}</span>
            <button onClick={func}>Comprar</button>
        </div>
    )
};