'use client'

import styles from './form.module.css';





const Form = () => {


  return (
    <form className={styles.form}  id='form'>
        <div className={styles.top}>
            <div className={styles.formItem}>
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} type="text" placeholder='Nombre' />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Apellido</label>
                <input className={styles.input} type="text" placeholder='Apellido' />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>E-Mail</label>
                <input className={styles.input} type="email" placeholder='tucorreo@email.com' />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Telefono</label>
                <input className={styles.input} type="number"placeholder='Telefono'  />
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>Mensaje</label>
            <textarea className={styles.textarea} type="text" placeholder='Mensaje' />
        </div>
        <button className={styles.button}>ENVIAR</button>
    </form>
  )
}

export default Form
