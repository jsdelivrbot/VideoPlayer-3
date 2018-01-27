import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
const API_KEY = "AIzaSyCDWHKsi7twaguIJqfVvXxvPZOrmt_g_Mg";

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#app"));