import classNames from "classnames";
import Card, { CommonCardProps } from "./Card";
import styles from "./Card.module.css";

interface SelectableCardProps extends CommonCardProps {
    onClick: () => void;
    selected: boolean;
}

const SelectableCard = ({
    chip,
    title,
    subtitle,
    footer,
    selected,
    className,
    onClick,
    titleTag,
}: SelectableCardProps) => {
    return (
        <Card
            chip={chip}
            title={title}
            footer={footer}
            onClick={onClick}
            className={classNames(className, styles.clickable, {
                [styles.selected]: selected,
            })}
            titleTag={titleTag}
            subtitle={subtitle}
        />
    );
};

export default SelectableCard;
