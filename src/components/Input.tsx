import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
  <input className={styles.input} {...props}></input>
);

export default Input;
