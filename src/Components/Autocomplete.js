import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { HStack } from '@chakra-ui/react'
import '../App.css';
import axios from 'axios';

const stocks = [
  { 종목명: '삼성전자', 종목코드: '005930' },
  { 종목명: 'The Godfather', 종목코드: '000020' }
];

export default function SearchBar() {
  const [selectedName, setSelectedName] = React.useState(null);
  const [selectedCode, setSelectedCode] = React.useState(null);

  const handleNameChange = (event, value) => {
    setSelectedName(value);
    if (value) setSelectedCode(stocks.find(stock => stock.종목명 === value.종목명).종목코드);
  };

  const handleCodeChange = (event, value) => {
      setSelectedCode(value);
      if (value) {
        const matchingStock = stocks.find(stock => stock.종목코드 === value);
        setSelectedName(matchingStock ? matchingStock.종목명 : null);
      }
    };


  return (
    <HStack spacing='24px'>
      <Autocomplete
        disablePortal
        id="combo-box-demo-name"
        options={stocks}
        value={selectedName}
        getOptionLabel={(option) => option.종목명}
        value={selectedCode ? stocks.find(stock => stock.종목코드 === selectedCode) : null}
        onChange={handleNameChange}
        sx={{ width: 300, marginRight: 2 }}
        renderInput={(params) => <TextField {...params} label="종목명" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo-code"
        options={stocks.map(stock => String(stock.종목코드))}
        value={selectedCode ? selectedCode.toString() : null}
        onChange={handleCodeChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="종목코드" />}
      />
    </HStack>
  );
}
