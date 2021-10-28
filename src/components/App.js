import React, {Component} from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { UserList } from './UserList/UserList';
import {delay} from '../utils/delay';
import './App.css';


export class App extends Component {
    state = {
        users: null
    }

    componentDidMount () {
        delay(1000)
        .then(()=>{
           return fetch('https://reqres.in/api/users?page=2')
        })
        .then((res) => res.json())
        .then(({data}) => this.setState({users: data})) 
    }

    handleClick = (seachName) => { // !!!!!
        const filteredUsers = this.state.users.filter(
            ({last_name, first_name}) => 
                last_name.toLowerCase().includes(seachName) 
                || first_name.toLowerCase().includes(seachName)  
        );

        console.log(filteredUsers);
    }

    render() {
        return (<div>
            <SearchBar whenClick={this.handleClick}/>
            <UserList users={this.state.users}/>
        </div>)
    }
}





