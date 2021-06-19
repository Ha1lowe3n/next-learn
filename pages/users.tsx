import { useState } from 'react'
import Link from 'next/link'
import A from '../components/A'

type UsersStatewType = Array<{
    id: number
    name: string
}>

const Users: React.FC = () => {
    const [users, setUsers] = useState<UsersStatewType>([
        { id: 1, name: 'petya' },
        { id: 2, name: 'vasya' },
    ])

    return (
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
    )
}

export default Users
