import { motion, AnimatePresence } from "framer-motion";

interface Props {
  point: number;
}

const Points:React.FC<Props> = ({ point }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="fixed top-2 md:top-4 lg:top-6 right-2 md:right-4 lg:right-6 flex items-center gap-2"
      >
        <span className="text-2xl leading-10">Points </span>
        <motion.span
          key={`point${point}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: +20 }}
          className="text-blue-500 text-4xl font-bold leading-10"
          >
            {point}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  )
}

export default Points