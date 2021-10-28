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
        delay(2000)
        .then(()=>{
           return fetch('https://reqres.in/api/users?page=2')
        })
        .then((res) => res.json())
        .then(({data}) => this.setState({users: data})) 
    }

    render() {
        return (<div>
            <SearchBar/>
            <UserList users={this.state.users}/>
        </div>)
    }
}





