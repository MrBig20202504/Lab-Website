import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AdminPage = () => {
    const [listeningTest, setListeningTest] = useState({
        lis_id: '',
        lis_topic: '',
        lis_question_1: '',
        lis_question_2: '',
        lis_question_3: '',
        lis_question_4: '',
        lis_audio_1: '',
        lis_audio_2: '',
        lis_audio_3: '',
        lis_audio_4: '',
    });

    const [readingTest, setReadingTest] = useState({
        rea_id: '',
        rea_topic: '',
        rea_doc_1: '',
        rea_doc_2: '',
        rea_doc_3: '',
        rea_question_1: '',
        rea_question_2: '',
        rea_question_3: '',
        rea_question_4: '',
    });

    const [writingTest, setWritingTest] = useState({
        wri_id: '',
        wri_topic: '',
        wri_question_1: '',
        wri_question_2: '',
        wri_question_1_url: '',
        wri_question_2_url: '',
    });
    const [speakingTest, setSpeakingTest] = useState({
        spe_id: '',
        spe_topic: '',
        spe_question_1_1: '',
        spe_question_1_2: '',
        spe_question_1_3: '',
        spe_question_2: '',
        spe_question_2_suggest_1: '',
        spe_question_2_suggest_2: '',
        spe_question_2_suggest_3: '',
        spe_question_2_suggest_4: '',
        spe_question_3_1: '',
        spe_question_3_2: '',
        spe_question_3_3: '',
    });

    const [data, setData] = useState([]);
    const [readingData, setReadingData] = useState([]);
    const [writingData, setWritingData] = useState([]);
    const [speakingData, setSpeakingData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/listening/lis_ques/get');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonResponse = await response.json();
            setData(jsonResponse.data);
        } catch (error) {
            alert('Error fetching data:', error.toString());
        }
    };

    const fetchReadingData = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/reading/rea_ques/get');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonResponse = await response.json();
            setReadingData(jsonResponse.data);
        } catch (error) {
            alert('Error fetching data:', error.toString());
        }
    };

    const fetchWritingData = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/writing/wri_ques/get');
            if (!response.ok) throw new Error('Network response was not ok');
            const jsonResponse = await response.json();
            setWritingData(jsonResponse.data);
        } catch (error) {
            alert('Error fetching writing data:', error.toString());
        }
    };

    const fetchSpeakingData = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/speaking/spe_ques/get');
            if (!response.ok) throw new Error('Network response was not ok');
            const jsonResponse = await response.json();
            setSpeakingData(jsonResponse.data);
        } catch (error) {
            alert('Error fetching speaking data:', error.toString());
        }
    };

    useEffect(() => {
        fetchData();
        fetchReadingData();
        fetchWritingData();
        fetchSpeakingData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListeningTest({
            ...listeningTest,
            [name]: value,
        });
    };

    const handleReadingChange = (e) => {
        const { name, value } = e.target;
        setReadingTest({
            ...readingTest,
            [name]: value,
        });
    };

    const handleWritingChange = (e) => {
        const { name, value } = e.target;
        setWritingTest({ ...writingTest, [name]: value });
    };
    const handleSpeakingChange = (e) => {
        const { name, value } = e.target;
        setSpeakingTest({ ...speakingTest, [name]: value });
    };

    const handleAddTest = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/listening/lis_ques/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(listeningTest),
            });

            const result = await response.json();
            fetchData();
            alert(result.message);
        } catch (error) {
            alert('Failed to add listening test');
        }
    };

    const handleAddReadingTest = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/reading/rea_ques/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(readingTest),
            });

            const result = await response.json();
            fetchReadingData();
            alert(result.message);
        } catch (error) {
            alert('Failed to add reading test');
        }
    };

    const handleAddWritingTest = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/writing/wri_ques/insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(writingTest),
            });
            const result = await response.json();
            fetchWritingData();
            alert(result.message);
        } catch (error) {
            alert('Failed to add writing test');
        }
    };

    const handleAddSpeakingTest = async () => {
        try {
            const response = await fetch('http://10.60.1.203:8080/data/speaking/spe_ques/insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(speakingTest),
            });
            const result = await response.json();
            fetchSpeakingData();
            alert(result.message);
        } catch (error) {
            alert('Failed to add speaking test');
        }
    };

    const handleUpdateTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/listening/lis_ques/update/${listeningTest.lis_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(listeningTest),
            });
            fetchData();
            alert('Successful!');
        } catch (error) {
            alert('Failed to update listening test');
        }
    };

    const handleUpdateReadingTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/reading/rea_ques/update/${readingTest.rea_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(readingTest),
            });
            fetchReadingData();
            alert('Successful!');
        } catch (error) {
            alert('Failed to update reading test');
        }
    };

    const handleUpdateWritingTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/writing/wri_ques/update/${writingTest.wri_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(writingTest),
            });
            fetchWritingData();
            alert('Successful!');
        } catch (error) {
            alert('Failed to update writing test');
        }
    };

    const handleUpdateSpeakingTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/speaking/spe_ques/update/${speakingTest.spe_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(speakingTest),
            });
            fetchSpeakingData();
            alert('Successful!');
        } catch (error) {
            alert('Failed to update speaking test');
        }
    };

    const handleDeleteTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/listening/lis_ques/delete/${listeningTest.lis_id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            fetchData();
            alert(result.message);
        } catch (error) {
            alert('Failed to delete listening test');
        }
    };

    const handleDeleteReadingTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/reading/rea_ques/delete/${readingTest.rea_id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            fetchReadingData();
            alert(result.message);
        } catch (error) {
            alert('Failed to delete reading test');
        }
    };

    const handleDeleteWritingTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/writing/wri_ques/delete/${writingTest.wri_id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            fetchWritingData();
            alert(result.message);
        } catch (error) {
            alert('Failed to delete writing test');
        }
    };

    const handleDeleteSpeakingTest = async () => {
        try {
            const response = await fetch(`http://10.60.1.203:8080/data/speaking/spe_ques/delete/${speakingTest.spe_id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            fetchSpeakingData();
            alert(result.message);
        } catch (error) {
            alert('Failed to delete speaking test');
        }
    };

    return (
        <Container>
            <Tabs defaultActiveKey="Listening" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="Listening" title="Listening">
                    <Row>
                        <h1>Admin Page - Listening Test Management</h1>
                        <input type="text" name="lis_id" placeholder="Listening Test ID" value={listeningTest.lis_id} onChange={handleChange} />
                        <input type="text" name="lis_topic" placeholder="Listening Test Topic" value={listeningTest.lis_topic} onChange={handleChange} />
                        <input type="text" name="lis_question_1" placeholder="Question 1" value={listeningTest.lis_question_1} onChange={handleChange} />
                        <input type="text" name="lis_question_2" placeholder="Question 2" value={listeningTest.lis_question_2} onChange={handleChange} />
                        <input type="text" name="lis_question_3" placeholder="Question 3" value={listeningTest.lis_question_3} onChange={handleChange} />
                        <input type="text" name="lis_question_4" placeholder="Question 4" value={listeningTest.lis_question_4} onChange={handleChange} />
                        <input type="text" name="lis_audio_1" placeholder="Audio 1 URL" value={listeningTest.lis_audio_1} onChange={handleChange} />
                        <input type="text" name="lis_audio_2" placeholder="Audio 2 URL" value={listeningTest.lis_audio_2} onChange={handleChange} />
                        <input type="text" name="lis_audio_3" placeholder="Audio 3 URL" value={listeningTest.lis_audio_3} onChange={handleChange} />
                        <input type="text" name="lis_audio_4" placeholder="Audio 4 URL" value={listeningTest.lis_audio_4} onChange={handleChange} />
                        <button onClick={handleAddTest}>Add Listening Test</button>
                        <button onClick={handleUpdateTest}>Update Listening Test</button>
                        <button onClick={handleDeleteTest}>Delete Listening Test</button>
                    </Row>
                    <Row>
                        <Table striped bordered hover size="lg">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Topic</th>
                                    <th>Question 1</th>
                                    <th>Question 2</th>
                                    <th>Question 3</th>
                                    <th>Question 4</th>
                                    <th>Audio 1 - 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.lis_id}>
                                        <td>{item.lis_id}</td>
                                        <td>{item.lis_topic}</td>
                                        <td><img src={item.lis_question_1} alt="Question 1" style={{ width: '50px' }} /></td>
                                        <td><img src={item.lis_question_2} alt="Question 2" style={{ width: '50px' }} /></td>
                                        <td><img src={item.lis_question_3} alt="Question 3" style={{ width: '50px' }} /></td>
                                        <td><img src={item.lis_question_4} alt="Question 4" style={{ width: '50px' }} /></td>
                                        <td>
                                            <p>{item.lis_audio_1}</p>
                                            <p>{item.lis_audio_2}</p>
                                            <p>{item.lis_audio_3}</p>
                                            <p>{item.lis_audio_4}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="Reading" title="Reading">
                    <Row>
                        <h1>Admin Page - Reading Test Management</h1>
                        <input type="text" name="rea_id" placeholder="Reading Test ID" value={readingTest.rea_id} onChange={handleReadingChange} />
                        <input type="text" name="rea_topic" placeholder="Reading Test Topic" value={readingTest.rea_topic} onChange={handleReadingChange} />
                        <input type="text" name="rea_doc_1" placeholder="Document 1" value={readingTest.rea_doc_1} onChange={handleReadingChange} />
                        <input type="text" name="rea_doc_2" placeholder="Document 2" value={readingTest.rea_doc_2} onChange={handleReadingChange} />
                        <input type="text" name="rea_doc_3" placeholder="Document 3" value={readingTest.rea_doc_3} onChange={handleReadingChange} />
                        <input type="text" name="rea_question_1" placeholder="Question 1" value={readingTest.rea_question_1} onChange={handleReadingChange} />
                        <input type="text" name="rea_question_2" placeholder="Question 2" value={readingTest.rea_question_2} onChange={handleReadingChange} />
                        <input type="text" name="rea_question_3" placeholder="Question 3" value={readingTest.rea_question_3} onChange={handleReadingChange} />
                        <button onClick={handleAddReadingTest}>Add Reading Test</button>
                        <button onClick={handleUpdateReadingTest}>Update Reading Test</button>
                        <button onClick={handleDeleteReadingTest}>Delete Reading Test</button>
                    </Row>
                    <Row>
                        <Table striped bordered hover size="lg">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Topic</th>
                                    <th>Document 1</th>
                                    <th>Document 2</th>
                                    <th>Document 3</th>
                                    <th>Question 1</th>
                                    <th>Question 2</th>
                                    <th>Question 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {readingData.map((item, index) => (
                                    <tr key={item.rea_id}>
                                        <td>{item.rea_id}</td>
                                        <td>{item.rea_topic}</td>
                                        <td><img src={item.rea_doc_1} alt="Document 1" style={{ width: '50px' }} /></td>
                                        <td><img src={item.rea_doc_2} alt="Document 2" style={{ width: '50px' }} /></td>
                                        <td><img src={item.rea_doc_3} alt="Document 3" style={{ width: '50px' }} /></td>
                                        <td><img src={item.rea_question_1} alt="Question 1" style={{ width: '50px' }} /></td>
                                        <td><img src={item.rea_question_2} alt="Question 2" style={{ width: '50px' }} /></td>
                                        <td><img src={item.rea_question_3} alt="Question 3" style={{ width: '50px' }} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="Writing" title="Writing">
                    <Row>
                        <h1>Admin Page - Writing Test Management</h1>
                        <input type="text" name="wri_id" placeholder="Writing Test ID" value={writingTest.wri_id} onChange={handleWritingChange} />
                        <input type="text" name="wri_topic" placeholder="Writing Test Topic" value={writingTest.wri_topic} onChange={handleWritingChange} />
                        <input type="text" name="wri_question_1" placeholder="Question 1" value={writingTest.wri_question_1} onChange={handleWritingChange} />
                        <input type="text" name="wri_question_2" placeholder="Question 2" value={writingTest.wri_question_2} onChange={handleWritingChange} />
                        <input type="text" name="wri_question_1_url" placeholder="Question 1 URL" value={writingTest.wri_question_1_url} onChange={handleWritingChange} />
                        <input type="text" name="wri_question_2_url" placeholder="Question 2 URL" value={writingTest.wri_question_2_url} onChange={handleWritingChange} />
                        <button onClick={handleAddWritingTest}>Add Writing Test</button>
                        <button onClick={handleUpdateWritingTest}>Update Writing Test</button>
                        <button onClick={handleDeleteWritingTest}>Delete Writing Test</button>
                    </Row>
                    <Row>
                        <Table striped bordered hover size="lg">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Topic</th>
                                    <th>Question 1</th>
                                    <th>Question 1 URL</th>
                                    <th>Question 2</th>
                                    <th>Question 2 URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {writingData.map((item, index) => (
                                    <tr key={item.wri_id}>
                                        <td>{item.wri_id}</td>
                                        <td>{item.wri_topic}</td>
                                        <td>{item.wri_question_1}</td>
                                        <td>{item.wri_question_1_url}</td>
                                        <td>{item.wri_question_2}</td>
                                        <td>{item.wri_question_2_url}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="Speaking" title="Speaking">
                    <Row>
                        <h1>Admin Page - Speaking Test Management</h1>
                        <input type="text" name="spe_id" placeholder="Speaking Test ID" value={speakingTest.spe_id} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_topic" placeholder="Speaking Test Topic" value={speakingTest.spe_topic} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_1_1" placeholder="Question 1.1" value={speakingTest.spe_question_1_1} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_1_2" placeholder="Question 1.2" value={speakingTest.spe_question_1_2} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_1_3" placeholder="Question 1.3" value={speakingTest.spe_question_1_3} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_2" placeholder="Question 2" value={speakingTest.spe_question_2} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_2_suggest_1" placeholder="Question 2 Suggestion 1" value={speakingTest.spe_question_2_suggest_1} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_2_suggest_2" placeholder="Question 2 Suggestion 2" value={speakingTest.spe_question_2_suggest_2} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_2_suggest_3" placeholder="Question 2 Suggestion 3" value={speakingTest.spe_question_2_suggest_3} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_2_suggest_4" placeholder="Question 2 Suggestion 4" value={speakingTest.spe_question_2_suggest_4} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_3_1" placeholder="Question 3.1" value={speakingTest.spe_question_3_1} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_3_2" placeholder="Question 3.2" value={speakingTest.spe_question_3_2} onChange={handleSpeakingChange} />
                        <input type="text" name="spe_question_3_3" placeholder="Question 3.3" value={speakingTest.spe_question_3_3} onChange={handleSpeakingChange} />
                        <button onClick={handleAddSpeakingTest}>Add Speaking Test</button>
                        <button onClick={handleUpdateSpeakingTest}>Update Speaking Test</button>
                        <button onClick={handleDeleteSpeakingTest}>Delete Speaking Test</button>
                    </Row>
                    <Row>
                        <Table striped bordered hover size="lg">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Topic</th>
                                    <th>Question 1.1</th>
                                    <th>Question 1.2</th>
                                    <th>Question 1.3</th>
                                    <th>Question 2</th>
                                    <th>Question 2 Suggestion 1</th>
                                    <th>Question 2 Suggestion 2</th>
                                    <th>Question 2 Suggestion 3</th>
                                    <th>Question 2 Suggestion 4</th>
                                    <th>Question 3.1</th>
                                    <th>Question 3.2</th>
                                    <th>Question 3.3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {speakingData.map((item, index) => (
                                    <tr key={item.spe_id}>
                                        <td>{item.spe_id}</td>
                                        <td>{item.spe_topic}</td>
                                        <td>{item.spe_question_1_1}</td>
                                        <td>{item.spe_question_1_2}</td>
                                        <td>{item.spe_question_1_3}</td>
                                        <td>{item.spe_question_2}</td>
                                        <td>{item.spe_question_2_suggest_1}</td>
                                        <td>{item.spe_question_2_suggest_2}</td>
                                        <td>{item.spe_question_2_suggest_3}</td>
                                        <td>{item.spe_question_2_suggest_4}</td>
                                        <td>{item.spe_question_3_1}</td>
                                        <td>{item.spe_question_3_2}</td>
                                        <td>{item.spe_question_3_3}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default AdminPage;
