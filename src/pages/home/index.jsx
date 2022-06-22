import { useRef } from "react"
import About from "../../components/about"
import Header from "../../components/header"
import Projects from "../../components/projects"
import { useIdElement } from "../../providers/ElementId"
import "./styles.css"


const Home = () =>{

    return(
        <>
            <Header/>
            <About/>
            <Projects/>
        </>
    )
}

export default Home