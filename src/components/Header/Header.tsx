'use client'

import React, {useState} from 'react';
import styles from './styles/Header.module.css'
import ImageLogo from "@/UI/ImageLogo/ImageLogo";
import {HeaderProps} from './types/HeaderProps.mjs';
import {handleTabSelection} from "@/utils/handleTabSelection";
import LinkList from "@/UI/LinkList/LinkList";
import {LinkInfo} from "@/UI/LinkList/types/LinkInfo.mjs";
import {Dialog} from "@headlessui/react";

function Header({className, classNameWrapper, ...props}: HeaderProps) {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
    const links: LinkInfo[] = [
        {
            id: 0,
            type: 'anchor',
            title: 'Направления',
            page: 'https://mrmateriya.github.io/ElectricalSafetyHosting',
            href: '#work-area',
        },
        {
            id: 1,
            type: 'anchor',
            title: 'О компании',
            page: 'https://mrmateriya.github.io/ElectricalSafetyHosting',
            href: '#about-us',
        },
        {
            id: 2,
            type: 'anchor',
            title: 'Преимущества',
            page: 'https://mrmateriya.github.io/ElectricalSafetyHosting',
            href: '#advantages',
        },
        {
            id: 3,
            type: 'anchor',
            title: 'Объекты',
            page: 'https://mrmateriya.github.io/ElectricalSafetyHosting',
            href: '#object-list',
        },
        {
            id: 4,
            type: 'anchor',
            title: 'Клиенты',
            page: 'https://mrmateriya.github.io/ElectricalSafetyHosting',
            href: '#clients',
        },
        {
            id: 5,
            type: 'route',
            title: 'Вакансии',
            page: 'https://mrmateriya.github.io/ElectricalSafetyHosting/vacancies',
            href: '/vacancies',
        },
        {
            id: 6,
            type: 'anchor',
            title: 'Контакты',
            page: 'https://mrmateriya.github.io/ElectricalSafetyHosting',
            href: '#submit-request',
        },
    ]

    function handleOpenMenu(e: React.MouseEvent): void {
        e.stopPropagation()
        setIsShowMenu(prev => !prev)
    }

    return (
        <header className={[styles['header'] || className].join(' ')} {...props}>
            <nav className={[styles['header__wrapper'] || classNameWrapper, 'container'].join(' ')}>
                <ImageLogo className={styles['header__logo']}/>
                <LinkList classNames={{
                    classNameLink: styles['link-list__link'],
                    classNameItem: styles['link-list__item'],
                    classNameList: [styles['header__link-list'], styles['link-list'], 'font-body'].join(' '),
                }} links={links}/>
                <button tabIndex={0} onClick={handleOpenMenu}
                        className={[styles['header__burger-button'], styles['burger-button']].join(' ')}>
                    <svg className={styles['burger-button__svg']} width="40" height="40" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.9502 7.94995H35.9502M3.9502 19.95H35.9502M3.9502 31.95H35.9502"
                              stroke="var(--black)"
                              strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <Dialog open={isShowMenu}
                        className={[styles['header__modal'], styles['modal']].join(' ')}
                        onPointerDown={() => {
                            setIsShowMenu(false);
                        }}
                        onClose={() => {
                            setIsShowMenu(false)
                        }}>
                    <div onPointerDown={e => e.stopPropagation()}
                         className={[styles['header__menu'], styles['menu']].join(' ')}>
                        <svg
                            onKeyDown={e => {
                                handleTabSelection(e, handleOpenMenu, e)
                            }}
                            tabIndex={0}
                            onClick={handleOpenMenu}
                            className={styles['menu__cross']}
                            width="24" height="24"
                            viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.91674 2.93548C3.2437 2.60862 3.68709 2.425 4.14942 2.425C4.61174 2.425 5.05514 2.60862 5.3821 2.93548L11.9954 9.54873L18.6086 2.93548C18.7694 2.76896 18.9618 2.63613 19.1745 2.54475C19.3873 2.45337 19.6161 2.40528 19.8476 2.40326C20.0791 2.40125 20.3087 2.44537 20.5229 2.53303C20.7372 2.6207 20.9319 2.75016 21.0956 2.91387C21.2593 3.07757 21.3887 3.27224 21.4764 3.48652C21.5641 3.70079 21.6082 3.93038 21.6062 4.16189C21.6042 4.3934 21.5561 4.62218 21.4647 4.8349C21.3733 5.04762 21.2405 5.24001 21.074 5.40085L14.4607 12.0141L21.074 18.6273C21.3916 18.9562 21.5673 19.3966 21.5633 19.8538C21.5594 20.3109 21.376 20.7482 21.0527 21.0715C20.7295 21.3947 20.2922 21.5781 19.835 21.5821C19.3779 21.5861 18.9374 21.4103 18.6086 21.0927L11.9954 14.4795L5.3821 21.0927C5.05327 21.4103 4.61284 21.5861 4.15569 21.5821C3.69854 21.5781 3.26124 21.3947 2.93797 21.0715C2.61471 20.7482 2.43134 20.3109 2.42737 19.8538C2.4234 19.3966 2.59914 18.9562 2.91674 18.6273L9.52999 12.0141L2.91674 5.40085C2.58987 5.07388 2.40625 4.63049 2.40625 4.16816C2.40625 3.70584 2.58987 3.26244 2.91674 2.93548Z"
                                  fill="#555546"/>
                        </svg>
                        <LinkList classNames={{
                            classNameLink: styles['link-list_menu__link'],
                            classNameItem: styles['link-list_menu__item'],
                            classNameList: [styles['menu__link-list'], styles['link-list_menu'], 'font-body'].join(' '),
                        }} onClick={handleOpenMenu} links={links}/>
                    </div>
                </Dialog>
            </nav>
        </header>
    );
}

export default Header;