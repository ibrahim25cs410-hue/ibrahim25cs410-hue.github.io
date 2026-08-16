interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  decimals,
  className,
}: StatCounterProps) {
  const dp = decimals ?? (Number.isInteger(value) ? 0 : 2);

  return (
    <span className={className}>
      {value.toLocaleString("en-US", {
        minimumFractionDigits: dp,
        maximumFractionDigits: dp,
      })}
      {suffix}
    </span>
  );
}
