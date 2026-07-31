from app.ai import stablo, minimax, igra_racunar
from app.board import *

class Game:

    def __init__(self, search_depth=8):
        self.search_depth = search_depth
        self.new_game()

    def new_game(self):
        self.board = [
            [".", ".", ".", "."],
            [".", ".", ".", "."],
            [".", ".", ".", "."],
            [".", ".", ".", "."]
        ]
        self.turn = 1
        self.root = stablo(self.board, self.turn, self.search_depth)
        minimax(self.root)
        self.current_node = self.root

    def reset_game(self):
        self.new_game()

    def player_move(self, column):
        if self.turn != 1:
            return False
        postaviti, _, _ = slobodna_mesta(self.board, column)
        if not postaviti:
            return False
        self.board, self.turn = igraj(self.board, column, self.turn)
        for child in self.current_node.deca:
            if iste_table(child.tabla, self.board):
                self.current_node = child
                break
        return True

    def computer_move(self):
        if self.turn != 0:
            return False
        column, next_node = igra_racunar(self.current_node)
        if column is None and next_node is None:
            return False
        if next_node is None:
            self.board, self.turn = igraj(self.board, column, self.turn)
        else:
            self.board = trenutna_tabla(next_node.tabla)
            self.turn = next_node.igra
            self.current_node = next_node
        return True

    def get_board(self):
        return self.board

    def is_finished(self):
        return pobeda(self.board, 1) or pobeda(self.board, 0) or nereseno(self.board)

    def get_winner(self):
        if pobeda(self.board, 1):
            return "X"
        if pobeda(self.board, 0):
            return "O"
        if nereseno(self.board):
            return "DRAW"
        return None

    def play_player_turn(self, column):
        if not self.player_move(column):
            return {
                "success": False,
                "message": "Invalid move",
                "finished": False
            }

        return {
            "success": True,
            "board": self.get_board(),
            "winner": self.get_winner(),
            "finished": self.is_finished()
        }

    def play_computer_turn(self):
        if self.is_finished():
            return {
                "success": True,
                "board": self.get_board(),
                "winner": self.get_winner(),
                "finished": True
            }

        self.computer_move()

        return {
            "success": True,
            "board": self.get_board(),
            "winner": self.get_winner(),
            "finished": self.is_finished()
        }

    def current_turn(self):
        return self.turn

    def game_over(self):
        return self.is_finished()

