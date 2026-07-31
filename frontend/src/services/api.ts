import axios from "axios";

import type { MoveRequest, MoveResponse, NewGameResponse } from "../types/game";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function createGame(depth: number): Promise<NewGameResponse> {
  const response = await api.post<NewGameResponse>("/new-game", { depth });

  return response.data;
}

export async function playerMove(request: MoveRequest): Promise<MoveResponse> {
  const response = await api.post<MoveResponse>("/player-move", request);

  return response.data;
}

export async function computerMove(game_id: string): Promise<MoveResponse> {
  const response = await api.post<MoveResponse>("/computer-move", {
    game_id,
  });

  return response.data;
}
