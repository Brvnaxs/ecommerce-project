import { React, useState } from "react";
import { HiSearch, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";

import "./header.css";

export default function Header() {
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
            </div>
        </div>
    )
};