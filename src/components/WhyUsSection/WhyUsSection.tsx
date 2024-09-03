import React from 'react';
import styles from './styles/WhyUsSection.module.css'
import CardList from "@/UI/CardList/CardList";
import {CardProps} from "@/UI/CardList/types/CardProps.mjs";
import {WhyUsSectionProps} from "@/components/WhyUsSection/types/WhyUsSectionProps.mjs";
function WhyUsSection({className, ...props} : WhyUsSectionProps) {
    const cards : CardProps[] = [
        {
            iconName: 'certificate',
            title: 'Гарантия <br class="separator_968 separator_768_invisible"/> на все виды работ',
            description: 'Мы уверены в качестве выполняемых работ и предоставляем' +
                ' гарантию <br class="separator_1920 separator_968 separator_768_invisible separator_360"/> на все услуги',
            idCard: 0,
            iconWidth: 80,
            iconHeight: 80,
        },
        {
            iconName: 'target',
            title: 'Высокое качество работ',
            description: 'Большинство наших клиентов <br class="separator_360"> становятся постоянными',
            idCard: 1,
            iconWidth: 80,
            iconHeight: 80,
        },
        {
            iconName: 'form',
            title: 'Полный спектр услуг',
            description: 'Оказываем широкий спектр услуг от проектирования до техобслуживания слаботочных систем',
            idCard: 2,
            iconWidth: 80,
            iconHeight: 80,
        },
        {
            iconName: 'internet',
            title: 'Большая география',
            description: 'Непрерывно расширяем географию наших объектов',
            idCard: 3,
            iconWidth: 80,
            iconHeight: 80,
        },
        {
            iconName: 'man',
            title: 'Опытные сотрудники',
            description: 'Наши специалисты обладают высокой квалификацией, что подтверждено многолетним опытом работы и успешно реализованными проектами',
            idCard: 4,
            iconWidth: 80,
            iconHeight: 80,
        },
        {
            iconName: 'search',
            title: 'Контроль качества',
            description: 'Непрерывный контроль качества на каждом этапе работ',
            idCard: 5,
            iconWidth: 80,
            iconHeight: 80,
        },
    ]

    return (
        <section className={[styles['section'], 'container', className].join(' ')} {...props}>
            <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                Почему мы?
            </h2>
            <CardList classNameTitle={styles['card-list__title']}
                      classNameDescription={[styles['card-list__description'], 'font-body'].join(' ')}
                      className={styles['section__card-list']}
                      classNameIcon={styles['card-list__icon']}
                      classNameIconWrapper={styles['card-list__icon-wrapper']}
                      classNameItem={styles['card-list__item']}
                      classNameListWrapper={styles['card-list__list-wrapper']}
                      spriteSheetHref='https://mrmateriya.github.io/ElectricalSafetyHosting/images/iconAtlases/size_80.svg'
                      cards={cards}/>
        </section>
    );
}

export default WhyUsSection;