import React from 'react';
import styles from './styles/KITSOPage.module.css'
import PathTitle from "@/UI/PathTitle/PathTitle";
import CardList from "@/UI/CardList/CardList";
import {CardProps} from "@/UI/CardList/types/CardProps.mjs";
import WorkStagesSection from "@/components/WorkStagesSection/WorkStagesSection";
import ImplementedObjectsSection from "@/components/ImplementedObjectsSection/ImplementedObjectsSection";
import {ImplementedObject} from "@/components/ImplementedObjectsSection/types/ImplementedObject.mjs";
import WorkAreaDescription from "@/components/WorkAreaDescription/WorkAreaDescription";
import {SubmitRequestSection} from "@/modules/SubmitRequestSection";

function KITSOPage() {
    const cards: CardProps[] = [
        {
            idCard: 0,
            iconName: "key",
            title: "Снижение риска краж, вандализма и других преступлений",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 1,
            iconName: "woman",
            title: "Повышение безопасности сотрудников, клиентов и посетителей",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 2,
            iconName: "like",
            title: "Улучшение общего управления безопасностью и рисками",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 3,
            iconName: "fistFire",
            title: "Создание сдерживающего эффекта для потенциальных злоумышленников",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 4,
            iconName: "gear",
            title: "Интеграция с другими системами безопасности, такими как видеонаблюдение и контроль доступа",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 5,
            iconName: "toDoList",
            title: "Соблюдение нормативных требований и отраслевых стандартов",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 6,
            iconName: "starHand",
            title: "Сокращение расходов на охрану и страхование",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
    ]
    const objects: ImplementedObject[] = [
        {
            alt: 'TomskGeneration.png',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/TomskGeneration.png',
            title: 'АО «Томская генерация»',
            height: 355,
            width: 570,
            classNameImage: styles['swiper__image-wrapper_tomsk-generation'],
            description:
                <>
                    ТЭЦ-3:
                    <br/><br/>
                    Выполнены работы по оснащению стратегических сооружений видеонаблюдением
                    и системой
                    контроля и управления доступом. В рамках реализации проекта КИТСО.
                </>,
        },
        {
            alt: 'Rosneft.png',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Rosneft.png',
            title: <>АО «Томскнефтепро<br className={styles['separator-swiper']}/>дукт» ВНК</>,
            height: 768,
            width: 1024,
            classNameImage: styles['swiper__image-wrapper_rosneft'],
            description:
                `
                Реализован проект ИТСО на Томской нефтебазе: установлено периметральное
                огражраждение серии Махаон с установкой бронедверей, бронеокон. Периметр
                оборудован охранным освещением, видеонаблюдением, сигнализацией.
            `,
        },
        {
            alt: 'Rusal.png',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Rusal.png',
            title: 'АО «РУСАЛ Красноярский Алюминиевый Завод',
            height: 425,
            width: 640,
            classNameImage: styles['swiper__image-wrapper_rusal'],
            description:
                `
                Произведён монтаж и пусконаладка систем периметральной охранной сигнализации,
                системы охранного телевидения, охранного освещения. Произведена установка периметральной
                защиты «Трезор», смонтированы камеры видеонаблюдения по периметру основного ограждения
                строительной площадки.
            `,
        },
        {
            alt: 'VinogradovskySection.png',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/VinogradovskySection.png',
            title: 'Разрез Виноградовский (филиал АО «КТК»)',
            height: 834,
            width: 1200,
            classNameImage: styles['swiper__image-wrapper_vinogradovsky-section'],
            description:
            `
                Выполнены проектирование, монтаж и пусконаладочные работы по объекту на 3 разрезах: 
                "Караканск - Южный", ОФ №2, ОФ "Каскад 2". 
                Произведен монтаж и пусконаладка СКУД, ПОС, СОТ, СОО.
            `,
        },
    ]
    const stages = [
        {id: 'examination', text: 'Предпроектное обследование (бесплатно)'},
        {id: 'PIR', text: 'Заключение договора на ПИР'},
        {id: 'solutions', text: 'Разработка основных технических решений'},
        {id: 'documentation', text: 'Разработка проектно-сметной документации'},
        {id: 'SMR', text: 'Заключение договора на СМР'},
        {id: 'TMC', text: 'Поставка ТМЦ'},
        {id: 'mounting', text: 'Монтаж'},
        {id: 'PNR', text: 'ПНР'},
        {id: 'documentTO', text: 'Заключение договора <br/> на ТО с последующим ТО'},
    ]
    const paths = [
        {
            href: '/',
            title: 'Главная',
        }
    ]

    return (
        <main className={styles['KITSOPage']}>
            <section className={[styles['KITSOPage__introduction'], styles['introduction']].join(' ')}>
                <div className={[styles['introduction__wrapper'], 'container'].join(' ')}>
                    <PathTitle className={styles['introduction__path-title']} path={paths} currentPage='КИТСО'/>
                    <WorkAreaDescription
                        classNames={{
                            description: styles['introduction__description'],
                            content: styles['description__content'],
                            photoWrapper: styles['description__photo-wrapper'],
                        }}
                        areaTitle='КИТСО'
                        introductoryText={
                            <>
                                Комплекс инженерно-технических средств охраны представляет собой
                                комплекс взаимосвязанных устройств и систем, разработанных для защиты
                                имущества и обеспечения безопасности.
                            </>
                        }
                        finalText={
                            <>
                                <span dangerouslySetInnerHTML={{__html: 'Инвестиции '}}
                                      className={styles['description__text_yellow']}></span>
                                в комплекс инженерно-технических средств охраны
                                <span dangerouslySetInnerHTML={{__html: ' могут обеспечить значительную отдачу '}}
                                      className={styles['description__text_yellow']}></span>
                                <br className='separator_480'/> от вложений, создавая более безопасную
                                и защищённую
                                среду для вашего бизнеса или организации.
                            </>
                        }
                        list={{
                            title: 'Он обеспечивает:',
                            items: [
                                {
                                    id: 0,
                                    title: 'Предотвращение несанкционированного доступа',
                                },
                                {
                                    id: 1,
                                    title: 'Обнаружение и реагирование на вторжения',
                                },
                                {
                                    id: 2,
                                    title: 'Мониторинг и контроль территории',
                                },
                                {
                                    id: 3,
                                    title: 'Предоставление доказательств в случае инцидента',
                                },
                            ]}}
                        image='BarbedWire'/>
                </div>
            </section>
            <section className={[styles['KITSOPage__advantages'], styles['advantages']].join(' ')}>
                <div className={[styles['advantages__wrapper'], 'container'].join(' ')}>
                    <h2 className={[styles['advantages__title'], 'font-headline-second'].join(' ')}>
                        преимущества
                    </h2>
                    <div className={styles['advantages__cards']}>
                        <CardList
                            className={[styles['advantages__card-list'], styles['advantages__card-list_968']].join(' ')}
                            classNameDescription={styles['advantages__card-list-description']}
                            classNameIcon={styles['advantages__card-list-icon']}
                            classNameIconWrapper={styles['advantages__card-list-icon-wrapper']}
                            classNameItem={[styles['advantages__card-list-item'], 'font-body-bold'].join(' ')}
                            classNameTitle={styles['advantages__card-list-title']}
                            classNameListWrapper={styles['advantages__card-list-wrapper']}
                            cards={cards}
                            spriteSheetHref='https://mrmateriya.github.io/ElectricalSafetyHosting/images/iconAtlases/size_40.svg'/>
                        <CardList
                            className={styles['advantages__card-list']}
                            classNameDescription={styles['advantages__card-list-description']}
                            classNameIcon={styles['advantages__card-list-icon']}
                            classNameIconWrapper={styles['advantages__card-list-icon-wrapper']}
                            classNameItem={[styles['advantages__card-list-item'], 'font-body-bold'].join(' ')}
                            classNameTitle={styles['advantages__card-list-title']}
                            classNameListWrapper={styles['advantages__card-list-wrapper']}
                            cards={[cards[0], cards[1], cards[2]]}
                            spriteSheetHref='https://mrmateriya.github.io/ElectricalSafetyHosting/images/iconAtlases/size_40.svg'/>
                        <CardList
                            className={[styles['advantages__card-list'], styles['advantages__card-list_middle']].join(' ')}
                            classNameDescription={styles['advantages__card-list-description']}
                            classNameIcon={styles['advantages__card-list-icon']}
                            classNameIconWrapper={styles['advantages__card-list-icon-wrapper']}
                            classNameItem={[styles['advantages__card-list-item'], 'font-body-bold'].join(' ')}
                            classNameTitle={styles['advantages__card-list-title']}
                            classNameListWrapper={styles['advantages__card-list-wrapper']}
                            cards={[cards[3], cards[4]]}
                            spriteSheetHref='https://mrmateriya.github.io/ElectricalSafetyHosting/images/iconAtlases/size_40.svg'/>
                        <CardList
                            className={[styles['advantages__card-list'], styles['advantages__card-list_down']].join(' ')}
                            classNameDescription={styles['advantages__card-list-description']}
                            classNameIcon={styles['advantages__card-list-icon']}
                            classNameIconWrapper={styles['advantages__card-list-icon-wrapper']}
                            classNameItem={[styles['advantages__card-list-item'], 'font-body-bold'].join(' ')}
                            classNameTitle={styles['advantages__card-list-title']}
                            classNameListWrapper={styles['advantages__card-list-wrapper']}
                            cards={[cards[5], cards[6]]}
                            spriteSheetHref='https://mrmateriya.github.io/ElectricalSafetyHosting/images/iconAtlases/size_40.svg'/>
                    </div>
                </div>
            </section>
            <WorkStagesSection stages={stages} className={styles['KITSOPage__work-stages']}/>
            <ImplementedObjectsSection
                classNames={{
                    objects: styles['KITSOPage__implemented-objects'],
                    swiperButtonPrev: styles['implemented-objects__button-prev'],
                    swiperButtonNext: styles['implemented-objects__button-next'],
                    swiperSlide: styles['implemented-objects__slide'],
                    title: styles['implemented-objects__title'],
                    listTitle: styles['implemented-objects__list-title'],
                    listItem: styles['implemented-objects__list-item'],
                }}
                objects={objects}/>
            <SubmitRequestSection textVariant='call-order-full' className={styles['KITSOPage__submit-request']}/>
            <SubmitRequestSection textVariant='call-order-reduced' className={styles['KITSOPage__submit-request_reduced']}/>
        </main>
    );
}

export default KITSOPage;