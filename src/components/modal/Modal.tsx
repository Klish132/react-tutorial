import React, {useMemo} from 'react';
import styles from "./Modal.module.css"

type ModalProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    children?: React.ReactNode
}

export const Modal = (props: ModalProps) => {
    const rootClasses = useMemo(() => {
        const res = [styles.myModal]

        if (props.visible){
            res.push(styles.active)
        }

        return res.join(' ')
    }, [props.visible])

    return (
        <div className={rootClasses} onClick={() => props.setVisible(false)}>
            <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};