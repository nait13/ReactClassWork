import React from 'react';
import cls from './User.module.css';


export const User = ({first_name, last_name, avatar,email}) => {
    return (
        <div className={cls.User}>
            <div>
                <img src={avatar} alt = "avatar"/>
            </div>
            <div>{`${first_name} ${last_name}`}</div>
            <div>{email}</div>
        </div>
    );
};

