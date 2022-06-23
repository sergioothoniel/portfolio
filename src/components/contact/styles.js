import styled from "styled-components";

export const ContactContainer = styled.div`
height: 540px;
background-color: #162727;
font-family: 'Chakra Petch', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 30px 10px;

*{
    margin: 0;
}

h1{
    color: #00CED1;
}

svg{
    height: 40px;
    width: 40px;
}

a{
    text-decoration: none;
}

.contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contacts-email{
    display: flex;
    align-items: center;
    padding: 20px 0;

    svg{
        height: 25px;
        width: 25px;
    }

    span{
        color: white;
        margin-left: 10px;
    }
}

`