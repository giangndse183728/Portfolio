"use client";

import { type ReactNode, useState } from "react";

type NeuButtonVariant = "raised" | "flat" | "pressed" | "pill" | "none";

interface NeuButtonProps {
  variant?: NeuButtonVariant;
  className?: string;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

function getVariantStyle(variant: NeuButtonVariant, pressed: boolean): React.CSSProperties {
  const bg = "var(--neu-bg)";
  const sd = "var(--neu-shadow-dark)";
  const sl = "var(--neu-shadow-light)";

  if (variant === "none") {
    return { background: pressed ? "transparent" : bg };
  }

  if (variant === "pressed") {
    return {
      background: bg,
      boxShadow: `inset 4px 4px 8px ${sd}, inset -4px -4px 8px ${sl}`,
    };
  }

  // Soft pill shadow: match navbar toggle look
  if (variant === "pill") {
    if (pressed) {
      return {
        background: bg,
        boxShadow: `inset 3px 3px 6px ${sd}, inset -3px -3px 6px ${sl}`,
      };
    }

    return {
      background: bg,
      boxShadow: `3px 3px 6px ${sd}, -3px -3px 6px ${sl}`,
    };
  }

  const sizes = variant === "flat"
    ? { rest: 3, hover: 2, active: 3 }
    : { rest: 6, hover: 4, active: 4 };

  if (pressed) {
    return {
      background: bg,
      boxShadow: `inset ${sizes.active}px ${sizes.active}px ${sizes.active * 2}px ${sd}, inset -${sizes.active}px -${sizes.active}px ${sizes.active * 2}px ${sl}`,
    };
  }

  return {
    background: bg,
    boxShadow: `${sizes.rest}px ${sizes.rest}px ${sizes.rest * 2}px ${sd}, -${sizes.rest}px -${sizes.rest}px ${sizes.rest * 2}px ${sl}`,
  };
}

const variantRadius: Record<NeuButtonVariant, string> = {
  raised: "rounded-xl",
  flat: "rounded-xl",
  pressed: "rounded-xl",
  pill: "rounded-full",
  none: "rounded-none",
};

export default function NeuButton({
  variant = "raised",
  className = "",
  children,
  href,
  onClick,
  type = "button",
}: NeuButtonProps) {
  const [pressed, setPressed] = useState(false);

  const classes = `inline-flex items-center justify-center px-6 py-3 font-semibold text-neu-body cursor-pointer transition-shadow duration-200 select-none ${variantRadius[variant]} ${className}`;

  const style = getVariantStyle(variant, pressed);

  const handlers = {
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    return (
      <a
        href={href}
        className={classes}
        style={style}
        {...handlers}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      style={style}
      onClick={onClick}
      type={type}
      {...handlers}
    >
      {children}
    </button>
  );
}
