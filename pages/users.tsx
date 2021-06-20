import { GetStaticProps } from "next";
import A from "../components/A";
import MainContainer from "../components/MainContainer";

export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};
type UsersPropsType = {
    users: UserType[];
};

const Users = ({ users }: UsersPropsType) => {
    return (
        <MainContainer keywords={"users"}>
            <div>
                <h1>Список пользователей</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <A href={`/users/${user.id}`} text={user.name} />
                        </li>
                    ))}
                </ul>
            </div>
        </MainContainer>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users: UserType[] = await res.json();

    return {
        props: { users }, // will be passed to the page component as props
    };
};

export default Users;
