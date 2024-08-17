import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { Row, Col, Spinner, Form, FloatingLabel } from 'react-bootstrap';

const TestingWritingArea = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [sampleAnswer, setSampleAnswer] = useState("");
    const [sampleAnswer2, setSampleAnswer2] = useState("");
    const [loadingSample1, setLoadingSample1] = useState(false);
    const [loadingSample2, setLoadingSample2] = useState(false);
    const formRef = useRef(null);
    const { wri_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://10.60.1.203:8080/data/writing/wri_ques/get/${wri_id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonResponse = await response.json();
                setData(jsonResponse.data);
            } catch (error) {
                alert('Error fetching data:', error.toString());
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [wri_id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(formRef.current);
        const task1 = formData.get('task1');
        const task2 = formData.get('task2');

        try {
            const response = await fetch('http://10.60.1.203:8080/data/openai/score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    responseType: "json",
                    testID: wri_id,
                    answer_1: task1,
                    answer_2: task2,
                }),
            });

            const result = await response.json();
            navigate('/ResultWriting', { state: { data: result, formData: { task1, task2 } } });

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleGetSample = async () => {
        setLoadingSample1(true);
        try {
            const response = await fetch('http://10.60.1.203:8080/data/openai/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    responseType: "json",
                    taskName: data.wri_question_1,
                    task: 1,
                }),
            });

            const result = await response.json();
            setSampleAnswer(result.data.answer);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoadingSample1(false);
        }
    };

    const handleGetSample2 = async () => {
        setLoadingSample2(true);
        try {
            const response = await fetch('http://10.60.1.203:8080/data/openai/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    responseType: "json",
                    taskName: data.wri_question_2,
                    task: 2,
                }),
            });

            const result = await response.json();
            setSampleAnswer2(result.data.answer);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoadingSample2(false);
        }
    };

    return (
        <>
            <section style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
                {loading && (
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
                {!loading && (
                    <Form ref={formRef} id="answerForm" onSubmit={handleSubmit}>
                        <Container style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                            <Row className='mb-4'>
                                <Col>
                                    <h2>Task 1:</h2>
                                    {data.wri_question_1_url && (
                                        <img src={data.wri_question_1_url} loading='lazy' alt='English-writing' style={{ width: '100%', marginBottom: '20px' }} />
                                    )}
                                    <FloatingLabel controlId="task1" label="Write your answer here...(no more than 3000 characters)...">
                                        <Form.Control
                                            as="textarea"
                                            name="task1"
                                            style={{ height: '400px', resize: 'none', fontSize: "20px" }}
                                            maxLength={3000}
                                        />
                                        <Form.Control
                                            as="textarea"
                                            value={sampleAnswer}
                                            readOnly
                                            style={{ height: '400px', resize: 'none', fontSize: "20px" }}
                                            maxLength={3000}
                                        />
                                    </FloatingLabel>
                                    <button
                                        type="button"
                                        className="btn btn-secondary mt-3"
                                        onClick={handleGetSample}
                                        disabled={loadingSample1}
                                    >
                                        {loadingSample1 ? (
                                            <Spinner animation="border" size="sm" />
                                        ) : (
                                            "Get Sample Answer for Task 1"
                                        )}
                                    </button>
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col>
                                    <h2>Task 2:</h2>
                                    {data.wri_question_2_url && (
                                        <img src={data.wri_question_2_url} loading='lazy' alt='English-writing' style={{ width: '100%', marginBottom: '20px' }} />
                                    )}
                                    <FloatingLabel controlId="task2" label="Write your answer here...(no more than 6000 characters)...">
                                        <Form.Control
                                            as="textarea"
                                            name="task2"
                                            style={{ height: '600px', resize: 'none', fontSize: "20px" }}
                                            maxLength={6000}
                                        />
                                        <Form.Control
                                            as="textarea"
                                            value={sampleAnswer2}
                                            readOnly
                                            style={{ height: '600px', resize: 'none', fontSize: "20px" }}
                                            maxLength={6000}
                                        />
                                    </FloatingLabel>
                                    <button
                                        type="button"
                                        className="btn btn-secondary mt-3"
                                        onClick={handleGetSample2}
                                        disabled={loadingSample2}
                                    >
                                        {loadingSample2 ? (
                                            <Spinner animation="border" size="sm" />
                                        ) : (
                                            "Get Sample Answer for Task 2"
                                        )}
                                    </button>
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col>
                                    <button className="btn btn-primary submit" type="submit">Submit</button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                )}
            </section>
            <Footer />
        </>
    );
};

export default TestingWritingArea;
