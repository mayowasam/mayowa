import { Link } from "react-router-dom"
import styled from "styled-components"
import Girl from '../assets/video.mp4'


const Videocontainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
// border: 2px solid green;
overflow:hidden;

video{
    width: 100%;
    height: 100vh; 
    object-fit: cover;
}

`

const BigText = styled.div`
// border: 5px solid red;
display: flex;
flex-direction: column;
position: absolute;
width: 40%;
height: 300px;
left: 4%;
top: 50%;
transform: translateY(-20%);

h1{
    font-size: 5rem;
}

&>:last-child{
    align-self: flex-end;
}

@media (max-width: 700px){
    width: 80%;

    h1{
        font-size: 3rem;
    }
}


`

const SmallText = styled.div`
position: absolute;
width: 20%;
height: 100px;
text-align: justify;
left:4%;
bottom: 2%;
color: white;
// border: 2px solid red;
p{
    line-height: 1.5em;
    font-weight: 300;
    font-size: .9rem;
}

@media (max-width: 1100px){
    width: 30%;
    height: 100px;

}

@media (max-width: 700px){
    width: 80%;
    height: 100px;
    bottom: 15%;

}

`

const ClickHere = styled.div`
position: absolute;
border: 1px solid white;
border-radius:100%;
right: 15%;
top: 30%;
transform: translateY(-50%);

a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;

}

@media (max-width: 700px){
    a{
       
        width: 4rem;
        height: 4rem;
        font-size: .6rem;
    
    }
   
}


`


const BottomLeft = styled.div`
position: absolute;
width: 7rem;
height: 7rem;
right: 5%;
bottom: 10%;
// transform: translateY(-50%);
display: flex;
align-items: center;
justify-content: center;
a{
    color: white;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;

}

@media (max-width: 700px){
    // border: 2px solid red;
    width: 5rem;
    height: 3rem;
    bottom: 2%;

    a{
        
        font-size: .8rem;
    
    }

}

`



export default function Home() {
    return (
        <div >
            <Videocontainer>
                <video src={Girl} muted loop type="video/mp4" autoPlay />

            </Videocontainer>
            <BigText>
                <h1>Mayowa</h1>
                <h1>Awoyomi</h1>
            </BigText>
            <SmallText>
                <p>
                    I am a full-stack software developer, based in Ibadan, Nigeria. 
                    I am passionate about helping brands position themselves effectively by creating unique digital experience on the web.
                </p>
            </SmallText>

            <ClickHere>
                <Link to="/work">Explore works</Link>
            </ClickHere>

            <BottomLeft>
                <Link to="/about">Read More</Link>
            </BottomLeft>


        </div>
    )
}