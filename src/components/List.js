import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import {ListGroup} from 'react-bootstrap';

function List() {
  const [activeTab, setActiveTab] = useState("#first");

  function handleSelect(selectedTab) {
    setActiveTab(selectedTab);
  }

  const mockData = [
    { code: "123", name: "Item 1", price: "100", priceIncrease: "5" },
    { code: "456", name: "Item 2", price: "200", priceIncrease: "10" },
    { code: "789", name: "Item 3", price: "300", priceIncrease: "15" },
    {code: "123", name: "Item 1", price: "100", priceIncrease: "5"},
    {code: "456", name: "Item 2", price: "200", priceIncrease: "10"},
    {code: "789", name: "Item 3", price: "300", priceIncrease: "15"},
  ];

  const [items, setItems] = useState(mockData); // using mock data

  return (
    <Card>
      <Card.Header>
        <h2>Market</h2>
        <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="#first">전체</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#link">에너지</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <>
          {activeTab === '#first' && (
            <ListGroup>
              {items.map((item, index) => (
                <ListGroup.Item key={index}>
                  <div className="listItem">
                  <div>
                    {item.code}
                  </div>
                    <div>
                      {item.name}
                    </div>
                    <div>
                      {item.price}
                    </div>
                    <div>
                      {item.priceIncrease}%
                    </div>
                    </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          {activeTab === '#link' && (
            <>
              <Card.Title>Second Tab</Card.Title>
              <Card.Text>
                This is the second tab.
              </Card.Text>
              <Button variant="primary">Go somewhere else</Button>
            </>
          )}
        </>
      </Card.Body>
    </Card>
  );
}

export default List;