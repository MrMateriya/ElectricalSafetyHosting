import React from 'react';
import styles from './styles/WorkAreaSection.module.css'
import Image from "next/image";
import LinkArrowGoTo from "@/UI/LinkArrowGoTo/LinkArrowGoTo";
import {WorkAreaSectionProps} from './types/WorkAreaSectionProps.mjs'

function WorkAreaSection({className, ...props}: WorkAreaSectionProps) {
    const areas = [
        {
            id: 0,
            title: 'АПС и СОУЭ',
            href: '/APSSOUE',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Valve.jfif',
            classNameImage: styles['areas__image-container_valves'],
            alt: 'Valves.jfif',
            width: 3840,
            height: 2560,
        },
        {
            id: 1,
            title: 'КИТСО',
            href: '/KITSO',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/BarbedWire.jfif',
            classNameImage: styles['areas__image-container_barbed-wire'],
            alt: 'BarbedWire.jfif',
            width: 2048,
            height: 1356,
        },
        {
            id: 2,
            title: 'ЭН (электроснабжение)',
            href: '/PowerSupply',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/ElectricShield.png',
            classNameImage: styles['areas__image-container_electric-shield'],
            alt: 'ElectricShield.png',
            width: 604,
            height: 520,
        }
    ]

    return (
        <section className={[styles['section'], className].join(' ')} {...props}>
            <div className={[styles['section__wrapper'], 'container'].join(' ')}>
                <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                    Наши Направления
                </h2>
                <ul className={[styles['section__areas'], styles['areas']].join(' ')}>
                    {
                        areas.map(area => {
                            return (
                                <li key={area.id} className={styles['areas__item']}>
                                    <div
                                        className={[styles['areas__image-container'],
                                        area.classNameImage].join(' ')}>
                                        <Image
                                            src={area.src} className={styles['areas__image']}
                                            alt={area.alt} width={area.width} height={area.height}/>
                                    </div>
                                    <div className={styles['areas__description']}>
                                        <h4 className={[styles['areas__title'], 'font-body'].join(' ')}
                                            dangerouslySetInnerHTML={{__html: area.title}}></h4>
                                        <LinkArrowGoTo className={styles['areas__link']} classNameArrow={styles['link__arrow']} href={area.href}>
                                            Узнать больше
                                        </LinkArrowGoTo>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default WorkAreaSection;