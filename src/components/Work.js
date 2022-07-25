import styled from "styled-components"
import { data } from './workdata'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useState, useEffect, createRef, useRef } from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'


gsap.registerPlugin(ScrollTrigger);




const WorkContainer = styled(motion.div)`
width: 100%;
display: flex;
flex-wrap: nowrap;

.active {
    background: ${props => props.theme.default};

    .bigimage{
        clip-path: inset(0% 0% 0% 0%);
    }

    .smallimage{
        width: 50%;
        height:60%;
    }

  

}

@media (max-width: 700px){


    .active{


        .smallimage{
            width: 40%;
            height:30%;
        }
    }
   

}

  

`

export const WorkContent = styled(motion.div)`
flex-shrink:0;
width:100vw;
height:100vh;
position: relative;
background: ${({ theme }) => theme.body};

a{
    color: ${({ theme }) => theme.main};

    position: absolute;
    width: 40%;
    height:80%;
    top:15%;
    left: 20%;
    opacity: .8;
    // border: 2px solid red;

    &:hover{
        opacity: 1;
    }
}

@media (max-width: 1100px){
    a{
        width: 70%;
        height:60%;
        left: 10%;
    }

}

@media (max-width: 700px){
    a{
        width: 80%;
        height:60%;
        left: 10%;

    }

}

`
const BigImage = styled(motion.div)`
width: 100%;
height:100%;
z-index: 1;
// transform: scale(.8);
clip-path: inset(100% 0% 0% 0%); 
// clip-path: inset(0% 0% 0% 0%); 
transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);


img{
    width:100%;
    height:100%;
    object-fit: cover;
}



@media (max-width: 700px){
    width: 100%;
    height:100%;

}



`

const SmallImage = styled(motion.div)`
width: 0%;
height:0%; 
// border: 2px solid red;
position: absolute;
top:5%;
left: -10%;
z-index: 2;
transition: width 1s ease, height 1s ease 0.5s;



img{
    width:100%;
    height:100%;
    object-fit: cover;
}

@media (max-width: 700px){
    width: 40%;
    height:40%;

}

`

const Name = styled.div`
width: 30%;
// border: 2px solid blue;
position: absolute;
top:20%;
left: 40%;
z-index: 2;
// color:${props => props.primary ? props.theme.main : ""};

h1{
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 300;

}

@media (max-width: 700px){
    top:10%;
    left: 30%;

    h1{
        font-size: 3rem;
     
    }

}

`









// const Center = styled.div`

//     position: fixed;
//     width: 2px;
//     height: 100vh;
//     background: tomato;
//     top: 0;
//     left: calc(50vw - 1px);

// `





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
   
}

@media (max-width: 960px){
    bottom: 0%;
    left: 0%;
    width: 15rem;
    height: 15rem;
    
    
}

@media (max-width: 700px){
bottom: 0%;
left: 0%;
width: 10rem;
height: 10rem;


}

`

const Arrow = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
z-index: 10;
color: ${({ theme }) => theme.text};

svg{
    font-size: 3rem;
    // stroke-width: .5;
}

@media (max-width: 700px){
    svg{
        font-size: 2rem;

    }

}

`
export default function Work() {
    const [scroll, setScroll] = useState(false)
    console.log(scroll);

    let scrollRef = createRef()
    let containerRef = useRef()

    // for the scroll to rotate on move
    useEffect(() => {
        const rotate = () => {
            containerRef.current.style.transform = `rotate(${-window.scrollY}deg)`
        }
        window.addEventListener("scroll", rotate)
        return () => window.removeEventListener("scroll", rotate)
    }, [])



    // const background = ["#e4a502", "#F95F2F", "#C081CD"];


    useEffect(() => {
        const sections = gsap.utils.toArray(".content");
        // console.log("sections", sections);

        let maxWidth = 0;

        const getMaxWidth = () => {
            maxWidth = 0;
            sections.forEach((section) => {
                maxWidth += section.offsetWidth;
            });
        };
        getMaxWidth();

        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

        // console.log({ maxWidth });
        // console.log("inner", window.innerWidth);

        gsap.to(sections, {
            // x: () => `-${maxWidth - window.innerWidth}`,
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".work",
                pin: true,
                scrub: true,
                end: () => `+=${maxWidth}`,
                invalidateOnRefresh: true,
                // markers: true,
                onUpdate: self => {
                    // console.log("progress", self.progress)
                    self.progress === 1 ? setScroll(true) : setScroll(false);
                    // document.body.style.background= "red";
                }

            },
        });





        sections.forEach((sct, i) => {
            ScrollTrigger.create({
                trigger: sct,
                start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
                end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                toggleClass: { targets: sct, className: "active" },
                // markers: true,
            });
        });


        return () => {
            ScrollTrigger.getAll().forEach(t => {
                t.kill()
            })
        }


    }, []);





    return (

        <>

            <Scroll ref={containerRef}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                    <defs>
                        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                    </defs>
                    <circle cx="50%" cy="50%" r="50" fill={scroll ? "#FEAD01" : "#728639"} />
                    <g>
                        <use xlinkHref="#circlePath" fill="none" />
                        <text>
                            <textPath xlinkHref="#circlePath">   {!scroll ? `scroll down  scroll down` : "scroll up  scroll up"}</textPath>

                        </text>
                    </g>
                </svg>


                {/* <Arrow>
                    {!scroll ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}

                </Arrow> */}
            </Scroll>




            {/* <WorkContainer className="work" ref={(el) => (scrollRef = el)}> */}
            <WorkContainer className="work" ref={scrollRef}>


                {
                    data.map((d, i) => (

                        <WorkContent key={d.id} className="content" >



                            <Link to={`/work/${d.id}`} >

                                <BigImage className="bigimage"
                                    exit={{
                                        x: -100,
                                        y: 50,
                                        transition: {
                                            duration: 2,
                                            ease: "easeInOut"
                                        }
                                    }}>
                                    <img src={d.bigImage} alt="" />
                                </BigImage>

                                <SmallImage className="smallimage"
                                    exit={{
                                        scale: 0,
                                        transition: {
                                            duration: 2,
                                            ease: "easeInOut"
                                        }
                                    }}>
                                    <img src={d.smallImage} alt="" />
                                </SmallImage>
                                <Name className="name" >
                                    <h1>{d.name}</h1>
                                </Name>

                            </Link>

                        </WorkContent>
                    ))
                }





            </WorkContainer>

            {/* <Center className="center-marker"></Center> */}

        </>
    )
}