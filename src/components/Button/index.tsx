import { ButtonHTMLAttributes } from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  model: "generate" | "clipboard";
}

export function Button({ title, model, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={`${styles.button} ${model === "clipboard" ? styles.clip : ""}`}
    >
      {title}

      {model === "generate" && (
        <FiArrowRight size={24} className={styles.arrow} />
      )}
    </button>
  );
}
