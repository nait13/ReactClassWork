import React,{useState,useEffect} from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { UserList } from '../UserList/UserList';
import {delay} from '../../utils/delay';



export const SearchUserPage = () =>{

    const [userState,setUserState] = useState({users:null , filtere: null});
   

    useEffect(()=>{
        delay(1000)
        .then(()=>{
            return fetch('https://reqres.in/api/users?page=2')
         })
        .then((res) => res.json())
        .then(({data}) => setUserState({users: data, filteredUsers: data}))
    },[])
    console.log(userState)
    const handleClick = (searchName) => {
        console.log("HANDLE CLIK")
        const filteredUsers = userState.users.filter(
            ({last_name, first_name}) => 
                last_name.toLowerCase().includes(searchName) 
                || first_name.toLowerCase().includes(searchName)  
        );

        setUserState({users: userState.users, filteredUsers: filteredUsers});
    }


    return (
        <div>
            <SearchBar whenClick={handleClick}/>
            <UserList users={userState.filteredUsers}/>
        </div>
    )
    
}
