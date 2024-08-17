import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Card, CardText, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const DetailSpeakingScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { spe_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://10.60.1.203:8080/data/speaking/spe_ques/get/${spe_id}`);
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
        navigate(`/TestingSpeaking/${spe_id}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <section className='big-container' style={{ paddingLeft: 200, paddingRight: 200, paddingTop: 50, paddingBottom: 50 }}>
                <Card>
                    <Card.Header>IELTS Simulation Speaking test {data.spe_id}</Card.Header>
                    <Card.Body>
                        <Card.Title><h3>{data.spe_topic}</h3></Card.Title>
                        <Card.Text>
                            <b>Thông tin đề thi</b>
                            <p><i class='fa-solid fa-clock' /> Thời gian làm bài: 15 phút | 3 phần thi|</p>
                            <p>
                                Phần thi bạn sẽ làm:
                                <br />
                                <b>Task 1 </b>
                                <br />
                                [Speaking] Introduction and Interview (4-5 minutes)
                                <br />
                                <b>Task 2 </b>
                                <br />
                                [Speaking] Cue Card (3-4 minutes)
                                <br />
                                <b>Task 3 </b>
                                <br />
                                [Speaking] Discussion (4-5 minutes)
                            </p>
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleCardClick(spe_id)}>Luyện tập</Button>
                    </Card.Body>
                </Card>
            </section>
            <Footer />
        </>
    );
};

export default DetailSpeakingScreen;
