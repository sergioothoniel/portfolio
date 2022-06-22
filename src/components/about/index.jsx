import { useEffect, useRef } from 'react'
import {useIdElement} from '../../providers/ElementId'
import { AboutContainer } from "./styles"

const About = () =>{

    const {setAboutPosition} = useIdElement()   

    const myRef = useRef()   

    useEffect(()=>{
        const elementPosition = myRef.current.offsetTop                
        setAboutPosition(elementPosition)
    },[])
             
    return(
        <AboutContainer ref={myRef} id="about">
            <figure><img src="https://media-exp2.licdn.com/dms/image/C4E03AQF2vyLh_D2yVA/profile-displayphoto-shrink_800_800/0/1654017469369?e=1661385600&v=beta&t=uLJTFu9h8cdKclXORfLFxn3eQt7Jk1IR2I3OTd3D-1c" alt="" /></figure>

            <div className="text">                
                <h3>Sobre mim</h3>
                <article>
                    Graduado em engenharia mecânica, com licenciatura em física e pós-graduação em finanças, sou um entusiasta pelas ciências exatas.
                    Sempre gostei de tecnologia e, quando surgiu a oportuidade de me aprofundar, não pensei duas vezes e me dediquei completamente.
                    Acredito que a área de programação e desenvolvimento de softwares seja onde posso melhor utilizar minhas capacidades e a que mais possso ampliar meus conhecimentos
                </article>
            </div>
        </AboutContainer>
    )
}

export default About