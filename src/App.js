import * as React from 'react';

import './App.css';
import ComboBox from './Components/Autocomplete';
import SalesChart from "./Components/Chart";

function App() {
    return (
        <div className="App">
        <ComboBox />
            <div className="card">
                <div className="full-size">
                <div className="SalesChart">
                    <SalesChart />
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;