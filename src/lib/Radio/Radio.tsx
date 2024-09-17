import classnames from "classnames";
import { ChangeEvent, ReactNode } from "react";
import styles from "./Radio.module.css";

export interface RadioProps {
    checked: boolean;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    label?: string;
    name: string;
    onChange: (newValue: string) => void;
    value: string;
}

const Radio = ({
    checked,
    children,
    className,
    disabled,
    label,
    name,
    onChange,
    value,
}: RadioProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!disabled) onChange(event.target.value);
    };
    return (
        <label
            className={classnames(className, styles.root, {
                [styles.disabled]: disabled,
            })}
        >
            <input
                type="radio"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className={styles.radio}
                name={name}
                value={value}
            />
            {label ? <p className={styles.textLabel}>{label}</p> : null}
            {children ? (
                <div className={styles.children}>{children}</div>
            ) : null}
        </label>
    );
};

export default Radio;
