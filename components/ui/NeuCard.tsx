import { type ReactNode } from "react";

type NeuCardVariant = "raised" | "flat" | "inset" | "concave" | "none";

interface NeuCardProps {
  variant?: NeuCardVariant;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const variantStyles: Record<NeuCardVariant, React.CSSProperties> = {
  raised: {
    background: "var(--neu-bg)",
    boxShadow:
      "8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light)",
  },
  flat: {
    background: "var(--neu-bg)",
    boxShadow:
      "4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light)",
  },
  inset: {
    background: "var(--neu-bg)",
    boxShadow:
      "inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)",
  },
  concave: {
    background:
      "linear-gradient(to bottom right, var(--neu-gradient-from), var(--neu-gradient-to))",
    boxShadow:
      "6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)",
  },
  none: {
    background: "transparent",
    boxShadow: "none",
  },
};

export default function NeuCard({
  variant = "raised",
  className = "",
  children,
  style,
}: NeuCardProps) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{ ...variantStyles[variant], ...style }}
    >
      {children}
    </div>
  );
}
