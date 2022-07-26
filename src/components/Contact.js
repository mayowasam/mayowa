import styled, { keyframes } from "styled-components"
import gsap from 'gsap'
import SplitText from "../utils/Split3.min";
import { useEffect, useRef } from "react";
import useOnScreen from '../utils/useOnScreen'

const ContactContainer = styled.div`
width:100%;
height:100vh;
padding: 4rem 3rem;
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
display: grid;
grid-template-columns: repeat(2, 1fr);
// border: 2px solid red;


@media (max-width: 700px){
    grid-template-columns: 1fr;
    padding: 4rem 1rem;
    // gap: 2rem;

    .boxtwo{
        justify-content: flex-start;


    }

}
`
export const heartbeat = keyframes`
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }




  
  
`
const Box = styled.div`
// border: 2px solid blue;
width: 100%;
height:100%;
display: flex;
align-items: center;
padding: 2rem;
position: relative;

    .about{
        padding: 2rem;
        line-height: 1.5em;
        font-size: 1.1rem;
        opacity: 0;

        div{
                opacity: 0;
                transform: translateY(0px);
        }

        
    }

    .is-reveal {
        opacity: 1;
    }



    .content{
        width: 100%;
        // border: 2px solid yellow;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        position: relative;

        p{
            font-size: .8rem;
        }

        span{
            font-size: 1.5rem;
        }

        .handles{
            display: flex;
            align-items: center;
            gap: 3rem;
            a{
                color: ${({ theme }) => theme.text};
                background: ${({ theme }) => theme.body};
                border: 2px solid ${({ theme }) => theme.text};
                border-radius: 20px;
                box-shadow: 3px 3px 3px ${({ theme }) => theme.text};
                padding: .5rem;
            }
        
        }

    

        .contactUs{
            position: absolute;
            left: 60%;
            top:0%;
            width: 5rem;
            height: 5rem;
            border-radius: 100%;
            background: ${({ theme }) => theme.main};
            box-shadow: 3px 3px 3px ${({ theme }) => theme.text};
            animation: ${heartbeat} 1.5s ease-in-out infinite both;
    
    
            a{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height:100%;
                
                span{
                    display: block;
                    font-size: .9rem;
                }
    
            }
    
             
    
        }
    }



   
   

@media (max-width: 700px){
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: unset;

    
    p{
        div{
            font-size: 1rem;
        }
    }

    .about{
        padding: unset;
 
    }

    .content{
        gap: 1rem;


        .contactUs{
            left:unset;
            right: 0;
            width: 4rem;
            height: 4rem;
        }
    
    }


`
export default function Contact() {
    let onceRef = useRef(false)
    let aboutRef = useRef()

    let reveal = useOnScreen(aboutRef)

    useEffect(() => {
        if (onceRef.current) return;


        const split = new SplitText('.about', {
            type: "lines",
        })



        gsap.to(split.lines, {
            y: -10,
            opacity: 1,
            duration: 2,
            stagger: .1,
            ease: "power2"
        })

        return () => onceRef.current = true;

    }, [])

    return (
        <ContactContainer >
            <Box>
                <h3> Get In Touch</h3>

                <p ref={aboutRef} className={`about ${reveal && "is-reveal"} `}>
                    My inbox is always open, whether you have a question or just want to say hi, I’ll try my best to get back to you!

                    {/* Although I’m not currently looking for any new opportunities,  */}
                </p>

            </Box>
            <Box className="boxtwo">
                <div className="content">

                    <div className="email">
                        <p>Email</p>
                        <span>mayowaawoyomi@gmail.com</span>
                    </div>

                    <div className="email">
                        <p>Phone</p>
                        <span>+234 809 077 0290</span>
                    </div>

                    <div className="handles">
                        <a href="/">Twitter</a>
                        <a href="https://www.linkedin.com/in/mayowa-awoyomi-6a8a9b133/">LinkedIn</a>
                        <a href="https://github.com/mayowasam">Github</a>
                    </div>

                    <div className="contactUs">
                        <a href="mailto:mayowaawoyomi@gmail.com">
                            <span>Drop me </span>
                            <span>an email</span>

                        </a>

                    </div>
                </div>




            </Box>

        </ContactContainer>
    )
}