import {HTMLAttributes} from "react";
import {SwiperOptions} from "swiper/types";

interface SwiperButtonedProps extends HTMLAttributes<HTMLDivElement> {
    swiperOptions:  SwiperOptions;
    classNameButtonPrev?: string,
    classNameButtonNext?: string,
    classNameButtonPrevSVG?: string,
    classNameButtonNextSVG?: string,
}

export type {SwiperButtonedProps}