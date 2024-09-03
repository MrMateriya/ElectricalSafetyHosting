import React from 'react';
import styles from './styles/ObjectListSection.module.css'
import Image from "next/image";
import LinkArrowGoTo from "@/UI/LinkArrowGoTo/LinkArrowGoTo";
import {ObjectListSectionProps} from "@/components/ObjectListSection/types/ObjectListSectionProps.mjs";
function ObjectListSection({className, ...props}: ObjectListSectionProps) {
    const objects = [
        {
            id: 0,
            classNameImage: styles['objects__image-vinogradovsky-section'],
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/VinogradovskySection.png',
            alt: 'VinogradovskySection.png',
            width: 1200,
            height: 834,
            title: `Разрез Виноградовский (филиал <br class='separator separator_1920 separator_360'/> АО «КТК»)`,
            description: 'Выполнены проектирование, монтаж и пусконаладочные работы по объекту ' +
                '«Инженерно-технические средства охраны и мероприятия по антитеррористической ' +
                'безопасности объекта» на 3 разрезах:"Караканск — Южный», ОФ № 2, ОФ «Каскад <br class="separator_768"/> 2».',
        },
        {
            id: 1,
            classNameImage: styles['objects__image-npc-polus'],
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/NPCPolus.png',
            alt: 'NPCPolus.png',
            width: 1024,
            height: 768,
            title: `АО «Научно-производственный центр „Полюс“`,
            description: 'Выполнены работы по установке центральной многозональной <br/><br/>' +
                'системы кондиционирования для офисного многоэтажного здания.',
        },
        {
            id: 2,
            classNameImage: styles['objects__image-tomskneftekhim'],
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Tomskneftekhim.png',
            alt: 'VinogradovskySection.png',
            width: 680,
            height: 511,
            title: `ООО «Томскнефтехим»`,
            description: 'Реализован проект взрывозащитного освещения, громкоговорящей связи на трёх ' +
                'производствах, смонтирована система аварийной вентиляции при срабатывании газоанализаторов' +
                ' химических веществ.Смонтировано видеонаблюдение с аналитикой использования страховочных привязей.',
        },
    ]
    return (
        <section className={[styles['section'], className].join(' ')} {...props}>
            <div className={[styles['section__wrapper'], 'container'].join(' ')}>
                <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                    Объекты
                </h2>
                <ul className={[styles['section__objects'], styles['objects']].join(' ')}>
                    {
                        objects.map(object => {
                            return (
                                <li key={object.id} className={styles['objects__item']}>
                                    <div className={[styles['objects__image-wrapper'],
                                        object.classNameImage].join(' ')}>
                                        <Image
                                            className={styles['objects__image']}
                                            src={object.src}
                                            alt={object.alt}
                                            width={object.width}
                                            height={object.height}
                                        />
                                    </div>
                                    <p className={[styles['objects__title'], 'font-body-bold'].join(' ')}
                                       dangerouslySetInnerHTML={{__html: object.title}}></p>
                                    <p className={[styles['objects__description'], 'font-body-mobile'].join(' ')}
                                       dangerouslySetInnerHTML={{__html: object.description}}></p>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className={styles['section__link-wrapper']}>
                    <LinkArrowGoTo className={styles['section__link']} classNameArrow={styles['link-arrow']}
                                   href='/objects'>
                        Все объекты
                    </LinkArrowGoTo>
                </div>
            </div>
        </section>
    );
}

export default ObjectListSection;