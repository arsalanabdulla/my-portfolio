'use client'
import { motion,AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";


const StairTransition = () => {
    const path=usePathname();
    return <AnimatePresence mode="wait">
        <div key={path}>
            <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex">
                <Stairs/>
            </div>
            <motion.div 
            initial={{opacity:1}}
            animate={{
                opacity:0,
                transition:{delay:1, duration:0.4,ease:'easeInOut'}
            }}
            className="w-full h-screen fixed bg-primary top-0 pointer-events-none">
                
            </motion.div>
        </div>
    </AnimatePresence>;
}
 
export default StairTransition;