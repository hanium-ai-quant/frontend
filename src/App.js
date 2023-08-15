import * as React from 'react';

import './App.css';
import BigChart from "./Components/Chart";
import Information from "./Components/information";
import Card from 'react-bootstrap/Card';
import SearchBar from "./Components/Autocomplete";

function App() {
    return (
        <div className="App"> {/* className App 이 적용되는 부분은 App.css 에서 정의 */}
        <SearchBar /> {/* 검색창은 자동완성 기능이 적용되어 있음. 또한 Autocomplete.js에서 정의됨 */}
        <Information /> {/* Information.js 에서 정의됨. 각종 주식에 대한 정보를 담은 카드 컴포넌트*/}
            <Card border="primary" style={{ width: '70%', height: '60%' }}> {/* 카드 컴포넌트의 폭을 결정함. 리액트 부트스트랩을 사용함 */}
            <Card.Body>{/* 카드 컴포넌트의 내용을 결정함. 리액트 부트스트랩을 사용함 */}
                    <BigChart /> {/* BigChart.js 에서 정의됨. 차트를 그리는 컴포넌트 */}
            </Card.Body>
                </Card>
            </div>
    );
}

export default App;