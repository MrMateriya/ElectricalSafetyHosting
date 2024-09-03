// @ts-nocheck
import {VacancyListProps} from "@/components/VacancyList/types/VacancyListProps.mjs";
import Vacancy from "@/components/Vacancy/Vacancy";
import styles from './styles/VacancyList.module.css'

function VacancyList({className, vacancies, scrollToId, ...props} : VacancyListProps) {
    return (
        <ul className={[styles['list'], className].join(' ')} {...props}>
            {
                vacancies.map(vacancy => {
                    return (
                        <Vacancy
                            key={vacancy.vacancyKey}
                            className={styles['list__item']}
                            information={{
                                vacancyTitle: vacancy.vacancyTitle,
                                salaryTitle: vacancy.salaryTitle,
                                responsibilities: vacancy.responsibilities,
                                requirements: vacancy.requirements,
                                conditions: vacancy.conditions,
                                city: vacancy.city,
                                workFormat: vacancy.workFormat,
                                experience: vacancy.experience,
                                employment: vacancy.employment,
                            }}
                            scrollToId={scrollToId}
                        />
                    );
                })
            }
        </ul>
    );
}

export default VacancyList;