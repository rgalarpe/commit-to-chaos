import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        { next: { revalidate: 30 } });
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(
        sortOrder === 'email' ? user => user.email :
        sortOrder === 'username' ? user => user.username :
        user => user.name
    );
  return (
    <table className='table table-bordered table-zebra table-sm'>
            <thead>
                <tr>
                    <th><Link href='users?sortOrder=name'>Name</Link></th>
                    <th><Link href='users?sortOrder=username'>Username</Link></th>
                    <th><Link href='users?sortOrder=email'>Email</Link></th>
                </tr>
            </thead>
            <tbody>
                { sortedUsers.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td className='lowercase'>{user.username}</td>
                    <td className='lowercase'>{user.email}</td>
                </tr>) }
            </tbody>
        </table>
  )
}

export default UserTable
