import styled from "styled-components";

export const ProjectsContainer = styled.div`
height: 700px;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
font-family: 'Chakra Petch', sans-serif;

*{
    margin: 0;
}

h1{
    color: #00CED1;
}

.projectsLis{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

@media (max-width: 800px){
    height: auto;
    padding: 30px;

    h1{
        margin: 20px 0;
    }
}
`