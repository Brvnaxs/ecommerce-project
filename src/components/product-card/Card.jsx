import { React, useContext } from "react";
import "./card.css";
import { ProductContext } from "../Context/ProductContext";

export default function Card({ image, name, price}) {
    const {produto, setProduto} = useContext(ProductContext);
    return (
        <div className="Card">
            <img src={image} alt=''></img>
            <h1>{name}</h1>
            <span>R$ {price}</span>
            <button onClick={() => setProduto(produto +1)}>Comprar</button>
        </div>
    )
};