from fastapi import FastAPI
from app.game import Game
import uuid
from fastapi import HTTPException
from api.models import *
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Connect3 AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://192.168.1.5:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

games = {}


@app.get("/")
def home():
    return {
        "message": "Connect3 AI API"
    }


@app.post("/new-game")
def new_game(request: NewGameRequest):
    game = Game(search_depth=request.depth)
    game_id = str(uuid.uuid4())
    games[game_id] = game
    return {
        "game_id": game_id,
        "board": game.get_board(),
        "turn": game.current_turn()
    }

@app.post("/player-move")
def player_move(request: MoveRequest):
    if request.game_id not in games:
        raise HTTPException(
            status_code=404,
            detail="Game not found"
        )

    game = games[request.game_id]

    return game.play_player_turn(request.column)

@app.post("/computer-move")
def computer_move(request: GameRequest):
    if request.game_id not in games:
        raise HTTPException(
            status_code=404,
            detail="Game not found"
        )

    game = games[request.game_id]

    return game.play_computer_turn()