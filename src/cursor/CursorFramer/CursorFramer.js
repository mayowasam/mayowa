import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CursorFramer.css'



const CursorFramer = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {

        const mouseMove = (e) => {
            // console.log(e);
            setPosition({
                x: e.clientX,
                y: e.clientY
            })

        }

        window.addEventListener("mousemove", mouseMove)
        return () => window.removeEventListener("mousemove", mouseMove)


    }, [])

    // console.log(position);

    const variants = {
        default: {
            x: position.x - 16, //to center the mouse in the cursor remove haldf of the width of the cursor 32px/2
            y: position.y - 16,

        },
        text: {
            width: 150,
            height: 150,
            x: position.x - 75,
            y: position.y - 75,
            background: "yellow",
            mixBlendMode: "difference"

        }
    }

    const textEnter = () => setCursorVariant("text")
    const textLeave = () => setCursorVariant("default")

    return <div className="cursor__content">
        <div className="title" onMouseEnter={textEnter} onMouseLeave={textLeave}>Hello world</div>
        <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
        >

        </motion.div>
    </div>

}

export default CursorFramer