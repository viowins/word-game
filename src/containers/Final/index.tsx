import { Button } from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores";
import { setPage } from "../../features/game/gameSlice";

const FinalContainer = () => {
  const { point } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl text-center font-bold">Thank You for Playing <span className="text-blue-500">Word Game!</span></h1>
      <h2 className="text-2xl text-center">Your score is <span className="text-blue-500 font-bold">{point}</span></h2>
      <Button variant="contained" color="primary" onClick={() => dispatch(setPage(0))}>Restart</Button>
    </div>
  )
}

export default FinalContainer