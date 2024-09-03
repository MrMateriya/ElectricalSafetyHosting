import React from 'react';
import styles from './styles/ClientsSection.module.css'
import Image from "next/image";
import {ClientsSectionProps} from "@/components/ClientsSection/types/ClientsSectionProps.mjs";
function ClientsSection({className, ...props} : ClientsSectionProps) {
    return (
        <section className={[styles['section'], className].join(' ')} {...props}>
            <div className={[styles['section__wrapper'], 'container'].join(' ')}>
                <h2 className={[styles['section__title'], 'font-headline-second'].join(' ')}>
                    Клиенты
                </h2>
                <ul className={[styles['section__logos'], styles['logos'], styles['logos__first']].join(' ')}>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/Sibur.png'}
                            alt='Sibur.png'
                            width={2560}
                            height={856}
                        />
                        <div className={[styles['logos__background'], styles['logos__sibur']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/VostokGazprom.png'}
                            alt='VostokGazprom.png'
                            width={322}
                            height={66}
                        />
                        <div className={[styles['logos__background'], styles['logos__vostok-gazprom']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/Rosneft.png'}
                            alt='Rosneft.png'
                            width={512}
                            height={263}
                        />
                        <div className={[styles['logos__background'], styles['logos__rosneft']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/InterRAOUES.png'}
                            alt='InterRAOUES.png'
                            width={500}
                            height={150}
                        />
                        <div className={[styles['logos__background'], styles['logos__interRAOUES']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/TomskPolytechnicUniversity.png'}
                            alt='TomskPolytechnicUniversity.png'
                            width={1448}
                            height={314}
                        />
                        <div className={[styles['logos__background'], styles['logos__tomsk-polytechnic-university']].join(' ')}></div>
                    </li>
                </ul>
                <ul className={[styles['section__logos'], styles['logos'], styles['logos__second']].join(' ')}>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/KuzbassFuelCompany.png'}
                            alt='KuzbassFuelCompany.png'
                            width={920}
                            height={320}
                        />
                        <div className={[styles['logos__background'], styles['logos__kuzbass-fuel-company']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/TomskStateUniversity.png'}
                            alt='TomskStateUniversity.png'
                            width={1024}
                            height={333}
                        />
                        <div className={[styles['logos__background'], styles['logos__tomsk-state-university']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/GazpromTransgazTomsk.png'}
                            alt='GazpromTransgazTomsk.png'
                            width={1920}
                            height={888}
                        />
                        <div className={[styles['logos__background'], styles['logos__gazprom-transgaz-tomsk']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/Sibagro.png'}
                            alt='Sibagro.png'
                            width={1200}
                            height={630}
                        />
                        <div className={[styles['logos__background'], styles['logos__sibagro']].join(' ')}></div>
                    </li>
                </ul>
                <ul className={[styles['section__logos'], styles['logos'], styles['logos__nine']].join(' ')}>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/Sibur.png'}
                            alt='Sibur.png'
                            width={2560}
                            height={856}
                        />
                        <div className={[styles['logos__background'], styles['logos__sibur']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/VostokGazprom.png'}
                            alt='VostokGazprom.png'
                            width={322}
                            height={66}
                        />
                        <div className={[styles['logos__background'], styles['logos__vostok-gazprom']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/Rosneft.png'}
                            alt='Rosneft.png'
                            width={512}
                            height={263}
                        />
                        <div className={[styles['logos__background'], styles['logos__rosneft']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/InterRAOUES.png'}
                            alt='InterRAOUES.png'
                            width={500}
                            height={150}
                        />
                        <div className={[styles['logos__background'], styles['logos__interRAOUES']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/TomskPolytechnicUniversity.png'}
                            alt='TomskPolytechnicUniversity.png'
                            width={1448}
                            height={314}
                        />
                        <div
                            className={[styles['logos__background'], styles['logos__tomsk-polytechnic-university']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/KuzbassFuelCompany.png'}
                            alt='KuzbassFuelCompany.png'
                            width={920}
                            height={320}
                        />
                        <div
                            className={[styles['logos__background'], styles['logos__kuzbass-fuel-company']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/TomskStateUniversity.png'}
                            alt='TomskStateUniversity.png'
                            width={1024}
                            height={333}
                        />
                        <div
                            className={[styles['logos__background'], styles['logos__tomsk-state-university']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/GazpromTransgazTomsk.png'}
                            alt='GazpromTransgazTomsk.png'
                            width={1920}
                            height={888}
                        />
                        <div
                            className={[styles['logos__background'], styles['logos__gazprom-transgaz-tomsk']].join(' ')}></div>
                    </li>
                    <li className={styles['logos__item']}>
                        <Image
                            className={styles['logos__image']}
                            src={'https://mrmateriya.github.io/ElectricalSafetyHosting/images/photos/clientLogo/Sibagro.png'}
                            alt='Sibagro.png'
                            width={1200}
                            height={630}
                        />
                        <div className={[styles['logos__background'], styles['logos__sibagro']].join(' ')}></div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ClientsSection;