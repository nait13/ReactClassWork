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
            <Components.Wrapper>
                <h1>Search user</h1>
                <Components.Input 
                    ref={this.inputRef}
                    type='text'
                    value={this.state.inputText}
                    onChange={this.handleChange}/>
            </Components.Wrapper>
        ); 
    }
}

// TWO WAY BINDING
