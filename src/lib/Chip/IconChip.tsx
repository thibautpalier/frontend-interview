import classnames from "classnames";
import { ReactElement } from "react";
import { ChipColor } from "./Chip";
import styles from "./Chip.module.css";

export interface IconChipProps {
    className?: string;
    children: ReactElement;
    color?: ChipColor;
}

const IconChip = ({ className, children, color = "grey" }: IconChipProps) => {
    return (
        <strong
            className={classnames(className, styles.iconChip, styles[color])}
        >
            {children}
        </strong>
    );
};

export default IconChip;
