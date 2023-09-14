import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "./Chart";

import LogoImg from "./raccggggun.png";

export const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock API call
    const mockApiCall = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Company1', totalShare: 1000, totalReturn: 10000 },
          { id: 2, name: 'Company2', totalShare: 2000, totalReturn: 20000 },
          { id: 3, name: 'Company3', totalShare: 3000, totalReturn: 30000 },
            { id: 4, name: 'Company4', totalShare: 4000, totalReturn: 40000 },
            { id: 5, name: 'Company5', totalShare: 5000, totalReturn: 50000 },
            { id: 6, name: 'Company6', totalShare: 6000, totalReturn: 60000 },
          // Add more companies as needed
        ]);
         reject(new Error('Failed to fetch')); // Uncomment to test error handling
      }, 2000);
    });

    mockApiCall
      .then(companies => {
        setCompanies(companies);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading companies...</p>;
  }

  if (error) {
    return <p>Error loading companies: {error}</p>;
  }

  return (
    <div>
      {companies.map(company => (
        <GridCard key={company.id} company={company} />
      ))}
    </div>
  );
};


function GridCard({company}) {
  
  // Total Shares, Total Shares css
  const TotalStyle = {
    fontSize : "15px",
    fontWeigth : "600",
    color : "#7a7a7a",
  }

  const TotalValueStyle = {
    marginRight : "30px",
    textAlign : "right",
    fontSize : "15px",
    fontWeigth : "bold",
  }

    return (
        <Card boarder="primary" style={{ width: '20rem', border : 'none'}}>
            <Container>
                <Row style={{padding : "20px 0px"}}>
                        {/* <img src={`https://logo.uplead.com/${company.name}.com`} alt={`${company.name} logo`} /> */}
                    <Col>
                        <Card.Title style={{display : "flex", alignItems: "flex-end"}}>
                          <img src={LogoImg} alt='logoimg' style={{width : "50px", borderRadius : "50px", padding : "10px"}}/>
                          <p style={{fontSize:"18px"}}> {company.name} </p>
                        </Card.Title>
                    </Col>
                    <Col>
                        <Chart />
                    </Col>
                </Row>
                <Row style={{paddingLeft : "10px"}}>
                    <Col>
                        <Card.Text>
                            <p style={TotalStyle}>Total Shares</p>
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>
                            <p style={TotalValueStyle}>{company.totalShare}</p>
                        </Card.Text>
                    </Col>
                </Row>
                <Row style={{paddingLeft : "10px"}}>
                    <Col>
                        <Card.Text>
                            <p style={TotalStyle}>Total Return</p>
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>
                            <p style={TotalValueStyle}>{company.totalReturn}</p>
                        </Card.Text>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default GridCard;