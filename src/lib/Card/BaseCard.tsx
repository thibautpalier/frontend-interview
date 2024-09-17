import { getButtonProps } from "@/utils/button-events";
import classnames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Card.module.css";

export type CardActionProps =
  | {
      href: string | null;
      onClick?: never;
    }
  | {
      href?: never;
      onClick?: () => void;
    };

type CardProps = CardActionProps & {
  children: ReactNode;
  className?: string;
};

const BaseCard = ({ children, className, href, onClick }: CardProps) => {
  if (href) {
    return (
      <Link href={href} className={classnames(className, styles.root)}>
        {children}
      </Link>
    );
  }

  return (
    <div
      {...getButtonProps(onClick)}
      className={classnames(className, styles.root, {
        [styles.clickable]: onClick,
      })}
    >
      {children}
    </div>
  );
};

export default BaseCard;
