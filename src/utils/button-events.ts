import { KeyboardEvent } from "react";

/**
 * Gets the props to put on an HTML element to make it behave like a button.
 * Handles keyboard events to improve accessibility.
 *
 * @example
 * <div {...getButtonProps(() => alert(1))}>
 *     Click me!
 * </div>
 */

export const getButtonProps = (action?: () => void, disabled = false) => {
  if (!action) return {};

  return {
    onClick() {
      if (!disabled) action();
    },
    onKeyDown(event: KeyboardEvent<HTMLElement>) {
      if (disabled) return;
      if (event.code === "Enter" || event.code === "Space") {
        action();
        event.preventDefault();
      }
    },
    tabIndex: disabled ? -1 : 0,
    role: "button",
    "aria-disabled": disabled,
  };
};
