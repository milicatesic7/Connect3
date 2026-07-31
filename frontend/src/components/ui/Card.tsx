interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
                rounded-3xl
                bg-slate-900
                border
                border-slate-800
                shadow-xl
                p-6
            "
    >
      {children}
    </div>
  );
}
