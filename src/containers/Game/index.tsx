import { useSelector } from "react-redux"
import type { RootState } from "../../stores"
import ChooseCategoryContainer from "../ChooseCategory"
import GameWrapper from "../GameWrapper"
import { motion, AnimatePresence } from "framer-motion"


function GameContainer() {
  const { page } = useSelector((state: RootState) => state.game)

  const commonAnimationProps = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.3 },
  };

  return(
    <AnimatePresence mode="wait">
      {page === 0 && (
        <motion.div
          key="choose-category"
          {...commonAnimationProps}
        >
          <ChooseCategoryContainer />
        </motion.div>
      )}
      {page === 1 && (
        <motion.div
          key="game-wrapper"
          {...commonAnimationProps}
        >
        <GameWrapper />
        </motion.div>
        )}
    </AnimatePresence>
  )
}

export default GameContainer