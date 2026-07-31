import Button from "../ui/Button";
import Divider from "../ui/Divider";

interface WinnerModalProps {
  winner: string | null;
  onHome: () => void;
}

export default function WinnerModal({ winner, onHome }: WinnerModalProps) {
  if (!winner) return null;

  let title = "";
  let color = "text-[var(--white)]";

  switch (winner) {
    case "X":
      title = "YOU WIN";
      color = "text-[var(--yellow)]";
      break;

    case "O":
      title = "AI WINS";
      color = "text-[var(--green)]";
      break;

    default:
      title = "DRAW";
      color = "text-[var(--white)]";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">
      <div
        className="
          w-full
          max-w-sm
          rounded-[var(--radius-card)]
          border
          border-[var(--border)]
          bg-[var(--dark)]
          px-6
          py-8
          text-center
        "
      >
        <h2
          className={`
            heading-font
            text-4xl
            tracking-wide
            ${color}
          `}
        >
          {title}
        </h2>

        <div className="my-6 -mx-6">
          <Divider />
        </div>

        <div className="mx-auto w-4/5">
          <Button onClick={onHome}>HOME</Button>
        </div>
      </div>
    </div>
  );
}
