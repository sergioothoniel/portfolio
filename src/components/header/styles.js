import styled from "styled-components"

export const HeaderCotainer = styled.header`
height: 633px;
margin: 0;
padding: 0;
overflow: hidden;
font-family: 'Chakra Petch', sans-serif;
/* font-family: 'Righteous', cursive; */
display: flex;
align-items: center;
justify-content: center;
color: white;


*{
    font-family: inherit;
}

nav{
    z-index: 2;
    display: flex;
    height: 80px;
    background-color: rgb(0,0,0,0.7);
    color: white; 
    position: fixed;
    top: 0;
    width: 100%;    
    align-items: center;
    padding: 0 30px;    
    
    .nav-name{
        justify-self: flex-start;
        width: 20%;
        text-align: center;
        font-size: x-large; 
        cursor: pointer;        
    }

    .nav-links{
        display: flex;
        flex-grow: 1;
        justify-content: space-evenly;
    }

    a{
    text-decoration: none;
    color: inherit;
    font-size: larger;    
    }   
}

.videoContainer{
    position: absolute;
    inset: 0px;
    width: inherit;
    height: inherit;
    overflow: hidden;

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}



.header-content{
    z-index: 1;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img{
        max-width: 75px;
    }

    h3{
        font-weight: normal;
    }
}

.content-techs{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 40%;
    justify-content: space-evenly;
        
    .techs{
        margin: 0;
        width: 120px;
        height: min-content;
        text-align: center;
    }
}


`