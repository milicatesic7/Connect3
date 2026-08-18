import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGame } from "../context/GameContext";

import Divider from "../components/ui/Divider";
import Button from "../components/ui/Button";
import InfoCard from "../components/ui/InfoCard";
import DifficultyCard from "../components/ui/DifficultyCard";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import backgroundVideo from "../assets/media/bg.mp4";

export default function Home() {
  const navigate = useNavigate();

  const { difficulty, setDifficulty, newGame, loading } = useGame();

  useEffect(() => {
    fetch("https://connect3-ad2h.onrender.com/").catch(() => {});
  }, []);

  async function handlePlay() {
    await newGame(difficulty);
    navigate("/game");
  }

  return (
    <div className="relative flex h-full justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50 pointer-events-none"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[var(--dark)]/90 pointer-events-none" />

      <div className="relative z-10 flex h-full min-h-full justify-center px-6 py-6 md:py-10">
        <div
          className="
            grid
            h-full
            w-full
            max-w-sm
            grid-rows-[auto_1fr_auto]
          "
        >
          <section>
            <h1 className="heading-font mb-6 text-center text-4xl text-white md:text-5xl">
              Connect<span className="text-[var(--yellow)]"> 3</span>
            </h1>

            <div className="-mx-6">
              <Divider />
            </div>
          </section>

          <section className="flex flex-col items-center justify-center">
            <InfoCard>
              Connect three pieces horizontally, vertically or diagonally before
              the AI.
            </InfoCard>

            <div className="mt-4 w-4/5">
              <Button onClick={handlePlay} disabled={loading}>
                {loading ? "Starting..." : "PLAY"}
              </Button>
            </div>
          </section>

          <section>
            <p className="body-font mb-4 text-center text-sm uppercase tracking-[0.25em] text-[var(--white)]">
              Choose your difficulty
            </p>

            <div className="grid grid-cols-3 gap-3">
              <DifficultyCard
                title="Easy"
                depth={4}
                selected={difficulty === 4}
                onClick={setDifficulty}
              />

              <DifficultyCard
                title="Medium"
                depth={6}
                selected={difficulty === 6}
                onClick={setDifficulty}
              />

              <DifficultyCard
                title="Hard"
                depth={8}
                selected={difficulty === 8}
                onClick={setDifficulty}
              />
            </div>

            <div className="mt-5">
              <InfoCard>
                <p>
                  You play as the
                  <span className="text-[var(--yellow)]"> Yellow </span>
                  player.
                </p>

                <p>
                  The AI plays in
                  <span className="text-[var(--green)]"> Green</span>.
                </p>
              </InfoCard>
            </div>
          </section>
        </div>
      </div>

      {loading && <LoadingOverlay />}
    </div>
  );
}
