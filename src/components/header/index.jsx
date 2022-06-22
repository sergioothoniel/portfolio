import { HeaderCotainer } from "./styles"
import matrix from "../../assets/backgroundVideo.mp4"
import "animate.css"
import { useIdElement } from "../../providers/ElementId"

const Header = () =>{

    const entitiesTittle = "<Sérgio O./>"

    const {aboutPosition, projectsPosition} = useIdElement()

    const handleClickNav = (event) =>{
        event.preventDefault()
        const hrefElement = event.target.getAttribute("href")
        
        if(hrefElement==='#about'){          
           window.scrollTo(0, aboutPosition)
        }
        else if(hrefElement==='#projects'){
            window.scrollTo(0, projectsPosition)
        }
        else if(hrefElement==='#contact'){

        }
        else{
            window.scrollTo(0, 0)
        }    
    }

    
    

    return(
        <HeaderCotainer>
            <video autoPlay loop muted width="100%" height="100%">
                <source src={matrix} type="video/mp4"/>
            </video>

            <nav>
                <div className="nav-name" onClick={(event)=>{handleClickNav(event)}}>{entitiesTittle}</div>
                <div className="nav-links">
                    <a onClick={(event)=>{handleClickNav(event)}} href="#about">Sobre mim</a>
                    <a onClick={(event)=>{handleClickNav(event)}} href="#projects">Projetos</a>
                    <a onClick={(event)=>{handleClickNav(event)}} href="#contact">Contato</a>
                </div>
            </nav>

            <div className="header-content">
                <div className="content-tittle">
                    <h1>Sérgio Othoniel</h1>
                    <h3 className="animate__animated animate__pulse animate__infinite">Desenvolvedor Front End</h3>  
                </div>

                <div className="content-techs animate__animated animate__zoomIn animate__slower">
                    <a className="techs" title="Chris Williams, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg"><img width="512" alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"/></a>
                    <a className="techs" title="™/®Microsoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg"><img width="512" alt="Typescript logo 2020" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"/></a>
                    <figure className="techs"><img src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg" alt="" /></figure>
                    <a className="techs" title="Rudloff, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg"><img width="256" alt="CSS3 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"/></a>
                    <a className="techs" title="node.js authors, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg"><img width="512" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"/></a>
                    <figure className="techs"><img src="https://w7.pngwing.com/pngs/559/367/png-transparent-postgresql-object-relational-database-oracle-database-freebsd-icon-text-logo-head.png" alt="PostgreSQL logo" title="PostgreSQL logo" /></figure>
                </div>                                 
                               
            </div>           
         
        </HeaderCotainer>
    )
}

export default Header