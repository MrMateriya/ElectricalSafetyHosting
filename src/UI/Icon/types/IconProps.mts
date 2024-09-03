import React from "react";
import {IconName} from "@/UI/Icon/types/IconName.mjs";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    iconName: IconName,
    width?: number,
    height?: number,
    spriteHref: string,
}

export type {IconProps}