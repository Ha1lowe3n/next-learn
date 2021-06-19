import { useRouter } from 'next/router'

export default () => {
    const { query } = useRouter()

    return <h2>Пользователь c id {query.id}</h2>
}
