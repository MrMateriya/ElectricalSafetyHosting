import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps> {
    variant: 'fill' | 'outline';
    scrollToIdElement?: string,
}

export type {ButtonProps}