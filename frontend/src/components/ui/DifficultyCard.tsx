interface DifficultyCardProps {
  title: string;
  depth: number;
  selected: boolean;
  onClick: (depth: number) => void;
}

export default function DifficultyCard({
  title,
  depth,
  selected,
  onClick,
}: DifficultyCardProps) {
  return (
    <button
      onClick={() => onClick(depth)}
      className={`
        rounded-[var(--radius-card)]
        border
        p-5
        text-center
        transition-all
        bg-[var(--gray)]/90
        duration-300

        ${
          selected
            ? "border-[var(--yellow)] bg-[var(--gray)]"
            : "border-[var(--border)] bg-[var(--gray)] hover:border-[var(--yellow)]"
        }
      `}
    >
      <h2 className="text-xl text-main">{title}</h2>
    </button>
  );
}
