import React, {forwardRef, InputHTMLAttributes} from 'react';
import styles from "./Input.module.css"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {

}

export const Input = forwardRef<HTMLInputElement, InputProps>((props : InputProps, ref) => {
    return (
        <input ref={ref} {...props} className={styles.myInput}/>
    );
});