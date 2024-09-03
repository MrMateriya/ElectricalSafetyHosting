import React from 'react';
import {CardProps} from "@/UI/CardList/types/CardProps.mjs";
import styles from "./styles/APSSOUEPage.module.css";
import PathTitle from "@/UI/PathTitle/PathTitle";
import CardList from "@/UI/CardList/CardList";
import WorkStagesSection from "@/components/WorkStagesSection/WorkStagesSection";
import ImplementedObjectsSection from "@/components/ImplementedObjectsSection/ImplementedObjectsSection";
import {ImplementedObject} from "@/components/ImplementedObjectsSection/types/ImplementedObject.mjs";
import WorkAreaDescription from "@/components/WorkAreaDescription/WorkAreaDescription";
import {SubmitRequestSection} from "@/modules/SubmitRequestSection";

function APSSOUEPage() {
    const cards : CardProps[] = [
        {
            idCard: 0,
            iconName: "like",
            title: "СОУЭ укажет людям путь эвакуации и управляя дымоудалением.",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 1,
            iconName: "gear",
            title: "Датчики АПС обнаружат малейшее задымление или повышение температуры.",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 2,
            iconName: "protection",
            title: "АПС и СОУЭ спасают жизни, обеспечивая и быструю эвакуацию.",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 3,
            iconName: "timer",
            title: "Системы оповещения СОУЭ <br class='separator_768'/> мгновенно" +
                " предупредят <br class='separator_768'/> людей о пожаре <br class='separator_768'/> с помощью" +
                " звуковых <br class='separator_768'/> и световых сигналов.",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 4,
            iconName: "fistFire",
            title: "АПС и СОУЭ помогают минимизировать ущерб <br class='separator_360'/> и сократить" +
                " финансовые <br class='separator_1920'/> потери," +
                " связанные с пожаром.",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
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
    const objects : ImplementedObject[] = [
        {
            alt: 'TomskGeneration.png',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/TomskGeneration.png',
            title: 'АО «Томская генерация»',
            height: 355,
            width: 570,
            classNameImage: styles['swiper__image-wrapper_tomsk-generation'],
            description:
                <>
                    <span className={[styles['implemented-objects__article'],
                        styles['implemented-objects__article_TEC3']].join(' ')}>
                        <span className={styles['text__dot']}/>
                        ТЭЦ-3:
                    </span>
                Выполнены работы по монтажу и пуско-наладке модернизации систем АПС и СОУЭ
                в трёх промышленных корпусах станции.
                    <span className={[styles['implemented-objects__article'],
                        styles['implemented-objects__article_GREC2']].join(' ')}>
                        <span className={styles['text__dot']}/>
                        ГРЭС-2:
                    </span>
                Выполнены строительно-монтажные работы по модернизации системы АПС и СОУЭ
                в турбинном и котельном цеху.
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
                <>
                    <span className={[styles['implemented-objects__article'],
                        styles['implemented-objects__article_rosneft']].join(' ')}>
                        <span className={styles['text__dot']}/>
                        Реализован проект громкоговорящей связи на трёх производствах предприятия
                    </span>
                    <span className={styles['implemented-objects__article']}>
                        <span className={styles['text__dot']}/>
                        Смонтирована система аварийной
                        вентиляции с автоматическим включением <br className='separator_1920'/> при срабатывании
                        газоанализаторов химических веществ.
                    </span>
                </>,
        },
        {
            alt: 'TomskPolytechnicUniversity.png',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/TomskPolytechnicUniversity.png',
            title: 'Томский политехнический университет',
            height: 900,
            width: 657,
            classNameImage: styles['swiper__image-wrapper_tomsk-polytechnic-university'],
            description:
            `
                Произведён монтаж СКУД с категорийным допуском персонала на входных группах
                учебных корпусов, общежитий и ДК ТПУ. В случае сработки системы ПС, 
                автоматика производит разблокировку эвакуационных выходов и турникетов. 
                Система оснащена режимом «антипаника».
            `,
        },
        {
            alt: 'TomskStateUniversity.png',
            src: 'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/TomskStateUniversity.png',
            title: 'Томский государственный университет',
            height: 834,
            width: 1200,
            classNameImage: styles['swiper__image-wrapper_state-university'],
            description:
            <>
                Выполнены работы по монтажу системы автоматической пожарной сигнализации,
                <br/><br/>
                системы оповещения и управления эвакуацией людей при пожаре в учебном корпусе.
            </>,
        },
    ]
    const paths = [
        {
            href: '/',
            title: 'Главная',
        }
    ]
    return (
        <main className={styles['APSSOUEPage']}>
            <section className={[styles['APSSOUEPage__introduction'], styles['introduction']].join(' ')}>
                <div className={[styles['introduction__wrapper'], 'container'].join(' ')}>
                    <PathTitle className={styles['introduction__path-title']} path={paths} currentPage='АПС и СОУЭ'/>
                    <WorkAreaDescription
                        classNames={{
                            photoWrapper: styles['description__photo-wrapper'],
                            content: styles['description__content'],
                        }}
                        areaTitle='АПС и СОУЭ'
                        introductoryText={
                            <>
                                Автоматические системы пожарной сигнализации (АПС)
                                и системы <br className={['separator_968', "separator_768_invisible"].join(' ')}/> оповещения
                                и управления эвакуацией людей при пожаре (СОУЭ) <br className={['separator_968', 'separator_768_invisible'].join(' ')}/> являются неотъемлемой
                                частью обеспечения безопасности зданий <br className={['separator_968', 'separator_768_invisible'].join(' ')}/> и сооружений.
                            </>
                        }
                        finalText={
                            <>
                                Наша компания предлагает<span className={styles['description__text_yellow']}
                                                              dangerouslySetInnerHTML={{__html: ' полный комплекс '}}/>работ
                                по проектированию,монтажу и обслуживанию<span
                                className={styles['description__text_yellow']}
                                dangerouslySetInnerHTML={{__html: ' систем '}}/>АПС и СОУЭ
                            </>
                        }
                        list={{
                            title: 'Они предназначены для:',
                            items: [
                                {
                                    id: 0,
                                    title: 'Раннего обнаружения возгорания',
                                },
                                {
                                    id: 1,
                                    title: 'Своевременного оповещения людей',
                                },
                                {
                                    id: 2,
                                    title: 'Позволяют предотвратить распространение огня',
                                },
                                {
                                    id: 3,
                                    title: 'Позволяет спасти жизни',
                                },
                            ]
                        }}
                        image='Valve'/>
                </div>
            </section>
            <section className={[styles['APSSOUEPage__advantages'], styles['advantages']].join(' ')}>
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
                    </div>
                </div>
            </section>
            <WorkStagesSection className={styles['APSSOUEPage__work-stages']} stages={stages}/>
            <ImplementedObjectsSection
                classNames={{
                    objects: styles['APSSOUEPage__implemented-objects'],
                    swiperButtonPrev: styles['implemented-objects__button-prev'],
                    swiperButtonNext: styles['implemented-objects__button-next'],
                    swiperSlide: styles['implemented-objects__slide'],
                    swiperTitle: [styles['implemented-objects__title-swiper'], 'font-body-bold'].join(' '),
                    title: styles['implemented-objects__title'],
                    listTitle: styles['implemented-objects__list-title'],
                    listItem: styles['implemented-objects__list-item'],
                }}
                objects={objects}/>
            <SubmitRequestSection textVariant='call-order-full' className={styles['APSSOUEPage__submit-request']}/>
            <SubmitRequestSection textVariant='call-order-reduced' className={styles['APSSOUEPage__submit-request_reduced']}/>
        </main>
    );
}

export default APSSOUEPage;