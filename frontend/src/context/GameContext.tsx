import { createContext, useContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

import { createGame, playerMove, computerMove } from "../services/api";

import type { NewGameResponse, MoveResponse } from "../types/game";

import { flushSync } from "react-dom";

interface GameContextType {
  game: NewGameResponse | null;

  loading: boolean;

  winner: string | null;

  finished: boolean;

  difficulty: number;

  setDifficulty: Dispatch<SetStateAction<number>>;

  newGame: (depth: number) => Promise<void>;

  move: (column: number) => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [game, setGame] = useState<NewGameResponse | null>(null);

  const [loading, setLoading] = useState(false);

  const [winner, setWinner] = useState<string | null>(null);

  const [finished, setFinished] = useState(false);

  const [difficulty, setDifficulty] = useState(6);

  async function newGame(depth: number) {
    setLoading(true);

    try {
      const response = await createGame(depth);

      setGame(response);

      setWinner(null);

      setFinished(false);
    } finally {
      setLoading(false);
    }
  }

  async function move(column: number) {
    if (!game || loading) return;

    setLoading(true);

    try {
      const gameId = game.game_id;

      const playerResponse: MoveResponse = await playerMove({
        game_id: gameId,
        column,
      });

      if (!playerResponse.success) {
        return;
      }

      flushSync(() => {
        setGame({
          ...game,
          board: playerResponse.board,
        });

        setWinner(playerResponse.winner);

        setFinished(playerResponse.finished);
      });

      if (playerResponse.finished) {
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 700));

      const aiResponse: MoveResponse = await computerMove(gameId);

      flushSync(() => {
        setGame((current) =>
          current
            ? {
                ...current,
                board: aiResponse.board,
              }
            : current,
        );

        setWinner(aiResponse.winner);

        setFinished(aiResponse.finished);
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <GameContext.Provider
      value={{
        game,
        loading,
        winner,
        finished,
        difficulty,
        setDifficulty,
        newGame,
        move,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used inside GameProvider");
  }

  return context;
}
