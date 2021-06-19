import A from '../components/A'

export default function Home() {
    return (
        <div>
            <div className="navbar">
                <A text="Главная" href="/" />
                <A href="/users" text="Пользователи" />
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </div>
    )
}
