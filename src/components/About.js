import styled, { keyframes } from "styled-components"
import { motion } from 'framer-motion'
// import image from '../assets/image12.jpg'
import may1 from '../assets/may1.jpg'
import may2 from '../assets/may2.jpg'
import { staggerVariant, fadeYVariant, letterAnimation, bannerVariant } from '../utils/Variants'
import { useEffect, useRef } from "react"
import gsap from 'gsap'
import SplitText from "../utils/Split3.min";
import { Link } from "react-router-dom"
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from '../utils/useOnScreen'
import { heartbeat } from './Contact'

// gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.div`
width:100%;
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
padding: 4rem 0 0;

// border: 2px solid yellow;

@media (max-width: 700px){
    p{
        div{
            font-size: 1rem;

        }
    }
}

`
const rotate = keyframes`
from { transform: rotate(360deg); }
to { transform: rotate(0); }


`

const Scroll = styled.div`
position: fixed;
bottom: 5%;
left: 0%;
z-index: 3;
width: 15rem;
height: 15rem;
// overflow: hidden; 
// border:2px solid blue;




 text { 
        fill: ${({ theme }) => theme.text};
        font-size: .9rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: .5em;
        font-weight: bold; 
}

svg { 
    width: 100%; 
    height: 100%;
    animation: ${rotate} 5s linear 0s infinite ;
   

}

@media (max-width: 700px){
    width: 10rem;
    height: 10rem;
    bottom: 0%;

}

`

const Profile = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 40% 40%;
justify-content: center;
gap: 3rem;
// border: 2px solid red;
position: relative;


@media (max-width: 1100px){
    grid-template-columns: 1fr;
    height: 50%;
    gap: unset;

}

`
const Box = styled.div`
// border: 2px solid blue;
width:100%;
height: 100%;
display: grid;
place-items: center;

.about{
    padding: 2rem;
    line-height: 1.5em;
    font-size: 1.1rem;
    opacity: 0;

    div{
            opacity: 0;
            transform: translateY(0px);
            a{
                color: ${({ theme }) => theme.main};
 
            }
    }

    
}

.is-reveal {
    opacity: 1;
  }

 @media (max-width: 1100px){
   height: 100vh;
   width: 100%;

   .about{

    div{
        font-size: .8rem;
    }
   }

} 

`


const Image = styled.div`
width: 80%;
height: 80%;
transform: rotate(15deg) !important;
// border:2px solid green;
clip-path:  ellipse(40% 50% at 50% 50%);
background-size: cover;
background-repeat: no-repeat;
background-position: top top;
background-color: transparent;
transition: all 1s cubic-bezier(.91, 1, .22, 1) ease-in-out;

&.img1{   
    background-image: url(${may1});

}

&.img2{
    background-image: url(${may2});

}

@media (max-width: 1100px){
    width: 80%;

}


`


const marquee = keyframes`

    0% {
        transform: translate3d(0, 0, 0);
      }

      100% {
        transform: translate3d(-50%, 0, 0);
      }
`

const Frameworks = styled.div`
// position: absolute;
// left: 0;
width: 100%;
overflow: hidden;
padding: 15px 0;
text-align: center;

    .marquee{
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        animation: ${marquee} 30s linear infinite;

        p{
            display: inline-block;
            text-transform: uppercase;
            font-size: 3rem;

        }

        &:hover{
            animation-play-state: paused;
           
        }

    }

    .two{
        animation-direction: reverse;
    }

    @media (max-width: 1100px){

        .marquee{
            p{
                font-size: 1rem;
    
            }

        }


}




`

const Hire = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
// border: 2px solid red;
position: relative;
gap: 1rem;
padding: 2rem;


h3{
    text-transform: uppercase;
    font-size: 3rem;
}

.tools{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;

}



@media (max-width: 1100px){
    h3{
        font-size: 1.5rem;
    }
 .tools{
    flex-direction:column;
 }
}

`

const Skill = styled(motion.ul)`
line-height: 2em;
width: 100%;
list-style-type: none;
border: 1px solid ${({ theme }) => theme.text};
box-shadow: 3px 3px 3px ${({ theme }) => theme.text};
display: flex;
flex-direction: column;
align-items: center;
text-align: left;


`
const Chat = styled.div`
position: fixed;
top: 10%;
right:5%;
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

 

`

const Email = styled.div`
width: 100%;
padding: 2rem;
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid ${({ theme }) => theme.text};

a{
    color:${({ theme }) => theme.text}
}


`



export default function About() {
    let onceRef = useRef(false)
    let aboutRef = useRef()
    let aboutRef2 = useRef()
    let aboutRef3 = useRef()

    let reveal = useOnScreen(aboutRef)
    let reveal2 = useOnScreen(aboutRef2)
    let reveal3 = useOnScreen(aboutRef3)
    // console.log(reveal);


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


        // let tl = gsap.timeline({ defaults: { ease: "none" } })
        //     .to(".hire", { opacity: 1, duration: 1 , stagger: .2})

        // ScrollTrigger.create({
        //     id: "myID",
        //     trigger: ".hire", // when this div is inview trigger the animation
        //     // scroller: ".about",// since i am no longer using scrollTrigger to monitor the scrollTop, then the new scroller should be named. this is very important for it to work
        //     start: 'top center', // start the animation when i am 50% inside the div
        //     // i.e the first val = which part of a section i am placing my own start marker
        //     // second value = where the gsap marker should be placed
        //     end: "+=100",
        //     animation: tl,
        //     markers: true,
        //     pin: true,
        //     toggleActions: "play none none reverse",
        //     // toggleActions: "play pause resume reset"

        // })
        // let trigger = ScrollTrigger.getById("myID")
        // console.log({ trigger });


        return () => {
            // ScrollTrigger.refresh()
            // trigger.kill(true)
            onceRef.current = true;

        }

    }, [])





    return (
        <>
            <Scroll >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                    <defs>
                        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                    </defs>
                    <circle cx="50%" cy="50%" r="50" fill="none" />
                    <g>
                        <use xlinkHref="#circlePath" fill="none" />
                        <text>
                            <textPath xlinkHref="#circlePath"> scroll down  scroll down</textPath>

                        </text>
                    </g>
                </svg>
            </Scroll>
            <AboutContainer>


                <Profile>
                    <Box>
                        <Image className="img1"></Image>
                    </Box>
                    <Box>
                        <p ref={aboutRef} className={`about ${reveal && "is-reveal"} `}>

                            Hi, my name is Mayowa, i am a full-stack developer. I have spent the past 2years creating products for different arrays of client.
                            I enjoy creating cool things that live on the internet. I want to help make the web better for everyone.
                            If your company is working on a product that makes people's lives better in any aspect and in any way and you need someone to help you make that digital experience inclusive and accessible,
                            I would love to help you. I want to make a difference.

                        </p>

                    </Box>
                </Profile>


                <Frameworks>
                    <div className="marquee">
                        <p>
                            JAVASCRIPT CSS REACT NODEJS EXPRESS MONGODB GRAPHQL SOCKET.IO STYLED-COMPONENTS GSAP FRAMER-MOTION &nbsp; &nbsp;
                        </p>
                        <p>
                            JAVASCRIPT CSS REACT NODEJS EXPRESS MONGODB GRAPHQL SOCKET.IO STYLED-COMPONENTS GSAP FRAMER-MOTION &nbsp; &nbsp;
                        </p>
                    </div>
                </Frameworks>
                <Frameworks>
                    <div className="marquee two">
                        <p>
                            JAVASCRIPT CSS REACT NODEJS EXPRESS MONGODB GRAPHQL SASS SOCKET.IO STYLED-COMPONENTS GSAP FRAMER-MOTION &nbsp; &nbsp;
                        </p>
                        <p>
                            JAVASCRIPT CSS REACT NODEJS EXPRESS MONGODB GRAPHQL SASS SOCKET.IO STYLED-COMPONENTS GSAP FRAMER-MOTION &nbsp; &nbsp;
                        </p>
                    </div>
                </Frameworks>



                <Profile>
                    <Box>
                        <p className={`about ${reveal2 && "is-reveal"} `} ref={aboutRef2}>
                            As the web get bigger, code get shorter, cleaner, and more readable and I build apps having those points in mind.
                            I’m a design-minded and security conscious developer. I work to bring designs of unique designers and Imaginations of creative people to life.
                            I write clean codes that powers Web With a focus on responsive design, semantic markup, accessibility, and performance and Cross-browser compatibility and most importantly data and app security.
                            I collaborate with designers — preferrably in the design phase — to translate designs into live prototypes, resilient Web user interafces, and design systems.
                            I hold myself to high standards, and provide high value for the investment you make in me.
                            I am a very good team player and i have great communication skills and social skills. some of the personal projects i have done are <Link to="/work">here</Link>
                        </p>
                    
                    </Box>
                    <Box>
                        <Image className="img2"></Image>
                    </Box>

                </Profile>

                <Hire className="hire">
                    <h3>Tools and skill set </h3>

                    {/* <div className="tools">

                            <Skill>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>NodeJs</li>
                                <li>Socket.io</li>
                                <li>GraphQL</li>
                                <li>GIT</li>
                                <li>Redux</li>




                            </Skill>

                            <Skill>
                                <li>Redux Toolkit</li>
                                <li>MongoDb</li>
                                <li>mySQL</li>
                                <li>TypeScript</li>
                                <li>Styled-components</li>
                                <li>Framer-motion</li>
                                <li>Gsap</li>



                            </Skill>

                            <Skill>

                                <li>Sass</li>
                                <li>Heroku</li>
                                <li>Firebase</li>
                                <li>Google Cloud PLatform</li>
                                <li>Vercel</li>
                                <li>Netlify</li>
                            </Skill>
                        </div> */}




                    <div className="tools">

                        <Skill
                            variants={staggerVariant}
                            initial="initial"
                            animate="animate">
                            <motion.li variants={fadeYVariant("up")}>Javascript</motion.li>
                            <motion.li variants={fadeYVariant("up")}>React</motion.li>
                            <motion.li variants={fadeYVariant("up")}>NodeJs</motion.li>
                            <motion.li variants={fadeYVariant("up")}>Socket.io</motion.li>
                            <motion.li variants={fadeYVariant("up")}>GraphQL</motion.li>
                            <motion.li variants={fadeYVariant("up")}>GIT</motion.li>
                            <motion.li variants={fadeYVariant("up")}>Redux</motion.li>




                        </Skill>

                        <Skill
                            variants={staggerVariant}
                            initial="initial"
                            animate="animate">
                            <motion.li variants={fadeYVariant("down")}>Redux Toolkit</motion.li>
                            <motion.li variants={fadeYVariant("down")}>MongoDb</motion.li>
                            <motion.li variants={fadeYVariant("down")}>mySQL</motion.li>
                            <motion.li variants={fadeYVariant("down")}>TypeScript</motion.li>
                            <motion.li variants={fadeYVariant("down")}>Styled-components</motion.li>
                            <motion.li variants={fadeYVariant("down")}>Framer-motion</motion.li>
                            <motion.li variants={fadeYVariant("down")}>Gsap</motion.li>



                        </Skill>

                        <Skill
                            variants={staggerVariant}
                            initial="initial"
                            animate="animate">

                            <motion.li variants={fadeYVariant("up")}>Sass</motion.li>
                            <motion.li variants={fadeYVariant("up")}>Heroku</motion.li>
                            <motion.li variants={fadeYVariant("up")}>Firebase</motion.li>
                            <motion.li variants={fadeYVariant("up")}>Google Cloud PLatform</motion.li>
                            <motion.li variants={fadeYVariant("up")}>Vercel</motion.li>
                            <motion.li variants={fadeYVariant("up")}>Netlify</motion.li>
                        </Skill>
                    </div>


                    <Chat>
                        <a href="mailto:mayowaawoyomi@gmail.com">Hire Me</a>

                    </Chat>

                </Hire>

                <Email className="email">
                    <a href="mailto:mayowaawoyomi@gmail.com">
                        mayowaawoyomi@gmail

                    </a>
                </Email>


            </AboutContainer>

        </>

    )
}