import About from "../../components/about"
import Contact from "../../components/contact"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Projects from "../../components/projects"
import "./styles.css"


const Home = () =>{

    return(
        <>
            <Header/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home