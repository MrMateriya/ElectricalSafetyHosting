// @ts-nocheck
import React from 'react';
import styles from './styles/CardList.module.css'
import Icon from "@/UI/Icon/Icon";
import {CardListProps} from "@/UI/CardList/types/CardListProps.mjs";

function CardList({
                      className,
                      classNameItem,
                      classNameDescription,
                      classNameTitle,
                      classNameIcon,
                      classNameIconWrapper,
                      classNameListWrapper,
                      cards,
                      spriteSheetHref,
                      ...props}
                      : CardListProps) {
    return (
        <ul className={[className || styles['list']].join(' ')} {...props}>
            {
                cards.map(
                    card => {
                        return (
                            <li key={card.idCard} className={[classNameItem || styles['list__item']].join(' ')}>
                                <div className={[classNameListWrapper || styles['list__wrapper']].join(' ')}>
                                    <div className={[classNameIconWrapper || styles['list__icon-wrapper']].join(' ')}>
                                        <Icon width={card.iconWidth}
                                              height={card.iconHeight}
                                              spriteHref={spriteSheetHref}
                                              className={[classNameIcon || styles['list__icon']].join(' ')}
                                              iconName={card.iconName}/>
                                    </div>
                                    <p className={[classNameTitle || styles['list__title'], classNameTitle || 'font-body-big'].join(' ')}
                                       dangerouslySetInnerHTML={{__html: card.title}}></p>
                                </div>
                                <p className={[classNameDescription || styles['list__description'], classNameDescription || 'font-body'].join(' ')}
                                    dangerouslySetInnerHTML={{__html: card.description}}>
                                </p>
                            </li>
                        );
                    }
                )
            }
        </ul>
    );
}

export default CardList;