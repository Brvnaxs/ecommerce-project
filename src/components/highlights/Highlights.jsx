import {React, useState, useEffect, useContext} from "react";
import Card from "../product-card/Card"
import "./highlights.css"
import { UrlContext } from "../Context/UrlContext";

export default function Highlights(){
    const {url, ChangeUrl} = useContext(UrlContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                
            })
    }, [url])
    if(!products || products == null){
        return(
            <h2 className="loading">Carregando...</h2>
        )
    }
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