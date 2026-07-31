import Cell from "./Cell";
import ColumnSelector from "./ColumnSelector";

interface BoardProps {
  board: string[][];

  onMove: (column: number) => void;

  loading: boolean;
}

export default function Board({ board, onMove, loading }: BoardProps) {
  if (board.length === 0) {
    return <div className="text-white">Loading board...</div>;
  }

  return (
    <div>
      <ColumnSelector
        columns={board[0].length}
        onSelect={onMove}
        disabled={loading}
      />

      <div
        className="
          bg-[var(--gray-light)]
          rounded-3xl
          p-4
          shadow-2xl
          space-y-2
        "
      >
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((cell, columnIndex) => (
              <Cell key={columnIndex} value={cell} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
