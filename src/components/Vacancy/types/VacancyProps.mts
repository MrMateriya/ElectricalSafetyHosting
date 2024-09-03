import React, {FunctionComponent} from "react";
import {Information} from "./Information.mjs";

interface VacancyProps extends React.HTMLAttributes<FunctionComponent> {
    information: Omit<Information, "vacancyKey">,
    scrollToId?: string,
}

export type {VacancyProps}