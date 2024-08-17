import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Card, CardText, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const DetailReadingScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { rea_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://10.60.1.203:8080/data/reading/rea_ques/get/${rea_id}`);
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

    const handleCardClick = (rea_id) => {
        navigate(`/TestingReading/${rea_id}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <section className='big-container' style={{ paddingLeft: 200, paddingRight: 200, paddingTop: 50, paddingBottom: 50 }}>
                <Card>
                    <Card.Header>IELTS Simulation Reading test {data.rea_id}</Card.Header>
                    <Card.Body>
                        <Card.Title><h3>{data.rea_topic}</h3></Card.Title>
                        <Card.Text>
                            <b>Thông tin đề thi</b>
                            <p><i class='fa-solid fa-clock' /> Thời gian làm bài: 60 phút | 3 phần thi | 40 câu hỏi |</p>
                            <p>
                                Phần thi bạn sẽ làm:
                                <br />
                                <b>Passage 1 (13 câu hỏi)</b>
                                <br />
                                [Reading] Table/Note/Flow chart Completion
                                <br />
                                [Reading] True/False/Not Given
                                <br />
                                <b>Passage 2 (13 câu hỏi)</b>
                                <br />
                                [Reading] Matching Headings
                                <br />
                                [Reading] Matching Features
                                <br />
                                <b>Passage 3 (14 câu hỏi)</b>
                                <br />
                                [Reading] Table/Note/Flow chart Completion
                                <br />
                                [Reading] Matching Sentence Endings
                            </p>
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleCardClick(rea_id)}>Luyện tập</Button>
                    </Card.Body>
                </Card>
            </section>
            <Footer />
        </>
    );
};

export default DetailReadingScreen;
