"use client";

const BAR_HEIGHTS = [4, 8, 14, 10, 6, 12, 8, 16, 10, 6, 14, 8, 5, 10, 14, 8, 6, 12, 10, 4];

export default function Waveform({ active }: { active: boolean }) {
  return (
    <>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.25); }
          50%       { transform: scaleY(1); }
        }
      `}</style>
      <div className="flex items-end gap-[2px]" style={{ height: 18 }}>
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full origin-bottom"
            style={{
              height: h,
              background: "var(--neu-text)",
              opacity: active ? 0.45 : 0.18,
              animationName: active ? "wave" : "none",
              animationDuration: `${0.7 + (i % 5) * 0.15}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${i * 40}ms`,
            }}
          />
        ))}
      </div>
    </>
  );
}
