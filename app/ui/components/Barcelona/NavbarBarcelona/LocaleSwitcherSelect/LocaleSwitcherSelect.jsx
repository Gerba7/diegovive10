'use client'

import styles from './localeSwitcherSelect.module.css';
import { useTransition } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';



const LocaleSwitcherSelect = ({children, defaultValue, label}) => {

    const router = useRouter();
    const pathname = usePathname();

    const params = useParams();

    const [isPending, startTransition] = useTransition();

    function onSelectChange(event) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                `/${nextLocale}/barcelona`
            )
        })
    }

  return (
    <label className={`${styles.label} ${isPending && styles.disabled}`}>
      {/* <p className={styles.item}>{label}</p> */}
      <select className={styles.select} defaultValue={defaultValue} disabled={isPending} onChange={onSelectChange}>
        {children}
      </select>
    </label>
  )
}

export default LocaleSwitcherSelect
