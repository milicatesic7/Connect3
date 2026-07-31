import { useNavigate } from "react-router-dom";

import Board from "../components/board/Board";
import Status from "../components/board/Status";
import WinnerModal from "../components/board/WinnerModal";

import { useGame } from "../context/GameContext";

export default function Game() {
  const { game, move, loading, winner } = useGame();

  const navigate = useNavigate();

  if (!game) {
    return <div className="text-[var(--white)]">Loading...</div>;
  }

  async function handleMove(column: number) {
    await move(column);
  }

  function handleHome() {
    navigate("/", { replace: true });
  }

  return (
    <div className="flex h-full flex-col justify-center bg-[var(--dark)] px-6 py-4 md:py-10">
      <Status loading={loading} />

      <div className="mt-10 flex justify-center">
        <Board board={game.board} onMove={handleMove} loading={loading} />
      </div>

      <WinnerModal winner={winner} onHome={handleHome} />
    </div>
  );
}
