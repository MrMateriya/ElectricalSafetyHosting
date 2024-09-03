import {ReactElement} from "react";

interface ImplementedObject {
    src: string,
    alt: string,
    width: number,
    height: number,
    title: string | ReactElement,
    classNameImage: string,
    description: string | ReactElement,
}

export type {ImplementedObject}