import {HTMLAttributes} from "react";
import {Stage} from "./Stage.mjs";

interface StageListProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    stages: Stage[],
}

export type {StageListProps}