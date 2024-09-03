// @ts-nocheck
'use client'

import React, {useState} from 'react';
import styles from './styles/DocumentsSection.module.css'
import {SwiperSlide} from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import Image from "next/image";
import SwiperButtoned from "@/components/SwiperButtoned/SwiperButtoned";
import {DocumentsSectionProps} from "@/components/DocumentsSection/types/DocumentsSectionProps.mjs";
import {Dialog} from "@headlessui/react";
import {A11y} from "swiper/modules";
function DocumentsSection({className, ...props} : DocumentsSectionProps) {
    const swiperOptions : SwiperOptions = {
        spaceBetween: 20,
        initialSlide: 0,
        modules: [A11y],
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1.5,
            },
            767: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 3,
            },
            1300: {
                slidesPerView: 4,
            }
        },
    };
    const [slide, setSlide] = useState(0);

    const [isShowPopap, setIsShowPopap] = useState(false)
    function handleKeyDownShowPopap(e) {
        switch (e.key) {
            case ' ':
                setSlide(e.target.attributes['data-slider-number'].value);
                setIsShowPopap(true);
                break;
            case 'Enter':
                setSlide(e.target.attributes['data-slider-number'].value);
                setIsShowPopap(true);
                break;
        }
    }
    function handleClickShowPopap(e) {
        e.preventDefault();
        setSlide(e.target.attributes['data-slider-number'].value);
        setIsShowPopap(true)
    }

    return (
        <>
            <Dialog open={isShowPopap}
                    className={[styles['section__modal'], styles['modal']].join(' ')}
                    onPointerDown={() => {setIsShowPopap(false);}}
                    onClose={() => {setIsShowPopap(false)}}>
                <SwiperButtoned swiperOptions={{
                    slidesPerView: 1,
                    initialSlide: slide,
                }}
                                onPointerDown={(e) => {
                                    e.stopPropagation()
                                }}
                                classNameButtonNext={styles['modal__button-next']}
                                classNameButtonPrev={styles['modal__button-prev']}
                                classNameButtonNextSVG={styles['modal__button-next-svg']}
                                classNameButtonPrevSVG={styles['modal__button-prev-svg']}
                                className={[styles['modal__swiper'], styles['modal-swiper']].join(' ')}>
                    <SwiperSlide className={styles['modal-swiper__slide']}>
                        <Image
                            draggable={false}
                            className={styles['modal-swiper__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/LicenseMES.jfif'}
                            alt={'LicenseMES.jfif'}
                            width={1240}
                            height={1754}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles['modal-swiper__slide']}>
                        <Image
                            draggable={false}
                            className={styles['modal-swiper__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/GOSTRISO45001-2020.jfif'}
                            alt={'GOSTRISO45001-2020.jfif'}
                            width={1205}
                            height={1718}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles['modal-swiper__slide']}>
                        <Image
                            draggable={false}
                            className={styles['modal-swiper__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/GOSTISO14001-2016.jfif'}
                            alt={'GOSTISO14001-2016.jfif'}
                            width={1205}
                            height={1718}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles['modal-swiper__slide']}>
                        <Image
                            draggable={false}
                            className={styles['modal-swiper__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/SROProjectStatement.jfif'}
                            alt={'SROProjectStatement.jfif'}
                            width={1241}
                            height={1754}
                        />
                    </SwiperSlide>
                </SwiperButtoned>
            </Dialog>
            <section className={[styles['section'], className].join(' ')} {...props}>
                <div className={[styles['section__wrapper'], 'container'].join(' ')}>
                    <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                        Документы
                    </h2>
                    <SwiperButtoned swiperOptions={swiperOptions}
                                    classNameButtonNext={styles['swiper__button-next']}
                                    classNameButtonPrev={styles['swiper__button-prev']}
                                    classNameButtonNextSVG={styles['swiper__button-next-svg']}
                                    classNameButtonPrevSVG={styles['swiper__button-prev-svg']}
                                    className={[styles['section__swiper'], styles['swiper']].join(' ')}>
                        <SwiperSlide className={styles['swiper__slide']}>
                            <Image
                                tabIndex={0}
                                draggable={false}
                                data-slider-number={0}
                                onKeyDown={handleKeyDownShowPopap}
                                onClick={handleClickShowPopap}
                                className={styles['swiper__image']}
                                src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/LicenseMES.jfif'}
                                alt={'LicenseMES.jfif'}
                                width={1240}
                                height={1754}
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles['swiper__slide']}>
                            <Image
                                tabIndex={0}
                                draggable={false}
                                data-slider-number={1}
                                onKeyDown={handleKeyDownShowPopap}
                                onClick={handleClickShowPopap}
                                className={styles['swiper__image']}
                                src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/GOSTRISO45001-2020.jfif'}
                                alt={'GOSTRISO45001-2020.jfif'}
                                width={1205}
                                height={1718}
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles['swiper__slide']}>
                            <Image
                                tabIndex={0}
                                draggable={false}
                                data-slider-number={2}
                                onKeyDown={handleKeyDownShowPopap}
                                onClick={handleClickShowPopap}
                                className={styles['swiper__image']}
                                src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/GOSTISO14001-2016.jfif'}
                                alt={'GOSTISO14001-2016.jfif'}
                                width={1205}
                                height={1718}
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles['swiper__slide']}>
                            <Image
                                tabIndex={0}
                                draggable={false}
                                data-slider-number={3}
                                onKeyDown={handleKeyDownShowPopap}
                                onClick={handleClickShowPopap}
                                className={styles['swiper__image']}
                                src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/documents/SROProjectStatement.jfif'}
                                alt={'SROProjectStatement.jfif'}
                                width={1241}
                                height={1754}
                            />
                        </SwiperSlide>
                    </SwiperButtoned>
                </div>
            </section>
        </>
    );
}

export default DocumentsSection;