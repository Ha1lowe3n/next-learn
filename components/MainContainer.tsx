import Head from "next/document";

import A from "./A";

const MainContainer = ({ children, keywords }: any) => {
    return (
        <>
            {/*<Head>*/}
            {/*    <meta name="description" content="next.js + " " + {keywords}" />*/}
            {/*    <meta*/}
            {/*        name="viewport"*/}
            {/*        content="initial-scale=1.0, width=device-width"*/}
            {/*    />*/}
            {/*    <title>Next js practice</title>*/}
            {/*</Head>*/}
            <div className="navbar">
                <A text="Главная" href="/" />
                <A href="/users" text="Пользователи" />
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
