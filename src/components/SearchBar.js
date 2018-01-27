import React from 'react';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { term: "" };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    render() {
        return (
            <div>
                <input onChange={this.onInputChange} />
            </div>
        );
    }
}

export default SearchBar;