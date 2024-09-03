import {LinkInfo} from "@/UI/LinkList/types/LinkInfo.mjs";


interface LinkListProps {
    classNames?: {
        classNameList?: string,
        classNameItem?: string,
        classNameLink?: string,
    }
    links: LinkInfo[],
    onClick?: (e: any) => void,
}

export type {LinkListProps}