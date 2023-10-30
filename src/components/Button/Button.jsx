import { useState } from 'react';
import styles from './Button.module.css'
const Button = (props) => {
   const {isOutline,icon,text, ...rest}=props;
   
    return (
        <>
            <div>
                <button {...rest} className={isOutline ? styles.second_btn:styles.primary_btn}>
               {icon} {text}
               </button>
            </div>
        </>
    );
};
export default Button;
 