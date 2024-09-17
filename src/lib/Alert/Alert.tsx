import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./Alert.module.css";

interface AlertProps {
  color: "success" | "warning" | "danger" | "alternative" | "primary" | "grey";
  children: ReactNode;
  className?: string;
  onDismiss?: () => void;
}

const Alert = ({
  className,
  children,
  color = "grey",
  onDismiss,
}: AlertProps) => {
  return (
    <div
      className={classnames(className, styles.root, styles[color], {
        [styles.dismissible]: onDismiss,
      })}
    >
      {children}
      {onDismiss ? (
        <button
          aria-label="Close"
          onClick={onDismiss}
          className={styles.dismissButton}
        >
          x
        </button>
      ) : null}
    </div>
  );
};

export default Alert;
