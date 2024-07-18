import React, { useState, useEffect } from "react";
import { Button, ButtonRadio } from "../../components/Form";
import axios from "axios";
import type { RootState } from "../../stores";
import { useDispatch, useSelector } from "react-redux";
import { chooseCategory, setPage } from "../../features/game/gameSlice";
import { motion } from "framer-motion";

const ChooseCategoryContainer = () => {
  const { page } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<string[]>([]);
  const [cat, setCat] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  }, []);

  const chooseHandler = () => {
    dispatch(chooseCategory(cat));
    dispatch(setPage(page + 1));
  }

  return (
    <>
      {categories.length > 0 && (
        <div
        >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl text-center font-semibold mb-6">
            Select Category
          </h1>
          <div className="flex items-center gap-4">
            {categories.map((cat: string, i) => (
              <React.Fragment key={i}>
                <ButtonRadio
                  id={cat}
                  name="selectCat"
                  onClick={() => setCat(cat)}
                >
                  {cat.slice(0, 1).toLocaleUpperCase() + cat.slice(1)}
                </ButtonRadio>
              </React.Fragment>
            ))}
          </div>
          <div className="min-h-14 mt-6">
            {cat && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={chooseHandler}
                >
                  Select Category
                </Button>
              </motion.div>
            )}
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default ChooseCategoryContainer;
