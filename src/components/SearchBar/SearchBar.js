import React, {Component} from 'react';
import cls from './SearchBar.module.css';

export class SearchBar extends Component {
    render() {
        return (
            <div className={cls.SearchBar}>
                <h1>Search user</h1>
                <input type='text' className={cls.SearchInput}/>
                <button className={cls.SearchButton}>Find user</button>
            </div>
        );
    }
}
