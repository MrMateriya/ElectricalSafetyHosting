import {HTMLAttributes} from "react";
import {Stage} from "../../StageList/types/Stage.mjs";

interface WorkStagesSectionProps extends HTMLAttributes<HTMLDivElement> {
    classNameTitle?: string,
    stages: Stage[],
}

export type {WorkStagesSectionProps}