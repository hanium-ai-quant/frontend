import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import '../App.css';

const stocks = [
  { 종목명: 'The Shawshank Redemption', 종목코드: 1994 },
  { 종목명: 'The Godfather', 종목코드: 1972 }
];

export default function ComboBox() {
  const [selectedName, setSelectedName] = React.useState(null);
  const [selectedCode, setSelectedCode] = React.useState(null);

  const handleNameChange = (event, value) => {
    setSelectedName(value);
    if (value) setSelectedCode(stocks.find(stock => stock.종목명 === value.종목명).종목코드);
  };

  const handleCodeChange = (event, value) => {
    setSelectedCode(value);
    if (value) setSelectedName(stocks.find(stock => stock.종목코드 === parseInt(value, 10)));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo-name"
        options={stocks}
        value={selectedName}
        getOptionLabel={(option) => option.종목명}
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
    </Box>
  );
}
