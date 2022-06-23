import styled from "styled-components";

export const ProjectCardContainer = styled.div`
width: 160px;
height: 200px;
background-color: #3d9673;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 20px;
border-radius: 15%;
margin: 10px 10px;

h2{
    height: 60%;
    display: flex;
    align-items: center;
}

div{
    align-self: flex-start;
}

a{
    padding-left: 5px;
}

@media (max-width: 800px){
    width: 85%;
    height: 100px;
    border-radius: 3%;
}
`