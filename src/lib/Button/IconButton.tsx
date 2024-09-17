import { ReactElement } from "react";
import Button, { CommonButtonProps } from "./Button";

interface IconButtonProps extends CommonButtonProps {
  children: ReactElement;
  // Ensure an aria-label is specified for buttons with image only
  ariaLabel: string;
}

const IconButton = ({
  className,
  children,
  disabled = false,
  loading = false,
  onClick = () => {
    /* no-op */
  },
  size = "small",
  submit = false,
  type = "secondary",
  ariaLabel,
}: IconButtonProps) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      size={size}
      submit={submit}
      icon={children}
      type={type}
      ariaLabel={ariaLabel}
    />
  );
};

export default IconButton;
