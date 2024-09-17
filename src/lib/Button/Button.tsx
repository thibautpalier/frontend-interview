import LoadingIcon from "@/icons/loading.svg";
import classnames from "classnames";
import { MouseEvent, ReactElement, ReactNode } from "react";
import styles from "./Button.module.css";

export interface GenericButtonProps {
  className?: string;
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary" | "tertiary" | "danger" | "success";
}

export interface CommonButtonProps extends GenericButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  submit?: boolean;
  tabIndex?: number;
  ariaLabel?: string | undefined;
}

interface IconOnlyButtonProps extends CommonButtonProps {
  icon: ReactElement;
  children?: never;
}

interface ButtonProps extends CommonButtonProps {
  icon?: ReactElement | null;
  children: ReactNode;
}

const Button = ({
  className,
  children,
  disabled = false,
  icon = null,
  loading = false,
  onClick = () => {
    /* no-op */
  },
  size = "large",
  submit = false,
  tabIndex,
  type = "primary",
  ariaLabel = undefined,
}: IconOnlyButtonProps | ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    if (!submit) event.preventDefault();
    onClick();
  };
  return (
    <button
      type={submit ? "submit" : "button"}
      disabled={disabled || loading}
      onClick={handleClick}
      className={classnames(
        className,
        styles[type],
        styles[size],
        styles.button,
        { [styles.iconOnly]: icon && !children },
      )}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {loading ? <LoadingIcon className={styles.loading} /> : icon}
      {children}
    </button>
  );
};

export default Button;
