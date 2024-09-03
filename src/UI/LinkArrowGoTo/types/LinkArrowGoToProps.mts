import {HTMLAttributes} from "react";

interface LinkArrowGoToProps extends HTMLAttributes<HTMLDivElement> {
    classNameArrow?: string,
    variant?: 'yellow' | 'blue',
    href?: string,
}

export type {LinkArrowGoToProps}