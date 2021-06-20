import { useRouter } from "next/router";

import styles from "../../styles/User.module.scss";

import { UserType } from "../users";
import MainContainer from "../../components/MainContainer";

type UserPropsType = {
    user: UserType;
};
type ContextParamsType = {
    params: { id: string };
};

export const getServerSideProps = async ({ params }: ContextParamsType) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user: UserType = await res.json();

    return {
        props: { user },
    };
};

const User = (props: UserPropsType) => {
    const { query } = useRouter();
    console.log(props);

    return (
        <MainContainer keywords={"user"}>
            <div className={styles.user}>
                <h2>Пользователь c id {query.id}</h2>
                <span>Имя пользователя = {props.user.name}</span>
            </div>
        </MainContainer>
    );
};

export default User;
