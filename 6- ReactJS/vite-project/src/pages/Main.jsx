import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";

import { getProducts } from "../api/products";


export default function Main() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            setProducts(await getProducts())
        })()
    },[])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-evenly', gap: '20px'}}>
            {products.map((product, index) => {
                return <CardProduct key={index} product={product} />
            })}
        </div>
    )
}
