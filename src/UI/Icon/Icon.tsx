import React from 'react';
import styles from './styles/Icon.module.css'
import {IconProps} from "@/UI/Icon/types/IconProps.mjs";
function Icon({iconName, spriteHref, height = 20, width = 20, ...props} : IconProps) {
    return (
        <svg width={width} height={height} {...props}>
            <use href={`${spriteHref}#${iconName}`}/>
        </svg>
    );
}

export default Icon;