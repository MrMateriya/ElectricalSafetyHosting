// @ts-nocheck
'use client'

import React from 'react';
import SwiperButtoned from "@/components/SwiperButtoned/SwiperButtoned";
import styles from './styles/ImplementedObjectsSection.module.css'
import {SwiperSlide} from "swiper/react";
import Image from "next/image";
import LinkArrowGoTo from "@/UI/LinkArrowGoTo/LinkArrowGoTo";
import {ImplementedObjectsSectionProps} from "@/components/ImplementedObjectsSection/types/ImplementedObjectsSectionProps.mjs";
function ImplementedObjectsSection({
                                       children,
                                       objects,
                                       classNames,
                                       ...props} : ImplementedObjectsSectionProps) {
    return (
        <div className={[styles['implemented-objects'], 'container', classNames?.objects].join(' ')} {...props}>
            <h2 className={[classNames?.title || styles['implemented-objects__title'], 'font-headline-second'].join(' ')}>
                реализованные <br className='separator_768'/> объекты
            </h2>
            <SwiperButtoned
                swiperOptions={{
                    slidesPerView: 3,
                    spaceBetween: 20,
                }}
                classNameButtonNext={[classNames?.swiperButtonNext || styles['swiper__button-next']].join(' ')}
                classNameButtonPrev={[classNames?.swiperButtonPrev || styles['swiper__button-prev']].join(' ')}
                className={[classNames?.swiper || styles['implemented-objects__swiper'], classNames?.swiper || styles['swiper']].join(' ')}>
                {
                    objects.map(object => {
                        return (
                            <SwiperSlide key={object.src} className={classNames?.swiperSlide || styles['swiper__slide']}>
                                <div className={styles['swiper__wrapper']}>
                                    <div className={[classNames?.listImageWrapper || styles['swiper__image-wrapper'], object.classNameImage].join(' ')}>
                                        <Image className={[classNames?.listImage || styles['swiper__image']].join(' ')}
                                               src={object.src}
                                               alt={object.alt}
                                               width={object.width}
                                               height={object.height}/>
                                    </div>
                                    <p className={[classNames?.swiperTitle || styles['swiper__title'], 'font-body-bold'].join(' ')}>
                                        {object.title}
                                    </p>
                                    <p className={[classNames?.swiperText || styles['swiper__text'], 'font-body-mobile'].join(' ')}>
                                        {object.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </SwiperButtoned>
            <ul className={[classNames?.list || styles['implemented-objects__list'], classNames?.list || styles['list']].join(' ')}>
                {
                    objects.map(object => {
                        return (
                            <li key={object.src} className={[classNames?.listItem || styles['list__item']].join(' ')}>
                                <div
                                    className={[classNames?.listImageWrapper || styles['list__image-wrapper'], object.classNameImage].join(' ')}>
                                    <Image className={[classNames?.listImage || styles['list__image']].join(' ')}
                                           src={object.src}
                                           alt={object.alt}
                                           width={object.width}
                                           height={object.height}/>
                                </div>
                                <p className={[classNames?.listTitle || styles['list__title'], 'font-body-bold'].join(' ')}>
                                    {object.title}
                                </p>
                                <p className={[classNames?.listText || styles['list__text'], 'font-body-mobile'].join(' ')}>
                                    {object.description}
                                </p>
                            </li>
                        );
                    })
                }
            </ul>
            <div className={[classNames?.linkWrapper || styles['implemented-objects__link-wrapper']].join(' ')}>
                <LinkArrowGoTo variant='blue'
                               classNameArrow={styles['implemented-objects__link-arrow']}
                               className={styles['implemented-objects__link']} href='/objects'>
                    Все объекты
                </LinkArrowGoTo>
            </div>
        </div>
    );
}

export default ImplementedObjectsSection;