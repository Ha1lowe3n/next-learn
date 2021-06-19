import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <a>Главная</a>
                </Link>
                <Link href="/users">
                    <a>Пользователи</a>
                </Link>
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
