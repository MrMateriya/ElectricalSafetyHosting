import styles from './styles/SloganSection.module.css';
import {SloganSectionProps} from "@/components/SloganSection/types/SloganSectionProps.mjs";
import nextConfig from "../../../next.config.mjs";
function SloganSection({className, ...props} : SloganSectionProps) {
    return (
        <section className={[styles['slogan'], 'container', className].join(' ')} {...props}>
            <h3 className={[styles['slogan-title'], 'font-headline-third'].join(' ')}>
                Постоянное совершенствование <br/> для безупречого результата!
            </h3>
        </section>
    );
}

export default SloganSection;