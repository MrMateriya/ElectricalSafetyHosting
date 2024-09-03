// @ts-nocheck
import React from 'react';
import styles from './styles/LinkArrowGoTo.module.css'
import Link from "next/link";
import {LinkArrowGoToProps} from "@/UI/LinkArrowGoTo/types/LinkArrowGoToProps.mjs";
function LinkArrowGoTo({variant = 'yellow', className, classNameArrow, children, href, ...props} : LinkArrowGoToProps) {
    let color;
    switch (variant) {
        case 'yellow':
            color = 'link_yellow'
            break;
        case 'blue':
            color = 'link_blue'
            break;
    }
    return (
        <Link className={[styles['link'], styles[color], className].join(' ')} href={href} {...props}>
            <p className={styles['link__text']}>
                {children}
            </p>
            <svg className={[styles['link__arrow'], classNameArrow].join(' ')} width="11" height="11" viewBox="0 0 11 11"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path className={styles['link__svg-path']} d="M5.21968 0.729106C5.36031 0.588655 5.55093 0.509766 5.74968 0.509766C5.94843 0.509766 6.13906 0.588655 6.27968 0.729106L10.5297 4.97911C10.6701 5.11973 10.749 5.31036 10.749 5.50911C10.749 5.70786 10.6701 5.89848 10.5297 6.03911L6.27968 10.2891C6.13742 10.4215 5.94937 10.4936 5.75505 10.4903C5.56074 10.4869 5.37529 10.4083 5.23768 10.2711C5.10044 10.1335 5.02188 9.94805 5.01853 9.75374C5.01517 9.55942 5.08727 9.37137 5.21968 9.22911L8.18968 6.25911L0.749683 6.25911C0.550771 6.25911 0.360006 6.18009 0.219354 6.03944C0.078701 5.89878 -0.00031662 5.70802 -0.00031662 5.50911C-0.00031662 5.31019 0.078701 5.11943 0.219354 4.97878C0.360006 4.83812 0.550771 4.75911 0.749683 4.75911L8.18968 4.75911L5.21968 1.78911C5.07923 1.64848 5.00034 1.45786 5.00034 1.25911C5.00034 1.06036 5.07923 0.869731 5.21968 0.729106Z"/>
            </svg>
        </Link>
    );
}

export default LinkArrowGoTo;