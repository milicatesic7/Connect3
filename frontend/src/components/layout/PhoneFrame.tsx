interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div
      className="
      h-dvh
      md:min-h-screen
      bg-slate-900

      md:bg-slate-950
      md:flex
      md:items-center
      md:justify-center
      md:p-6
      "
    >
      <div
        className="
          w-full
          md:max-w-[430px]
          h-[100svh]
           md:min-h-screen
          bg-slate-900
          rounded-none
          md:rounded-[36px]
          md:shadow-2xl
          overflow-hidden
          border
          border-slate-800
        "
      >
        {children}
      </div>
    </div>
  );
}
