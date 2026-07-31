interface StatusProps {
  loading: boolean;
}

export default function Status({ loading }: StatusProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-sm bg-[var(--yellow)]" />

          <span className="body-font text-xl text-[var(--white)]">You</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="body-font text-xl text-[var(--white)]">AI</span>

          <div className="h-4 w-4 rounded-sm bg-[var(--green)]" />
        </div>
      </div>

      <p
        className="
          heading-font
          mt-8
          text-center
          text-3xl
          text-[var(--white)]
        "
      >
        {loading ? "AI is thinking..." : "Your turn"}
      </p>
    </div>
  );
}
