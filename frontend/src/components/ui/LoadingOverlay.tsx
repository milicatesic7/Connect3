export default function LoadingOverlay() {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        flex-col
        items-center
        justify-center
        bg-[var(--dark)]/90
        backdrop-blur-md
      "
    >
      <div className="mb-10 grid grid-cols-3 gap-3">
        <div className="h-5 w-5 animate-[drop1_1.2s_infinite] rounded-full bg-[var(--yellow)]" />
        <div className="h-5 w-5 rounded-full bg-transparent" />
        <div className="h-5 w-5 rounded-full bg-transparent" />

        <div className="h-5 w-5 rounded-full bg-transparent" />
        <div className="h-5 w-5 animate-[drop2_1.2s_infinite] rounded-full bg-[var(--yellow)]" />
        <div className="h-5 w-5 rounded-full bg-transparent" />

        <div className="h-5 w-5 rounded-full bg-transparent" />
        <div className="h-5 w-5 rounded-full bg-transparent" />
        <div className="h-5 w-5 animate-[drop3_1.2s_infinite] rounded-full bg-[var(--yellow)]" />
      </div>

      <h2 className="heading-font text-2xl text-[var(--white)]">
        Preparing AI...
      </h2>

      <p className="body-font mt-3 text-lg text-white/70">
        Building the game...
      </p>
    </div>
  );
}
