"use client";
import { useEffect , useState} from 'react'

const Todo = () => {
    const [Todos, setTodos] = useState([])
    const url = "https://jsonplaceholder.typicode.com/todos"

    useEffect(()=>{
        const fetchTodos = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setTodos(data)
        }
        fetchTodos();
    },[])
}

const User = () => {
    const[users, setUsers] = useState([])
    const url ="https://jsonplaceholder.typicode.com/users"

    useEffect (()=>{
        const fetchUser = async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setUsers(data)
        }
        fetchUser();
    },[])

    return(
        <ul>
           {users.map((user) => <li  key={user.id}>{user.name}</li> )}
        </ul>
    )
}

const UserPage = () => {
  return (
    <>
    <User></User>
    <Todo></Todo>
    </>
  )
}

export default UserPage