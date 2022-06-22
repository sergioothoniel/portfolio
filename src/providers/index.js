import { IdElementProvider } from "./ElementId"

const Provider = ({children}) =>{
    return(
        <IdElementProvider>
            {children}
        </IdElementProvider>
    )
}

export default Provider