import {FieldPath, RegisterOptions, UseFormRegister} from "react-hook-form";
import React, {ClassAttributes} from "react";

interface InputFileProps extends ClassAttributes<HTMLInputElement>, React.InputHTMLAttributes<HTMLInputElement> {
    hint?: string,
    name?: string,
    error?: string,
    register?: UseFormRegister<any>,
    registerOptions?: RegisterOptions,
    registerName?: FieldPath<any>,
    placeholder?: string,
    classNames?: {
        label?: string,
        hint?: string,
        placeholder?: string,
        input?: string,
        fileZone?: string,
    }
}

export type {InputFileProps}