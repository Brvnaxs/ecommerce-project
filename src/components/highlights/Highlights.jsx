import {React, useState, useEffect} from "react";
import Card from "../product-card/Card"
import "./highlights.css"

export default function Highlights(){
    const [products, setProducts] = useState([])
    const url = 'https://json-api-production-2f8d.up.railway.app/produtos'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setProducts(res)
                
            })
    }, [])
    return(
        <div className="container">
            <h1 className="title">Destaques</h1>
            <div className="Highlights">
                {
                    products.map(produto => {
                        return(
                            <Card key={produto.id}
                            image={produto.image} 
                            name={produto.name} 
                            price={produto.price} 
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}