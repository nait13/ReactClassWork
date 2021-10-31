import React, {Component} from 'react';
import {Components} from './SearchBar.styled';



export class SearchBar extends Component {
    state = {
        inputText: ""
    }

    handleChange = ({target: {value}}) => {
        this.setState(() => ({inputText: value}));
        this.props.whenClick(value);
    }

    render() {
        return (
            // <div className={cls.SearchBar}>
            <Components.Wrapper>
                <h1>Search user</h1>
                <Components.Input 
                    type='text'
                    value={this.state.inputText}
                    // className={cls.SearchInput}
                    onChange={this.handleChange}/>
                <button 
                    // className={cls.SearchButton}
                    onClick={() => {
                        this.props.whenClick(this.state.inputText)
                    }}> 
                        Find user
                </button>
                <Components.CustomSomeButton/>
            </Components.Wrapper>
        ); 
    }
}

// TWO WAY BINDING
