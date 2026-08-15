type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-contrast shadow-[0_6px_24px_-8px_var(--accent)] hover:bg-accent-hover hover:shadow-[0_10px_30px_-8px_var(--accent)]",
  secondary:
    "border border-border-strong bg-surface/70 text-text hover:border-accent hover:text-accent",
  ghost: "text-text-soft hover:bg-surface-2 hover:text-text",
};

function classes(variant: Variant, size: Size, className?: string) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className ?? ""}`;
}

interface ButtonProps
  extends CommonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps
  extends CommonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...rest
}: LinkButtonProps) {
  const extra = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a className={classes(variant, size, className)} {...extra} {...rest}>
      {children}
    </a>
  );
}
