import React, {Component} from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { UserList } from '../UserList/UserList';
import {delay} from '../../utils/delay';



export class SearchUserPage extends Component {
    state = {
        users: null,
        filteredUsers: null
    }

    componentDidMount () {
        delay(1000)
        .then(()=>{
           return fetch('https://reqres.in/api/users?page=2')
        })
        .then((res) => res.json())
        .then(({data}) => this.setState({users: data, filteredUsers: data}))
    }

    handleClick = (searchName) => {
        const filteredUsers = this.state.users.filter(
            ({last_name, first_name}) => 
                last_name.toLowerCase().includes(searchName) 
                || first_name.toLowerCase().includes(searchName)  
        );

        this.setState({filteredUsers});
    }

    render() {
        return (<div>
            <SearchBar whenClick={this.handleClick}/>
            <UserList users={this.state.filteredUsers}/>
        </div>)
    }
}
