
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import Button from '../Button/Button'
import styles from './Contact.module.css';
const Contact = () => {

    const onSubmit = (event) => {
        console.log(event);
    };
    return (
        <div className={styles.container}>
            <div className={styles.ContactForm}>
                <div className={styles.topbtn}>
                    <Button text="via support chat" icon={<MdMessage fontSize="24px" />} />
                    <Button text="via call" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px" />} />

                <div className={styles.formx}>
                    <form onSubmit={onSubmit}>
                        <div className={styles.formControl}>
                            <label htmlFor='name' >Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor='Email' >Email</label>
                            <input type="email" name="Email" />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor='text' >Text</label>
                            <textarea name='text' rows="8" />
                        </div>
                    </form>
                </div>
                <div style={
                    {
                        display: "flex",
                        justifyContent: "end"
                    }
                }>
                    <Button onSubmit={onSubmit} text="submit" />
                </div>
            </div>
            <div className={styles.ContactImg}>
                <img src="../../../public/images/Service 24_7-pana 1.svg" alt="HERO Image" />
            </div>
        </div>
    );
};
export default Contact;