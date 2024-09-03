// @ts-nocheck
'use client'

import React, {useState} from 'react';
import styles from "./styles/SwiperButtoned.module.css";
import {Swiper} from "swiper/react";
import {SwiperButtonedProps} from "@/components/SwiperButtoned/types/SwiperButtonedProps.mjs";

const SwiperButtoned = function SwiperButtoned ({
                            className,
                            classNameButtonPrev,
                            classNameButtonNext,
                            classNameButtonPrevSVG,
                            classNameButtonNextSVG,
                            swiperOptions,
                            children,
                            ...props} : SwiperButtonedProps) {
    const [refSwiper, setRefSwiper] = useState(null)

    return (
        <div className={[styles['swiper-buttoned-wrapper'], styles['swiper-buttoned'], className].join(' ')} {...props}>
            <button tabIndex={0} onClick={(e) => {
                refSwiper.slidePrev()
            }}
                    className={[styles['swiper-buttoned__button'], styles['swiper-buttoned__button-prev'], classNameButtonPrev].join(' ')}>
                <svg className={[styles['swiper-buttoned__button-prev-svg'], classNameButtonPrevSVG].join(' ')}
                     width="40" height="40"
                     viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                        <rect width="40" height="40" rx="20"/>
                        <path d="M23 30L13 20L23 10" stroke="white" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </g>
                </svg>
            </button>
            <Swiper {...swiperOptions}
                    onSwiper={(swiper) => {
                        setRefSwiper(swiper)
                    }}
                    className={[styles['swiper-buttoned__swiper'], styles['swiper-buttoned']].join(' ')}>
                {children}
            </Swiper>
            <button tabIndex={0} onClick={(e) => {
                refSwiper.slideNext()
            }}
                    className={[styles['swiper-buttoned__button'], styles['swiper-buttoned__button-next'], classNameButtonNext].join(' ')}>
                <svg className={[styles['swiper-buttoned__button-next-svg'], classNameButtonNextSVG].join(' ')}
                     width="40" height="40"
                     viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                        <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(180 40 40)"/>
                        <path d="M17 10L27 20L17 30" stroke="white" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </g>
                </svg>
            </button>
        </div>
    );
}

export default SwiperButtoned;