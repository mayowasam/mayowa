export const homeTransition = {
    duration: .6,
    ease: [.43, .13, .23, .96]
}
export const modelTransition = {
    duration: 1.4,
    ease: [.6, .01, -.05, .96]
}


export const MainVariant = {
    initial: {

    },

    animate: {

    },
    exit: {
        opacity: 1
    }
}

export const staggerVariant = {
    initial: {

    },

    animate: {
        transition: {
            staggerChildren: .04,
            staggerDirection: -1
        }

    },
    exit: {
        transition: {
            staggerChildren: .04,
            staggerDirection: -1
        }
    }
}

export const bannerVariant = {

    animate: {
        transition: {
            delayChildren: .5,
            staggerChildren: 0.3
        }
    }
}
export const fadeYVariant = (direction = "up" | "down") => ({
    initial: {
        y: direction === "up" ? 40 : -60,
        opacity: 0

    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }

    },

    exit: {
        // scale: 1.5,
        // transition: {
        //     // delay: -3,
        //     // duration: 1,
        //     ease: "easeInOut"
        // }
    }

})

export const fadeXVariant = (direction = "left" | "right") => ({
    initial: {
        opacity: 0,
        x: direction === "left" ? 40 : -60,

    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }

    },
    exit: {
        // scale: 1.5,
        // transition: {
        //     duration: 1,
        //     ease: "easeInOut"
        // }
    }

})

export const letterVariant = {
    initial: {
        scale: 0,

    },

    animate: {
        scale: 1,
        transition: {
            delay: 1.5,
            duration: 2,
            ...modelTransition
        }

    },
    exit: {

    }
}


export const letterAnimation = {
    initial: {
        y: 400,

    },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2
        }
    }
}



export const firstNameVariant = {
    initial: {

    },

    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1
        }

    },
    exit: {

    }
}

export const lastNameVariant = {
    initial: {

    },

    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: 1
        }
    },
    exit: {

    }
}


export const svgVariants = {
    initial: {
        x: -180,
       
    },
    animate: {
        x: 0,
        transition: {
            duration: 2

        }
    }
}

export const pathVariants = {
    initial: {
       pathLength: 0,
       opacity: 0,
       
    },
    animate: {
        pathLength: 1,
        opacity: 1,

        transition: {
            duration: 2,
            ease: "easeInOut"

        }
    }
}