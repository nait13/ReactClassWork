import { useParams } from "react-router-dom"
import { useEffect ,useState } from "react";
import {User} from '../User/User.js'
import cls from '../UserList/UserList.module.css'

export const UserPage = () => {

    const [oneUser,setOneUser] = useState(null);

    const {userId}= useParams();

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((res)=>{
            console.log(res)
            if(res.status === 404) {
                throw new Error ('Person not found')
            }
            return res.json()
        })
        .then(({data})=>{setOneUser(data)})
        .catch((cat)=>{setOneUser(cat)})
    },[])
    return (
        <div>
            <h1>UserPage{userId}</h1>
            <div className = {cls.UserList}>
                <User {...oneUser}/>
            </div>
        </div>
    )

}