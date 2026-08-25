import { Link } from "react-router-dom";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "accent" | "ghost" | "light" | "ink";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
}
interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  external?: boolean;
}
interface ButtonProps extends BaseProps {
  onClick: MouseEventHandler;
  to?: never;
  href?: never;
}

type Props = LinkProps | AnchorProps | ButtonProps;

export default function Button(props: Props) {
  const { children, variant = "primary", size = "md", block, className = "" } = props;
  const cls = [
    "btn",
    `btn--${variant}`,
    size === "lg" ? "btn--lg" : "",
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    const external = props.external ?? props.href.startsWith("http");
    return (
      <a
        href={props.href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={(props as ButtonProps).onClick}>
      {children}
    </button>
  );
}
