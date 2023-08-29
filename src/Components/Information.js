import React from 'react';
import PropTypes from 'prop-types';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  ChakraProvider,
  Divider,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';

function Information({ stock_name, stck_prpr, stck_hgpr, stck_lwpr, prdy_vrss, prdy_ctrt }) {
  const arrowType = prdy_ctrt > 0 ? 'increase' : 'decrease';

  return (
    <ChakraProvider>
      <Box borderWidth="1px" borderRadius="md" boxShadow="md">
        <Box p={4}>
          <Text fontSize="xl" fontWeight="bold">
            {stock_name}
          </Text>
        </Box>
        <Box p={4}>
          <Stat>
            <StatLabel>
              <Text as="b">현재가</Text>
            </StatLabel>
            <StatNumber>{stck_prpr}</StatNumber>
            <StatHelpText>
              전일 대비
              <StatArrow type={arrowType} />
              {prdy_vrss} ({prdy_ctrt}%)
            </StatHelpText>
          </Stat>
          <Divider />
          <Text as="b">Chart</Text>
          <HStack spacing="20px">
            <div>최고가: {stck_hgpr}</div>
            <div>최저가: {stck_lwpr}</div>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

Information.propTypes = {
  stock_name: PropTypes.string.isRequired,
  high_price: PropTypes.number.isRequired,
  low_price: PropTypes.number.isRequired,
  percentOfPreviousDay: PropTypes.number.isRequired,
};

export default Information;
