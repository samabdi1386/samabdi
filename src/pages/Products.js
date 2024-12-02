import { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () =>{
    const [data , setData] = useState([]);
    useEffect(() =>{
        fetch('https://api.escuelajs.co/api/v1/products').then(res =>res.json()).then(Products =>{setData(Products)})
    },[])
    return(
        <div className="row">
            {data.map(item => <Product key={item.id} item={item}/>)}
        </div>
    )
}
export default Products;