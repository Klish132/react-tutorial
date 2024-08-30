import React, {ButtonHTMLAttributes } from 'react';
import styles from "../../styles/Button.module.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
}

const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={styles.myBtn}>
            {props.children}
        </button>
    );
};

export default Button;