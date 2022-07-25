import styled from "styled-components"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { data } from './workdata'
import { useMemo } from "react"
import { Github, } from "../utils/svg"
import { AiOutlineArrowLeft } from 'react-icons/ai'


const WorkContainer = styled.div`
width:100%;
height:100vh;
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
padding: 4rem 3rem 0;

@media (max-width: 700px){
    padding: 4rem 1rem;
    height: unset;

}


`





export const WorkContent = styled(motion.div)`
height:100%;
width: 100%;
display: grid;
grid-template-columns: 40% 40%;
justify-content: center;
gap: 3rem;
// border: 2px solid red;
position: relative;

// div:nth-of-type(2){
// }
//&>:last-child{  
//}






@media (max-width: 700px){
    grid-template-columns: 1fr;
    gap: unset;

}



`
const Back = styled.div`
position: absolute;
// width: 5rem;
// height: 5rem;
top: 2%;
// border: 1px solid ${({ theme }) => theme.text};
// border-radius: 100%;
// box-shadow: 3px 3px 3px ${({ theme }) => theme.text};
// display: flex;
// align-items: center;
// justify-content: center;

a{
    padding: 2rem;
    display: inline-block;
    text-align: center;
    color: ${({ theme }) => theme.main};
    font-weight: 500;
    font-size: 3rem;
    text-align: center;

}

@media (max-width: 700px){
    display: none;


}



`


const Box = styled.div`
overflow: hidden;
// border: 2px solid green;
display: grid;
grid-template-rows: 1fr 1.5fr;



@media (max-width: 700px){
    display: block;
    position: relative;


   
    // display:unset;
    // width: 100%;
    // height: 100%;



}


`

const BoxTwo = styled.div`
overflow: hidden;
// border: 2px solid yellow;
display: grid;
grid-template-rows: 1.5fr 1fr;



@media (max-width: 700px){
    grid-template-rows: 1fr 1fr;
 

}


`

const NameContainer = styled.div`
width:100%;
height: 100%;
// border: 2px solid white;
display: grid;
padding: 2rem 0;

@media (max-width: 700px){
    position:absolute;


}


`

const Name = styled.h1`
font-size: 5rem;
font-weight: 300;
text-transform: uppercase;
line-height: .8em;

&:nth-of-type(1){
    justify-self: center;
    // border: 2px solid green;

}

&:nth-of-type(2){
    justify-self: end;
    // border: 2px solid blue;


}

@media (max-width: 700px){
    font-size: 2.5rem;
    font-weight: 600;

}

`

const Image = styled(motion.div)`
width: 100%;
height:100%;


img{
    width: 100%;
    height:100%;
    object-fit: cover;

}



`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: justify;
padding:0 3rem;
line-height: 2em;
// border: 2px solid green;

@media (max-width: 700px){
    padding:1rem;
    font-size: 1rem;

}



`
const Bottom = styled.div`
padding: 0 3rem;

@media (max-width: 700px){
    padding: 0;

}

`

const Built = styled.ul`
display:flex;
flex-wrap: wrap;
color: ${props => props.theme.main};
line-height: 1.5em;
gap:0 2rem;

li{
    flex-shrink: 0
}


@media (max-width: 700px){
    // padding:0 2rem;
    margin 2rem

}
`

const Address = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
margin-top: 2rem;


    a{
        color: ${props => props.theme.text}; 
        padding: .5rem 1.5rem;  
        display: flex;
        align-items: center;
        gap: .5rem;
        border: 1px solid  ${props => props.theme.text};
        border-radius: 5px;
        transition: all ease 0.5s;

        &:hover{
            background: ${props => props.theme.main};
            color: ${props => props.theme.body};  
        
        
        }
    }

    button{
        background: ${props => props.theme.text};
        outline: none;
        border:none;
        border-radius: 5px;
        transition: all ease 0.5s;

        a{
            color: ${props => props.theme.body};
            padding: .8rem 3rem;  
        
        
        
        }

        &:hover{
            background: ${props => props.theme.main};
            a{
                color: ${props => props.theme.body};  
            

            }
        
        }
    }




    @media (max-width: 700px){
        a{
            padding: .5rem;  

        }

        button{
            a{
                padding: .9rem 2rem;  
    
            }
        }

    }




`


export default function WorkInfo() {
    const { id } = useParams()

    const Info = useMemo(
        () => data.find(d => d.id === Number(id)),
        [id]
    );


    // console.log('Info', Info);
    return (
            <WorkContainer >

                <WorkContent>

                    <Back>
                        <Link to="/work"> <AiOutlineArrowLeft/></Link>
                    </Back>

                    <Box>
                        <NameContainer>
                            <Name>{Info.name.split(" ")[0]}</Name>
                            {Info.name.split(" ")[1] && <Name>{Info.name.split(" ")[1]}</Name>}
                        </NameContainer>
                        <Image
                            initial={{
                                // x:100, 
                                // width:"150%"
                            }}
                            animate={{
                                transition: {
                                    duration: 2,
                                    ease: "easeInOut"
                                }
                            }}>
                            <img src={Info.bigImage} alt="" />
                        </Image>
                    </Box>

                    <BoxTwo>
                        <Description >
                            <p>
                              {Info.description}
                            </p>
                        </Description>

                        <Bottom>
                            <Built>
                                {Info.built.length > 0 && Info.built.map((d, id) => (
                                    <li key={id}>{d}</li>


                                ))
                                }
                            </Built>

                            <Address>
                                <a href={`${Info.githubLink}`} target="_blank" rel="noreferrer">
                                    <Github width="30" height="30" fill="currentColor" /> 
                                    Github

                                </a>

                                <button>
                                    <a href={`${Info.siteLink}`} target="_blank" rel="noreferrer">
                                        Visit

                                    </a>
                                </button>

                            </Address>

                        </Bottom>

                    </BoxTwo>



                </WorkContent>

            </WorkContainer>

    )
}