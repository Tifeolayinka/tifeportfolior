import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

export const useParallax = (ref: RefObject<HTMLElement>, distance: number = 100) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

    return y;
};
