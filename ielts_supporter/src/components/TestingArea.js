import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TestingArea = () => {
    const [data, setData] = useState([]);
    const formRef = useRef(null);
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

            } catch (error) {
                alert('Error fetching data:', error.toString());

            }
        };

        fetchData();

        const form = formRef.current;
        const handleSubmit = (event) => {
            event.preventDefault();
            const formData = {
                lis_ans_id: document.getElementById('lis_ans_id').value,
                lis_id: document.getElementById('lis_id').value,
                lis_answer_1: document.getElementById('lis_answer_1').value,
                lis_answer_2: document.getElementById('lis_answer_2').value,
                lis_answer_3: document.getElementById('lis_answer_3').value,
                lis_answer_4: document.getElementById('lis_answer_4').value,
                lis_answer_5: document.getElementById('lis_answer_5').value,
                lis_answer_6: document.getElementById('lis_answer_6').value,
                lis_answer_7: document.getElementById('lis_answer_7').value,
                lis_answer_8: document.getElementById('lis_answer_8').value,
                lis_answer_9: document.getElementById('lis_answer_9').value,
                lis_answer_10: document.getElementById('lis_answer_10').value,
                lis_answer_11: document.getElementById('lis_answer_11').value,
                lis_answer_12: document.getElementById('lis_answer_12').value,
                lis_answer_13: document.getElementById('lis_answer_13').value,
                lis_answer_14: document.getElementById('lis_answer_14').value,
                lis_answer_15: document.getElementById('lis_answer_15').value,
                lis_answer_16: document.getElementById('lis_answer_16').value,
                lis_answer_17: document.getElementById('lis_answer_17').value,
                lis_answer_18: document.getElementById('lis_answer_18').value,
                lis_answer_19: document.getElementById('lis_answer_19').value,
                lis_answer_20: document.getElementById('lis_answer_20').value,
                lis_answer_21: document.getElementById('lis_answer_21').value,
                lis_answer_22: document.getElementById('lis_answer_22').value,
                lis_answer_23: document.getElementById('lis_answer_23').value,
                lis_answer_24: document.getElementById('lis_answer_24').value,
                lis_answer_25: document.getElementById('lis_answer_25').value,
                lis_answer_26: document.getElementById('lis_answer_26').value,
                lis_answer_27: document.getElementById('lis_answer_27').value,
                lis_answer_28: document.getElementById('lis_answer_28').value,
                lis_answer_29: document.getElementById('lis_answer_29').value,
                lis_answer_30: document.getElementById('lis_answer_30').value,
                lis_answer_31: document.getElementById('lis_answer_31').value,
                lis_answer_32: document.getElementById('lis_answer_32').value,
                lis_answer_33: document.getElementById('lis_answer_33').value,
                lis_answer_34: document.getElementById('lis_answer_34').value,
                lis_answer_35: document.getElementById('lis_answer_35').value,
                lis_answer_36: document.getElementById('lis_answer_36').value,
                lis_answer_37: document.getElementById('lis_answer_37').value,
                lis_answer_38: document.getElementById('lis_answer_38').value,
                lis_answer_39: document.getElementById('lis_answer_39').value,
                lis_answer_40: document.getElementById('lis_answer_40').value,
            };

            fetch('http://10.60.1.203:8080/data/listening/lis_ans/answer', {
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
        <>
            <section style={{ backgroundColor: '#f0f0f0' }}>
                <form className="inputArea" ref={formRef} id="answerForm">
                    <Container>
                        <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10 }}>
                            <Col>
                                <img src={data.lis_question_1} width={700} loading='lazy' alt="Listening question 1" />
                            </Col>
                            <Col>
                                <audio controls src={data.lis_audio_1} style={{ width: "100%" }}>
                                </audio>

                                <input type="text" id="lis_ans_id" name="lis_ans_id" value={lis_id || ''} readOnly hidden />
                                <input type="text" id="lis_id" name="lis_id" value={lis_id || ''} readOnly hidden />
                                <label htmlFor="lis_answer_1"><b>Câu 1</b></label>
                                <input type="text" id="lis_answer_1" name="lis_answer_1" aria-label="Answer for question 1" />
                                <label htmlFor="lis_answer_2"><b>Câu 2</b></label>
                                <input type="text" id="lis_answer_2" name="lis_answer_2" aria-label="Answer for question 2" />
                                <label htmlFor="lis_answer_3"><b>Câu 3</b></label>
                                <input type="text" id="lis_answer_3" name="lis_answer_3" aria-label="Answer for question 3" />
                                <label htmlFor="lis_answer_4"><b>Câu 4</b></label>
                                <input type="text" id="lis_answer_4" name="lis_answer_4" aria-label="Answer for question 4" />
                                <label htmlFor="lis_answer_5"><b>Câu 5</b></label>
                                <input type="text" id="lis_answer_5" name="lis_answer_5" aria-label="Answer for question 5" />
                                <label htmlFor="lis_answer_6"><b>Câu 6</b></label>
                                <input type="text" id="lis_answer_6" name="lis_answer_6" aria-label="Answer for question 6" />
                                <label htmlFor="lis_answer_7"><b>Câu 7</b></label>
                                <input type="text" id="lis_answer_7" name="lis_answer_7" aria-label="Answer for question 7" />
                                <label htmlFor="lis_answer_8"><b>Câu 8</b></label>
                                <input type="text" id="lis_answer_8" name="lis_answer_8" aria-label="Answer for question 8" />
                                <label htmlFor="lis_answer_9"><b>Câu 9</b></label>
                                <input type="text" id="lis_answer_9" name="lis_answer_9" aria-label="Answer for question 9" />
                                <label htmlFor="lis_answer_10"><b>Câu 10</b></label>
                                <input type="text" id="lis_answer_10" name="lis_answer_10" aria-label="Answer for question 10" />
                            </Col>
                        </Row>

                        <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10 }}>
                            <Col>
                                <img src={data.lis_question_2} width={700} loading='lazy' alt="Listening question 2" />
                            </Col>
                            <Col>
                                <audio controls src={data.lis_audio_2} style={{ width: "100%" }}>
                                </audio>
                                <label htmlFor="lis_answer_11"><b>Câu 11</b></label>
                                <input type="text" id="lis_answer_11" name="lis_answer_11" aria-label="Answer for question 11" />
                                <label htmlFor="lis_answer_12"><b>Câu 12</b></label>
                                <input type="text" id="lis_answer_12" name="lis_answer_12" aria-label="Answer for question 12" />
                                <label htmlFor="lis_answer_13"><b>Câu 13</b></label>
                                <input type="text" id="lis_answer_13" name="lis_answer_13" aria-label="Answer for question 13" />
                                <label htmlFor="lis_answer_14"><b>Câu 14</b></label>
                                <input type="text" id="lis_answer_14" name="lis_answer_14" aria-label="Answer for question 14" />
                                <label htmlFor="lis_answer_15"><b>Câu 15</b></label>
                                <input type="text" id="lis_answer_15" name="lis_answer_15" aria-label="Answer for question 15" />
                                <label htmlFor="lis_answer_16"><b>Câu 16</b></label>
                                <input type="text" id="lis_answer_16" name="lis_answer_16" aria-label="Answer for question 16" />
                                <label htmlFor="lis_answer_17"><b>Câu 17</b></label>
                                <input type="text" id="lis_answer_17" name="lis_answer_17" aria-label="Answer for question 17" />
                                <label htmlFor="lis_answer_18"><b>Câu 18</b></label>
                                <input type="text" id="lis_answer_18" name="lis_answer_18" aria-label="Answer for question 18" />
                                <label htmlFor="lis_answer_19"><b>Câu 19</b></label>
                                <input type="text" id="lis_answer_19" name="lis_answer_19" aria-label="Answer for question 19" />
                                <label htmlFor="lis_answer_20"><b>Câu 20</b></label>
                                <input type="text" id="lis_answer_20" name="lis_answer_20" aria-label="Answer for question 20" />
                            </Col>
                        </Row>

                        <Row style={{ backgroundColor: 'white', marginBottom: 50, padding: 10 }}>
                            <Col>
                                <img src={data.lis_question_3} width={700} loading='lazy' alt="Listening question 3" />
                            </Col>
                            <Col>
                                <audio controls src={data.lis_audio_3} style={{ width: "100%" }}>
                                </audio>
                                <label htmlFor="lis_answer_21"><b>Câu 21</b></label>
                                <input type="text" id="lis_answer_21" name="lis_answer_21" aria-label="Answer for question 21" />
                                <label htmlFor="lis_answer_22"><b>Câu 22</b></label>
                                <input type="text" id="lis_answer_22" name="lis_answer_22" aria-label="Answer for question 22" />
                                <label htmlFor="lis_answer_23"><b>Câu 23</b></label>
                                <input type="text" id="lis_answer_23" name="lis_answer_23" aria-label="Answer for question 23" />
                                <label htmlFor="lis_answer_24"><b>Câu 24</b></label>
                                <input type="text" id="lis_answer_24" name="lis_answer_24" aria-label="Answer for question 24" />
                                <label htmlFor="lis_answer_25"><b>Câu 25</b></label>
                                <input type="text" id="lis_answer_25" name="lis_answer_25" aria-label="Answer for question 25" />
                                <label htmlFor="lis_answer_26"><b>Câu 26</b></label>
                                <input type="text" id="lis_answer_26" name="lis_answer_26" aria-label="Answer for question 26" />
                                <label htmlFor="lis_answer_27"><b>Câu 27</b></label>
                                <input type="text" id="lis_answer_27" name="lis_answer_27" aria-label="Answer for question 27" />
                                <label htmlFor="lis_answer_28"><b>Câu 28</b></label>
                                <input type="text" id="lis_answer_28" name="lis_answer_28" aria-label="Answer for question 28" />
                                <label htmlFor="lis_answer_29"><b>Câu 29</b></label>
                                <input type="text" id="lis_answer_29" name="lis_answer_29" aria-label="Answer for question 29" />
                                <label htmlFor="lis_answer_30"><b>Câu 30</b></label>
                                <input type="text" id="lis_answer_30" name="lis_answer_30" aria-label="Answer for question 30" />
                            </Col>
                        </Row>

                        <Row style={{ backgroundColor: 'white', padding: 10, marginBottom: 20 }}>
                            <Col>
                                <img src={data.lis_question_4} width={700} loading='lazy' alt="Listening question 4" />
                            </Col>
                            <Col>
                                <audio controls src={data.lis_audio_4} style={{ width: "100%" }}>
                                </audio>
                                <label htmlFor="lis_answer_31"><b>Câu 31</b></label>
                                <input type="text" id="lis_answer_31" name="lis_answer_31" aria-label="Answer for question 31" />
                                <label htmlFor="lis_answer_32"><b>Câu 32</b></label>
                                <input type="text" id="lis_answer_32" name="lis_answer_32" aria-label="Answer for question 32" />
                                <label htmlFor="lis_answer_33"><b>Câu 33</b></label>
                                <input type="text" id="lis_answer_33" name="lis_answer_33" aria-label="Answer for question 33" />
                                <label htmlFor="lis_answer_34"><b>Câu 34</b></label>
                                <input type="text" id="lis_answer_34" name="lis_answer_34" aria-label="Answer for question 34" />
                                <label htmlFor="lis_answer_35"><b>Câu 35</b></label>
                                <input type="text" id="lis_answer_35" name="lis_answer_35" aria-label="Answer for question 35" />
                                <label htmlFor="lis_answer_36"><b>Câu 36</b></label>
                                <input type="text" id="lis_answer_36" name="lis_answer_36" aria-label="Answer for question 36" />
                                <label htmlFor="lis_answer_37"><b>Câu 37</b></label>
                                <input type="text" id="lis_answer_37" name="lis_answer_37" aria-label="Answer for question 37" />
                                <label htmlFor="lis_answer_38"><b>Câu 38</b></label>
                                <input type="text" id="lis_answer_38" name="lis_answer_38" aria-label="Answer for question 38" />
                                <label htmlFor="lis_answer_39"><b>Câu 39</b></label>
                                <input type="text" id="lis_answer_39" name="lis_answer_39" aria-label="Answer for question 39" />
                                <label htmlFor="lis_answer_40"><b>Câu 40</b></label>
                                <input type="text" id="lis_answer_40" name="lis_answer_40" aria-label="Answer for question 40" />
                            </Col>
                        </Row>
                        <Button className='submit' type='submit'>Submit</Button>
                    </Container>
                </form>
            </section>
            <Footer />
        </>

    );
};

export default TestingArea;



