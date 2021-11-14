import React from 'react';
import {User} from '../User/User';
import cls from './UserList.module.css';
import loaderSrc from '../../images/loader.gif';

export const UserList =  (props) =>{
   
    const {users} = props;

    return (
        users 
        ? <div className={cls.UserList}>
            { users.map(({id, ...otherProps}) => (<User key={id} {...otherProps} />)) }
        </div>
        : <img src={loaderSrc} alt = 'preloder'/>
    )
    
}














