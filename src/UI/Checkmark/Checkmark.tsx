// @ts-nocheck
'use client'

import React, {forwardRef, useId} from 'react';
import styles from './styles/Checkmark.module.css'
import {CheckmarkProps} from "@/UI/Checkmark/types/CheckmarkProps.mjs";

const Checkmark = forwardRef(function Checkmark({
                                         children,
                                         classNames,
                                         register,
                                         registerName = '',
                                         registerOptions = {},
                                         name = '',
                                         error = '',
                                         ...props
                                     }: CheckmarkProps, ref) {
    const inputId = useId()

    return (
        <label htmlFor={inputId} className={[classNames?.label || styles['label']].join(' ')}>
            <div className={[styles['label__checkmark'], classNames?.checkMark].join(' ')}>
                <svg className={styles['label__svg']} width="18" height="13" viewBox="0 0 18 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.54961 12.9996L0.849609 7.29961L2.27461 5.87461L6.54961 10.1496L15.7246 0.974609L17.1496 2.39961L6.54961 12.9996Z"
                        fill="#0F0F00"/>
                </svg>
                {
                    register && registerName
                        ? <input {...register(registerName, registerOptions)} ref={ref}
                                 id={inputId}
                                 type='checkbox'
                                 className={[styles['label__input'], 'visually-hidden', classNames?.input].join(' ')}
                                 {...props}/>
                        : <input name={name} ref={ref}
                                 id={inputId}
                                 type='checkbox'
                                 className={[styles['label__input'], 'visually-hidden', classNames?.input].join(' ')}
                                 {...props}/>
                }
            </div>
            {children}
        </label>
    );
})
export default Checkmark;