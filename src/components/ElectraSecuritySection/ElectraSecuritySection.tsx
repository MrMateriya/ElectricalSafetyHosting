import React from 'react';
import styles from './styles/ElectraSecuritySection.module.css'
import {ElectraSecuritySectionProps} from "@/components/ElectraSecuritySection/types/ElectraSecuritySectionProps.mjs";
function ElectraSecuritySection({className, ...props} : ElectraSecuritySectionProps) {

    return (
        <section className={[styles['section'], className].join(' ')} {...props}>
            <div className={[styles['section__wrapper'], 'container'].join(' ')}>
                <h1 className={[styles['section__title'], 'font-headline-first'].join(' ')}>
                    Электра — безопасность
                </h1>
                <p className={[styles['section__description'], 'font-body-big'].join(' ')}>
                    Полный комплекс работ по системам инженерно-технических <br className='separator_1920'/> средств охраны, пожарной сигнализации, связи.
                </p>
                <ol className={[styles['section__work-types-list'], 'font-body'].join(' ')}>
                    <li className={[styles['section__work-type']].join(' ')}>
                        Проектирование
                    </li>
                    <li className={[styles['section__work-type']].join(' ')}>
                        Пусконаладочные работы
                    </li>
                    <li className={[styles['section__work-type']].join(' ')}>
                        Строительно-монтажные работы
                    </li>
                    <li className={[styles['section__work-type']].join(' ')}>
                        Техническое обслуживание
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default ElectraSecuritySection;