import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./Checkbox.module.css";
import CheckIcon from "./checked.svg";

interface CheckboxProps {
    checked: boolean;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    label?: ReactNode;
    onChange: () => void;
    error?: string | null;
}

const Checkbox = ({
    checked,
    children,
    className,
    disabled,
    label,
    onChange,
    error,
}: CheckboxProps) => {
    const handleChange = () => {
        if (!disabled) onChange();
    };
    return (
        <div className={classnames(className, styles.root)}>
            <label
                className={classnames(
                    styles.checkboxSuperWrapper,
                    { [styles.disabledCheckbox]: disabled },
                    { [styles.checkboxWithLabel]: label },
                )}
            >
                <div className={styles.checkboxWrapper}>
                    <input
                        disabled={disabled}
                        className={styles.checkbox}
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                    {checked ? (
                        <CheckIcon className={styles.checkIcon} />
                    ) : null}
                </div>
                {label ? <p className={styles.textLabel}>{label}</p> : null}
                {children ? (
                    <div className={styles.children}>{children}</div>
                ) : null}
            </label>
            {error ? <small className={styles.error}>{error}</small> : null}
        </div>
    );
};

export default Checkbox;
