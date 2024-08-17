import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.60.1.203:8080/data/listening/lis_ques/get');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonResponse = await response.json();
        setData(jsonResponse.data);
        setLoading(false);
      } catch (error) {
        alert('Error fetching data:', error.toString());
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (lis_id) => {
    navigate(`/Detail/${lis_id}`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <Row lg={4} sm={2} className="g-4">
          {data.map((item) => (
            <Col key={item.lis_id}>
              <Card onClick={() => handleCardClick(item.lis_id)} className='test'>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIG3.tRPy9ueLnYGqNESYYDge?w=1024&h=1024&rs=1&pid=ImgDetMain" alt='listening-test' loading='lazy' />
                <Card.Body>
                  <Card.Title><h3>IELTS Simulation {item.lis_topic}</h3></Card.Title>
                  <CardText>
                    <p>40 phút
                      <br />
                      4 phần thi | 40 câu hỏi</p>
                  </CardText>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MyComponent;
