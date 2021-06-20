import Link from "next/link";

import styles from "../styles/A.module.css";

type LinkPropsType = {
    text: string;
    href: string;
};

const A = ({ text, href }: LinkPropsType) => {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    );
};

export default A;
