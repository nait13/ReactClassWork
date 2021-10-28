import React, {Component} from 'react';
import {User} from '../User/User';
import cls from './UserList.module.css';
import loaderSrc from '../../images/loader.gif';



export class UserList extends Component {
    render () {
        return (
        this.props.users 
        ? <ul className={cls.UserList}>
            <User/>
        </ul>
        : <img src={loaderSrc}/>
        )
    }
}