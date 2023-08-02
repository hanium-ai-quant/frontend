import * as React from 'react';

import './App.css';
import BigChart from "./Components/Chart";
import Information from "./Components/information";
import Card from 'react-bootstrap/Card';
import SearchBar from "./Components/Autocomplete";

function App() {
    return (
        <div className="App">
        <SearchBar />
        <Information />
            <Card border="primary" style={{ width: '70%', height: '60%' }}>
            <Card.Body>
                    <BigChart />
            </Card.Body>
                </Card>
            </div>
    );
}

export default App;