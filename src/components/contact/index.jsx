import { useEffect, useRef } from "react"
import { ContactContainer } from "./styles"
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import { useIdElement } from "../../providers/ElementId"


const Contact = () =>{

    const {setContactPosition} = useIdElement()

    const myRef = useRef()

    useEffect(()=>{
        const elementPosition = myRef.current.offsetTop                
        setContactPosition(elementPosition)
    },[])

    return(
        <ContactContainer id="contact" ref={myRef}>

            <h1>Contato</h1>

            <div className="contacts">
                <div>
                    <a href="https://github.com/sergioothoniel" target="_blank" rel="noreferrer"><AiFillGithub fill="white"/></a>
                    <a href="https://www.linkedin.com/in/sergio-othoniel/" target="_blank" rel="noreferrer"><AiFillLinkedin fill="white"/></a>

                </div>
                
                <div className="contacts-email">
                    <AiOutlineMail fill="white"/>
                    <span>sergioothoniel@hotmail.com</span>
                </div>
            </div>
           
        </ContactContainer>
    )
}

export default Contact