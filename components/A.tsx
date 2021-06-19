import Link from 'next/link'

import styles from '../styles/A.module.css'

type LinkPropsType = {
    text: string
    href: string
}

export default ({ text, href }: LinkPropsType) => {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
