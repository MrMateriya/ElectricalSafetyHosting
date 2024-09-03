// @ts-nocheck
'use client';

import React from 'react';
import {ButtonProps} from "@/UI/Button/types/ButtonProps.mjs";
import styles from './styles/Button.module.css'
import {usePathname, useRouter} from "next/navigation";

function scrollToElement(e, elementId, router, path) {
    e.preventDefault();
    router.push(path + "#" + elementId)
}
function Button({className, variant, children, scrollToIdElement, ...props}: ButtonProps) {
    const path = usePathname()
    const router = useRouter()

    let variantStyle;
    switch (variant) {
        case "fill":
            variantStyle = 'button_fill'
            break;
        case "outline":
            variantStyle = 'button_outline'
            break;
    }
    return (
        <button onClick={(e ) => {
            if (scrollToIdElement) scrollToElement(e, scrollToIdElement, router, path);
        }} className={[styles['button'], styles[variantStyle], 'font-body-bold', className].join(' ')}
                {...props}>
            {children}
        </button>
    );
}

export default Button;