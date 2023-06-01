import React, { useState, useEffect } from "react";
import image1 from "../../assets/catalog1.png"
import image2 from "../../assets/catalog2.png"
import "./catalog.css";

export default function Catalog() {
    const [categories, setCategories] = useState([])
    const url = 'https://json-api-production-2f8d.up.railway.app/produtos/categorias'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setCategories(res)
            })
    }, [])
    
    return (
        <div className="container">
        <h1 className="title">Categorias</h1>
        <div className="Catalog">
            <img src={image1} alt='Produtos' />
            <div className='catalogo'>
                <span>Catálogo</span>
                <ul>
                    {
                        categories.map(item => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <img src={image2} alt='Produtos' />
        </div>
        </div>
    )
}