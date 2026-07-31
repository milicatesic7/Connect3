import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
      w-full
      rounded-[var(--radius-button)]
      bg-[var(--yellow)]
      border
      border-[var(--yellow-light)]
      py-1
      transition-all
      duration-200

      shadow-lg
      shadow-yellow-500/20

      hover:brightness-105
      active:scale-[0.98]

      disabled:opacity-60
      disabled:cursor-not-allowed
      "
    >
      <span
        className="
        heading-font
        text-[1.5rem]
        font-semibold
        tracking-[0.08em]
        text-[var(--dark)]
        select-none
        "
      >
        {children}
      </span>
    </button>
  );
}
