import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
    const [category, setCategory] = useState("feminino")
    const [data, setData] = useState([])

    async function fetchData() {
        try {
            const response = await fetch("/data.json")
            if (!response.ok) {
                throw new Error("Houve algum erro na comunicação com a api: " + response.status);
            }
            const json = await response.json()
            setData(json)
        }
        catch (error) {
            console.error("Erro com a api: " + error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    return (
        <GlobalContext.Provider value={{ data, category, setCategory}}>
            {children}
        </GlobalContext.Provider>
    )
}