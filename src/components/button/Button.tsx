import React, {ButtonHTMLAttributes } from 'react';
import styles from "./Button.module.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
}

export const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={styles.myBtn}>
            {props.children}
        </button>
    );
};