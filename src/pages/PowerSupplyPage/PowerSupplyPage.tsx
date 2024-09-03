import React from 'react';
import {CardProps} from "@/UI/CardList/types/CardProps.mjs";
import styles from "./styles/PowerSupplyPage.module.css";
import PathTitle from "@/UI/PathTitle/PathTitle";
import Image from "next/image";
import CardList from "@/UI/CardList/CardList";
import WorkStagesSection from "@/components/WorkStagesSection/WorkStagesSection";
import LinkArrowGoTo from "@/UI/LinkArrowGoTo/LinkArrowGoTo";
import WorkAreaDescription from "@/components/WorkAreaDescription/WorkAreaDescription";
import {SubmitRequestSection} from "@/modules/SubmitRequestSection";

function PowerSupplyPage() {
    const cards : CardProps[] = [
        {
            idCard: 0,
            iconName: "starHand",
            title: "Снижение затрат на электроэнергию",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 1,
            iconName: "fistFire",
            title: "Повышенная надёжность и стабильность",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 2,
            iconName: "like",
            title: "Увеличенная пропускная способность электросетей",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 3,
            iconName: "internet",
            title: "Оптимизация конструкции для конкретных потребностей объекта с нуля",
            description: "",
            iconWidth: 40,
            iconHeight: 40,
        },
        {
            idCard: 4,
            iconName: "gear",
            title: "Эффективное распределение электроэнергии, даёт возможность" +
                " компаниям отвечать на увеличивающиеся потребности в электричестве",
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
    const paths = [
        {
            href: 'https://mrmateriya.github.io/ElectricalSafetyHosting',
            title: 'Главная',
        }
    ]
    return (
        <main className={styles['PowerSupplyPage']}>
            <section className={[styles['PowerSupplyPage__introduction'], styles['introduction']].join(' ')}>
                <div className={[styles['introduction__wrapper'], 'container'].join(' ')}>
                    <PathTitle className={styles['introduction__path-title']} path={paths} currentPage={'ЭН (электроснабжение)'}/>
                    <WorkAreaDescription
                        classNames={{
                            description: styles['introduction__description'],
                            content: styles['description__content'],
                            contentTextFirst: styles['description__text-first'],
                            contentList: styles['description__list'],
                            photoWrapper: styles['description__photo-wrapper'],
                            contentTitle: styles['description__title']
                        }}
                        areaTitle={
                            <>
                                <span className={styles['description__area-title']}>Электроснабжение</span>
                                <span className={styles['description__area-title_dash']}>Электроснабже-<br/>ние</span>
                            </>
                        }
                        finalText={
                            <>
                                Наши<span dangerouslySetInnerHTML={{__html: ' специалисты '}}
                                          className={styles['description__text_yellow']}/>обладают необходимыми
                                допусками и квалификацией,
                                обеспечивая<span dangerouslySetInnerHTML={{__html: ' высокое качество '}} className={styles['description__text_yellow']}/>и безопасность
                                выполняемых работ.
                            </>
                        }
                        introductoryText={
                            <>
                                Наша компания предоставляет <br className={'separator_360'}/> комплексное
                                решение для строительно-монтажных работ по электроснабжению:
                            </>
                        }
                        list={{
                            items: [
                                {
                                    id: 0,
                                    title: 'Проектирование и монтаж новых сетей электроснабжения для строящихся объектов',
                                },
                                {
                                    id: 1,
                                    title: 'Реконструкция и замена существующих электросетей и электрооборудования',
                                },
                                {
                                    id: 2,
                                    title: 'Прокладка внешних кабельных линий открытым и закрытым способами',
                                },
                                {
                                    id: 3,
                                    title: 'Монтаж внутренних и наружных систем электроснабжения',
                                },
                                {
                                    id: 4,
                                    title: 'Подключение объектов к сетям электропитания',
                                },
                                {
                                    id: 5,
                                    title: 'Установка и наладка автоматики, электрощитового оборудования.',
                                },
                                {
                                    id: 6,
                                    title: 'Работа с силовыми и слаботочными системами',
                                },
                            ]}}
                        image='ElectricShield'/>
                </div>
            </section>
            <section className={[styles['PowerSupplyPage__advantages'], styles['advantages']].join(' ')}>
                <div className={[styles['advantages__wrapper'], 'container'].join(' ')}>
                    <h2 className={[styles['advantages__title'], 'font-headline-second'].join(' ')}>
                        преимущества
                    </h2>
                    <div className={styles['advantages__cards']}>
                        <CardList
                            className={[styles['advantages__card-list'],
                                styles['advantages__card-list_968']].join(' ')}
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
            <WorkStagesSection className={styles['PowerSupplyPage__work-stages']} stages={stages}/>
            <section
                className={[styles['PowerSupplyPage__implemented-objects'], styles['implemented-objects'], 'container'].join(' ')}>
                <h2 className={[styles['implemented-objects__title'], 'font-headline-second'].join(' ')}>
                    реализованные <br className='separator_768'/> объекты
                </h2>
                <ul className={[styles['implemented-objects__objects-list'], styles['objects-list']].join(' ')}>
                    <li className={styles['objects-list__item']}>
                        <div className={[styles['objects-list__photo-wrapper'], styles['objects-list__photo_tomskneftekhim']].join(' ')}>
                            <Image
                                className={styles['objects-list__photo']}
                                alt='Tomskneftekhim.png'
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Tomskneftekhim.png'
                                width={680}
                                height={511}
                            />
                        </div>
                        <p className={[styles['objects-list__title'], 'font-body-bold'].join(' ')}>
                            ООО «Томскнефтехим»
                        </p>
                        <ul className={[styles['objects-list__description-list'], styles['description-list'], 'font-body-mobile'].join(' ')}>
                            <li className={styles['description-list__item']}>
                                <div className={styles['description-list__dot']}></div>
                                <p className={styles['description-list__text']}>
                                    Произведено изменение схем управления и алгоритмов <br className='separator_968'/>
                                    управления АСУ <br className='separator_1920 separator_768'/> ТП масляных и конденсатных насосов турбоагрегатов М-1, М-2, М-5, М-6
                                </p>
                            </li>
                            <li className={styles['description-list__item']}>
                                <div className={styles['description-list__dot']}></div>
                                <p className={styles['description-list__text']}>
                                    Выполнен комплекс работ по «Повышению надежности электроснабжения
                                    установки <br className='separator_1920 separator_768 separator_480'/> производства
                                    промышленных газов» <br className='separator_1920 separator_480'/> Произведена прокладка кабельных линий ООО
                                    &quot;Криогенмаш-Газ&quot; <br className='separator_1920 separator_480'/> Выполнен ретрофит ячеек 10 кв на ГПП 2
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li className={styles['objects-list__item']}>
                        <div className={[styles['objects-list__photo-wrapper'], styles['objects-list__photo_rusal']].join(' ')}>
                            <Image
                                className={styles['objects-list__photo']}
                                alt='Rusal.png'
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Rusal.png'
                                width={640}
                                height={425}
                            />
                        </div>
                        <p className={[styles['objects-list__title'], 'font-body-bold'].join(' ')}>
                            АО «РУСАЛ Красноярский Алюминиевый Завод:
                        </p>
                        <ul className={[styles['objects-list__description-list'], styles['description-list'], 'font-body-mobile'].join(' ')}>
                            <li className={styles['description-list__item']}>
                                <div className={styles['description-list__dot']}></div>
                                <p className={styles['description-list__text']}>
                                    Выполнены монтаж и пусконаладочные работы по объекту «Экологическая реконструкция.
                                    Временное ограждение площадки строительства. Установлены граненые мачты освещения
                                    высотой 30м, смонтированы прожекторы освещения, смонтированы контуры заземления..
                                    Выполнена копка траншей, смонтированы кабельные лотки по периметру основного ограждения,
                                    произведена прокладка силовых и слаботочных кабелей.
                                </p>
                            </li>
                            <li className={styles['description-list__item']}>
                                <div className={styles['description-list__dot']}></div>
                                <p className={styles['description-list__text']}>
                                    Выполнены монтаж и пусконаладочные работы по объекту «Экологическая реконструкция.
                                    Временное ограждение анодно-монтажного отделения со смежными отделениями».
                                    Установлены граненые мачты освещения высотой 24м, смонтированы прожекторы освещения,
                                    смонтированы контуры заземления, установлены купольные камеры видеонаблюдения по периметру площадки
                                    строительства. Произведена копка траншей, произведена прокладка силовых и слаботочных кабелей.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={styles['implemented-objects__link-wrapper']}>
                    <LinkArrowGoTo variant='blue' classNameArrow={styles['implemented-objects__link-arrow']}
                                   className={styles['implemented-objects__link']} href='/objects'>
                        Все объекты
                    </LinkArrowGoTo>
                </div>
            </section>
            <SubmitRequestSection textVariant='call-order-full' className={styles['PowerSupplyPage__submit-request']}/>
            <SubmitRequestSection textVariant='call-order-reduced' className={styles['PowerSupplyPage__submit-request_reduced']}/>
        </main>
    );
}

export default PowerSupplyPage;