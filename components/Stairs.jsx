import {animate, motion} from "framer-motion";

// variants
const stairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index fot straggred delay
const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
}
const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each representing a step of the stairs.
    Each div will have the some animation defines by the stairsAnimation object.  */}
    {[...Array(6)].map((_, index) => {
       return (
        <motion.div key={index} variants={stairsAnimation} initial="initial" animate="animate"
        exit="exit"
        transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-white relative"
        >
        </motion.div>)
    })}
    </>
  )
}

export default Stairs
