import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { useStateVal } from "../Paths"
import { motion } from 'framer-motion'
import { useMemo, useState } from "react"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { staggerVariant, fadeYVariant, fadeXVariant, svgVariants, pathVariants } from '../utils/Variants'



const Navcontainer = styled(motion.nav)`
width:100%;
position: fixed;
top:0;
padding: 1rem 2rem;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
align-items:center;
color: ${({ theme }) => theme.text};
background: transparent;
z-index: 3;
// border: 2px solid red;


@media (max-width: 700px){
    padding: 1rem;
}

`

const Link = styled(NavLink)`
    color: ${({ theme }) => theme.text};
  

`

const NavList = styled(motion.ul)`
justify-content: center;
display: flex;
list-style: none;


`

const NavItem = styled(motion.li)`
padding: .5rem;

a{
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    font-size: 1rem;

}

.active{
    color: red;
    border-bottom: 2px solid ${({ theme }) => theme.text};
}

@media (max-width: 320px){
    a{
        font-size: .8rem;

    }
 
}

`

const LastItems = styled(motion.div)`
display: flex;
align-items: center;
// border: 2px solid red;
justify-content: space-between;

@media (max-width: 700px){
    justify-content: flex-end;
}


`
const Time = styled(motion.div)`
@media (max-width: 700px){

    display: none;

}

`
const Theme = styled(motion.div)`
cursor: pointer;
font-size: 1.5rem;


`





export default function Navbar() {
    const { Toggle, theme } = useStateVal()
    const [present, setPresent] = useState()

    useMemo(() => {
        const Timer = setInterval(() => {
            // setPresent(Date.now() )
            setPresent(new Date())

        }, 1000)

        return () => clearInterval(Timer)

    }, [])



    return (
        <>

            <Navcontainer
                variants={staggerVariant}
                initial="initial"
                animate="animate"
            >
                <Link to="/">
                    <motion.svg
                        width="50"
                        height="30"
                        viewBox="0 0 63 21"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            variants={pathVariants}
                            d="M15.53 7.11L5.96 10.5L15.53 13.89V18.27L0.74 12.81V8.19L15.53 2.73V7.11ZM62.4343 8.19V12.81L47.6443 18.27V13.89L57.2143 10.5L47.6443 7.11V2.73L62.4343 8.19Z" fill="currentColor" />
                        <motion.path
                            variants={pathVariants}
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

                <NavList>
                    <NavItem
                        variants={fadeYVariant("down")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .9 }}>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "active" : undefined}>
                            About

                        </NavLink>


                    </NavItem>

                    <NavItem
                        variants={fadeYVariant("down")}

                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .9 }}>
                        <NavLink
                            to="/work"
                            className={({ isActive }) => isActive ? "active" : undefined}
                        >
                            Work
                        </NavLink>

                    </NavItem>


                    <NavItem
                        variants={fadeYVariant("down")}

                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .9 }}>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? "active" : undefined}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem
                        variants={fadeYVariant("down")}

                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .9 }}>
                        <a
                            href="https://drive.google.com/file/d/1K0RZ93Y8UIgduwmNm_Jm-sfC7wWiwG6_/view?usp=drivesdk" target="_blank"
                            rel="noreferrer">
                            Resume
                        </a>
                    </NavItem>

                </NavList>


                <LastItems>



                    <Time>
                        {present?.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}

                    </Time>
                    <Theme onClick={Toggle}
                        variants={fadeXVariant("left")}
                    >
                        {theme === "dark" ?
                            <BsFillMoonFill />
                            :
                            <BsFillSunFill color="#FEAD01" />
                        }

                    </Theme>
                </LastItems>


            </Navcontainer>





        </>
    )
}