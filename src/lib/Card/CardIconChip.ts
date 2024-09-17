import { cloneElement, ReactElement } from "react";
import styles from "./Card.module.css";

interface CardIconChip {
    children: ReactElement;
}

const CardIconChip = ({ children }: CardIconChip) => {
    return cloneElement(children, { className: styles.iconChip });
};

export default CardIconChip;
