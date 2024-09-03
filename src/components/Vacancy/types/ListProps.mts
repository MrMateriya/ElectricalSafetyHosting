import {HTMLAttributes} from "react";

interface ListProps extends HTMLAttributes<HTMLDivElement> {
    listClassName: string,
    array: {
        id: number,
        title: string
    }[],
    titleText: string,
}

export type {ListProps}