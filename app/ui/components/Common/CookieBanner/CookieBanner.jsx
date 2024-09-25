'use client'

import { useEffect, useState } from 'react';
import styles from './cookieBanner.module.css';
import { getLocalStorage, setLocalStorage } from '@/app/lib/storageHelper';
import { useTranslations } from 'next-intl';



const CookieBanner = () => {

    const t = useTranslations("cookies");

    const [showBanner, setShowBanner] = useState(true);
    const [cookieConsent, setCookieConsent] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)
        setCookieConsent(storedCookieConsent);
        setLoading(false)
    }, []);


    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage("cookie_consent", cookieConsent);
        }

        const newValue = cookieConsent ? "granted" : "denied";


        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                ad_storage: newValue,
                analytics_storage: newValue,
            })
        }

        setShowBanner(false);

    }, [cookieConsent]);

    if (loading || cookieConsent !== null) {
        return null
    }


  return (
    <div className={`${styles.cookieBanner} ${cookieConsent === null ? styles.visible : styles.hidden}`}>
        <div className={styles.cookieBannerInner}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>{t("text")}</p>
                </div>
                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.color}`} onClick={() => setCookieConsent(true)}>
                        {t("accept")}
                    </button>
                    <button className={styles.button} onClick={() => setCookieConsent(false)}>
                        {t("decline")}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CookieBanner
