"use client";

interface StatsCounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function StatsCounter({
  target,
  label,
  suffix = "",
  prefix = "",
}: StatsCounterProps) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {prefix}
        {target}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-secondary">
        {label}
      </p>
    </div>
  );
}
