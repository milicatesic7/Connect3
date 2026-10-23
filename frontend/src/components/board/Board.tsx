import Cell from "./Cell";

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
    <div
      className="
        relative
        bg-[var(--gray-light)]
        rounded-3xl
        p-4
        shadow-2xl
      "
    >
      <div className="space-y-2">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((cell, columnIndex) => (
              <Cell key={columnIndex} value={cell} />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex gap-2 p-4">
        {board[0].map((topCell, columnIndex) => {
          const full = topCell === "X" || topCell === "O";

          return (
            <button
              key={columnIndex}
              disabled={loading || full}
              onClick={() => onMove(columnIndex + 1)}
              aria-label={`Drop in column ${columnIndex + 1}`}
              className="
                h-full
                flex-1
                rounded-xl
                cursor-pointer
                transition-colors
                active:bg-white/10
                disabled:cursor-not-allowed
              "
            />
          );
        })}
      </div>
    </div>
  );
}
