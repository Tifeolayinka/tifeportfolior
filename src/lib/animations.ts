import { Variants } from "framer-motion";

// Scroll reveal animations
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] // Custom easing for smooth feel
        }
    }
};

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

// Stagger container for lists/grids
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

// Card hover effects
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1]
        }
    },
    hover: {
        scale: 1.02,
        y: -4,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

// Magnetic button effect
export const magneticButton = {
    rest: { x: 0, y: 0 },
    hover: (custom: { x: number; y: number }) => ({
        x: custom.x * 0.3,
        y: custom.y * 0.3,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    })
};

// Parallax scroll effect
export const parallaxScroll = (offset: number) => ({
    y: offset,
    transition: {
        ease: "linear"
    }
});

// Text reveal animation
export const textReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(8px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

// Viewport options for scroll triggers
export const viewportOptions = {
    once: true,
    margin: "-100px",
    amount: 0.3
};

export const viewportOptionsRepeating = {
    once: false,
    margin: "-50px",
    amount: 0.2
};
