import { useEffect } from "react";

import { getProducts } from "../../api/products";
import CardProduct from "../../components/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { addProducts } from "../../lib/slices/productsSlice";
import FloatingButton from "../../components/FloatingButton";


export default function Products() {

    const products = useSelector((state: RootState) => state.reducers.products)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            dispatch(addProducts(await getProducts()))
        })()
    }, [dispatch])

    return (
        <>
            <div className="flex flex-wrap justify-evenly gap-7 m-5" >
                {products.map((product, index) => {
                    return <CardProduct key={index} product={product} />
                })}
            </div>
            <FloatingButton />
        </>
    )
}
