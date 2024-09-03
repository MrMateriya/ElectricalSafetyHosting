import React from "react";
import {CardProps} from "@/UI/CardList/types/CardProps.mjs";

interface CardListProps extends React.HTMLAttributes<HTMLDivElement> {
    cards: CardProps[];
    className?: string,
    classNameItem?: string,
    classNameDescription?: string,
    classNameTitle?: string,
    classNameIcon?: string,
    classNameIconWrapper?: string,
    classNameListWrapper?: string,
    spriteSheetHref: string
}

export type {CardListProps}