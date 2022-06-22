import { ProjectsContainer } from "./styles"
import { useIdElement } from "../../providers/ElementId"
import { useEffect, useRef, useState } from "react"
import ProjectCard from "../projectCard"
import db from "../../database"

const Projects = () =>{

    const {setprojectsPosition} = useIdElement()

    const myRef = useRef()

    useEffect(()=>{
        
        const elementPosition = myRef.current.offsetTop        
        setprojectsPosition(elementPosition)
    },[])
   
    
    return(
        <ProjectsContainer id="projects" ref={myRef}>
            <h1>Projetos</h1>

            <div className="projectsLis">
                {db.map(({name, github, link})=>(
                    <ProjectCard name={name} repository={github} link={link}/>
                ))}
            </div>
            
        </ProjectsContainer>
    )
}

export default Projects