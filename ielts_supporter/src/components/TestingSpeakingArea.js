import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Row, Col, Spinner, Form, Card, Button } from 'react-bootstrap';

const TestingSpeakingArea = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [transcription, setTranscription] = useState(""); // State for storing transcription
    const formRef = useRef(null);
    const { spe_id } = useParams();
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://10.60.1.203:8080/data/speaking/spe_ques/get/${spe_id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonResponse = await response.json();
                setData(jsonResponse.data);
            } catch (error) {
                alert('Error fetching data: ' + error.toString());
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [spe_id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!audioBlob) {
            alert('No audio recorded!');
            return;
        }

        const formData = new FormData();
        formData.append('file', audioBlob, 'recording.wav');
        formData.append('spe_id', spe_id);

        try {
            const response = await fetch('http://10.60.1.203:8080/data/speech/convert', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json(); // Parse the JSON response
            setTranscription(result.data.feedback); // Update the transcription state
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting the form: ' + error.toString());
        }
    };

    const startRecording = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then((stream) => {
                    const mediaRecorder = new MediaRecorder(stream);
                    mediaRecorderRef.current = mediaRecorder;

                    mediaRecorder.ondataavailable = (event) => {
                        if (event.data.size > 0) {
                            audioChunks.current.push(event.data);
                        }
                    };

                    mediaRecorder.onstop = () => {
                        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
                        setAudioBlob(audioBlob);
                        audioChunks.current = [];
                    };

                    mediaRecorder.start();
                    setIsRecording(true);
                    setIsPaused(false);
                })
                .catch((err) => {
                    console.error('Error accessing microphone:', err);
                });
        } else {
            alert('Media devices are not supported by your browser.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setIsPaused(false);
        } else {
            console.error('No media recorder instance found');
        }
    };

    const pauseRecording = () => {
        if (mediaRecorderRef.current && isRecording && !isPaused) {
            mediaRecorderRef.current.pause();
            setIsPaused(true);
        }
    };

    const resumeRecording = () => {
        if (mediaRecorderRef.current && isRecording && isPaused) {
            mediaRecorderRef.current.resume();
            setIsPaused(false);
        }
    };

    return (
        <>
            <section style={{ backgroundColor: '#f0f0f0', padding: '20px 0', height: "100%" }}>
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
                            <h1>{data.spe_topic}</h1>
                            <h3>Task 1: </h3>
                            <Row>
                                {['spe_question_1_1', 'spe_question_1_2', 'spe_question_1_3', 'spe_question_1_4'].map((key, index) => (
                                    <React.Fragment key={index}>
                                        <Col xs={8}>
                                            <Card style={{ width: '100%' }}>
                                                <Card.Body>
                                                    <Card.Title>{index + 1}. {data[key]}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={3}>
                                            <Button onClick={isRecording ? (isPaused ? resumeRecording : pauseRecording) : startRecording} className="btn btn-secondary">
                                                {isRecording ? (isPaused ? 'Resume Recording' : 'Pause Recording') : 'Start Recording'}
                                            </Button>
                                        </Col>
                                    </React.Fragment>
                                ))}
                            </Row>
                            <br />
                            <h3>Task 2: </h3>
                            <Row>
                                <Col xs={12}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Body>
                                            <Card.Title>{data.spe_question_2}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">You should say: </Card.Subtitle>
                                            {['spe_question_2_suggest_1', 'spe_question_2_suggest_2', 'spe_question_2_suggest_3', 'spe_question_2_suggest_4'].map((key, index) => (
                                                <Card.Text key={index}>{data[key]}</Card.Text>
                                            ))}
                                            <Button onClick={isRecording ? (isPaused ? resumeRecording : pauseRecording) : startRecording} className="btn btn-secondary">
                                                {isRecording ? (isPaused ? 'Resume Recording' : 'Pause Recording') : 'Start Recording'}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br />
                            <h3>Task 3: </h3>
                            <Row>
                                {['spe_question_3_1', 'spe_question_3_2', 'spe_question_3_3'].map((key, index) => (
                                    <React.Fragment key={index}>
                                        <Col xs={8}>
                                            <Card style={{ width: '100%' }}>
                                                <Card.Body>
                                                    <Card.Title>{index + 1}. {data[key]}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={3}>
                                            <Button onClick={isRecording ? (isPaused ? resumeRecording : pauseRecording) : startRecording} className="btn btn-secondary">
                                                {isRecording ? (isPaused ? 'Resume Recording' : 'Pause Recording') : 'Start Recording'}
                                            </Button>
                                        </Col>
                                    </React.Fragment>
                                ))}
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <audio controls src={audioBlob ? URL.createObjectURL(audioBlob) : ''} disabled={!audioBlob}>
                                        Your browser does not support the audio element.
                                    </audio>
                                </Col>
                            </Row>

                            <h1>Feedback: (chỉ mang tính chất tham khảo)*</h1>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '700px', resize:"none"}}
                                    value={transcription}
                                    readOnly
                                />
                            </FloatingLabel>
                            <p>*Remember to stop the audio before submitting</p>
                            <Button onClick={stopRecording} className="btn btn-danger ml-2" disabled={!isRecording}>
                                Stop
                            </Button>
                            <Button className='submit' type='submit'>Submit</Button>
                        </Container>
                    </Form>
                )}

            </section>
        </>
    );
};

export default TestingSpeakingArea;
