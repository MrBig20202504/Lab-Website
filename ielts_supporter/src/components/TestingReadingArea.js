import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const TestingReadingArea = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const formRef = useRef(null);
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

        const form = formRef.current;

        const handleSubmit = (event) => {
            event.preventDefault();
            const formData = {
                rea_ans_id: document.getElementById('rea_ans_id').value,
                rea_id: document.getElementById('rea_id').value,
                rea_answer_1: document.getElementById('rea_answer_1').value,
                rea_answer_2: document.getElementById('rea_answer_2').value,
                rea_answer_3: document.getElementById('rea_answer_3').value,
                rea_answer_4: document.getElementById('rea_answer_4').value,
                rea_answer_5: document.getElementById('rea_answer_5').value,
                rea_answer_6: document.getElementById('rea_answer_6').value,
                rea_answer_7: document.getElementById('rea_answer_7').value,
                rea_answer_8: document.getElementById('rea_answer_8').value,
                rea_answer_9: document.getElementById('rea_answer_9').value,
                rea_answer_10: document.getElementById('rea_answer_10').value,
                rea_answer_11: document.getElementById('rea_answer_11').value,
                rea_answer_12: document.getElementById('rea_answer_12').value,
                rea_answer_13: document.getElementById('rea_answer_13').value,
                rea_answer_14: document.getElementById('rea_answer_14').value,
                rea_answer_15: document.getElementById('rea_answer_15').value,
                rea_answer_16: document.getElementById('rea_answer_16').value,
                rea_answer_17: document.getElementById('rea_answer_17').value,
                rea_answer_18: document.getElementById('rea_answer_18').value,
                rea_answer_19: document.getElementById('rea_answer_19').value,
                rea_answer_20: document.getElementById('rea_answer_20').value,
                rea_answer_21: document.getElementById('rea_answer_21').value,
                rea_answer_22: document.getElementById('rea_answer_22').value,
                rea_answer_23: document.getElementById('rea_answer_23').value,
                rea_answer_24: document.getElementById('rea_answer_24').value,
                rea_answer_25: document.getElementById('rea_answer_25').value,
                rea_answer_26: document.getElementById('rea_answer_26').value,
                rea_answer_27: document.getElementById('rea_answer_27').value,
                rea_answer_28: document.getElementById('rea_answer_28').value,
                rea_answer_29: document.getElementById('rea_answer_29').value,
                rea_answer_30: document.getElementById('rea_answer_30').value,
                rea_answer_31: document.getElementById('rea_answer_31').value,
                rea_answer_32: document.getElementById('rea_answer_32').value,
                rea_answer_33: document.getElementById('rea_answer_33').value,
                rea_answer_34: document.getElementById('rea_answer_34').value,
                rea_answer_35: document.getElementById('rea_answer_35').value,
                rea_answer_36: document.getElementById('rea_answer_36').value,
                rea_answer_37: document.getElementById('rea_answer_37').value,
                rea_answer_38: document.getElementById('rea_answer_38').value,
                rea_answer_39: document.getElementById('rea_answer_39').value,
                rea_answer_40: document.getElementById('rea_answer_40').value,
            };

            fetch('http://10.60.1.203:8080/data/reading/rea_ans/answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.text())
                .then((data) => {
                    navigate('/Result', { state: { data, formData } });
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };

        if (form) {
            form.addEventListener('submit', handleSubmit);
        }

        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    return (
        <section style={{ backgroundColor: '#F8F9FA', width: "100%", padding: 20 }}>
            <form className="inputArea" ref={formRef} id="answerForm">
                <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10, borderWidth: 1, border: '2px solid #E0E0E0' }}>
                    <Col xs={12} lg={10}>
                        <Row>
                            <Col xs={12} lg={7}>
                                <img src={data.rea_doc_1} width="100%" loading='lazy' alt="Reading document 1" />
                            </Col>
                            <Col xs={12} lg={5}>
                                <img src={data.rea_question_1} width="100%" loading='lazy' alt="Reading question 1" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={7}>
                                <img src={data.rea_doc_2} width="100%" loading='lazy' alt="Reading document 2" />
                            </Col>
                            <Col xs={12} lg={5}>
                                <img src={data.rea_question_2} width="100%" loading='lazy' alt="Reading question 2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={7}>
                                <img src={data.rea_doc_3} width="100%" loading='lazy' alt="Reading document 3" />
                            </Col>
                            <Col xs={12} lg={5}>
                                <img src={data.rea_question_3} width="100%" loading='lazy' alt="Reading question 3" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={2}>

                        <input type="text" id="rea_ans_id" name="rea_ans_id" value={rea_id || ''} readOnly hidden />
                        <input type="text" id="rea_id" name="rea_id" value={rea_id || ''} readOnly hidden />
                        <label htmlFor="rea_answer_1"><b>Câu 1</b></label>
                        <input type="text" id="rea_answer_1" name="rea_answer_1" aria-label="Answer for question 1" />
                        <label htmlFor="rea_answer_2"><b>Câu 2</b></label>
                        <input type="text" id="rea_answer_2" name="rea_answer_2" aria-label="Answer for question 2" />
                        <label htmlFor="rea_answer_3"><b>Câu 3</b></label>
                        <input type="text" id="rea_answer_3" name="rea_answer_3" aria-label="Answer for question 3" />
                        <label htmlFor="rea_answer_4"><b>Câu 4</b></label>
                        <input type="text" id="rea_answer_4" name="rea_answer_4" aria-label="Answer for question 4" />
                        <label htmlFor="rea_answer_5"><b>Câu 5</b></label>
                        <input type="text" id="rea_answer_5" name="rea_answer_5" aria-label="Answer for question 5" />
                        <label htmlFor="rea_answer_6"><b>Câu 6</b></label>
                        <input type="text" id="rea_answer_6" name="rea_answer_6" aria-label="Answer for question 6" />
                        <label htmlFor="rea_answer_7"><b>Câu 7</b></label>
                        <input type="text" id="rea_answer_7" name="rea_answer_7" aria-label="Answer for question 7" />
                        <label htmlFor="rea_answer_8"><b>Câu 8</b></label>
                        <input type="text" id="rea_answer_8" name="rea_answer_8" aria-label="Answer for question 8" />
                        <label htmlFor="rea_answer_9"><b>Câu 9</b></label>
                        <input type="text" id="rea_answer_9" name="rea_answer_9" aria-label="Answer for question 9" />
                        <label htmlFor="rea_answer_10"><b>Câu 10</b></label>
                        <input type="text" id="rea_answer_10" name="rea_answer_10" aria-label="Answer for question 10" />
                        <label htmlFor="rea_answer_11"><b>Câu 11</b></label>
                        <input type="text" id="rea_answer_11" name="rea_answer_11" aria-label="Answer for question 11" />
                        <label htmlFor="rea_answer_12"><b>Câu 12</b></label>
                        <input type="text" id="rea_answer_12" name="rea_answer_12" aria-label="Answer for question 12" />
                        <label htmlFor="rea_answer_13"><b>Câu 13</b></label>
                        <input type="text" id="rea_answer_13" name="rea_answer_13" aria-label="Answer for question 13" />
                        <label htmlFor="rea_answer_14"><b>Câu 14</b></label>
                        <input type="text" id="rea_answer_14" name="rea_answer_14" aria-label="Answer for question 14" />
                        <label htmlFor="rea_answer_15"><b>Câu 15</b></label>
                        <input type="text" id="rea_answer_15" name="rea_answer_15" aria-label="Answer for question 15" />
                        <label htmlFor="rea_answer_16"><b>Câu 16</b></label>
                        <input type="text" id="rea_answer_16" name="rea_answer_16" aria-label="Answer for question 16" />
                        <label htmlFor="rea_answer_17"><b>Câu 17</b></label>
                        <input type="text" id="rea_answer_17" name="rea_answer_17" aria-label="Answer for question 17" />
                        <label htmlFor="rea_answer_18"><b>Câu 18</b></label>
                        <input type="text" id="rea_answer_18" name="rea_answer_18" aria-label="Answer for question 18" />
                        <label htmlFor="rea_answer_19"><b>Câu 19</b></label>
                        <input type="text" id="rea_answer_19" name="rea_answer_19" aria-label="Answer for question 19" />
                        <label htmlFor="rea_answer_20"><b>Câu 20</b></label>
                        <input type="text" id="rea_answer_20" name="rea_answer_20" aria-label="Answer for question 20" />
                        <label htmlFor="rea_answer_21"><b>Câu 21</b></label>
                        <input type="text" id="rea_answer_21" name="rea_answer_21" aria-label="Answer for question 21" />
                        <label htmlFor="rea_answer_22"><b>Câu 22</b></label>
                        <input type="text" id="rea_answer_22" name="rea_answer_22" aria-label="Answer for question 22" />
                        <label htmlFor="rea_answer_23"><b>Câu 23</b></label>
                        <input type="text" id="rea_answer_23" name="rea_answer_23" aria-label="Answer for question 23" />
                        <label htmlFor="rea_answer_24"><b>Câu 24</b></label>
                        <input type="text" id="rea_answer_24" name="rea_answer_24" aria-label="Answer for question 24" />
                        <label htmlFor="rea_answer_25"><b>Câu 25</b></label>
                        <input type="text" id="rea_answer_25" name="rea_answer_25" aria-label="Answer for question 25" />
                        <label htmlFor="rea_answer_26"><b>Câu 26</b></label>
                        <input type="text" id="rea_answer_26" name="rea_answer_26" aria-label="Answer for question 26" />
                        <label htmlFor="rea_answer_27"><b>Câu 27</b></label>
                        <input type="text" id="rea_answer_27" name="rea_answer_27" aria-label="Answer for question 27" />
                        <label htmlFor="rea_answer_28"><b>Câu 28</b></label>
                        <input type="text" id="rea_answer_28" name="rea_answer_28" aria-label="Answer for question 28" />
                        <label htmlFor="rea_answer_29"><b>Câu 29</b></label>
                        <input type="text" id="rea_answer_29" name="rea_answer_29" aria-label="Answer for question 29" />
                        <label htmlFor="rea_answer_30"><b>Câu 30</b></label>
                        <input type="text" id="rea_answer_30" name="rea_answer_30" aria-label="Answer for question 30" />
                        <label htmlFor="rea_answer_31"><b>Câu 31</b></label>
                        <input type="text" id="rea_answer_31" name="rea_answer_31" aria-label="Answer for question 31" />
                        <label htmlFor="rea_answer_32"><b>Câu 32</b></label>
                        <input type="text" id="rea_answer_32" name="rea_answer_32" aria-label="Answer for question 32" />
                        <label htmlFor="rea_answer_33"><b>Câu 33</b></label>
                        <input type="text" id="rea_answer_33" name="rea_answer_33" aria-label="Answer for question 33" />
                        <label htmlFor="rea_answer_34"><b>Câu 34</b></label>
                        <input type="text" id="rea_answer_34" name="rea_answer_34" aria-label="Answer for question 34" />
                        <label htmlFor="rea_answer_35"><b>Câu 35</b></label>
                        <input type="text" id="rea_answer_35" name="rea_answer_35" aria-label="Answer for question 35" />
                        <label htmlFor="rea_answer_36"><b>Câu 36</b></label>
                        <input type="text" id="rea_answer_36" name="rea_answer_36" aria-label="Answer for question 36" />
                        <label htmlFor="rea_answer_37"><b>Câu 37</b></label>
                        <input type="text" id="rea_answer_37" name="rea_answer_37" aria-label="Answer for question 37" />
                        <label htmlFor="rea_answer_38"><b>Câu 38</b></label>
                        <input type="text" id="rea_answer_38" name="rea_answer_38" aria-label="Answer for question 38" />
                        <label htmlFor="rea_answer_39"><b>Câu 39</b></label>
                        <input type="text" id="rea_answer_39" name="rea_answer_39" aria-label="Answer for question 39" />
                        <label htmlFor="rea_answer_40"><b>Câu 40</b></label>
                        <input type="text" id="rea_answer_40" name="rea_answer_40" aria-label="Answer for question 40" />
                    </Col>
                </Row>
                <Button className='submit' type='submit'>Submit</Button>
            </form>
            {/* <form className="inputArea" ref={formRef} id="answerForm">
                    <Container fluid="xxl">
                        <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10 }}>
                            <img src={data.rea_doc_1} width="100%" loading='lazy' alt="Reading document 1" />
                        </Row>

                        <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10 }}>
                            <Col xs="12" lg="10">
                                <img src={data.rea_question_1} width="100%" loading='lazy' alt="Reading question 1" />
                            </Col>
                            <Col>
                                <input type="text" id="rea_ans_id" name="rea_ans_id" value={rea_id || ''} readOnly hidden />
                                <input type="text" id="rea_id" name="rea_id" value={rea_id || ''} readOnly hidden />
                                <label htmlFor="rea_answer_1"><b>Câu 1</b></label>
                                <input type="text" id="rea_answer_1" name="rea_answer_1" aria-label="Answer for question 1" />
                                <label htmlFor="rea_answer_2"><b>Câu 2</b></label>
                                <input type="text" id="rea_answer_2" name="rea_answer_2" aria-label="Answer for question 2" />
                                <label htmlFor="rea_answer_3"><b>Câu 3</b></label>
                                <input type="text" id="rea_answer_3" name="rea_answer_3" aria-label="Answer for question 3" />
                                <label htmlFor="rea_answer_4"><b>Câu 4</b></label>
                                <input type="text" id="rea_answer_4" name="rea_answer_4" aria-label="Answer for question 4" />
                                <label htmlFor="rea_answer_5"><b>Câu 5</b></label>
                                <input type="text" id="rea_answer_5" name="rea_answer_5" aria-label="Answer for question 5" />
                                <label htmlFor="rea_answer_6"><b>Câu 6</b></label>
                                <input type="text" id="rea_answer_6" name="rea_answer_6" aria-label="Answer for question 6" />
                                <label htmlFor="rea_answer_7"><b>Câu 7</b></label>
                                <input type="text" id="rea_answer_7" name="rea_answer_7" aria-label="Answer for question 7" />
                                <label htmlFor="rea_answer_8"><b>Câu 8</b></label>
                                <input type="text" id="rea_answer_8" name="rea_answer_8" aria-label="Answer for question 8" />
                                <label htmlFor="rea_answer_9"><b>Câu 9</b></label>
                                <input type="text" id="rea_answer_9" name="rea_answer_9" aria-label="Answer for question 9" />
                                <label htmlFor="rea_answer_10"><b>Câu 10</b></label>
                                <input type="text" id="rea_answer_10" name="rea_answer_10" aria-label="Answer for question 10" />
                            </Col>
                        </Row>

                        <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10 }}>
                            <Row>
                                <img src={data.rea_doc_2} width="100%" loading='lazy' alt="Reading document 2" />
                            </Row>
                            <Col xs="12" lg="10">
                                <img src={data.rea_question_2} width="100%" loading='lazy' alt="Reading question 2" />
                            </Col>
                            <Col>
                                <label htmlFor="rea_answer_11"><b>Câu 11</b></label>
                                <input type="text" id="rea_answer_11" name="rea_answer_11" aria-label="Answer for question 11" />
                                <label htmlFor="rea_answer_12"><b>Câu 12</b></label>
                                <input type="text" id="rea_answer_12" name="rea_answer_12" aria-label="Answer for question 12" />
                                <label htmlFor="rea_answer_13"><b>Câu 13</b></label>
                                <input type="text" id="rea_answer_13" name="rea_answer_13" aria-label="Answer for question 13" />
                                <label htmlFor="rea_answer_14"><b>Câu 14</b></label>
                                <input type="text" id="rea_answer_14" name="rea_answer_14" aria-label="Answer for question 14" />
                                <label htmlFor="rea_answer_15"><b>Câu 15</b></label>
                                <input type="text" id="rea_answer_15" name="rea_answer_15" aria-label="Answer for question 15" />
                                <label htmlFor="rea_answer_16"><b>Câu 16</b></label>
                                <input type="text" id="rea_answer_16" name="rea_answer_16" aria-label="Answer for question 16" />
                                <label htmlFor="rea_answer_17"><b>Câu 17</b></label>
                                <input type="text" id="rea_answer_17" name="rea_answer_17" aria-label="Answer for question 17" />
                                <label htmlFor="rea_answer_18"><b>Câu 18</b></label>
                                <input type="text" id="rea_answer_18" name="rea_answer_18" aria-label="Answer for question 18" />
                                <label htmlFor="rea_answer_19"><b>Câu 19</b></label>
                                <input type="text" id="rea_answer_19" name="rea_answer_19" aria-label="Answer for question 19" />
                                <label htmlFor="rea_answer_20"><b>Câu 20</b></label>
                                <input type="text" id="rea_answer_20" name="rea_answer_20" aria-label="Answer for question 20" />
                            </Col>
                        </Row>

                        <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10 }}>
                            <Col>
                                <img src={data.rea_doc_3} width="100%" loading='lazy' alt="Reading document 1" />
                            </Col>
                            <Col xs="12" lg="10">
                                <img src={data.rea_question_3} width="100%" loading='lazy' alt="Reading question 3" />
                            </Col>
                            <Col>
                                <label htmlFor="rea_answer_21"><b>Câu 21</b></label>
                                <input type="text" id="rea_answer_21" name="rea_answer_21" aria-label="Answer for question 21" />
                                <label htmlFor="rea_answer_22"><b>Câu 22</b></label>
                                <input type="text" id="rea_answer_22" name="rea_answer_22" aria-label="Answer for question 22" />
                                <label htmlFor="rea_answer_23"><b>Câu 23</b></label>
                                <input type="text" id="rea_answer_23" name="rea_answer_23" aria-label="Answer for question 23" />
                                <label htmlFor="rea_answer_24"><b>Câu 24</b></label>
                                <input type="text" id="rea_answer_24" name="rea_answer_24" aria-label="Answer for question 24" />
                                <label htmlFor="rea_answer_25"><b>Câu 25</b></label>
                                <input type="text" id="rea_answer_25" name="rea_answer_25" aria-label="Answer for question 25" />
                                <label htmlFor="rea_answer_26"><b>Câu 26</b></label>
                                <input type="text" id="rea_answer_26" name="rea_answer_26" aria-label="Answer for question 26" />
                                <label htmlFor="rea_answer_27"><b>Câu 27</b></label>
                                <input type="text" id="rea_answer_27" name="rea_answer_27" aria-label="Answer for question 27" />
                                <label htmlFor="rea_answer_28"><b>Câu 28</b></label>
                                <input type="text" id="rea_answer_28" name="rea_answer_28" aria-label="Answer for question 28" />
                                <label htmlFor="rea_answer_29"><b>Câu 29</b></label>
                                <input type="text" id="rea_answer_29" name="rea_answer_29" aria-label="Answer for question 29" />
                                <label htmlFor="rea_answer_30"><b>Câu 30</b></label>
                                <input type="text" id="rea_answer_30" name="rea_answer_30" aria-label="Answer for question 30" />
                                <label htmlFor="rea_answer_31"><b>Câu 31</b></label>
                                <input type="text" id="rea_answer_31" name="rea_answer_31" aria-label="Answer for question 31" />
                                <label htmlFor="rea_answer_32"><b>Câu 32</b></label>
                                <input type="text" id="rea_answer_32" name="rea_answer_32" aria-label="Answer for question 32" />
                                <label htmlFor="rea_answer_33"><b>Câu 33</b></label>
                                <input type="text" id="rea_answer_33" name="rea_answer_33" aria-label="Answer for question 33" />
                                <label htmlFor="rea_answer_34"><b>Câu 34</b></label>
                                <input type="text" id="rea_answer_34" name="rea_answer_34" aria-label="Answer for question 34" />
                                <label htmlFor="rea_answer_35"><b>Câu 35</b></label>
                                <input type="text" id="rea_answer_35" name="rea_answer_35" aria-label="Answer for question 35" />
                                <label htmlFor="rea_answer_36"><b>Câu 36</b></label>
                                <input type="text" id="rea_answer_36" name="rea_answer_36" aria-label="Answer for question 36" />
                                <label htmlFor="rea_answer_37"><b>Câu 37</b></label>
                                <input type="text" id="rea_answer_37" name="rea_answer_37" aria-label="Answer for question 37" />
                                <label htmlFor="rea_answer_38"><b>Câu 38</b></label>
                                <input type="text" id="rea_answer_38" name="rea_answer_38" aria-label="Answer for question 38" />
                                <label htmlFor="rea_answer_39"><b>Câu 39</b></label>
                                <input type="text" id="rea_answer_39" name="rea_answer_39" aria-label="Answer for question 39" />
                                <label htmlFor="rea_answer_40"><b>Câu 40</b></label>
                                <input type="text" id="rea_answer_40" name="rea_answer_40" aria-label="Answer for question 40" />
                            </Col>
                        </Row>

                        <Row style={{ backgroundColor: 'white', padding: 10 }}>
                            <Col>
                                <label htmlFor="rea_answer_31"><b>Câu 31</b></label>
                                <input type="text" id="rea_answer_31" name="rea_answer_31" aria-label="Answer for question 31" />
                                <label htmlFor="rea_answer_32"><b>Câu 32</b></label>
                                <input type="text" id="rea_answer_32" name="rea_answer_32" aria-label="Answer for question 32" />
                                <label htmlFor="rea_answer_33"><b>Câu 33</b></label>
                                <input type="text" id="rea_answer_33" name="rea_answer_33" aria-label="Answer for question 33" />
                                <label htmlFor="rea_answer_34"><b>Câu 34</b></label>
                                <input type="text" id="rea_answer_34" name="rea_answer_34" aria-label="Answer for question 34" />
                                <label htmlFor="rea_answer_35"><b>Câu 35</b></label>
                                <input type="text" id="rea_answer_35" name="rea_answer_35" aria-label="Answer for question 35" />
                                <label htmlFor="rea_answer_36"><b>Câu 36</b></label>
                                <input type="text" id="rea_answer_36" name="rea_answer_36" aria-label="Answer for question 36" />
                                <label htmlFor="rea_answer_37"><b>Câu 37</b></label>
                                <input type="text" id="rea_answer_37" name="rea_answer_37" aria-label="Answer for question 37" />
                                <label htmlFor="rea_answer_38"><b>Câu 38</b></label>
                                <input type="text" id="rea_answer_38" name="rea_answer_38" aria-label="Answer for question 38" />
                                <label htmlFor="rea_answer_39"><b>Câu 39</b></label>
                                <input type="text" id="rea_answer_39" name="rea_answer_39" aria-label="Answer for question 39" />
                                <label htmlFor="rea_answer_40"><b>Câu 40</b></label>
                                <input type="text" id="rea_answer_40" name="rea_answer_40" aria-label="Answer for question 40" />
                            </Col>
                        </Row>
                        <button type='submit'>Submit</button>
                    </Container>
                </form> */}
        </section >
    );
};

export default TestingReadingArea;
