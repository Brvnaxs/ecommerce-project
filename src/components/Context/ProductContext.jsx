import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [produto, setProduto] = useState(null)
    return(
        <ProductContext.Provider value={{produto, setProduto}}>
            {children}
        </ProductContext.Provider>
    )
}