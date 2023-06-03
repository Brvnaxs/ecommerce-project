import { createContext, useState } from "react";

export const UrlContext = createContext();

export const UrlProvider = ({children}) => {
    const [url, setUrl] = useState('https://json-produtos.vercel.app/produtos')
    function ChangeUrl(link){
        setUrl(`https://json-produtos.vercel.app/produtos/categoria/${link}`)
    }
    return(
        <UrlContext.Provider value={{url, ChangeUrl}}>
            {children}
        </UrlContext.Provider>
    )
}