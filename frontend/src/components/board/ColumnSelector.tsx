interface Props {
  columns: number;
  onSelect: (column: number) => void;
  disabled?: boolean;
}

export default function ColumnSelector({
  columns,
  onSelect,
  disabled = false,
}: Props) {
  return (
    <div className="mb-4 grid grid-cols-4 gap-2 px-4">
      {Array.from({ length: columns }).map((_, index) => (
        <button
          key={index}
          disabled={disabled}
          onClick={() => onSelect(index + 1)}
          className="
            flex
            justify-center
            text-2xl
            text-[var(--white)]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:text-[var(--yellow)]
            disabled:opacity-30
          "
        >
          ▼
        </button>
      ))}
    </div>
  );
}
