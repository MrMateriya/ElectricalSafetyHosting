import {HTMLAttributes, ReactElement} from "react";

interface WorkAreaDescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, "className">  {
    classNames?: {
        description?: string,
        photoWrapper?: string,
        content?: string,
        contentTitle?: string,
        contentTextFirst?: string,
        contentTextSecond?: string,
        contentListTitle?: string,
        contentList?: string,
        listItem?: string,
    },
    areaTitle?: string | ReactElement,
    introductoryText?: string | ReactElement,
    finalText?: string | ReactElement,
    list?: {
        title?: string | ReactElement,
        items: {
            title: string | ReactElement,
            id: number,
        }[],
    }
    image: 'BarbedWire' | 'Valve' | 'ElectricShield',
}

export type {WorkAreaDescriptionProps}