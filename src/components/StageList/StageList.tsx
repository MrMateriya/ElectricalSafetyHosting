// @ts-nocheck
import React, {Fragment} from 'react';
import styles from './styles/StageList.module.css'
import {StageListProps} from "@/components/StageList/types/StageListProps.mjs";
function StageList({
                       className,
                       stages,
                       ...props
                   }
                       : StageListProps) {
    return (
        <>
            <ul className={[styles['stages'], styles['stages_column_three'], className].join(' ')} {...props}>
                {
                    stages.map((stage, index) => {
                        if ((index + 1) % 3 !== 0 && stages[(index + 1)] !== undefined) {
                            return (
                                <Fragment key={stage.id}>
                                    <li className={styles['stages__item']}>
                                        <p className={[styles['stages__text'], 'font-body-bold'].join(' ')}
                                           dangerouslySetInnerHTML={{__html: stage.text}}/>
                                    </li>
                                    <li className={styles['stages__item-arrow']}>
                                        <svg className={styles['stages__svg']} width="25" height="14"
                                             viewBox="0 0 25 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_145_1058)">
                                                <path
                                                    d="M15.4971 -0.186994C15.4158 -0.146502 15.3474 -0.084157 15.2996 -0.00695992C15.2519 0.0702372 15.2265 0.159227 15.2265 0.250016V4.08448L0.413085 6.39845C0.298013 6.41638 0.19314 6.47486 0.117391 6.56332C0.0416431 6.65178 8.25112e-06 6.76441 0 6.88087L0 6.88477C0.00097117 7.00182 0.0439543 7.11462 0.12112 7.20263C0.198285 7.29064 0.304498 7.348 0.42041 7.36427L15.2265 9.44581V13.5117C15.2265 13.6024 15.2518 13.6913 15.2995 13.7684C15.3471 13.8456 15.4154 13.9079 15.4965 13.9485C15.5776 13.989 15.6684 14.0062 15.7587 13.998C15.849 13.9899 15.9352 13.9568 16.0078 13.9023L24.8047 7.271C25.0204 7.10919 25.0641 6.80313 24.9023 6.58741C24.8745 6.55041 24.8417 6.51753 24.8047 6.48976L16.0078 -0.141097C15.9353 -0.195362 15.8491 -0.228393 15.7589 -0.236499C15.6687 -0.244604 15.5781 -0.227463 15.4971 -0.186994Z"
                                                    fill="#FAE82E"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_145_1058">
                                                    <rect width="14" height="25" fill="white"
                                                          transform="matrix(0 -1 1 0 0 14)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </li>
                                </Fragment>);
                        }
                        return (
                            <li key={stage.id} className={styles['stages__item']}>
                                <p className={[styles['stages__text'], 'font-body-bold'].join(' ')}
                                   dangerouslySetInnerHTML={{__html: stage.text}}/>
                            </li>
                        );
                    })
                }
            </ul>
            <ul className={[styles['stages'], styles['stages_column_two'], className].join(' ')} {...props}>
                {
                    stages.map((stage, index) => {
                        if ((index + 1) % 2 !== 0 && stages[(index + 1)] !== undefined) {
                            return (
                                <Fragment key={stage.id}>
                                    <li className={styles['stages__item']}>
                                        <p className={[styles['stages__text'], 'font-body-bold'].join(' ')}
                                           dangerouslySetInnerHTML={{__html: stage.text}}/>
                                    </li>
                                    <li className={styles['stages__item-arrow']}>
                                        <svg className={styles['stages__svg']} width="25" height="14"
                                             viewBox="0 0 25 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_145_1058)">
                                                <path
                                                    d="M15.4971 -0.186994C15.4158 -0.146502 15.3474 -0.084157 15.2996 -0.00695992C15.2519 0.0702372 15.2265 0.159227 15.2265 0.250016V4.08448L0.413085 6.39845C0.298013 6.41638 0.19314 6.47486 0.117391 6.56332C0.0416431 6.65178 8.25112e-06 6.76441 0 6.88087L0 6.88477C0.00097117 7.00182 0.0439543 7.11462 0.12112 7.20263C0.198285 7.29064 0.304498 7.348 0.42041 7.36427L15.2265 9.44581V13.5117C15.2265 13.6024 15.2518 13.6913 15.2995 13.7684C15.3471 13.8456 15.4154 13.9079 15.4965 13.9485C15.5776 13.989 15.6684 14.0062 15.7587 13.998C15.849 13.9899 15.9352 13.9568 16.0078 13.9023L24.8047 7.271C25.0204 7.10919 25.0641 6.80313 24.9023 6.58741C24.8745 6.55041 24.8417 6.51753 24.8047 6.48976L16.0078 -0.141097C15.9353 -0.195362 15.8491 -0.228393 15.7589 -0.236499C15.6687 -0.244604 15.5781 -0.227463 15.4971 -0.186994Z"
                                                    fill="#FAE82E"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_145_1058">
                                                    <rect width="14" height="25" fill="white"
                                                          transform="matrix(0 -1 1 0 0 14)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </li>
                                </Fragment>
                            );
                        }
                        return (
                            <li key={stage.id} className={styles['stages__item']}>
                                <p className={[styles['stages__text'], 'font-body-bold'].join(' ')}
                                   dangerouslySetInnerHTML={{__html: stage.text}}/>
                            </li>
                        );
                    })
                }
            </ul>
            <ul className={[styles['stages'], styles['stages_column_one'], className].join(' ')} {...props}>
                {
                    stages.map(stage => {
                        return <p key={stage.id} className={[styles['stages__item'], 'font-body-bold'].join(' ')}
                                  dangerouslySetInnerHTML={{__html: stage.text}}/>
                    })
                }
            </ul>
        </>
    );
}

export default StageList;