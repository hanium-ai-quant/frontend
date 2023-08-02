import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  ChakraProvider,
  Divider,
  Tag,
  Text,
  HStack,
    Card,
    CardBody,
    CardHeader,
    Heading
} from '@chakra-ui/react'

function Information() {
  return (
      <ChakraProvider>
          <Card>
              <CardHeader>
                  <Heading size='lg'>Samsung Electronics</Heading>
              </CardHeader>
              <CardBody>
  <Stat>
      <StatLabel><Text as ='b'>현재가</Text></StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      전일 대비
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>
        <Divider />
      <Text as='b'>
     Chart
        </Text>
          <HStack spacing = '20px' >
            <div>
        최고가: 345,670
              </div>
            <div>
        최저가: 312,000
            </div>
        </HStack>
              </CardBody>
              </Card>
      </ChakraProvider>
  );
}

export default Information;