import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../stores";
import {
  setWords,
  nextWord,
  changeNumLetters,
  setPage,
} from "../../features/game/gameSlice";
import axios from "axios";
import { Input } from "../../components/Form";
import Points from "../../components/Points";
import { motion, AnimatePresence } from "framer-motion";

const GameWrapper = () => {
  const {
    category,
    numLetters,
    words,
    totalWords,
    currentWord,
    maxNumLetters,
    point,
  } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleOtpChange = (value: string) => {
    if (
      value.length === numLetters &&
      words != null
    ) {
      if (value.toLocaleLowerCase() == words[currentWord].word) {
        dispatch(nextWord());
        setOtp("");
        setIsCorrect(true);
      } else {
        setOtp("");
        setIsCorrect(false);
      }
    } else {
      setOtp(value);
      isCorrect && setIsCorrect(false);
    }
  };

  useEffect(() => {
    console.log(otp)
  },[otp])

  useEffect(() => {
    if (numLetters > Number(maxNumLetters)) {
      dispatch(setPage(2));
    } else {
      axios
        .get(
          `${
            import.meta.env.VITE_API_URL
          }/words?category=${category}&numLetters=${numLetters}`
        )
        .then((response) => response.data)
        .then((data) =>
          data.length > 0
            ? dispatch(setWords(data))
            : dispatch(changeNumLetters(numLetters + 1))
        );
    }
  }, [numLetters, category, dispatch]);

  useEffect(() => {
    if (words === null) {
      axios
        .get(
          `${
            import.meta.env.VITE_API_URL
          }/words?category=${category}&numLetters=${numLetters}`
        )
        .then((response) => response.data)
        .then((data) =>
          data.length > 0
            ? dispatch(setWords(data))
            : dispatch(changeNumLetters(numLetters + 1))
        );
    }
  }, []);

  useEffect(() => {
    if (currentWord >= totalWords && totalWords != 0) {
      dispatch(changeNumLetters(numLetters + 1));
    }
  }, [currentWord]);

  return (
    <AnimatePresence mode="wait">
      {words && words[currentWord] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl text-center font-semibold mb-4">
            {words[currentWord]?.hint}
          </h1>
          <span className="hidden">{otp}</span>
          <Input
            length={numLetters}
            correct={isCorrect}
            onChange={handleOtpChange}
          />
        </motion.div>
      )}
      {point >= 0 && <Points point={point} />}
    </AnimatePresence>
  );
};

export default GameWrapper;
