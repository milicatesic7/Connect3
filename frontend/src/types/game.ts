export interface NewGameResponse {
  game_id: string;
  board: string[][];
  turn: number;
}

export interface MoveResponse {
  success: boolean;
  board: string[][];
  winner: string | null;
  finished: boolean;
}

export interface MoveRequest {
  game_id: string;
  column: number;
}
