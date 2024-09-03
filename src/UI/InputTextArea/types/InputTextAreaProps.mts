import React, {ClassAttributes} from "react";
import {FieldPath, RegisterOptions, UseFormRegister} from "react-hook-form";

interface InputTextAreaProps extends ClassAttributes<HTMLInputElement>, React.InputHTMLAttributes<HTMLInputElement> {
    title?: string,
    hint?: string,
    error?: string,
    register?: UseFormRegister<any>,
    registerOptions?: RegisterOptions,
    registerName?: FieldPath<any>,
    classNames?: {
        label?: string,
        title?: string,
        textArea?: string,
        hint?: string,
    }
}
export type {InputTextAreaProps}