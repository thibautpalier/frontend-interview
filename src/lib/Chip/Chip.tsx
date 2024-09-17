import classnames from "classnames";
import styles from "./Chip.module.css";

export type ChipColor =
    | "alternative"
    | "success"
    | "warning"
    | "danger"
    | "grey";

export interface ChipProps {
    className?: string;
    children: React.ReactNode;
    color?: ChipColor;
}

const Chip = ({ className, children, color = "grey" }: ChipProps) => {
    return (
        <strong className={classnames(className, styles.chip, styles[color])}>
            {children}
        </strong>
    );
};

export default Chip;
