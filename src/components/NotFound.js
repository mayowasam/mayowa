import styled from "styled-components"
import {Link} from 'react-router-dom'
import Error from '../assets/404.jpg'
import { heartbeat } from "./Contact"

const Container = styled.div`
position: absolute;
top:0;
left:0;
right: 0;
bottom: 0;
z-index:1;
width: 100%;
height: 100vh;
background-image: url(${Error});
background-position: center ;
background-size: cover;
background-repeat: no-repeat;
overflow: hidden;




`

const Back = styled(Link)`
position: absolute;
top:5%;
left: 5%;
text-transform: uppercase;
text-decoration: none;
color: ${({theme}) => theme.text};
background: ${({theme}) => theme.main};
width: 5rem;
height:5rem;
display: flex;
align-items:center;
justify-content: center;
border: .5px solid ${({theme}) => theme.body};
border-radius: 100%;
box-shadow: 3px 3px 3px black};
animation: ${heartbeat} 1.5s ease-in-out infinite both;


`

export default function NotFound() {
    return (
        <Container>
            <Back to="/">
                go back
            </Back>
            
        </Container>
    )

}