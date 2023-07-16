import React, { createContext, useEffect, useState } from "react";
import Product from "../model/Product";
import axios from "axios";

type ContextType = {
    products: Product[]
}
const ProductContext = createContext<ContextType>({
    products: []
});

type PropType = {
    children: React.ReactNode
}

export default function ProductProvider(props: PropType) {
    let [products, setProducts] = useState<Product[]>([]);

    //component DidMount
    useEffect(() => {
        axios.get("http://localhost:1234/products").then(response => {
            setProducts(response.data)
        })
    })
    return <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
}
export {ProductContext}