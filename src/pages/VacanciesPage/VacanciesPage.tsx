import styles from './styles/VacanciesPage.module.css'
import PathTitle from "@/UI/PathTitle/PathTitle";
import VacancyList from "@/components/VacancyList/VacancyList";
import {Information} from "@/components/Vacancy/types/Information.mjs";
import {SubmitRequestSection} from "@/modules/SubmitRequestSection";
function VacanciesPage() {
    const vacancies : Information[] = [
        {
            vacancyKey: 0,
            vacancyTitle: 'Электромонтажник слаботочных систем',
            salaryTitle: 'ЗП обсуждается <br class="separator_360"/> на собеседовании',
            responsibilities: [
                { id: 0, title: 'Работа со слаботочными системами'},
                { id: 1, title: 'Сборка электрощитовой продукции'},
                { id: 2, title: 'Выполнение электромонтажных работ на объектах заказчика, установка <br class="separator_360"/> и подключение электрооборудования'},
                { id: 3, title: 'Прокладка кабельной продукции'},
            ],
            requirements: [
                { id: 0, title: 'Профильное образование'},
                { id: 1, title: 'Желателен опыт работы электромонтажа от 1 года'},
                { id: 2, title: 'Грамотная и бережная работа с ручным <br class="separator_968 separator_768_invisible separator_480"/> и электроинструментом'},
                { id: 3, title: 'Ответственность, исполнительность, внимательность'},
                { id: 4, title: 'Рассмотрим без опыта работы начинающих <br class="separator_480 separator_360_invisible"/> специалистов'},
            ],
            conditions: [
                { id: 0, title: 'Официальное трудоустройство'},
                { id: 1, title: 'Обеспечение спецодеждой'},
                { id: 2, title: 'Стабильная и своевременная заработная плата'},
                { id: 3, title: 'График работы: полный рабочий день, командировки'},
            ],
            city: 'Томск',
            workFormat: 'на объекте',
            experience: 'от 1 года',
            employment: 'полный день',
        },
        {
            vacancyKey: 1,
            vacancyTitle: 'Электромонтажник',
            salaryTitle: 'ЗП обсуждается <br class="separator_360"/> на собеседовании',
            responsibilities: [
                { id: 0, title: 'Выполнение работ по монтажу электроосвещения'},
                { id: 1, title: 'Монтаж распределительных щитов, пультов, шкафов'},
                { id: 2, title: 'Прокладка электрических кабелей‚ подключение розеток‚ электрощитов <br class="separator_360"/> и осветительных приборов'},
                { id: 3, title: 'Установка и подключение электрооборудования'},
            ],
            requirements: [
                { id: 0, title: 'Профильное образование'},
                { id: 1, title: 'Опыт работ 1–3 года'},
                { id: 2, title: 'Ответственность, исполнительность, внимательность'},
            ],
            conditions: [
                { id: 0, title: 'Официальное трудоустройство'},
                { id: 1, title: 'Обеспечение спецодеждой'},
                { id: 2, title: 'Стабильная и своевременная заработная плата, премии'},
                { id: 3, title: 'График работы: полный рабочий день, возможны командировки'},
            ],
            city: 'Томск',
            workFormat: 'на объекте',
            experience: '1–3 года',
            employment: 'полный день',
        },
        {
            vacancyKey: 2,
            vacancyTitle: 'Инженер ПТО',
            salaryTitle: 'ЗП обсуждается <br class="separator_360"/> на собеседовании',
            responsibilities: [
                { id: 0, title: 'Разработка и согласование проектов производства работ, технологических карт, формирование разрешительной документации'},
                { id: 1, title: 'Своевременное оформление исполнительной документации (акты, протоколы, ведомости, исполнительные схемы и т.д.)'},
                { id: 2, title: 'Ведение специальных журналов работ'},
                { id: 3, title: 'Анализ проектно-сметной документации'},
                { id: 4, title: 'Взаимодействие с представителями надзорных органов, представителями заказчика и субподрядных организаций <br class="separator_768_invisible"/> на объектах строительства'},
                { id: 5, title: 'Подписание актов и ведомостей выполненных работ'},
                { id: 6, title: 'Формирование и сдача приемо-сдаточной документации <br class="separator_968 separator_768_invisible"/> в архив заказчика'},
            ],
            requirements: [
                { id: 0, title: 'Среднее специальное/высшее техническое в приоритете'},
                { id: 1, title: 'Умение читать проектную/рабочую документацию'},
                { id: 2, title: 'Знание нормативно-технической документации (СП, СНИПы и др.)'},
                { id: 3, title: 'Навыки в проведении переговоров <br class="separator_360"/> с заказчиками <br class="separator_1920 separator_968 separator_768_invisible separator_480 separator_360_invisible"/> и субподрядчиками'},
                { id: 4, title: 'Уверенный пользователь ПК, офисных программ'},
                { id: 5, title: 'Умение работать с программой AutoCAD'},
                { id: 6, title: 'Ответственность, целеустремлённость, коммуникабельность, внимательность'},
            ],
            conditions: [
                { id: 0, title: 'Официальное трудоустройство'},
                { id: 1, title: 'Стабильная заработная плата'},
                { id: 2, title: 'Полный рабочий день, 5/2'},
                { id: 3, title: 'Корпоративные мероприятия'},
            ],
            city: 'Томск',
            workFormat: 'в офисе',
            experience: 'от 1 года',
            employment: 'полный день',
        },
        {
            vacancyKey: 3,
            vacancyTitle: 'Прораб',
            salaryTitle: 'ЗП обсуждается <br class="separator_360"/> на собеседовании',
            responsibilities: [
                { id: 0, title: 'Руководство строительными бригадами'},
                { id: 1, title: 'Составление ежемесячного плана работ участка'},
                { id: 2, title: 'Составление графиков производства работ'},
                { id: 3, title: 'Формирование заявок на основные материалы <br class="separator_968 separator_768_invisible"/> и расходники, инструмент, механизмы'},
                { id: 4, title: 'Составление ежедневного плана работ на участке строительства, проведение совещаний с ИТР и заказчиком'},
                { id: 5, title: 'Осуществление контроля качества производства работ, корректировки графиков производства работ, поставки материалов, соблюдения сроков строительства'},
                { id: 6, title: 'Обеспечение соблюдения на объекте строительства правил и норм охраны труда, требований пожарной безопасности и охраны окружающей среды'},
                { id: 7, title: 'Взаимодействие с генеральным подрядчиком, заказчиком <br class="separator_768_invisible"/> и авторским надзором, решение возникающих проектных вопросов'},
            ],
            requirements: [
                { id: 0, title: 'Опыт аналогичной работы от 3-х лет (в должности мастер, производитель работ, начальник участка)'},
                { id: 1, title: 'Умение работать с ППР, строительными чертежами'},
                { id: 2, title: 'Способность работать в режиме многозадачности'},
            ],
            conditions: [
                { id: 0, title: 'Официальное трудоустройство'},
                { id: 1, title: 'Обеспечение спецодеждой'},
                { id: 2, title: 'Стабильная и своевременная заработная плата, премии'},
                { id: 3, title: 'Оплата услуг связи'},
                { id: 4, title: 'График работы: полный рабочий день, возможны командировки'},
            ],
            city: 'Томск',
            workFormat: 'на объекте',
            experience: 'от 3-х лет',
            employment: 'полный день',
        },
        {
            vacancyKey: 4,
            vacancyTitle: 'Инженер ОПС',
            salaryTitle: 'ЗП обсуждается <br class="separator_360"/> на собеседовании',
            responsibilities: [
                { id: 0, title: 'Проведение технического обслуживания систем ОПС, СОТ, <br class="separator_768_invisible"/> СКУД, ПОС'},
                { id: 1, title: 'Руководство подчинённым персоналом'},
                { id: 2, title: 'Чтение проектной документации'},
                { id: 3, title: 'Подготовка и подписание исполнительной документации'},
                { id: 4, title: 'Выдача материалов и оборудования в работу'},
            ],
            requirements: [
                { id: 0, title: 'Образование — не важно'},
                { id: 1, title: 'Опыт работы от 3 лет по монтажу и наладке средств ОПС, СОТ, <br class="separator_968_invisible"/> СКУД, ПОС'},
                { id: 2, title: 'Опыт работы — от 3-х лет'},
                { id: 3, title: 'Знание устройства и работы средств ОПС, СОТ, СКУД, ПОС'},
                { id: 4, title: 'Внимательность, высокая работоспособность, ответственность, нацеленность на результат'},
            ],
            conditions: [
                { id: 0, title: 'Официальное трудоустройство'},
                { id: 1, title: 'Стабильная и своевременная заработная плата, премии'},
                { id: 2, title: 'Полный рабочий день, 5/2'},
                { id: 3, title: 'Корпоративные мероприятия'},
            ],
            city: 'Томск',
            workFormat: 'в офисе',
            experience: 'от 3-х лет',
            employment: 'полный день',
        },
    ]
    const paths = [
        {
            href: '/',
            title: 'Главная',
        }
    ]

    return (
        <main className={styles['vacancies-page']}>
            <div className={[styles['vacancies-page__wrapper'], 'container'].join(' ')}>
                <PathTitle className={styles['vacancies-page__path-title']} path={paths} currentPage='Вакансии'/>
                <h2 className={[styles['vacancies-page__title'], 'font-headline-second'].join(' ')}>
                    Вакансии
                </h2>
                <VacancyList scrollToId="vacancies-page-want-work-form"
                             vacancies={vacancies}
                             className={styles['vacancies-page__list']}/>
                <SubmitRequestSection id="vacancies-page-want-work-form"
                                      className={styles['vacancies-page__want-work-form']}
                                      textVariant='vacancy-respond'/>
            </div>
        </main>
    );
}

export default VacanciesPage;