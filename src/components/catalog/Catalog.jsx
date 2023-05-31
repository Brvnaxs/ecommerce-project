import React, { useState, useEffect } from "react";
import image1 from "../../assets/catalog1.png"
import image2 from "../../assets/catalog2.png"
import "./catalog.css";

export default function Catalog(){
    const [categories, setCategories] = useState([])
    const url = 'https://json-api-production-2f8d.up.railway.app/produtos'
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res =>{
            console.log(res)
        })
    }, [])

    return(
        <div className="Catalog">
            
        </div>
    )
}