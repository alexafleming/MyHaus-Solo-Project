import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './PaintColorForm.css'
import axios from 'axios';

function PaintColorForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id, formId } = useParams();
    const paintFormList = useSelector((store) => store.forms.data.paintForm);
    const [brandName, setBrandName] = useState('');
    const [paintColorName, setPaintColorName] = useState('');
    const [paintFinish, setPaintFinish] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    function getFormById() {
        const editFormId = parseInt(formId);
        for (const form of paintFormList) {
            if (form.id === editFormId) {
                setBrandName(form.brand_name);
                setPaintColorName(form.paint_color_name);
                setPaintFinish(form.paint_finish);
                setAdditionalComments(form.additional_comments);
            }
        }
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_FORMS_DETAILS', payload: id })
    }, []);

    useEffect(() => {
        if (paintFormList.length > 0) {
            getFormById();
        }
    }, [paintFormList]);

    // Function to handle the submit button click
    const handleSubmit = () => {
        const paintFormSubmission = {
            brandName: brandName,
            paintColorName: paintColorName,
            paintFinish: paintFinish,
            additionalComments: additionalComments,
            roomId: id
        }

        if (formId === null || formId === undefined) {
            axios
                .post('/api/forms/paintform', paintFormSubmission)
                .then(response => {
                    history.push(`/room-overview/${id}`);
                })
                .catch(error => {
                    console.log(error);
                    alert('Sorry, could not add paint form');
                });
        } else {
            axios
                .put(`/api/forms/paintform/${formId}`, paintFormSubmission)
                .then(response => {
                    history.push(`/room-overview/${id}`);
                })
                .catch(error => {
                    console.log(error);
                    alert('Sorry, could not add paint form');
                });
        }
    };


    return (
        <div class="paint-background">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <p class="paint-form-title">PAINT COLORS</p>
                            <div class="paint-form-style">
                                <input type="text" class="form-input-style" id="brandName" placeholder="brand name" autoComplete='off' value={brandName} onChange={(event) => setBrandName(event.target.value)} />
                            </div>

                            <div class="paint-form-style">
                                <input type="text" class="form-input-style" id="colorName" placeholder="*paint color name" autoComplete='off' value={paintColorName} required onChange={(event) => setPaintColorName(event.target.value)} />
                            </div>

                            <div class="paint-form-style">

                                <input type="text" class="form-input-style" id="finish" placeholder="*paint finish" autoComplete='off' required value={paintFinish} onChange={(event) => setPaintFinish(event.target.value)} />
                            </div>

                            <div class="paint-form-style additional-comments-margin">
                                <textarea class="form-input-style" id="comments" rows="5" placeholder="additional comments" autoComplete='off' value={additionalComments} onChange={(event) => setAdditionalComments(event.target.value)}></textarea>
                            </div>
                            <div class='row'>
                                <div class="col-md-12 d-flex justify-content-center">
                                    <button type="submit" class="btn save-btn-style">SAVE</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PaintColorForm;