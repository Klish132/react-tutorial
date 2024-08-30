import React from 'react';
import styles from "./Modal.module.css"

type ModalProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    children?: React.ReactNode
}

const Modal = (props: ModalProps) => {

    const rootClasses = [styles.myModal]
    if (props.visible){
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => props.setVisible(false)}>
            <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;