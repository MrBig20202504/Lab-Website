import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, Row, Col } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function CardsReading() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://10.60.1.203:8080/data/reading/rea_ques/get');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonResponse = await response.json();
          setData(jsonResponse.data);
          console.log(data);
          setLoading(false);
        } catch (error) {
          alert('Error fetching data:', error.toString());
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    const handleCardClick = (rea_id) => {
      navigate(`/DetailReading/${rea_id}`);
    };
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <section>
        <Row lg={4} className="g-4">
          {data.map((item) => (
            <Col key={item.rea_id}>
              <Card onClick={() => handleCardClick(item.rea_id)} className='test'>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIG1.ZZLJOVHcysh0aWnv6qFq?pid=ImgGn" alt='reading-test' loading='lazy' />
                <Card.Body>
                  <Card.Title><h3>IELTS Simulation {item.rea_topic}</h3></Card.Title>
                  <CardText>
                    <p>60 phút
                      <br />
                      3 phần thi | 40 câu hỏi</p>
                  </CardText>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    );
}

export default CardsReading;