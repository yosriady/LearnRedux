import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const YOUTUBE_API_KEY = 'AIzaSyA8bcdkWWLdHAIADFDWceckMaKiHY6hqMI';

// 1. Create new Component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// 2. Render component to DOM
ReactDOM.render(<App />,
                document.getElementById('container'));
