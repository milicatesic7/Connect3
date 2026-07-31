from pydantic import BaseModel

class MoveRequest(BaseModel):
    game_id: str
    column: int

class NewGameRequest(BaseModel):
    depth: int

class GameRequest(BaseModel):
    game_id: str