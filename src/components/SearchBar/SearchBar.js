import React, {Component} from 'react';
import {Components} from './SearchBar.styled';



export class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputText: ""
        }

        this.inputRef = React.createRef();
    }

    handleChange = ({target: {value}}) => {
        this.setState(() => ({inputText: value}));
        this.props.whenClick(value);
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    render() {
        return (
            // <div className={cls.SearchBar}>
            <Components.Wrapper>
                <h1>Search user</h1>
                <Components.Input 
                    ref={this.inputRef}
                    type='text'
                    value={this.state.inputText}
                    // className={cls.SearchInput}
                    onChange={this.handleChange}/>
                {/* <button 
                    // className={cls.SearchButton}
                    onClick={() => {
                        this.props.whenClick(this.state.inputText)
                    }}> 
                        Find user
                </button> */}
                {/* <Components.CustomSomeButton/> */}
            </Components.Wrapper>
        ); 
    }
}

// TWO WAY BINDING
