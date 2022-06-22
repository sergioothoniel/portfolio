import styled from "styled-components";

export const AboutContainer = styled.div`
height: 800px;
background-color: #162727;
display: flex;
align-items: center;
justify-content: center;
padding-top: 20px;
font-family: 'Chakra Petch', sans-serif;

figure{
    width: 250px;
    border: 5px solid #35993d;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        border-radius: 100%;
    }
}

.text{
    max-width: 500px;
    padding-left: 40px;

    h3{
        color: #00CED1;
    }

    article{
        color: #ffff;
    }
}


`