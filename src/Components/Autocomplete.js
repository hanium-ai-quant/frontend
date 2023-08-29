import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { HStack } from '@chakra-ui/react';
import axios from 'axios';
import {fetchStockData} from "../kis_api/fetch_data";

export default function SearchBar() {
    const [stocks, setStocks] = React.useState([]);
    const [selectedName, setSelectedName] = React.useState(null);
    const [selectedCode, setSelectedCode] = React.useState(null);

    const handleNameChange = (event, value) => {
        if (value) {
            setSelectedName(value);
            const matchedStock = stocks.find(stock => stock.CMP_KOR === value.CMP_KOR);
            if (matchedStock) setSelectedCode(matchedStock.CMP_CD);
        } else {
            setSelectedName(null);
            setSelectedCode(null);
        }
    };

    const handleCodeChange = async (event, value) => {
        if (value) {
            setSelectedCode(value);
            const matchingStock = stocks.find(stock => stock.CMP_CD === value);
            if (matchingStock) {
                setSelectedName(matchingStock);
                const stockData = await fetchStockData(value); // Call fetchStockData
                console.log("Fetched stock data:", stockData); // Do something with stockData
            }
        } else {
            setSelectedName(null);
            setSelectedCode(null);
        }
    };


    React.useEffect(() => {
        axios.get('http://localhost:3001/stocks')
            .then(response => setStocks(response.data))
            .catch(error => console.error('Error fetching stocks:', error));
    }, []);

    return (
        <HStack spacing='24px'>
            <Autocomplete
                id="combo-box-stock-name"
                options={stocks}
                value={selectedName}
                getOptionLabel={(option) => option.CMP_KOR || ''}
                onChange={handleNameChange}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Stock Name" />}
            />
            <Autocomplete
                id="combo-box-stock-code"
                options={stocks.map(stock => String(stock.CMP_CD))}
                value={selectedCode}
                onChange={handleCodeChange}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Stock Code" />}
            />
        </HStack>
    );
}
