import { useParams } from "react-router-dom"
import { useEffect } from "react";


export const UserPage = () => {
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
        .then((res)=>{console.log(res)})
        .catch(()=>{})
    },[])


    return (<h1>UserPage{userId}</h1>)

}