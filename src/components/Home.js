import { Link } from "react-router-dom"
import styled from "styled-components"
import Girl from '../assets/video.mp4'
import { motion } from 'framer-motion'
import { letterVariant, staggerVariant, fadeYVariant, fadeXVariant } from '../utils/Variants'

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

const BigText = styled(motion.div)`
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
        font-size: 3.5rem;
    }
}


`

const SmallText = styled(motion.div)`
position: absolute;
max-width: 20%;
text-align: justify;
left:4%;
bottom: 4%;
color: white;

p{
    line-height: 1.5em;
    font-weight: 300;
    font-size: 1rem;
}

@media (max-width: 1200px){
 
    max-width: 30%;
    padding: 1rem;
    left: unset;
}

@media (max-width: 700px){
    bottom: unset;
    top: 70%;
    max-width: 100%;
    padding: 1rem;
    left: unset;
}

@media (max-width: 375px){
    bottom: unset;
    top: 63%;
    max-width: 100%;
    padding: 1rem;
    left: unset;

 }
 @media (max-width: 320px){
    bottom: unset;
    top: 65%;
    max-width: 100%;
    padding: 1rem;
    left: unset;

 }


`

const ClickHere = styled(motion.div)`
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
       
        width: 5rem;
        height: 5rem;
        font-size: .8rem;
    
    }
   
}


`


const BottomLeft = styled(motion.div)`
position: absolute;
width: 7rem;
height: 7rem;
right: 5%;
bottom: 10%;
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
    bottom: 5%;


}

@media (max-width: 320px){
    bottom: 0%;

}

`



export default function Home() {
    return (
        <>
            <Videocontainer>
                <video src={Girl} muted loop type="video/mp4" autoPlay />

            </Videocontainer>
            <BigText
                variants={staggerVariant}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <motion.h1 variants={fadeYVariant("up")}>Mayowa</motion.h1>
                <motion.h1 variants={fadeYVariant("up")}>Awoyomi</motion.h1>
            </BigText>

            <SmallText>
                <motion.p
                    variants={fadeYVariant("up")}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    I am a full-stack software developer, based in Ibadan, Nigeria.
                    I am passionate about helping brands position themselves effectively by creating unique digital experience on the web.
                </motion.p>
            </SmallText>

            <ClickHere
                variants={letterVariant}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Link to="/work">Explore works</Link>
            </ClickHere>

            <BottomLeft
                variants={fadeXVariant("right")}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Link to="/about">Read More</Link>
            </BottomLeft>


        </>
    )
}