interface CellProps {
  value: string;
}

export default function Cell({ value }: CellProps) {
  let color = "bg-neutral-300";

  if (value === "X") color = "bg-[var(--yellow)]";

  if (value === "O") color = "bg-[var(--green)]";

  return (
    <div
      className="
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-[var(--gray)]/50
      "
    >
      <div
        className={`
        h-12
        w-12
        rounded-full
        transition-all
        duration-300
        ${color}
      `}
      />
    </div>
  );
}
