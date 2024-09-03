// @ts-nocheck
'use client'

import React, {forwardRef, useId} from 'react';
import styles from './styles/InputSelector.module.css'
import {InputSelectorProps} from "@/UI/InputSelector/types/InputSelectorProps.mjs";
import Select from 'react-select';

const InputSelector = forwardRef(function InputSelector({
                                                            options,
                                                            classNames,
                                                            instanceId,
                                                            disabled,
                                                            hint,
                                                            error,
                                                            ...props} : InputSelectorProps, ref) {
    const selectId = useId();
    return (
        <label htmlFor={selectId} className={[styles['label'], classNames?.label].join()}>
            <Select
                inputId={selectId}
                isDisabled={disabled}
                aria-invalid={Boolean(error)}
                className={[styles['label__select'], classNames?.select].join(' ')}
                isSearchable={false}
                styles={{
                    control: (baseStyles, state) => {
                        let borderColor, placeholderText;

                        if (!state.hasValue && state.menuIsOpen && !state.isDisabled) {
                            borderColor = "var(--white)"
                        } else if (state.isFocused && !error && !state.isDisabled) {
                            borderColor = "var(--white)"
                        } else if (error && !state.isDisabled) {
                            borderColor = "var(--red-error)"
                        } else {
                            borderColor = "var(--olive)"
                        }

                        if (error && !state.menuIsOpen && !state.isDisabled) {
                            placeholderText = "var(--red-error)"
                        } else {
                            placeholderText = "var(--olive)"
                        }

                        const options = {
                            ...baseStyles,
                            boxShadow: "none",
                            backgroundColor: '#00000000',
                            border: "none",
                            borderRadius: 0,
                            minHeight: 0,
                            transition: "none",
                            padding: "12px 0px 15px 0",
                            borderBottom: `1px solid ${borderColor}`,
                            "&:hover": {
                                borderColor: error? "" : "var(--white)",
                            },
                            [`#react-select-${instanceId}-placeholder`]: {
                                color: placeholderText,
                                userSelect: "none",
                            }
                        }

                        return options
                    },
                    input: (baseStyles, state) => ({
                        ...baseStyles,
                        margin: 0,
                        padding: 0,
                    }),
                    indicatorSeparator: (baseStyles, state) => ({
                        display: "none",
                    }),
                    singleValue: (baseStyles, state) => ({
                        ...baseStyles,
                        color: state.isDisabled? "var(--olive)" : "var(--light-gray)",
                        margin: 0,
                        userSelect: "none",
                    }),
                    dropdownIndicator: (baseStyles, state) => ({
                        display: "none",
                    }),
                    indicatorsContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundImage: 'url("/images/icons/ArrowDownWhite.svg")',
                        height: 24,
                        width: 24,
                    }),
                    placeholder: (baseStyles, state) => ({
                            ...baseStyles,
                            margin: 0,
                        }),
                    valueContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        padding: 0,
                        margin: 0,
                    }),
                    menu: (baseStyles, state) => ({
                        backgroundColor: "var(--black)",
                        top: "100%",
                        position: "absolute",
                        width: "100%",
                        zIndex: 1,
                        boxSizing: "border-box",
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        color: state.isFocused ? "var(--corn)" : "var(--light-gray)",
                        background: "var(--black)",
                        padding: "12px 0 15px 0",
                        borderBottom: "1px solid var(--olive-light)",
                        userSelect: "none",
                        "&:hover": {
                            color: "var(--corn)",
                        },
                        "&:active": {
                            color: "var(--corn)",
                            background: "none"
                        },
                    }),
                    menuList: (baseStyles, state) => ({
                        ...baseStyles,
                        padding: 0,
                    }),
                }}
                ref={ref}
                instanceId={instanceId}
                options={options}
                {...props}
            />
            {
                Boolean(hint) || Boolean(error)
                    ?   <p className={[styles['label__hint'], error && !disabled? styles['label__hint_red'] : styles['label__hint_olive'], 'font-body-small', classNames?.hint].join(' ')}>
                            {error || hint}
                        </p>
                    :   null
            }
        </label>
    );
})

export default InputSelector;