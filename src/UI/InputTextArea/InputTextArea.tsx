// @ts-nocheck
'use client'

import React, {forwardRef, useId} from 'react';
import styles from './styles/InputTextArea.module.css'
import {InputTextAreaProps} from "@/UI/InputTextArea/types/InputTextAreaProps.mjs";
import TextareaAutosize from 'react-textarea-autosize';

const InputTextArea = function InputTextArea({
                                                 classNames,
                                                 title = '',
                                                 name = '',
                                                 register,
                                                 registerName = '',
                                                 registerOptions = {},
                                                 error = '',
                                                 hint = '',
                                                 ...props
                                             }: InputTextAreaProps) {
    const textAreaId = useId()

    return (
        <label htmlFor={textAreaId} className={[styles['label'], classNames?.label].join(' ')}>
            {
                Boolean(title) &&
                  <p className={[styles['label__title'], classNames?.title].join(' ')}>
                      {title}
                  </p>
            }
            {
                register && registerName
                    ? <TextareaAutosize {...register(registerName, registerOptions)}
                                        aria-invalid={Boolean(error)}
                                        id={textAreaId}
                                        {...props}
                                        className={[styles['label__textarea'], classNames?.textArea].join(' ')}/>
                    : <TextareaAutosize name={name}
                                        id={textAreaId}
                                        aria-invalid={Boolean(error)}
                                        {...props}
                                        className={[styles['label__textarea'], classNames?.textArea].join(' ')}/>
            }

            {
                Boolean(hint) || Boolean(error)
                    ?   <p className={[styles['label__hint'], classNames?.hint].join(' ')}>
                            {error || hint}
                        </p>
                    :   null
            }
        </label>
    );
}

export default InputTextArea;