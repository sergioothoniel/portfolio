import { ProjectCardContainer } from "./style"
import {AiFillGithub} from "react-icons/ai"
import {BiLinkExternal} from "react-icons/bi"

const ProjectsCard = ({name, repository, link}) =>{
    return(
        <ProjectCardContainer>
            <h2>{name}</h2>
            <div>
                <AiFillGithub/>
                <a href={repository} target="_blank" rel="noreferrer">Repositório</a>
            </div>

            <div>
                <BiLinkExternal/>
                <a href={link} target="_blank" rel="noreferrer">Link</a>
            </div>          
        </ProjectCardContainer>
    )
}

export default ProjectsCard