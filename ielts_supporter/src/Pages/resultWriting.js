import React from 'react';
import Footer from '../components/Footer';
import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

function ResultWritingScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    const { data, formData } = location.state;

    const answers = data.data.answer.split('## ');

    const extractScoreAndFeedback = (task) => {
        const scoreMatch = task.match(/Score:\*\* (\d+)/);
        const feedbackMatch = task.match(/Feedback:\*\* (.+)/);
        return {
            score: scoreMatch ? scoreMatch[1] : 'N/A',
            feedback: feedbackMatch ? feedbackMatch[1] : 'No feedback provided',
        };
    };

    const task1 = extractScoreAndFeedback(answers[1] || '');
    const task2 = extractScoreAndFeedback(answers[2] || '');
    const overallScoreMatch = answers[3]?.match(/Overall Score: (\d+\.?\d*)/);
    const overallScore = overallScoreMatch ? overallScoreMatch[1] : 'N/A';

    return (
        <>
            <section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <Container style={{ backgroundColor: "white", padding: '20px', borderRadius: '8px' }}>
                    <Row className='result'>
                        <Col sm={12}>
                            <h1 style={{ color: "#3CB46E" }}><i className="fa fa-check-square" aria-hidden="true"></i> Result:</h1>
                            <h2>Feedback</h2>
                            <p><strong>Task 1:</strong></p>
                            <p><strong>Score:</strong> {task1.score}</p>
                            <p><strong>Feedback:</strong> {task1.feedback}</p>
                            <p><strong>Task 2:</strong></p>
                            <p><strong>Score:</strong> {task2.score}</p>
                            <p><strong>Feedback:</strong> {task2.feedback}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h2>Your Answers</h2>
                            <p><strong>Task 1:</strong></p>
                            <p>{formData.task1 || 'No answer provided'}</p>

                        </Col>
                        <Col sm={6}>
                            <br />
                            <br />
                            <p><strong>Task 2:</strong></p>
                            <p>{formData.task2 || 'No answer provided'}</p>
                        </Col>
                    </Row>

                </Container>
                <button className='btn btn-primary mt-3' onClick={() => navigate(-3)}>Return</button>
            </section>
            <Footer />
        </>
    );
}

export default ResultWritingScreen;
