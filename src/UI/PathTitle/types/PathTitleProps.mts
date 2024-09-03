import {HTMLAttributes} from "react";

interface PathTitleProps extends HTMLAttributes<HTMLDivElement>{
    path: {
        href: string,
        title: string,
    }[],
    currentPage: string,
}

export type {PathTitleProps}