"use client"

import { useState } from "react";
import styles from "./Popup.module.css";
import Image from "next/image";
import PopupImg from "@/public/images/popup.jpg"; 


export default function Popup() {

    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={() => setOpen(false)}>
                    ✕
                </button>
                <Image
                    src={PopupImg}
                    alt="Promoción"
                    className={styles.image}
                    priority
                />
            </div>
        </div>
    );

}