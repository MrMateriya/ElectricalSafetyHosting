import {ImplementedObject} from "./ImplementedObject.mjs";

interface ImplementedObjectsSectionProps {
    objects: ImplementedObject[],
    classNames?: {
        objects?: string,
        title?: string,
        linkWrapper?: string,
        swiperButtonNext?: string,
        swiperButtonPrev?: string,
        swiperImageWrapper?: string,
        swiperSlide?: string,
        swiper?: string,
        swiperTitle?: string,
        swiperText?: string,
        swiperImage?: string,
        list?: string,
        listItem?: string,
        listImage?: string,
        listImageWrapper?: string,
        listTitle?: string,
        listText?: string,
    }
}
export type {ImplementedObjectsSectionProps}