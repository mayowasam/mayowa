import { useLayoutEffect, useMemo, useRef } from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import may1 from '../assets/may1.jpg'
import may2 from '../assets/may2.jpg'
import may3 from '../assets/may3.jpg'
import { motion, useAnimation } from 'framer-motion'
import { staggerVariant, aboutXVariant, aboutYVariant, pathVariants, letterVariant } from '../utils/Variants'
import useOnScreen from "../utils/useOnScreen"
import gsap from "gsap"
// import SplitText from "../utils/Split3.min";
import ScrollTrigger from "gsap/ScrollTrigger";
import { createRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.div`
width: 100%;
color: ${({ theme }) => theme.text};
background: ${({ theme }) => theme.body};
padding: 4.5rem 2rem 0; 
display: flex;
flex-direction: column;
gap: 5rem;
// border: 5px solid red;

@media (max-width: 1024px){
    padding: 4.5rem 1rem 0; 
    gap: .5rem;

    .secondcontainer{
        flex-direction: column-reverse;
        height: 50%;

        .text{
            padding :1rem 0;
        }

     }

}

`

const Container = styled(motion.section)`
width: 100%;
height: 100vh;
display: flex;
// border: 2px solid red;
gap: 3rem;


@media (max-width: 1024px){
    flex-direction: column;
    gap: unset;

    

    
}

@media (max-width: 700px){
    flex-direction: column;
    gap: unset;
    height: unset;
    min-height: 100vh;
}



`


const BoxOne = styled(motion.div)`
flex: 2;
// border: 2px solid blue; 
display: flex;
gap: 2rem;

div:nth-of-type(1){
    flex:1;
    // border: 2px solid orange;
    width: 100%;
    height: 40vh;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }



}

div:nth-of-type(2){
    flex:2;
    // border: 2px solid white;
    width: 100%;
    height: 100%;
    padding-top: 3rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

@media (max-width: 1024px){
    flex: 1;
    gap: unset;
    height: 50%;
    // border: 5px solid green;

}



@media (max-width: 700px){
    gap: unset;
    height: 50%;

    div:nth-of-type(1){
        display: none;
    }

    div:nth-of-type(2){
        padding: unset;
    }
}

`

const BoxTwo = styled(motion.div)`
flex: 3;
// border: 2px solid yellow; 
display: flex;
padding-top: 3rem;
gap: 3rem;
height: 100%;

// .firsttext{
//     opacity: 0;
// }

@media (max-width: 1024px){
    gap: unset;
    height: 50%;
    align-items: center;


}

@media (max-width: 700px){
    height: 50%;
    flex-direction: column;
    padding: unset;

}

`

const BoxTwoText = styled(motion.div)`
flex:1;
// border: 2px solid orange;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: justify;
line-height: 1.5em;
font-size: 1rem;
padding: 0 .5rem;
gap: 1rem;

span{
    color: ${({ theme }) => theme.main};
    font-weight: 600;

}

a{
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  
}

@media (max-width: 700px){
    height: 100%;
    gap: unset;
    padding: 2rem 1rem;

    h2{
        padding: .5rem 0;
    }


}

`

const BoxTwoImage = styled(motion.div)`
    flex:1.5;
    // border: 2px solid white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;


    .imgtop{
        flex:1;
        width: 100%;
        height: 40%;
        // border: 5px solid green;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top top;
        background-color: transparent;
        background-image: url(${may3});

    }

    .imgbottom{
        flex:1;
        width: 100%;
        height: 40%;
        display: flex;
        // border: 5px solid blue;
        gap: 3rem;

        .first{
            flex: 1;
            width: 100%;
            height: 100%;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .second{
            flex: 2;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top top;
            background-color: transparent;
            background-image: url(${may1});
        }
        
    }

    @media (max-width: 700px){
        display: none;
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


    @media (max-width: 700px){
        padding: 5px 0;

        .marquee{
            p{
                font-size: 1rem;
            }
        }
    }

`

const SecondBoxOne = styled(motion.div)`
flex: 2;
// border: 2px solid blue; 
display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-rows: 1fr;
width: 100%;
height: 100%;
gap: 3rem;


    .div-1{
        width: 80%;
        overflow: hidden;
        margin-left: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top top;
        background-color: transparent;
        background-image: url(${may3});

    }

    .div-2{
        height: 80%;
        overflow: hidden;
        margin-top: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top top;
        background-color: transparent;
        background-image: url(${may1});

    }

    .div-4{
        width: 80%;
        height: 80%;
        overflow: hidden;
        margin-bottom: auto;
    }

    img{
        width: 100%;
        height: 100%;
    }
   
}

@media (max-width: 1024px){
    flex: 1;
    gap: unset;
    height: 50%;
    // border: 5px solid green;

    .div-1, .div-2{
        display: none;
    }

}

@media (max-width: 700px){
    height: 50%;
    gap: unset;
    grid-template-columns: 1fr;

    .div-1, .div-2, .div-4{
        display: none;
    }

}

`

const SecondBoxTwo = styled.div`
flex: 3;
// border: 2px solid yellow; 
display: flex;
padding-top: 3rem;
gap: 3rem;
height: 100%;




@media (max-width: 1024px){
    padding: unset;

}

@media (max-width: 700px){
    padding: unset;
 
}

`

const SecondBoxImage = styled(motion.div)`
flex:1.5;
// border: 2px solid white;
width: 100%;
height: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: top top;
background-color: transparent;
background-image: url(${may1});

@media (max-width: 1024px){
   display: none;
 
}

`

const Tools = styled.div`
padding: 1rem 0 ;
// border-top: .5px solid ${({ theme }) => theme.text};
display: grid;
grid-template-columns: 1fr 3fr;
align-items: center;

@media (max-width: 700px){
    grid-template-columns: 1fr;

}


`

const Skill = styled.ul`
display: flex;

li{
    margin: 1rem;
}

@media (max-width: 700px){
    flex-wrap: wrap;

    li{
        margin: .5rem;
    }
        // flex-direction: column;
}

`

const Footer = styled.div`
margin: 0 -2rem ;
border-top: .5px solid ${({ theme }) => theme.text};
display: grid;
grid-template-columns: 1fr 3fr 1fr;
// place-items: center;
// align-items: center;
// justify-content: center;
grid-auto-rows: 10vh;
overflow: hidden;

div{
    border-right: .5px solid ${({ theme }) => theme.grey};
    height: 100%;
    a{
        padding: 1rem 2rem;
        color: ${({ theme }) => theme.text};
        // border: 2px solid blue;
    }

}

.email{
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;

}

.designed{
    text-align: center;
    a{
        color: ${({ theme }) => theme.main};
        font-size: 1.1rem;
        font-weight: 700;
        margin-left: .2rem;
        text-decoration: none;
    }

}

@media (max-width: 1024px){
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-rows: 5vh;
    // margin: 0;

    .designed{
        a{   
            font-size: 1rem;
            font-weight: 400;
        }
    }

}

@media (max-width: 700px){
    grid-template-columns: 1fr;
    grid-auto-rows: unset;
    margin: unset;
    padding: 1rem 0;
    div{
        padding: .2rem 0;
        border-right: unset;

    }

    div:nth-of-type(1){
        display: none;
    }


    .email{
        font-size: 1rem;
    
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
right: 0%;
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

// @media (max-width: 700px){
//     width: 10rem;
//     height: 10rem;
//     bottom: 0%;

// }

`

export default function About() {
    let ref = useRef()
    let ref2 = useRef()
    let creater = createRef()

    let reveal2 = useOnScreen(ref, .5)
    let reveal3 = useOnScreen(ref2, .5)


    const image1 = useAnimation()
    const image2 = useAnimation()
    const image3 = useAnimation()
    const image4 = useAnimation()
    const image5 = useAnimation()
    const logoControl = useAnimation()

   


    useMemo(() => {

        if (reveal2) {
            image1.start(aboutXVariant("right").animate)
            image2.start(aboutYVariant("down").animate)
            image3.start(aboutYVariant("up").animate)
            image4.start(aboutXVariant("left").animate)
            image5.start(letterVariant.animate)



        } else {
            image1.start(aboutXVariant("right").exit)
            image2.start(aboutYVariant("down").exit)
            image3.start(aboutYVariant("up").exit)
            image4.start(aboutXVariant("left").exit)
            image5.start(letterVariant.exit)

        }

    }, [reveal2])

    useMemo(() => {
        if (reveal3) {
            logoControl.start(pathVariants.animate)

            gsap.fromTo('.li',
                {
                    y: -30,
                    opacity: 0,
                }, {
                y: 0,
                opacity: 1,
                duration: 2,
                stagger: .1,
                ease: "power2"
            })

        } else {
            logoControl.start(pathVariants.exit)

            gsap.to('.li', {
                y: -30,
                opacity: 0,
                duration: 1,
                stagger: .1,
                ease: "power2"
            })

        }

    }, [reveal3])



    // const split = new SplitText('.second', {
    //     type: "words, lines",
    // })


    useLayoutEffect(() => {
        if (!creater.current) return;
        // console.log("running");
        ScrollTrigger.refresh()

        gsap.timeline({
            scrollTrigger: {
                id: "myID",
                trigger: creater.current,
                start: 'top center', // start the animation when i am 50% inside the div
                end: "+=100", // if pinning is true, the position where you want pinning to be false
                // markers: true,
                pin: true,
                toggleActions: "play none none reverse",

            }
        }).fromTo(".new", { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 2, stagger: .2 })



        let trigger = ScrollTrigger.getById("myID")
        // console.log({ trigger });


        return () => {
            trigger && trigger.kill()
            // console.log("clean up");


        }
    }, [])


    // useLayoutEffect(() => {
    //     if (!first.current) return;
    //     gsap.defaults({
    //         ease: "power2.in",
    //         // stagger: .2,
    //         duration: .5
    //     });
    //     gsap.timeline({
    //         scrollTrigger: {
    //             id: "myID2",
    //             trigger: first.current,
    //             start: 'top top', // start the animation when i am 50% inside the div
    //             end: "+=100", // if pinning is true, the position where you want pinning to be false
    //             markers: true,
    //             // pin: true,
    //             toggleActions: "play none none reverse",

    //         }
    //     })
    //     .fromTo(".small", { x: -60, opacity: 0}, { x: 0, opacity: 1 })
    //     .fromTo(".h1",{ x: -60, opacity: 0}, { x: 0, opacity: 1 })
    //     .to(".firsttext", { y: -10, opacity: 1, duration: 1, stagger: .2, color: "red" })
    //     .fromTo(".big", { scale: 0  }, {scale: 1 })


    //     let trigger = ScrollTrigger.getById("myID2")
    //     console.log({ trigger });


    //     return () => {
    //         trigger && trigger.kill()
    //         console.log("clean up");


    //     }
    // }, [])

    return (
        <>
            {
                window.innerWidth > 960 &&
                (

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
                )

            }
            <AboutContainer >
                <Container>
                    <BoxOne className="img1"
                        variants={staggerVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="small" >
                            <motion.img variants={aboutXVariant("right")} src={may1} alt="" />

                        </div>
                        <div className="big" >
                            <motion.img variants={letterVariant} src={may2} alt="" />

                        </div>
                    </BoxOne>


                    <BoxTwo
                        variants={staggerVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                        <BoxTwoText className="text">
                            <motion.h2 variants={aboutYVariant("down")}>Hi,</motion.h2>
                            <motion.p variants={aboutYVariant("up")}>
                                I'm <span>Mayowa</span>, a full-stack developer. I have spent the past 2years creating products for different arrays of client.
                                I enjoy creating cool things that live on the internet. I want to help make the web better for everyone.
                                If your company is working on a product that makes people's lives better in any aspect and in any way and you need someone to help you make that digital experience inclusive and accessible,
                                I would love to help you. I want to make a difference.
                            </motion.p>

                        </BoxTwoText>

                        <BoxTwoImage className="img">
                            <motion.div className="imgtop" variants={aboutYVariant("up")}>
                                {/* <img src={may3} alt="" /> */}

                            </motion.div>
                            <div className="imgbottom">
                                <div className="first">
                                    <motion.img variants={aboutXVariant("right")} src={may2} alt="" />
                                </div>
                                <motion.div className="second" variants={aboutXVariant("left")}></motion.div>
                            </div>
                        </BoxTwoImage>

                    </BoxTwo>
                </Container>
                <div>

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

                </div>

                <Container ref={ref} className="secondcontainer">
                    <SecondBoxOne
                        variants={staggerVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                        <motion.div animate={image1} className="div-1"></motion.div>
                        <motion.div animate={image2} className="div-2"></motion.div>
                        <div className="div-3">
                            <motion.img animate={image3} src={may1} alt="" />

                        </div>
                        <div className="div-4">
                            <motion.img animate={image4} src={may2} alt="" />

                        </div>



                    </SecondBoxOne>
                    <SecondBoxTwo ref={creater}>
                        <BoxTwoText className="text">
                            <p className="new">
                                I build apps writing <span>shorter,cleaner, more readable </span>  code with a focus on <span> responsive design, semantic markup, accessibility,</span>  and <span> performance </span> and <span> cross-browser compatibility</span>  and most importantly <span> data </span> and <span>  app security </span> .
                                I collaborate with designers — preferrably in the design phase — to translate designs into live prototypes, resilient Web user interafces, and design systems.
                                I hold myself to high standards, and provide high value for the investment you make in me.
                                I am a very good team player and i have great communication skills and social skills. some of the personal projects i have done are <Link to="/work">here</Link>.
                            </p>

                        </BoxTwoText>

                        <SecondBoxImage animate={image5}></SecondBoxImage>

                    </SecondBoxTwo>



                </Container>

                <Tools ref={ref2}>
                    <div className="hireme">
                        <h2 className="li">Programming Tools</h2>

                    </div>

                    <div className="skills"

                    >
                        <Skill

                        >
                            <li className="li">Javascript</li>
                            <li className="li">React</li>
                            <li className="li">NodeJs</li>
                            <li className="li">Socket.io</li>
                            <li className="li">GraphQL</li>
                            <li className="li">GIT</li>
                            <li className="li">Redux</li>




                        </Skill>

                        <Skill
                        >
                            <li className="li">Redux Toolkit</li>
                            <li className="li">MongoDb</li>
                            <li className="li">mySQL</li>
                            <li className="li">TypeScript</li>
                            <li className="li">Styled-components</li>
                            <li className="li">Framer-motion</li>
                            <li className="li">Gsap</li>



                        </Skill>

                        <Skill
                        >

                            <li className="li">Sass</li>
                            <li className="li">Heroku</li>
                            <li className="li">Firebase</li>
                            <li className="li">Google Cloud PLatform</li>
                            <li className="li">Vercel</li>
                            <li className="li">Netlify</li>
                        </Skill>
                    </div>




                </Tools>

                <Footer>

                    <div className="logo">
                        <Link to="/">
                            <motion.svg
                                width="50"
                                height="30"
                                viewBox="0 0 63 21"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    animate={logoControl}
                                    d="M15.53 7.11L5.96 10.5L15.53 13.89V18.27L0.74 12.81V8.19L15.53 2.73V7.11ZM62.4343 8.19V12.81L47.6443 18.27V13.89L57.2143 10.5L47.6443 7.11V2.73L62.4343 8.19Z" fill="currentColor" />
                                <motion.path
                                    animate={logoControl}
                                    d="M15.53 7.11L15.8639 8.05261L16.53 7.81665V7.11H15.53ZM5.96 10.5L5.6261 9.55739L2.96511 10.5L5.6261 11.4426L5.96 10.5ZM15.53 13.89H16.53V13.1833L15.8639 
                            12.9474L15.53 13.89ZM15.53 18.27L15.1837 19.2081L16.53 19.7051V18.27H15.53ZM0.74 12.81H-0.26V13.5068L0.393677 13.7481L0.74 12.81ZM0.74 8.19L0.393677 7.25188L-0.26 
                            7.4932V8.19H0.74ZM15.53 2.73H16.53V1.29486L15.1837 1.79188L15.53 2.73ZM15.1961 6.16739L5.6261 9.55739L6.2939 11.4426L15.8639 8.05261L15.1961 6.16739ZM5.6261 11.4426L15.1961 
                            14.8326L15.8639 12.9474L6.2939 9.55739L5.6261 11.4426ZM14.53 13.89V18.27H16.53V13.89H14.53ZM15.8763 17.3319L1.08632 11.8719L0.393677 13.7481L15.1837 19.2081L15.8763 17.3319ZM1.74 
                            12.81V8.19H-0.26V12.81H1.74ZM1.08632 9.12811L15.8763 3.66812L15.1837 1.79188L0.393677 7.25188L1.08632 9.12811ZM14.53 2.73V7.11H16.53V2.73H14.53ZM38.3413 21L37.3413 21.0054L37.3466 
                            22H38.3413V21ZM38.2812 9.87L39.2812 9.86461L39.2619 6.27156L37.4223 9.35802L38.2812 9.87ZM32.8813 18.93V19.93H33.4494L33.7402 19.442L32.8813 18.93ZM30.2413 18.93L29.3887 19.4526L29.6813 
                            19.93H30.2413V18.93ZM24.8713 10.17L25.7238 9.64737L23.8713 6.62532V10.17H24.8713ZM24.8713 21V22H25.8713V21H24.8713ZM19.3813 21H18.3813V22H19.3813V21ZM19.3813 -1.90735e-06V-1H18.3813V-1.90735e-06H19.3813ZM24.2712 
                            -1.90735e-06L25.1254 -0.520082L24.8331 -1H24.2712V-1.90735e-06ZM31.6513 12.12L30.7971 12.6401L31.6618 14.0602L32.511 12.6307L31.6513 12.12ZM38.8512 -1.90735e-06V-1H38.2822L37.9915 -0.510736L38.8512 -1.90735e-06ZM43.7412 
                            -1.90735e-06L44.7412 -0.00285912L44.7384 -1H43.7412V-1.90735e-06ZM43.8013 21V22H44.8041L44.8012 20.9971L43.8013 21ZM39.3412 20.9946L39.2812 9.86461L37.2813 9.87539L37.3413 21.0054L39.3412 20.9946ZM37.4223 9.35802L32.0223 
                            18.418L33.7402 19.442L39.1402 10.382L37.4223 9.35802ZM32.8813 17.93H30.2413V19.93H32.8813V17.93ZM31.0938 18.4074L25.7238 9.64737L24.0187 10.6926L29.3887 19.4526L31.0938 18.4074ZM23.8713 10.17V21H25.8713V10.17H23.8713ZM24.8713 
                            20H19.3813V22H24.8713V20ZM20.3813 21V-1.90735e-06H18.3813V21H20.3813ZM19.3813 0.999998H24.2712V-1H19.3813V0.999998ZM23.4171 0.520081L30.7971 12.6401L32.5054 11.5999L25.1254 -0.520082L23.4171 0.520081ZM32.511 12.6307L39.711 0.510735L37.9915 
                            -0.510736L30.7915 11.6093L32.511 12.6307ZM38.8512 0.999998H43.7412V-1H38.8512V0.999998ZM42.7413 0.0028553L42.8013 21.0029L44.8012 20.9971L44.7412 -0.00285912L42.7413 0.0028553ZM43.8013 20H38.3413V22H43.8013V20ZM62.4343 8.19H63.4343V7.4932L62.7806 
                            7.25188L62.4343 8.19ZM62.4343 12.81L62.7806 13.7481L63.4343 13.5068V12.81H62.4343ZM47.6443 18.27H46.6443V19.7051L47.9906 19.2081L47.6443 18.27ZM47.6443 13.89L47.3104 12.9474L46.6443 13.1833V13.89H47.6443ZM57.2143 10.5L57.5482 11.4426L60.2092 10.5L57.5482 
                            9.55739L57.2143 10.5ZM47.6443 7.11H46.6443V7.81665L47.3104 8.05261L47.6443 7.11ZM47.6443 2.73L47.9906 1.79188L46.6443 1.29486V2.73H47.6443ZM61.4343 8.19V12.81H63.4343V8.19H61.4343ZM62.088 11.8719L47.298 17.3319L47.9906 19.2081L62.7806 13.7481L62.088 11.8719ZM48.6443 
                            18.27V13.89H46.6443V18.27H48.6443ZM47.9782 14.8326L57.5482 11.4426L56.8804 9.55739L47.3104 12.9474L47.9782 14.8326ZM57.5482 9.55739L47.9782 6.16739L47.3104 8.05261L56.8804 11.4426L57.5482 9.55739ZM48.6443 7.11V2.73H46.6443V7.11H48.6443ZM47.298 3.66812L62.088 9.12811L62.7806 
                            7.25188L47.9906 1.79188L47.298 3.66812Z" fill="currentColor" />
                            </motion.svg>
                        </Link>

                    </div>

                    <div className="email">
                        <a className="li" href="mailto:mayowaawoyomi@gmail.com">
                            mayowaawoyomi@gmail.com

                        </a>

                    </div>

                    <div className="designed">
                        <p className="li"> Photographer:
                        <motion.a 
                        whileHover={{scale: 1.3}}
                        whileTap={{scale: .9}}
                        href="https://www.instagram.com/viktuer/" target="_blank" rel="noreferrer">viktuer</motion.a>
                        </p>
                    </div>
                </Footer>

            </AboutContainer>
        </>
    )
}