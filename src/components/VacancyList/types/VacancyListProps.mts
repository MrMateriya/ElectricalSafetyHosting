import {HTMLAttributes} from "react";
import {Information} from "../../Vacancy/types/Information.mjs";

interface VacancyListProps extends HTMLAttributes<HTMLDivElement> {
    vacancies: Information[],
    scrollToId?: string,
}

export type {VacancyListProps}