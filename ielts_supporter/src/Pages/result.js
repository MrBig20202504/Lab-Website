import React from 'react';
import Footer from '../components/Footer';
import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

function ResultScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;

    if (!state || !state.data) {
        return <div>Error: No data available</div>;
    }

    let postData = typeof state.data === 'string' ? JSON.parse(state.data) : state.data;
    const formData = state.formData || {};

    const questionNumbers = Array.from({ length: 40 }, (_, i) => i + 1);

    const getFeedbackStyle = (feedback) => {
        return feedback === 'Incorrect' ? { color: 'red' } : { color: 'green' };
    };

    return (
        <>
            <section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <Container style={{ backgroundColor: "white", padding: '20px' }}>
                    <Row className='result'>
                        <Col sm={3}>
                            <h1><i className="fa fa-check-square" aria-hidden="true"></i> Điểm: {postData.data.grading.score || 'N/A'}/9</h1>
                        </Col>
                        <Col sm={6}>
                            <h1>Số Câu đúng: {postData.data.total.rate || 'N/A'}</h1>
                        </Col>
                    </Row>
                    <Row sm={12}>
                        <Col>
                            <h2>Your Answer</h2>
                            {questionNumbers.map(num => (
                                <p key={num}>Question {num}: {JSON.stringify(formData[`lis_answer_${num}`] || formData[`rea_answer_${num}`] || '')}</p>
                            ))}
                        </Col>
                        <Col>
                            <h2>Feedback</h2>
                            {questionNumbers.map(num => (
                                <p key={num} style={getFeedbackStyle(postData.data.feedback[`client_answer_${num}`])}>
                                    {postData.data.feedback[`client_answer_${num}`] || ''}
                                </p>
                            ))}
                        </Col>
                        <Col>
                            <h2>Correct Answers</h2>
                            {questionNumbers.map(num => (
                                <p key={num}>{postData.data.answers[`lis_answer_${num}`] || postData.data.answers[`lis_answer_${num}`] || ''}</p>
                            ))}
                        </Col>
                    </Row>
                </Container>
                <button className='return' onClick={() => navigate(-3)}>Return</button>
            </section>
            <Footer />
        </>
    );
}

export default ResultScreen;
