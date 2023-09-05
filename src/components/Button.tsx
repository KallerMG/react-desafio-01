import { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

import addSvg from "../../public/img/add.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
}

const Button: FC<ButtonProps> = ({ children, icon, ...props }) => (
  <button className={styles.button} {...props}>
    {children}
    {icon && <img src={addSvg} />}
  </button>
);

export default Button;
