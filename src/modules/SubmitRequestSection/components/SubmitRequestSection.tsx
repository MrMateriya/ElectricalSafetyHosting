// @ts-nocheck
'use client'

import React, {useState} from 'react';
import styles from '../styles/SubmitRequestSection.module.css'
import InputText from "@/UI/InputText/InputText";
import Checkmark from "@/UI/Checkmark/Checkmark";
import Button from "@/UI/Button/Button";
import {Controller, useForm, useWatch} from "react-hook-form";
import {SubmitRequestSectionProps} from "@/modules/SubmitRequestSection/types/SubmitRequestSectionProps.mjs";
import InputTextArea from "@/UI/InputTextArea/InputTextArea";
import InputSelector from "@/UI/InputSelector/InputSelector";
import InputFile from "@/UI/InputFile/InputFile";
import {Dialog} from "@headlessui/react";
import {handleTabSelection} from "@/utils/handleTabSelection";
import {DialogText} from "@/modules/SubmitRequestSection/types/DialogText.mjs";
import {FormFields} from "@/modules/SubmitRequestSection/types/FormFields.mjs";
import {InputSelectorOption} from "@/UI/InputSelector/types/InputSelectorOption.mjs";

function SubmitRequestSection({textVariant = 'call-order-reduced', className, ...props}: SubmitRequestSectionProps) {
    const options : InputSelectorOption[] = [
        {id: 1, value: 'Электромонтажник слаботочных систем', label: 'Электромонтажник слаботочных систем'},
        {id: 2, value: 'Электромонтажник', label: 'Электромонтажник'},
        {id: 3, value: 'Инженер ПТО', label: 'Инженер ПТО'},
        {id: 4, value: 'Прораб', label: 'Прораб'},
        {id: 5, value: 'Инженер ОПС', label: 'Инженер ОПС'},
    ];
    const {register, control, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>({mode: "onChange"})
    const [isShowPopap, setIsShowPopap] = useState<boolean>(false)
    const [dialogText, setDialogText] = useState<DialogText>( {
        title: <>Заявка <br className={styles['separator_modal']}/> отправлена!</>,
        subTitle: 'Скоро с вами свяжется менеджер.',
    })

    let descriptionVariant, formVariant;
    const file = useWatch({ control: control, name: "file", defaultValue: '' })

    switch (textVariant) {
        case 'call-order-reduced':
            descriptionVariant =
                <div className={styles['section__description']}>
                    <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                        Оставить заявку
                    </h2>
                    <p className={[styles['section__sub-title'], styles['section__sub-title_bold'], 'font-body-bold'].join(' ')}>
                        Заполните форму и наш менеджер свяжется с вами в самое ближайшее время
                    </p>
                    <p className={[styles['section__sub-title'], styles['section__sub-title_regular'], 'font-body'].join(' ')}>
                        Заполните форму и наш менеджер свяжется с вами в самое ближайшее время
                    </p>
                    <p className={[styles['section__mail-title'], 'font-body'].join(' ')}>
                        Или напишите ваш вопрос на почту
                    </p>
                    <a className={[styles['section__mail-link'], 'font-body-bold'].join(' ')}
                       href="mailto:elbez54@gmail.com">
                        <svg className={styles['section__mail-svg']} width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.25 7.5L12 12.75L18.75 7.5" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        elbez54@gmail.com
                    </a>
                </div>
            formVariant = <form onSubmit={handleSubmit(handleSubmitCallOrder)} noValidate
                                className={[styles['section__form'], styles['form']].join(' ')}>
                <div className={styles['form__fields']}>
                    <InputText
                        disabled={isSubmitting}
                        autoComplete='off'
                        error={errors['username']?.message}
                        register={register}
                        registerOptions={{
                            required: {
                                value: true,
                                message: 'Это обязательное поле!'
                            },
                            minLength: {
                                value: 5,
                                message: 'Введите ваше ФИО!',
                            },
                            maxLength: {
                                value: 40,
                                message: 'Введите ваше ФИО!',
                            },
                        }}
                        registerName='username'
                        labelText='ФИО'
                        placeholder='Представьтесь, пожалуйста'
                    />
                    <InputText
                        disabled={isSubmitting}
                        autoComplete='off'
                        error={errors['phone']?.message}
                        register={register}
                        registerOptions={{
                            required: {
                                value: true,
                                message: 'Это обязательное поле!'
                            },
                            pattern: {
                                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                message: 'Неверный формат номера телефона!',
                            }
                        }}
                        registerName='phone'
                        type='tel'
                        labelText='Номер телефона'
                        placeholder='Номер телефона'
                    />
                    <InputText
                        disabled={isSubmitting}
                        autoComplete='off'
                        error={errors['email']?.message}
                        register={register}
                        registerOptions={{
                            required: {
                                value: true,
                                message: 'Это обязательное поле!',
                            },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Неверный формат почты!',
                            }
                        }}
                        type='email'
                        registerName='email'
                        labelText='Почта'
                        placeholder='ivan@mail.ru'
                    />
                </div>
                <Controller
                    name="personalData"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Это обязательный пункт!',
                        }
                    }}
                    render={({ field }) => (
                        <Checkmark {...field}
                                   disabled={isSubmitting}
                                   classNames={{
                                       label: [styles['form__personal-data'], styles['personal-data']].join(' '),
                                       checkMark: styles['personal-data__checkmark'],
                                   }}>
                            <p className={[styles['personal-data__text'], errors['personalData']?.message ? styles['personal-data__text_invalid'] : ''].join(' ')}>
                                Согласие на обработку
                                <span className={styles['personal-data__span']}
                                      dangerouslySetInnerHTML={{__html: ' персональных данных'}}></span>
                            </p>
                        </Checkmark>
                    )}
                />
                <div className={styles['form__button-wrapper']}>
                    <Button type='submit'
                            disabled={isSubmitting}
                            className={[styles['form__submit-button'], styles['form__submit-button_call-order-reduced']].join(' ')}
                            variant="fill">
                        Заказать звонок
                    </Button>
                </div>
            </form>
            break;
        case 'call-order-full':
            descriptionVariant =
                <div className={styles['section__description']}>
                    <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                        Оставить заявку
                    </h2>
                    <p className={[styles['section__sub-title'], styles['section__sub-title_light_gray'], 'font-body'].join(' ')}>
                        Заполните форму и наш менеджер свяжется с вами в самое ближайшее время
                    </p>
                    <a className={[styles['section__address'], styles['address'], styles['section__address_tomsk']].join(' ')}
                       href="https://go.2gis.com/iu7wr">
                        <svg className={styles['section__location-icon']} width="25" height="24" viewBox="0 0 25 24"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C8.27344 2 5.25 4.87766 5.25 8.42188C5.25 12.5 9.75 18.9627 11.4023 21.1948C11.4709 21.2891 11.5608 21.3657 11.6647 21.4186C11.7686 21.4715 11.8835 21.499 12 21.499C12.1165 21.499 12.2314 21.4715 12.3353 21.4186C12.4392 21.3657 12.5291 21.2891 12.5977 21.1948C14.25 18.9636 18.75 12.5033 18.75 8.42188C18.75 4.87766 15.7266 2 12 2Z"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M12 11C13.2426 11 14.25 9.99264 14.25 8.75C14.25 7.50736 13.2426 6.5 12 6.5C10.7574 6.5 9.75 7.50736 9.75 8.75C9.75 9.99264 10.7574 11 12 11Z"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={[styles['address__text'], 'font-body-bold'].join(' ')}>
                            Новосибирск, улица Комбинатская, дом 1, офис 304, 630015
                        </p>
                    </a>
                    <a className={[styles['section__address'], styles['address'], styles['section__address_novosibirsk']].join(' ')}
                       href="https://go.2gis.com/9te1w">
                        <svg className={styles['section__location-icon']} width="25" height="24" viewBox="0 0 25 24"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C8.27344 2 5.25 4.87766 5.25 8.42188C5.25 12.5 9.75 18.9627 11.4023 21.1948C11.4709 21.2891 11.5608 21.3657 11.6647 21.4186C11.7686 21.4715 11.8835 21.499 12 21.499C12.1165 21.499 12.2314 21.4715 12.3353 21.4186C12.4392 21.3657 12.5291 21.2891 12.5977 21.1948C14.25 18.9636 18.75 12.5033 18.75 8.42188C18.75 4.87766 15.7266 2 12 2Z"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M12 11C13.2426 11 14.25 9.99264 14.25 8.75C14.25 7.50736 13.2426 6.5 12 6.5C10.7574 6.5 9.75 7.50736 9.75 8.75C9.75 9.99264 10.7574 11 12 11Z"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={[styles['address__text'], 'font-body-bold'].join(' ')}>
                            Томск, улица Фрунзе, дом 152, 7 этаж, 634021
                        </p>
                    </a>
                    <a className={[styles['section__mail-link'], 'font-body-bold'].join(' ')}
                       href="mailto:elbez54@gmail.com">
                        <svg className={styles['section__mail-svg']} width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.25 7.5L12 12.75L18.75 7.5" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        elbez54@gmail.com
                    </a>
                </div>
            formVariant = <form onSubmit={handleSubmit(handleSubmitCallOrder)} noValidate
                                className={[styles['section__form'], styles['form']].join(' ')}>
                <div className={styles['form__fields']}>
                    <InputText
                        disabled={isSubmitting}
                        autoComplete='off'
                        error={errors['username']?.message}
                        register={register}
                        registerOptions={{
                            required: {
                                value: true,
                                message: 'Это обязательное поле!'
                            },
                            minLength: {
                                value: 5,
                                message: 'Введите ваше ФИО!',
                            },
                            maxLength: {
                                value: 40,
                                message: 'Введите ваше ФИО!',
                            },
                        }}
                        registerName='username'
                        labelText='ФИО'
                        placeholder='Представьтесь, пожалуйста'
                    />
                    <InputText
                        disabled={isSubmitting}
                        autoComplete='off'
                        error={errors['phone']?.message}
                        register={register}
                        registerOptions={{
                            required: {
                                value: true,
                                message: 'Это обязательное поле!'
                            },
                            pattern: {
                                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                message: 'Неверный формат номера телефона!',
                            }
                        }}
                        registerName='phone'
                        type='tel'
                        labelText='Номер телефона'
                        placeholder='Номер телефона'
                    />
                    <InputText
                        disabled={isSubmitting}
                        autoComplete='off'
                        error={errors['email']?.message}
                        register={register}
                        registerOptions={{
                            required: {
                                value: true,
                                message: 'Это обязательное поле!',
                            },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Неверный формат почты!',
                            }
                        }}
                        registerName='email'
                        type="email"
                        labelText='Почта'
                        placeholder='ivan@mail.ru'
                    />
                </div>
                <Controller
                    name="personalData"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Это обязательный пункт!',
                        }
                    }}
                    render={({ field }) => (
                        <Checkmark {...field}
                                   disabled={isSubmitting}
                                   classNames={{
                                       label: [styles['form__personal-data'], styles['personal-data']].join(' '),
                                       checkMark: styles['personal-data__checkmark'],
                                   }}>
                            <p className={[styles['personal-data__text'], errors['personalData']?.message ? styles['personal-data__text_invalid'] : ''].join(' ')}>
                                Согласие на обработку
                                <span className={styles['personal-data__span']}
                                      dangerouslySetInnerHTML={{__html: ' персональных данных'}}></span>
                            </p>
                        </Checkmark>
                    )}
                />
                <div className={styles['form__button-wrapper']}>
                    <Button type='submit'
                            disabled={isSubmitting}
                            className={[styles['form__submit-button'], styles['form__submit-button_call-order-full']].join(' ')}
                            variant="fill">
                        Заказать звонок
                    </Button>
                </div>
            </form>
            break;
        case 'vacancy-respond':
            descriptionVariant =
                <div className={[styles['section__description'], styles['section__description_vacancy-respond']].join(' ')}>
                    <h2 className={[styles['section__title'], styles['section__title_vacancy-respond'], 'font-headline-second'].join(' ')}>
                        хотите <br
                        className='separator_1920_invisible separator_968 separator_768_invisible'/> работать <br
                        className={[styles['separator_730']].join(' ')}/> у нас?
                    </h2>
                    <p className={[styles['section__sub-title'], styles['section__sub-title_vacancy-respond'], styles['section__sub-title_light_gray'], 'font-body'].join(' ')}>
                        Заполните форму и наш менеджер свяжется <br className={[styles['separator']].join(' ')}/> с вами
                        в самое ближайшее время
                    </p>
                    <p className={[styles['section__mail-title'], styles['section__mail-title_vacancy-respond'], 'font-body-bold'].join(' ')}>
                        Или напишите ваш вопрос на почту
                    </p>
                    <a className={[styles['section__mail-link'], styles['section__mail-link_vacancy-respond'], 'font-body-bold'].join(' ')}
                       href="mailto:elbez54@gmail.com">
                        <svg className={styles['section__mail-svg']} width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.25 7.5L12 12.75L18.75 7.5" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        elbez54@gmail.com
                    </a>
                </div>
            formVariant =
                <form onSubmit={handleSubmit(handleSubmitVacancyRespond)} noValidate
                      className={[styles['section__form'], styles['section__form_vacancy-respond'], styles['form']].join(' ')}
                      encType="multipart/form-data">
                    <div className={[styles['form__fields'], styles['form__fields_vacancy-respond']].join(' ')}>
                        <Controller
                            name="profession"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Это обязательное поле!',
                                }
                            }}
                            render={({ field }) => (
                                <InputSelector
                                    {...field}
                                    disabled={isSubmitting}
                                    error={errors['profession']?.message}
                                    instanceId={'profession'}
                                    options={options}
                                    placeholder={options[0].label}
                                />
                            )}
                        />
                        <InputText
                            disabled={isSubmitting}
                            autoComplete='off'
                            error={errors['username']?.message}
                            register={register}
                            registerOptions={{
                                required: {
                                    value: true,
                                    message: 'Это обязательное поле!'
                                },
                                minLength: {
                                    value: 5,
                                    message: 'Введите ваше ФИО!',
                                },
                                maxLength: {
                                    value: 40,
                                    message: 'Введите ваше ФИО!',
                                },
                            }}
                            registerName='username'
                            labelText='ФИО'
                            placeholder='Представьтесь, пожалуйста'
                        />
                        <InputText
                            disabled={isSubmitting}
                            autoComplete='off'
                            error={errors['phone']?.message}
                            register={register}
                            registerOptions={{
                                required: {
                                    value: true,
                                    message: 'Это обязательное поле!'
                                },
                                pattern: {
                                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                    message: 'Неверный формат номера телефона!',
                                }
                            }}
                            registerName='phone'
                            type='tel'
                            labelText='Номер телефона'
                            placeholder='Номер телефона'
                        />
                        <InputText
                            disabled={isSubmitting}
                            autoComplete='off'
                            error={errors['email']?.message}
                            register={register}
                            registerOptions={{
                                required: {
                                    value: true,
                                    message: 'Это обязательное поле!',
                                },
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Неверный формат почты!',
                                }
                            }}
                            registerName='email'
                            type='email'
                            labelText='Почта'
                            placeholder='Почта'
                        />
                        <InputTextArea
                                    disabled={isSubmitting}
                                    registerName='additionalInformation'
                                    register={register}
                                    registerOptions={{
                                        maxLength: {
                                            value: 1500,
                                            message: 'Максимальное количество символов 1500',}
                                    }}
                                    classNames={{
                                        title: 'font-body',
                                        hint: 'font-body-small',
                                        textArea: [styles['form__text-area'], 'font-body'].join(' ')
                                    }}
                                    error={errors['additionalInformation']?.message}
                                    hint={'Ваши достижения, зарплатные ожидания, почему хотите работать у нас'}
                                    title='Расскажите немного о себе'/>
                        <InputFile
                            disabled={isSubmitting}
                            accept={'.pdf,.docx'}
                            registerName='file'
                            register={register}
                            classNames={{
                                hint: 'font-body-small',
                                placeholder: 'font-body',
                            }}
                            registerOptions={{
                                validate: (fileList) => {
                                    if (!fileList[0]) {
                                        return 'Это обязательное поле!'
                                    } else if (fileList[0].size > 25 * 1024 * 1024) {
                                        return 'Слишком большой размер файла!'
                                    } else if (
                                        fileList[0].type !== "application/pdf" &&
                                        fileList[0].type !== "application/msword" &&
                                        fileList[0].type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                                        return 'Некорректное расширение файла!'
                                    }
                                }
                            }}
                            placeholder={file[0]?.name || 'Добавить резюме'}
                            hint='Размер файла не должен превышать 25 мб'
                            error={errors['file']?.message}
                        />
                    </div>
                    <Controller
                        name="personalData"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Это обязательный пункт!',
                            }
                        }}
                        render={({ field }) => (
                            <Checkmark {...field}
                                       disabled={isSubmitting}
                                       classNames={{
                                           label: [styles['form__personal-data'], styles['personal-data'], styles['personal-data_vacancy-respond']].join(' '),
                                           checkMark: styles['personal-data__checkmark'],
                                       }}>
                                <p className={[styles['personal-data__text'], styles['personal-data__text_vacancy-respond'], errors['personalData']?.message ? styles['personal-data__text_invalid'] : ''].join(' ')}>
                                    Согласие на обработку
                                    <span className={styles['personal-data__span']}
                                          dangerouslySetInnerHTML={{__html: ' персональных данных'}}></span>
                                </p>
                            </Checkmark>
                        )}
                    />
                    <div className={styles['form__button-wrapper']}>
                        <Button type='submit'
                                disabled={isSubmitting}
                                className={[styles['form__submit-button'], styles['form__submit-button_vacancy-respond']].join(' ')}
                                variant="fill">
                            Откликнуться
                        </Button>
                    </div>
                </form>
            break;
    }

    async function handleSubmitCallOrder(data) {
        try {
            await fetch('https://mrmateriya.github.io/ElectricalSafetyHosting/api/orderCall', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })

            setDialogText({
                title: <>Заявка <br className={styles['separator_modal']}/> отправлена!</>,
                subTitle: 'Скоро с вами свяжется менеджер.',
            })
        } catch (e) {
            setDialogText({
                title: 'Произошла ошибка!',
                subTitle: 'При отправке формы что-то пошло не так.',
            })
            console.log(e.message)
        } finally {
            setIsShowPopap(true)
        }
    }
    async function handleSubmitVacancyRespond(data) {
        try {
            const formData = new FormData()

            formData.append('email', data.email)
            formData.append('username', data.username)
            formData.append('phone', data.phone)
            if (data.additionalInformation) formData.append('additionalInformation', data.additionalInformation)
            formData.append('profession', data.profession.value)
            formData.append('file', data.file[0])

            await fetch('https://mrmateriya.github.io/ElectricalSafetyHosting/api/vacancyRespond', {
                method: "POST",
                body: formData,
            })
            setDialogText({
                title: <>Заявка <br className={styles['separator_modal']}/> отправлена!</>,
                subTitle: 'Скоро с вами свяжется менеджер.',
            })
        } catch (e) {
            setDialogText({
                title: 'Произошла ошибка!',
                subTitle: 'При отправке формы что-то пошло не так.',
            })
            console.log(e.message)
        } finally {
            setIsShowPopap(true)
        }
    }

    return (
        <>
            <section className={[styles['section'], className].join(' ')} {...props}>
                <div className={[
                    styles['section__wrapper'],
                    textVariant === 'vacancy-respond' ? styles['section__wrapper_vacancy-respond'] : '',
                    textVariant !== 'vacancy-respond' ? 'container' : '',].join(' ')}>
                    {descriptionVariant}
                    {formVariant}
                </div>
            </section>
            <Dialog open={isShowPopap}
                    className={[styles['section__modal'], styles['modal']].join(' ')}
                    onPointerDown={() => {
                        setIsShowPopap(false)
                    }}
                    onClose={() => {
                        setIsShowPopap(false)
                    }}>
                <div onPointerDown={(e) => e.stopPropagation()} className={[styles['modal__content'], styles['content']].join(' ')}>
                    <svg onKeyDown={e => {
                        handleTabSelection(e, () => setIsShowPopap(false), e)
                    }}
                         tabIndex={0}
                         onClick={() => setIsShowPopap(false)}
                         className={styles['content__cross']}
                         width="24"
                         height="24"
                         viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.91674 2.93548C3.2437 2.60862 3.68709 2.425 4.14942 2.425C4.61174 2.425 5.05514 2.60862 5.3821 2.93548L11.9954 9.54873L18.6086 2.93548C18.7694 2.76896 18.9618 2.63613 19.1745 2.54475C19.3873 2.45337 19.6161 2.40528 19.8476 2.40326C20.0791 2.40125 20.3087 2.44537 20.5229 2.53303C20.7372 2.6207 20.9319 2.75016 21.0956 2.91387C21.2593 3.07757 21.3887 3.27224 21.4764 3.48652C21.5641 3.70079 21.6082 3.93038 21.6062 4.16189C21.6042 4.3934 21.5561 4.62218 21.4647 4.8349C21.3733 5.04762 21.2405 5.24001 21.074 5.40085L14.4607 12.0141L21.074 18.6273C21.3916 18.9562 21.5673 19.3966 21.5633 19.8538C21.5594 20.3109 21.376 20.7482 21.0527 21.0715C20.7295 21.3947 20.2922 21.5781 19.835 21.5821C19.3779 21.5861 18.9374 21.4103 18.6086 21.0927L11.9954 14.4795L5.3821 21.0927C5.05327 21.4103 4.61284 21.5861 4.15569 21.5821C3.69854 21.5781 3.26124 21.3947 2.93797 21.0715C2.61471 20.7482 2.43134 20.3109 2.42737 19.8538C2.4234 19.3966 2.59914 18.9562 2.91674 18.6273L9.52999 12.0141L2.91674 5.40085C2.58987 5.07388 2.40625 4.63049 2.40625 4.16816C2.40625 3.70584 2.58987 3.26244 2.91674 2.93548Z"
                              fill="#555546"/>
                    </svg>
                    <h3 className={[styles['content__title'], 'font-headline-third'].join(' ')}>
                        {dialogText.title}
                    </h3>
                    <p className={[styles['content__text'], styles['font-body-bold']].join(' ')}>
                        {dialogText.subTitle}
                    </p>
                </div>
            </Dialog>
        </>
    );
}

export {SubmitRequestSection};