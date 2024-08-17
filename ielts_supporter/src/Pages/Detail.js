import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Card, CardText, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const DetailScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { lis_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://10.60.1.203:8080/data/listening/lis_ques/get/${lis_id}`);
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
        navigate(`/Testing/${lis_id}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <section className='big-container' style={{ paddingLeft: 200, paddingRight: 200, paddingTop: 50, paddingBottom: 50 }}>
                <Card>
                    <Card.Header>IELTS Simulation Listening test {data.lis_id}</Card.Header>
                    <Card.Body>
                        <Card.Title><h3>{data.lis_topic}</h3></Card.Title>
                        <Card.Text>
                            <b>Thông tin đề thi</b>
                            <p><i class='fa-solid fa-clock' /> Thời gian làm bài: 40 phút | 4 phần thi | 40 câu hỏi |</p>
                            <p>
                                Phần thi bạn sẽ làm:
                                <br />
                                <b>Recording 1 (10 câu hỏi)</b>
                                <br />
                                [Listening] Note/Form Completion
                                <br />
                                <b>Recording 2 (10 câu hỏi)</b>
                                <br />
                                [Listening] Table Completion
                                <br />
                                [Listening] Multiple Choice
                                <br />
                                <b>Recording 3 (10 câu hỏi)</b>
                                <br />
                                [Listening] Note/Form Completion
                                <br />
                                [Listening] Table Completion
                                <br />
                                <b>Recording 4 (10 câu hỏi)</b>
                                <br />
                                [Listening] Summary/Flow chart Completion
                                <br />
                                [Listening] Matching
                            </p>
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleCardClick(lis_id)}>Luyện tập</Button>
                    </Card.Body>
                </Card>
            </section>
            <Footer />
        </>
    );
};

export default DetailScreen;
