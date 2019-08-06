import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{
 
    state = {
        term: ''
    };

    onInputChange = event => {
            this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
            event.preventDefault();

            this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment search-style">
                <form onSubmit={this.onFormSubmit} className="ui form ">
                <i class="icon-style youtube icon"></i>
                    <div className="field">
                        <input type="text" value={this.state.term}
                        onChange={this.onInputChange}/>
                    </div>
                </form>

            </div>
        );
    }
};


export default SearchBar;