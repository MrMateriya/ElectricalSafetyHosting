import React from 'react';
import styles from './styles/ObjectsPage.module.css'
import PathTitle from "@/UI/PathTitle/PathTitle";
import Image from "next/image";
function ObjectsPage() {
    const paths = [
        {
            href: 'https://mrmateriya.github.io/ElectricalSafetyHosting/',
            title: 'Главная',
        }
    ]

    return (
        <main className={[styles['objects-page']].join(' ')}>
            <div className={[styles['objects-page__wrapper'], 'container'].join(' ')}>
                <PathTitle className={styles['objects-page__path']} path={paths} currentPage={'Объекты'}/>
                <h2 className={[styles['objects-page__title'], 'font-headline-second'].join(' ')}>
                    Объекты
                </h2>
                <ul className={[styles['objects-page__objects'], styles['objects']].join(' ')}>
                    <li className={styles['objects__item']}>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_small'],
                            styles['objects__photo-wrapper_kuzbass-fuel-company']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/VinogradovskySection.png'
                                alt='VinogradovskySection.png'
                                width={1200}
                                height={834}
                            />
                        </div>
                        <div className={[styles['objects__description'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                Разрез Виноградовский <br className='separator_360'/> (филиал АО «КТК»)
                            </p>
                            <ul className={[styles['description__list'], styles['list']].join(' ')}>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Выполнены проектирование, монтаж и пусконаладочные работы по объекту
                                        «Инженерно-технические средства охраны и мероприятия по антитеррористической
                                        безопасности объекта» <br className='separator_1920 separator_968 separator_768 separator_480_invisible separator_360'/> на 3
                                        разрезах:«Караканск — Южный», ОФ № 2, <br className='separator_1920 separator_768_invisible'/> ОФ
                                        «Каскад 2».
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Произведён монтаж и пусконаладка систем контроля управления доступа,
                                        периметральной охранной сигнализации, системы охранного телевидения,
                                        охранного освещения, средств защиты проезда.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Установлен забор, противоподкопная решётка, противотаранный шлагбаум <br className='separator_968 separator_768_invisible'/> и КПП
                                        для физической <br className='separator_360'/> защиты периметра объекта
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={[styles['objects__item'], styles['objects__item_polus']].join(' ')}>
                        <div
                            className={[styles['objects__description'], styles['objects__description_polus'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                АО «Научно-производственный центр <br className='separator_968 separator_360_invisible'/> „Полюс“
                            </p>
                            <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                Выполнены работы по установке центральной многозональной <br/> системы
                                кондиционирования для офисного многоэтажного <br className='separator_1920 separator_968_invisible'/> здания.
                            </p>
                        </div>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_medium'],
                            styles['objects__photo-wrapper_npc-polus']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/VinogradovskySection.png'
                                alt='VinogradovskySection.png'
                                width={1200}
                                height={834}
                            />
                        </div>
                    </li>
                    <li className={styles['objects__item']}>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_small'],
                            styles['objects__photo-wrapper_tomskneftekhim']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Tomskneftekhim.png'
                                alt='Tomskneftekhim.png'
                                width={680}
                                height={511}
                            />
                        </div>
                        <div
                            className={[styles['objects__description'], styles['objects__description_bigger'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                ООО «Томскнефтехим»
                            </p>
                            <ul className={[styles['description__list'], styles['list']].join(' ')}>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Реализован проект взрывозащитного освещения производственного помещения.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        реализован проект видеонаблюдения на сливо-наливных эстакадах с наложением
                                        аналитики учёта использования страховочных привезей.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Реализован проект громкоговорящей связи на трёх производствах предприятия
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Смонтировано более <br className='separator_360'/> 100 систем кондиционирования по всей
                                        территории предприятия.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Смонтирована система аварийной вентиляции с автоматическим включением
                                        при срабатывании газоанализаторов химических веществ.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles['objects__item']}>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_small'],
                            styles['objects__photo-wrapper_tomsk-generation']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/TomskGeneration.png'
                                alt='TomskGeneration.png'
                                width={570}
                                height={355}
                            />
                        </div>
                        <div className={[styles['objects__description'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                АО «Томская генерация»
                            </p>
                            <div className={styles['description__text-wrapper']}>
                                <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                    ТЭЦ-3:
                                </p>
                                <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                    Выполнены работы по монтажу и пуско-наладке модернизации систем
                                    АПС и СОУЭ в трёх промышленных корпусах станции.
                                </p>
                                <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                    Выполнены работы по оснащению стратегических сооружений видеонаблюдением
                                    и системой контроля и управления доступом. В рамках реализации проекта КИТСО.
                                </p>
                                <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                    ГРЭС-2:
                                </p>
                                <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                    Выполнены строительно-монтажные работы
                                    по модернизации системы <br className='separator_360'/> АПС и СОУЭ в турбинном и котельном цеху.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className={styles['objects__item']}>
                        <div
                            className={[styles['objects__description'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                Томский государственный университет
                            </p>
                            <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                Выполнены работы по монтажу системы автоматической пожарной сигнализации, <br/>
                                системы оповещения и управления эвакуацией людей при пожаре
                                в учебном корпусе.
                            </p>
                        </div>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_medium'],
                            styles['objects__photo-wrapper_tomsk-state-university']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/TomskStateUniversity.png'
                                alt='TomskStateUniversity.png'
                                width={1024}
                                height={768}
                            />
                        </div>
                    </li>
                    <li className={styles['objects__item']}>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_small'],
                            styles['objects__photo-wrapper_rosneft']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Rosneft.png'
                                alt='Rosneft.png'
                                width={1024}
                                height={768}
                            />
                        </div>
                        <div className={[styles['objects__description'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                АО «Томскнефтепродукт»
                            </p>
                            <ul className={[styles['description__list'], styles['list']].join(' ')}>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Реализован проект ИТСО на Томской нефтебазе: установлено
                                        периметральное огражраждение серии Махаон, с применением
                                        противоподкопных решёток, армированной колючей проволокой.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Установлены противотаранные средства на железнодорожные и автомобильные
                                        въезды.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Периметр оборудован охранным освещением, видеонаблюдением, охранной
                                        сигнализацией.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        В сооружении периметра установлены бронедвери, бронеокна, бронелисты.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles['objects__item']}>
                        <div className={[styles['objects__description'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                Томский политехнический университет
                            </p>
                            <p className={[styles['description__text'], 'font-body'].join(' ')}>
                                Произведён монтаж СКУД на входных группах учебных корпусов,
                                общежитий <br className='separator_480 separator_360_invisible'/> и ДК ТПУ. В части корпусов произведены расширения
                                дверных проёмов и замена дверей эвакуационных выходов. <br className='separator_480 separator_360_invisible'/> В НТБ ТПУ произведён
                                капитальный ремонт входной группы с заменой системы отопления. <br/>
                                Система СКУД обеспечивает категорийный допуск персонала, студентов и гостей. Система
                                имеет единое информационное поле на всех объектах учебного заведения (более 30 корпусов).
                                В случае возникновения пожарной опасности и сработки системы ПС, автоматика
                                производит разблокировку эвакуационных выходов и турникетов. Система оснащена
                                режимом «антипаника».
                            </p>
                        </div>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_small'],
                            styles['objects__photo-wrapper_tomsk-polytechnic-university']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/TomskPolytechnicUniversity.png'
                                alt='TomskPolytechnicUniversity.png'
                                width={1024}
                                height={768}
                            />
                        </div>
                    </li>
                    <li className={styles['objects__item']}>
                        <div className={[styles['objects__photo-wrapper'],
                            styles['objects__photo-wrapper_small'],
                            styles['objects__photo-wrapper_rusal']].join(' ')}>
                            <Image
                                className={styles['objects__photo']}
                                src='https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/Rusal.png'
                                alt='Rusal.png'
                                width={640}
                                height={425}
                            />
                        </div>
                        <div
                            className={[styles['objects__description'], styles['objects__description_large'], styles['description']].join(' ')}>
                            <p className={[styles['description__title'], 'font-body-bold'].join(' ')}>
                                АО «РУСАЛ Красноярский Алюминиевый Завод:
                            </p>
                            <ul className={[styles['description__list'], styles['list']].join(' ')}>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Выполнены монтаж и пусконаладочные работы по объекту
                                        «Экологическая реконструкция. Временное ограждение площадки строительства.
                                        Видеонаблюдение за строительной площадкой». Произведён монтаж и пусконаладка
                                        систем периметральной охранной сигнализации, системы охранного телевидения,
                                        охранного освещения. Установлены гранёные мачты освещения высотой 30м, смонтированы
                                        прожекторы освещения, смонтированы контуры заземления, установлены купольные камеры
                                        видеонаблюдения по периметру площадки строительства. Произведена установка
                                        периметральной защиты «Трезор», смонтированы камеры видеонаблюдения по периметру
                                        основного ограждения строительной площадки. Выполнена копка траншей, смонтированы
                                        кабельные лотки по периметру основного ограждения, произведена прокладка силовых
                                        и слаботочных кабелей.
                                    </p>
                                </li>
                                <li className={styles['list__item']}>
                                    <div className={styles['list__dot']}></div>
                                    <p className={[styles['list__text'], 'font-body'].join(' ')}>
                                        Выполнены монтаж и пусконаладочные работы по объекту «Экологическая реконструкция.
                                        Временное ограждение анодно-монтажного отделения со смежными отделениями».
                                        Произведён монтаж и пусконаладка системы охранного телевидения, охранного освещения.
                                        Установлены гранёные мачты освещения высотой 24м, смонтированы прожекторы освещения,
                                        смонтированы контуры заземления, установлены купольные камеры видеонаблюдения по периметру
                                        площадки строительства. Произведена копка траншей, произведена прокладка силовых и слаботочных кабелей.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default ObjectsPage;