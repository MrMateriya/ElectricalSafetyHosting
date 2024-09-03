'use client'

import React, {useId} from 'react';
import {InputFileProps} from "@/UI/InputFile/types/InputFileProps.mjs";
import styles from './styles/InputFile.module.css'

const InputFile = function InputFile({
                                                    classNames,
                                                    hint = '',
                                                    registerName = '',
                                                    name = '',
                                                    register,
                                                    registerOptions = {},
                                                    placeholder = '',
                                                    error = '',
                                                    ...props
                                                }: InputFileProps) {
    const inputId = useId()

    return (
        <label htmlFor={inputId} className={[styles['label'], classNames?.label].join(' ')}>
            {
                register && registerName
                    ? <input id={inputId}
                             aria-invalid={Boolean(error)}
                             {...register(registerName, registerOptions)}
                             type='file'
                             {...props}
                             className={[styles['label__input'], 'visually-hidden', classNames?.input].join(' ')}/>
                    : <input id={inputId}
                             name={name}
                             aria-invalid={Boolean(error)}
                             type='file'
                             {...props}
                             className={[styles['label__input'], 'visually-hidden', classNames?.input].join(' ')}/>
            }
            <div className={[styles['label__file-zone'], classNames?.fileZone].join(' ')}>
                {
                    Boolean(placeholder) &&
                      <p className={[styles['label__placeholder'], classNames?.placeholder].join(' ')}>
                          {placeholder}
                      </p>
                }
            </div>
            {
                Boolean(error) || Boolean(hint)
                    ?   <p className={[styles['label__hint'], classNames?.hint].join(' ')}>
                            {error || hint}
                        </p>
                    : null
            }

        </label>
    );
}

export default InputFile;