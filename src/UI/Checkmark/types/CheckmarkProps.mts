import React, {ClassAttributes} from "react";
import {FieldPath, RegisterOptions, UseFormRegister} from "react-hook-form";

interface CheckmarkProps extends ClassAttributes<HTMLInputElement>, React.InputHTMLAttributes<HTMLInputElement> {
    register?: UseFormRegister<any>,
    registerOptions?: RegisterOptions,
    registerName?: FieldPath<any>,
    name?: string,
    error?: string,
    classNameCheckMark?: string,
    classNames?: {
        label?: string,
        input?: string,
        checkMark?: string,
    },
}

export type {CheckmarkProps}