'use client'

import { useTranslations } from 'next-intl';
import styles from './form.module.css';
import { submitForm } from '@/app/lib/actions';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientSchema } from '@/app/lib/zod';





const Form = () => {

    const t = useTranslations("contact");

    const [sent, setSent] = useState(false);

    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({ resolver: zodResolver(clientSchema) });

    const onSubmit = async (data) => {
        try {
            await submitForm(data);
            return setSent(true);
        } catch (error) {
            console.error("Form submission failed:", error);
        }
    };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} id='form'>
        <div className={styles.top}>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("name")}</label>
                <input className={styles.input} type="text" {...register("name")} placeholder={t("name")} />
                <p className={styles.error}>{errors?.name?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("surname")}</label>
                <input className={styles.input} type="text" {...register("surname")} placeholder={t("surname")} />
                <p className={styles.error}>{errors?.surname?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("email")}</label>
                <input className={styles.input} type="email" {...register("email")} placeholder='email@email.com' />
                <p className={styles.error}>{errors?.email?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>{t("phone")}</label>
                <input className={styles.input} type="number" {...register("phone")} placeholder={t("phone")}  />
                <p className={styles.error}>{errors?.phone?.message}</p>
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>{t("message")}</label>
            <textarea className={styles.textarea} type="text" {...register("message")} placeholder={t("message")} />
            <p className={styles.error}>{errors?.message?.message}</p>
        </div>
        {isSubmitting ?
            <button className={styles.disabled} disabled type='submit' form='form' >{t("loading")}...</button>
            :
            (sent ? 
                <button className={`${styles.button} ${styles.success}`} disabled type='submit' form='form' >{t("sent")}</button>
                :
                <button className={styles.button} type='submit' form='form' >{t("send")}</button>
            )
        }
    </form>
  )
}

export default Form
