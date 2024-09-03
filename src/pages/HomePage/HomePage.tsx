import React from 'react';
import styles from './styles/HomePage.module.css'
import ElectraSecuritySection from "@/components/ElectraSecuritySection/ElectraSecuritySection";
import SloganSection from "@/components/SloganSection/SloganSection";
import WorkAreaSection from "@/components/WorkAreaSection/WorkAreaSection";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import WhyUsSection from "@/components/WhyUsSection/WhyUsSection";
import ObjectListSection from "@/components/ObjectListSection/ObjectListSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import DocumentsSection from "@/components/DocumentsSection/DocumentsSection";
import {SubmitRequestSection} from "@/modules/SubmitRequestSection";
function HomePage() {
    return (
        <main className={styles['home-page']}>
            <ElectraSecuritySection className={styles['electra-security']}/>
            <SloganSection className={styles['slogan']}/>
            <WorkAreaSection id='work-area' className={styles['work-area']}/>
            <AboutUsSection id='about-us' className={styles['about-us']}/>
            <WhyUsSection id='advantages' className={styles['why-us']}/>
            <ObjectListSection id='object-list' className={styles['object-list']}/>
            <ClientsSection id='clients' className={styles['clients']}/>
            <DocumentsSection id='documents' className={styles['documents']}/>
            <SubmitRequestSection id='submit-request' className={styles['submit-request']}/>
        </main>
    );
}

export default HomePage;