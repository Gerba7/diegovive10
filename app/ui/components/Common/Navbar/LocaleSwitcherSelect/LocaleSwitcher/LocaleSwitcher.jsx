import { locales } from '@/config';
import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import styles from './localeSwitcher.module.css';
import { useLocale, useTranslations } from 'next-intl';


export default function LocaleSwitcher() {
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
            {locales.map((cur) => (
                <option key={cur} value={cur}>
                    {cur}{/* {t("locale", {locale: cur})} */}
                </option>
            ))}
        </LocaleSwitcherSelect>
    )
}
