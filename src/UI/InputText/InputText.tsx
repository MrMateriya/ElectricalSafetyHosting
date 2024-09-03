'use client'

import React, {useId} from 'react';
import styles from './styles/InputText.module.css'
import {InputTextProps} from "@/UI/InputText/types/InputTextProps.mjs";

const InputText = function InputText({
                                         classNames,
                                         labelText = '',
                                         register,
                                         hint = '',
                                         registerOptions = {},
                                         registerName = '',
                                         name = '',
                                         error = '',
                                         ...props
                                     }: InputTextProps) {
    const inputId = useId();

    return (
        <div className={[styles['wrapper'], classNames?.wrapper].join(' ')}>
            <label htmlFor={inputId}
                   className={[styles['wrapper__label'], 'visually-hidden', classNames?.label].join(' ')}>
                {labelText}
            </label>
            {
                register && registerName
                    ? <input {...register(registerName, registerOptions)}
                             id={inputId}
                             type="text"
                             aria-invalid={Boolean(error)}
                             className={[styles['wrapper__input'], classNames?.input, 'font-body'].join(' ')} {...props}/>
                    : <input id={inputId}
                             name={name}
                             type="text"
                             aria-invalid={Boolean(error)}
                             className={[styles['wrapper__input'], classNames?.input, 'font-body'].join(' ')} {...props}/>
            }
            {
                Boolean(error) || Boolean(hint)
                    ?   <p className={[styles['wrapper__hint'], styles['wrapper__hint_olive'], 'font-body-small', classNames?.hint].join(' ')}>
                            {error || hint}
                        </p>
                    :    null
            }
        </div>
    );
}

export default InputText;