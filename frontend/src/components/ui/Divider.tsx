export default function Divider() {
  return (
    <div className="flex items-center">
      <div className="flex-1 h-0.5 bg-[var(--yellow)]" />

      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full bg-[var(--yellow)]" />
        <div className="w-5 h-5 rounded-full bg-[var(--yellow)] mx-2" />
        <div className="w-5 h-5 rounded-full bg-[var(--yellow)]" />
      </div>

      <div className="flex-1 h-0.5 bg-[var(--yellow)]" />
    </div>
  );
}
