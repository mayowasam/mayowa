import styled from "styled-components"
// import window from '../assets/window-1.jpg'
import window from '../assets/window.png'
// import window from '../assets/window-2-bg.png'
import { motion } from 'framer-motion'
import { MainVariant, staggerVariant, fadeYVariant, fadeXVariant, letterVariant } from '../utils/Variants'
import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"
// import gsap from "gsap"


export const HomeContainer = styled(motion.div)`
width:100%;
height:100vh;
position: relative;
background: ${({ theme }) => theme.body};
overflow:hidden;
color: ${({ theme }) => theme.text};

`

const ImageContainer = styled(motion.div)`
width: 50%;
height: 70%;
// border:2px solid blue;
position: absolute;
top:50%;
left:50%;
transform: translate(-50% ,-50%);
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-color: transparent;
transition: all 1s cubic-bezier(.91, 1, .22, 1) ease-in-out;
background-image: url(${window});

@media (max-width: 700px){
    // width: 100%;
    // height: 100%;
  


}

`

const TopText = styled(motion.div)`
width: 25%;
height: 30%;
// border:2px solid red;
position: absolute;
top: 20%;
left: 20%;
padding: 1rem 0;
line-height: 3rem;
color: ${({ theme }) => theme.grey};

h1{
    vertical-align: middle;
    font-weight: 300;
}

&>:last-child{
    font-size: 5rem;
}

@media (max-width: 700px){
    line-height: 1.5rem;

    h1{
        font-size: 1rem;
    }
    
    &>:last-child{
        font-size: 2rem;
    }
}

`
const RightText = styled(motion.div)`
width: 25%;
height: 30%;
// border:2px solid yellow;
position: absolute;
bottom: 10%;
right: 10%;
color: ${({ theme }) => theme.grey};



h1{
    vertical-align: middle;
    font-weight: 300;
    // mix-blend-mode: difference;
    // background: ${({ theme }) => theme.body};
}

&>:last-child{
    font-size: 5rem;
}

@media (max-width: 700px){
    line-height: 1.5rem;

    h1{
        font-size: 1rem;
    }
    
    &>:last-child{
        font-size: 2rem;
    }
}

`
const BottomText = styled(motion.div)`
width: 25%;
padding: 1rem;
// border:2px solid yellow;
position: absolute;
bottom: 1rem;
left:50%;
transform: translateX(-50%);


p{
    text-align:center;
    vertical-align: middle;    
    font-weight: 300;
    font-size: .9rem;
    text-transform: uppercase;
}

@media (max-width: 700px){
    width: 100%;
    p{
        font-size: .6rem;

    }
    
}


`


const LoaderContainer = styled(motion.div)`
position: absolute;
    top: 10%;
    width: 3rem;
    height: 2px;
    background: ${({ theme }) => theme.grey};
    // z-index:5;
  

`

export default function Loader() {
    let navigate = useNavigate()

    // useEffect(() =>{
    //     gsap.to(".bottom",{
    //         delay: 3,
    //         scale: 2.5,
    //         duration: 2

    //     })

    // },[])

    return (
            <HomeContainer
                variants={MainVariant}
                initial="initial"
                animate="animate"
                exit="exit"
            >


                <ImageContainer

                    animate={{
                        width: "120%",
                        height: "100%",
                        transition: {
                            delay: 3,
                            duration: 2,
                            ease: "easeInOut"
                        }
                    }}

                onAnimationComplete={() => {
                    navigate("/home")
                }}
                />



                <TopText
                    variants={staggerVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bottom"
                >
                    <motion.h1
                        variants={fadeYVariant("up")}

                    >
                        {/* between */}
                        dreams
                    </motion.h1>

                    <motion.h1
                        variants={fadeYVariant("up")}

                    >
                        {/* Reality */}
                        Become
                    </motion.h1>

                </TopText>

                <RightText
                    variants={staggerVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bottom"
                >
                    <motion.h1
                        variants={fadeXVariant("left")}
                       

                    >
                        {/* & */}
                        a
                    </motion.h1>
                    <motion.h1
                        variants={fadeYVariant("up")}
                    >
                        {/* Dream */}
                        Reality
                    </motion.h1>

                </RightText>

                <BottomText

                >
                    <motion.p
                        variants={letterVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"

                        // >Website that will blow your mind
                        // >Hi, welcome to my website
                    >dream it, build it
                        </motion.p>

                </BottomText>


                <LoaderContainer
                    initial={{
                        x: "-100%",
                    }}
                    animate={{
                        x: "100vw",
                        opacity: 1,
                        transition: {
                            duration: 3,
                            ease: "easeIn"
                        }

                    }}
                    exit={{
                        opacity: 0

                    }}


                >

                </LoaderContainer>
            </HomeContainer>


    )
}
