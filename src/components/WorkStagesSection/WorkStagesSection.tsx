import React from 'react';
import styles from './styles/WorkStagesSection.module.css'
import {WorkStagesSectionProps} from "@/components/WorkStagesSection/types/WorkStagesSectionProps.mjs";
import StageList from "@/components/StageList/StageList";
function WorkStagesSection({   stages,
                               className,
                               ...props} : WorkStagesSectionProps) {
    return (
        <section className={[styles['section'], className].join(' ')} {...props}>
            <div className={[styles['section__wrapper'], 'container'].join(' ')}>
                <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                    Этапы работ
                </h2>
                <StageList className={styles['section__stages']} stages={stages}/>
            </div>
        </section>
    );
}

export default WorkStagesSection;