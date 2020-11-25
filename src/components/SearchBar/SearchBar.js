import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleKeyDown(e) {
        if (e.charCode === 13 ) {
            this.props.onSearch(this.state.term);
        }
    }
    
    handleTermChange(e) {
        this.setState({ term: e.target.value });
    }

    render() { 
        return ( 
            <div className="SearchBar">
            <input 
            onChange={this.handleTermChange}
            placeholder="Enter A Song, Album, or Artist" 
            />
            <button className="SearchButton"
            onClick={this.search}
            onKeyPress={this.handleKeyDown}>SEARCH</button>
            </div>
         );
    }
}
 
export default SearchBar;