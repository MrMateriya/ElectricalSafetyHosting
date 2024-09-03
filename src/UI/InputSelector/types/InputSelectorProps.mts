import {HTMLAttributes} from "react";
import {InputSelectorOption} from "@/UI/InputSelector/types/InputSelectorOption.mjs";

interface InputSelectorProps extends HTMLAttributes<HTMLDivElement> {
    options: InputSelectorOption[],
    classNames?: {
        label?: string,
        select?: string,
        hint?: string,
    },
    error?: string,
    disabled?: boolean,
    instanceId: number | string,
    hint?: string,
}

export type {InputSelectorProps}