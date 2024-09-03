import {IconName} from "@/UI/Icon/types/IconName.mjs";

interface CardProps {
    idCard: number;
    iconName: IconName;
    title: string;
    description: string;
    iconWidth: number;
    iconHeight: number;
}

export type {CardProps}