// @ts-nocheck
import {VacancyProps} from "@/components/Vacancy/types/VacancyProps.mjs";
import styles from './styles/Vacancy.module.css'
import Button from "@/UI/Button/Button";
import {ListProps} from "@/components/Vacancy/types/ListProps.mjs";
function List({listClassName, titleText, array} : ListProps) {
    return (
        <div className={[styles['vacancy__list'], styles['list'], listClassName].join(' ')}>
            <p className={[styles['list__title'], 'font-body-bold'].join(' ')}>{titleText}</p>
            <ul className={[styles['list__clauses'], styles['clauses'], 'font-body'].join(' ')}>
                {
                    array.map(item => {
                        return (
                            <li key={item.id} className={styles['clauses__item']}>
                                <div className={styles['clauses__dot']}></div>
                                <p className={styles['clauses__text']} dangerouslySetInnerHTML={{__html: item.title}}></p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
function Vacancy({
                     className,
                     scrollToId,
                     information,
                     ...props
                 }: VacancyProps) {
    return (
        <li className={[styles['vacancy'], className].join(' ')} {...props}>
            <div className={[styles['vacancy__description']].join(' ')}>
                <h3 className={[styles['vacancy__title'], 'font-headline-third'].join(' ')}
                dangerouslySetInnerHTML={{__html: information.vacancyTitle}}></h3>

                <div className={[styles['vacancy__characteristics'], styles['vacancy__characteristics_inside'], 'characteristics'].join(' ')}>
                    <p className={[styles['characteristics__city'], 'font-body-big'].join(' ')}>{information.city}</p>
                    <ul className={[styles['characteristics__list'], styles['characteristics-list'], styles['characteristics-list_inside'], 'font-body'].join(' ')}>
                        <li className={[styles['characteristics-list__item'], styles['characteristics-list__item_inside']].join(' ')}>
                            <p className={styles['characteristics-list__item-title']}>Формат работы</p>
                            <p className={styles['characteristics-list__item-option']}>{information.workFormat}</p>
                        </li>
                        <li className={[styles['characteristics-list__item'], styles['characteristics-list__item_inside']].join(' ')}>
                            <p className={styles['characteristics-list__item-title']}>Опыт</p>
                            <p className={styles['characteristics-list__item-option']}>{information.experience}</p>
                        </li>
                        <li className={[styles['characteristics-list__item'], styles['characteristics-list__item_inside']].join(' ')}>
                            <p className={styles['characteristics-list__item-title']}>Занятость</p>
                            <p className={styles['characteristics-list__item-option']}>{information.employment}</p>
                        </li>
                    </ul>
                </div>

                <p className={[styles['vacancy__salary'], 'font-body-bold'].join(' ')}
                dangerouslySetInnerHTML={{__html: information.salaryTitle}}>
                </p>

                <List titleText='Обязанности:' listClassName={styles['vacancy__responsibilities']}
                      array={information.responsibilities}/>
                <List titleText='Требования:' listClassName={styles['vacancy__requirements']} array={information.requirements}/>
                <List titleText='Условия:' listClassName={styles['vacancy__conditions']} array={information.conditions}/>

                <Button scrollToIdElement={scrollToId} type="button" variant="outline" className={styles['vacancy__button']}>
                    Откликнуться
                </Button>
            </div>

            <div className={[styles['vacancy__characteristics'], 'characteristics'].join(' ')}>
                <p className={[styles['characteristics__city'], 'font-body-big'].join(' ')}>{information.city}</p>
                <ul className={[styles['characteristics__list'], styles['characteristics-list'], 'font-body'].join(' ')}>
                    <li className={styles['characteristics-list__item']}>
                        <p className={styles['characteristics-list__item-title']}>Формат работы</p>
                        <p className={styles['characteristics-list__item-option']}>{information.workFormat}</p>
                    </li>
                    <li className={styles['characteristics-list__item']}>
                        <p className={styles['characteristics-list__item-title']}>Опыт</p>
                        <p className={styles['characteristics-list__item-option']}>{information.experience}</p>
                    </li>
                    <li className={styles['characteristics-list__item']}>
                        <p className={styles['characteristics-list__item-title']}>Занятость</p>
                        <p className={styles['characteristics-list__item-option']}>{information.employment}</p>
                    </li>
                </ul>
            </div>
        </li>
    );
}

export default Vacancy;