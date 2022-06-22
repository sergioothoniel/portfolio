import { createContext, useContext, useState } from "react";


export const IdElementContext = createContext()

export const IdElementProvider = ({children}) =>{

    const [aboutPosition, setAboutPosition] = useState(0)
    const [projectsPosition, setprojectsPosition] = useState(0)

        
    return(
        <IdElementContext.Provider value={{aboutPosition, setAboutPosition, projectsPosition, setprojectsPosition}}>
            {children}
        </IdElementContext.Provider>
    )
}

export const useIdElement = () => useContext(IdElementContext)