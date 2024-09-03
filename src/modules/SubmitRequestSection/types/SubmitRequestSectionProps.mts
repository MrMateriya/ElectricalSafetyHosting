import React from "react";

interface SubmitRequestSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    textVariant?: 'call-order-reduced' | 'call-order-full' | 'vacancy-respond',
}

export type {SubmitRequestSectionProps}