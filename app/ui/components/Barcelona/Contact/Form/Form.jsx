'use client'

import { useTranslations } from 'next-intl';
import styles from './form.module.css';





const Form = () => {

    const t = useTranslations("contact");

  return (
    <form className={styles.form}  id='form'>
        <div className={styles.top}>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("name")}</label>
                <input className={styles.input} type="text" placeholder={t("name")} />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("surname")}</label>
                <input className={styles.input} type="text" placeholder={t("surname")} />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("email")}</label>
                <input className={styles.input} type="email" placeholder='email@email.com' />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("phone")}</label>
                <input className={styles.input} type="number"placeholder={t("phone")}  />
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>{t("message")}</label>
            <textarea className={styles.textarea} type="text" placeholder={t("message")} />
        </div>
        <button className={styles.button}>{t("send")}</button>
    </form>
  )
}

export default Form
