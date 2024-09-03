import React from 'react';
import ImageLogo from "@/UI/ImageLogo/ImageLogo";
import styles from './styles/Footer.module.css'
import LinkList from "@/UI/LinkList/LinkList";
import {LinkInfo} from "@/UI/LinkList/types/LinkInfo.mjs";
import {FooterProps} from "@/components/Footer/types/FooterProps.mjs";
function Footer({className, ...props}: FooterProps) {
    const links : LinkInfo[] = [
        {
            id: 0,
            type: 'anchor',
            title: 'Направления',
            page: '/',
            href: '#work-area',
        },
        {
            id: 1,
            type: 'anchor',
            title: 'Клиенты',
            page: '/',
            href: '#clients',
        },
        {
            id: 2,
            type: 'anchor',
            title: 'Преимущества',
            page: '/',
            href: '#advantages',
        },
        {
            id: 3,
            type: 'route',
            title: 'Вакансии',
            page: '/vacancies',
            href: '/vacancies',
        },
        {
            id: 4,
            type: 'anchor',
            title: 'Объекты',
            page: '/',
            href: '#object-list',
        },
        {
            id: 5,
            type: 'anchor',
            title: 'О компании',
            page: '/',
            href: '#about-us',
        },
        {
            id: 6,
            type: 'anchor',
            title: 'Документы',
            page: '/',
            href: '#documents',
        },
        {
            id: 7,
            type: 'anchor',
            title: 'Контакты',
            page: '/',
            href: '#submit-request',
        },
    ]

    return (
        <footer className={[styles['footer'], className].join(' ')} {...props}>
            <div className={[styles['footer_wrapper'], 'container'].join(' ')}>
                <div className={styles['footer__description']}>
                    <nav className={styles['footer__nav']}>
                        <h4 className={[styles['footer__title'], 'font-body-bold'].join(' ')}>Главная</h4>
                        <LinkList classNames={{
                            classNameLink: styles['link-list__link'],
                            classNameItem: styles['link-list__item'],
                            classNameList: [styles['footer__link-list'], styles['link-list'], 'font-body'].join(' '),
                        }} links={links}/>
                        <div className={styles['footer__link-list-lists']}>
                            <LinkList classNames={{
                                classNameLink: styles['link-list__link'],
                                classNameItem: styles['link-list__item'],
                                classNameList: [styles['footer__link-list_first'], styles['link-list_first'], 'font-body'].join(' '),
                            }} links={[links[0], links[4], links[2], links[6]]}/>
                            <LinkList classNames={{
                                classNameLink: styles['link-list__link'],
                                classNameItem: styles['link-list__item'],
                                classNameList: [styles['footer__link-list_second'], styles['link-list_second'], 'font-body'].join(' '),
                            }} links={[links[1], links[5], links[3], links[7]]}/>
                        </div>
                    </nav>
                    <ul className={[styles['footer__contacts'], styles['contacts'], 'font-body'].join(' ')}>
                        <li className={styles['contacts__item']}>
                            <a className={styles['contacts__link']} href='tel:+73822994449'>
                                <div className={styles['contacts__wrapper']}>
                                    <svg className={styles['contacts__icon']} width="25" height="24" viewBox="0 0 25 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.0972 14.8554L16.6806 12.8764L16.6684 12.8707C16.4392 12.7727 16.189 12.7333 15.9407 12.7562C15.6924 12.7792 15.4537 12.8636 15.2463 13.002C15.2218 13.0181 15.1983 13.0356 15.1759 13.0545L12.8941 14.9998C11.4484 14.2976 9.95595 12.8164 9.25376 11.3895L11.2019 9.07294C11.2206 9.0495 11.2384 9.02606 11.2553 9.00075C11.3907 8.79384 11.4729 8.55667 11.4945 8.31035C11.5161 8.06402 11.4764 7.81618 11.3791 7.58887V7.57762L9.39438 3.15356C9.2657 2.85662 9.04444 2.60926 8.76362 2.44841C8.4828 2.28756 8.1575 2.22184 7.83626 2.26106C6.56592 2.42822 5.39986 3.05209 4.55588 4.01615C3.7119 4.98021 3.24771 6.21852 3.25001 7.49981C3.25001 14.9436 9.30626 20.9998 16.75 20.9998C18.0313 21.0021 19.2696 20.5379 20.2337 19.6939C21.1977 18.85 21.8216 17.6839 21.9888 16.4136C22.0281 16.0924 21.9625 15.7672 21.8018 15.4864C21.6411 15.2056 21.394 14.9843 21.0972 14.8554ZM16.75 19.4998C13.5685 19.4963 10.5182 18.2309 8.26856 15.9813C6.01888 13.7316 4.75348 10.6813 4.75001 7.49981C4.74648 6.58433 5.07631 5.69887 5.67789 5.00879C6.27947 4.3187 7.11167 3.87118 8.01907 3.74981C8.0187 3.75355 8.0187 3.75732 8.01907 3.76106L9.98782 8.16731L8.05001 10.4867C8.0303 10.5093 8.01243 10.5334 7.99657 10.5589C7.85549 10.7754 7.77273 11.0246 7.7563 11.2825C7.73988 11.5404 7.79035 11.7981 7.90282 12.0307C8.7522 13.7679 10.5025 15.5051 12.2584 16.3536C12.4928 16.465 12.752 16.5137 13.0108 16.495C13.2696 16.4762 13.5192 16.3907 13.735 16.2467C13.7591 16.2305 13.7823 16.213 13.8044 16.1942L16.0834 14.2498L20.4897 16.2232H20.5C20.3801 17.1319 19.9333 17.9658 19.2431 18.5689C18.5528 19.172 17.6666 19.5029 16.75 19.4998Z"
                                            fill="#0F0F00"/>
                                    </svg>
                                    <p className={styles['contacts__title']}>
                                    8 (3822) 99-44-49
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li className={styles['contacts__item']}>
                            <a className={styles['contacts__link']} target='_blank' href='https://go.2gis.com/4svvq'>
                                <div className={styles['contacts__wrapper']}>
                                    <svg className={styles['contacts__icon']} width="25" height="24" viewBox="0 0 25 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2C8.27344 2 5.25 4.87766 5.25 8.42188C5.25 12.5 9.75 18.9627 11.4023 21.1948C11.4709 21.2891 11.5608 21.3657 11.6647 21.4186C11.7686 21.4715 11.8835 21.499 12 21.499C12.1165 21.499 12.2314 21.4715 12.3353 21.4186C12.4392 21.3657 12.5291 21.2891 12.5977 21.1948C14.25 18.9636 18.75 12.5033 18.75 8.42188C18.75 4.87766 15.7266 2 12 2Z"
                                            stroke="#0F0F00" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M12 11C13.2426 11 14.25 9.99264 14.25 8.75C14.25 7.50736 13.2426 6.5 12 6.5C10.7574 6.5 9.75 7.50736 9.75 8.75C9.75 9.99264 10.7574 11 12 11Z"
                                            stroke="#0F0F00" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <p className={styles['contacts__title']}>
                                        Новосибирск
                                    </p>
                                </div>
                                <p className={[styles['contacts__description'], 'font-body-mobile'].join(' ')}>
                                    улица Комбинатская, дом 1, офис <br className='separator_768_invisible'/> 304, 630015
                                </p>
                            </a>
                        </li>

                        <li className={styles['contacts__item']}>
                            <a className={styles['contacts__link']} target='_blank' href='https://go.2gis.com/8hrsv'>
                                <div className={styles['contacts__wrapper']}>
                                    <svg className={styles['contacts__icon']} width="25" height="24" viewBox="0 0 25 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2C8.27344 2 5.25 4.87766 5.25 8.42188C5.25 12.5 9.75 18.9627 11.4023 21.1948C11.4709 21.2891 11.5608 21.3657 11.6647 21.4186C11.7686 21.4715 11.8835 21.499 12 21.499C12.1165 21.499 12.2314 21.4715 12.3353 21.4186C12.4392 21.3657 12.5291 21.2891 12.5977 21.1948C14.25 18.9636 18.75 12.5033 18.75 8.42188C18.75 4.87766 15.7266 2 12 2Z"
                                            stroke="#0F0F00" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M12 11C13.2426 11 14.25 9.99264 14.25 8.75C14.25 7.50736 13.2426 6.5 12 6.5C10.7574 6.5 9.75 7.50736 9.75 8.75C9.75 9.99264 10.7574 11 12 11Z"
                                            stroke="#0F0F00" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <p className={styles['contacts__title']}>
                                        Томск
                                    </p>

                                </div>
                                <p className={[styles['contacts__description'], 'font-body-mobile'].join(' ')}>
                                    улица Фрунзе, дом 152, 7 этаж, <br className='separator_768_invisible'/> 634021
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <ImageLogo className={styles['footer__logo']}/>
            </div>
        </footer>
    );
}

export default Footer;