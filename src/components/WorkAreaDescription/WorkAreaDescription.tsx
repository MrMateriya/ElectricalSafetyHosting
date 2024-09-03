import React from 'react';
import styles from './styles/WorkAreaDescription.module.css'
import Image from "next/image";
import {WorkAreaDescriptionProps} from "@/components/WorkAreaDescription/types/WorkAreaDescriptionProps.mjs";

function WorkAreaDescription({
                                 classNames,
                                 areaTitle,
                                 introductoryText,
                                 finalText,
                                 image,
                                 list,
                                 ...props} : WorkAreaDescriptionProps) {
    let imageOptions = {
        width: 0,
        height: 0,
        src: '',
        alt: '',
        classNamePrefix: '',
    };
    switch (image) {
        case "BarbedWire":
            imageOptions.width = 2048;
            imageOptions.height = 1356;
            imageOptions.src = 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/BarbedWire.jfif';
            imageOptions.alt = 'BarbedWire.jfif';
            imageOptions.classNamePrefix = 'barbed-wire'
            break;
        case "ElectricShield":
            imageOptions.width = 776;
            imageOptions.height = 1090;
            imageOptions.src = 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/ElectricShield.png';
            imageOptions.alt = 'ElectricShield.png';
            imageOptions.classNamePrefix = 'electric-shield'
            break;
        case "Valve":
            imageOptions.width = 3840;
            imageOptions.height = 2560;
            imageOptions.src = 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Valve.jfif';
            imageOptions.alt = 'Valve.jfif';
            imageOptions.classNamePrefix = 'valve'
            break;
    }

    return (
        <div className={[styles['description'], classNames?.description].join(' ')} {...props}>
            {
                areaTitle
                    ?   <h2 className={[styles['description__title'],
                            classNames?.contentTitle,
                            styles['description__title_968'],
                            'font-headline-second'].join(' ')}>
                            {areaTitle}
                        </h2>
                    :   false
            }
            <div className={[styles['description__photo-wrapper'],
                styles['description__photo-wrapper_968'],
                classNames?.photoWrapper,
                styles[`description__photo-wrapper_${imageOptions.classNamePrefix}`]].join(' ')}>
                <Image
                    width={imageOptions.width}
                    height={imageOptions.height}
                    className={styles['description__photo']}
                    src={imageOptions.src}
                    alt={imageOptions.alt}/>
            </div>
            <div className={[styles['description__content'], styles['content'], classNames?.content].join(' ')}>
                {
                    areaTitle
                        ?   <h2 className={[styles['content__title'], classNames?.contentTitle, 'font-headline-second'].join(' ')}>
                                {areaTitle}
                            </h2>
                        :   false
                }
                {
                    introductoryText
                        ?   <p className={[styles['content__text-first'], classNames?.contentTextFirst].join(' ')}>
                                {introductoryText}
                            </p>
                        : false
                }
                {
                    list?.title
                        ?   <p className={[styles['content__list-title'], classNames?.contentListTitle, 'font-body-bold'].join(' ')}>
                                {list?.title}
                            </p>
                        :   false
                }
                {
                    list?.items
                        ?   <ul className={[styles['content__list'], styles['list'], classNames?.contentList].join(' ')}>
                                {
                                    list?.items.map(item => {
                                        return (
                                            <li key={item.id}
                                                className={[styles['list__item'], classNames?.listItem].join(' ')}
                                                dangerouslySetInnerHTML={{__html: item.title}}/>
                                        );
                                    })
                                }
                            </ul>
                        :   false
                }
                {
                    finalText
                        ? <p className={[styles['content__text-second'], classNames?.contentTextSecond].join(' ')}>
                            {finalText}
                        </p>
                        : false
                }
            </div>
            <div className={[styles['description__photo-wrapper'],
                classNames?.photoWrapper,
                styles[`description__photo-wrapper_${imageOptions.classNamePrefix}`]].join(' ')}>
            <Image
                    width={imageOptions.width}
                    height={imageOptions.height}
                    className={styles['description__photo']}
                    src={imageOptions.src}
                    alt={imageOptions.alt}/>
            </div>
        </div>
    );
}

export default WorkAreaDescription;