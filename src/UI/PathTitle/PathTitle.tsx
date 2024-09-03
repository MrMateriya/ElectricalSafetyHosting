import {Fragment} from 'react';
import styles from "./styles/PathTitle.module.css"
import {PathTitleProps} from "@/UI/PathTitle/types/PathTitleProps.mjs";
import Link from "next/link";
function PathTitle({className, path, currentPage, ...props} : PathTitleProps) {
    return (
        <p className={[styles['path'], 'font-body', className].join(' ')} {...props}>
            {
                path.map(path => {
                    return (
                        <Fragment key={path.href}>
                            <Link className={styles['path__link']} href={path.href} key={path.title}>
                                {path.title}
                            </Link>
                            <span className={[styles['path__slash'], 'font-body', className].join(' ')}>/</span>
                        </Fragment>
                    );
                })
            }
            <span className={[styles['path__current'], 'font-body', className].join(' ')}>
                {
                    currentPage
                }
            </span>
        </p>
    );
}

export default PathTitle;