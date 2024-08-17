import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.60.1.203:8080/data/speaking/spe_ques/get');
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

  const handleCardClick = (spe_id) => {
    navigate(`/DetailSpeaking/${spe_id}`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <section>
        <Row lg={4} sm={2} className="g-4">
          {data.map((item) => (
            <Col key={item.spe_id}>
              <Card onClick={() => handleCardClick(item.spe_id)} className='test'>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIG2.S9E78f4osCpT.D0VHqvL?pid=ImgGn" alt='speaking-test' loading='lazy' />
                <Card.Body>
                  <Card.Title><h3>IELTS Simulation {item.spe_topic}</h3></Card.Title>
                  <CardText>
                    <p>15 phút
                      <br />
                      3 phần thi</p>
                  </CardText>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      <Footer />
    </div>
  );
};

export default MyComponent;
