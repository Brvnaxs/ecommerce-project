import { React, useContext, useState } from "react";
import { HiSearch, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";

import "./header.css";
import { ProductContext } from "../Context/ProductContext";

export default function Header() {
    const {produto, setProduto} = useContext(ProductContext)
    return (
        <div className="Header">
            <span className='logo'>GHATS</span>
            <button>Dicas para casa</button>
            <div className='menu'>
                <span>catálogo</span>
                <span>inspirações</span>
                <span>lista de presentes</span>
            </div>
            <div className='search'>
                <HiSearch className='icon' />
                <input></input>
            </div>
            <div className='favs-car'>
                <HiOutlineHeart className='icon' />
                <HiOutlineShoppingCart className='icon' />
                <span className="itens">{produto}</span>
            </div>
        </div>
    )
};