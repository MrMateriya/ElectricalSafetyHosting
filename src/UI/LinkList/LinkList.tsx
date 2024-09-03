// @ts-nocheck
'use client'

import React from 'react';
import styles from './styles/LinkList.module.css'
import {LinkListProps} from "@/UI/LinkList/types/LinkListProps.mjs";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";

function LinkList({classNames, links, onClick, ...props}: LinkListProps) {
    const path = usePathname()
    const router = useRouter()

    function handleClickAnchor(e, link) {
        if (link.page != path) {
            e.preventDefault()
            router.push(link.page + link.href)
        }
    }

    return (
        <ul className={[classNames?.classNameList || styles['link-list']].join(' ')} {...props}>
            {
                links.map(link => {
                    if (link.type != 'anchor') {
                        return (
                            <li key={link.id}
                                className={[classNames?.classNameItem || styles['link-list__item']].join(' ')}>
                                <Link onClick={(e) => {
                                    if (onClick) onClick(e);
                                }} className={[classNames?.classNameLink || styles['link-list__link']].join(' ')} href={link.href}>
                                    {link.title}
                                </Link>
                            </li>
                        );
                    }
                    return (
                        <li key={link.id}
                            className={[classNames?.classNameItem || styles['link-list__item']].join(' ')}>
                            <a onClick={e => {
                                handleClickAnchor(e, link);
                                if (onClick) onClick(e);
                            }}
                               className={[classNames?.classNameLink || styles['link-list__link']].join(' ')}
                               href={link.href}>
                                {link.title}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default LinkList;