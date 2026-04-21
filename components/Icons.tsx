// Minimal, calm line icons — hand-tuned to match editorial brand feel.
// 1.5px strokes, rounded caps, no psychedelic or cartoon shapes.

import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number) => ({
  width: size ?? 24,
  height: size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function FocusIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  );
}

export function StressIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 14c2-4 4-4 4 0s2 4 4 0 4-4 4 0 4 4 4 0" />
      <path d="M4 18c2-4 4-4 4 0s2 4 4 0 4-4 4 0 4 4 4 0" opacity="0.5" />
    </svg>
  );
}

export function EnergyIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />
    </svg>
  );
}

export function ImmunityIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    </svg>
  );
}

export function LongevityIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 21c-4 0-7-3-7-7 0-5 7-11 7-11s7 6 7 11c0 4-3 7-7 7z" />
      <path d="M12 21v-7" />
    </svg>
  );
}

export function ResearchIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M9 3v6l-5 9a3 3 0 003 3h10a3 3 0 003-3l-5-9V3" />
      <path d="M8 3h8" />
      <path d="M8 14h8" opacity="0.5" />
    </svg>
  );
}

export function TranslateIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 5h10M9 3v2" />
      <path d="M4 5c0 5 5 8 10 8" />
      <path d="M14 5c0 5-5 8-10 8" />
      <path d="M13 21l4-10 4 10M14.5 17.5h5" />
    </svg>
  );
}

export function GuideIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 4.5A2.5 2.5 0 016.5 2H19v18H6.5A2.5 2.5 0 014 17.5v-13z" />
      <path d="M4 17.5A2.5 2.5 0 016.5 15H19" />
      <path d="M8 7h7M8 10h5" />
    </svg>
  );
}

/** Subtle mushroom mark — the one place we use mushroom shape. Editorial, not cartoon. */
export function MushroomMark({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 11c0-4.5 3.5-8 8-8s8 3.5 8 8H4z" />
      <path d="M9 11v7a2 2 0 002 2h2a2 2 0 002-2v-7" />
    </svg>
  );
}

export function ArrowRightIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 12l5 5 11-11" />
    </svg>
  );
}

export const goalIconMap = {
  focus: FocusIcon,
  stress: StressIcon,
  energy: EnergyIcon,
  immunity: ImmunityIcon,
  longevity: LongevityIcon,
} as const;
