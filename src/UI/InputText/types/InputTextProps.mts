import React, {ClassAttributes} from "react";
import {FieldPath, RegisterOptions, UseFormRegister} from "react-hook-form";

interface InputTextProps extends ClassAttributes<HTMLInputElement>, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
    labelText: string,
    hint?: string,
    register?: UseFormRegister<any>,
    registerOptions?: RegisterOptions,
    registerName?: FieldPath<any>,
    name?: string,
    error?: string,
    classNames?: {
        wrapper?: string,
        label?: string,
        input?: string,
        hint?: string,
    }
}

export type {InputTextProps}