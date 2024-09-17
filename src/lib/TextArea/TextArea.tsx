import classnames from "classnames";
import { ChangeEvent } from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps {
  className?: string;
  description?: string;
  disabled?: boolean;
  error?: string | null;
  hasError?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  value: string;
}

const TextArea = ({
  className,
  description,
  disabled,
  error,
  hasError,
  label,
  name,
  placeholder,
  onChange,
  value,
}: TextAreaProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    onChange(event.target.value);
  const displayError = hasError || error;
  return (
    <div className={classnames(className, styles.root)}>
      {label ? (
        <label className={styles.label} id={`text-area-${name}`}>
          <strong>
            <small>{label}</small>
          </strong>
        </label>
      ) : null}
      <textarea
        className={classnames(
          { [styles.textareaError]: displayError },
          styles.textarea,
        )}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        aria-labelledby={`text-area-${name}`}
      />
      {description && !displayError ? (
        <small className={styles.description}>{description}</small>
      ) : null}
      {error ? <small className={styles.error}>{error}</small> : null}
    </div>
  );
};

export default TextArea;
