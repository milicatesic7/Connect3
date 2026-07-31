import type { ReactNode } from "react";

interface InfoCardProps {
  children: ReactNode;
}

export default function InfoCard({ children }: InfoCardProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-5
        rounded-[var(--radius-card)]
        border
        border-[var(--border)]
        bg-[var(--gray)]/50
        px-6
        py-3
      "
    >
      <div className="body-font leading-7 text-main text-[18px]">
        {children}
      </div>
    </div>
  );
}
