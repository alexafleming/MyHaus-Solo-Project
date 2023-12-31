import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './MiscellaneousForm.css'
import axios from 'axios';

function MiscellaneousForm(params) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id, formId } = useParams();
    const miscFormList = useSelector((store) => store.forms.data.miscForm);
    const [item, setItem] = useState('');
    const [brandName, setBrandName] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    function getFormById() {
        const editFormId = parseInt(formId);
        for (const form of miscFormList) {
            if (form.id === editFormId) {
                setItem(form.item);
                setBrandName(form.brand_name);
                setAdditionalComments(form.additional_comments);
            }
        }
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_FORMS_DETAILS', payload: id })
    }, []);

    useEffect(() => {
        if (miscFormList.length > 0) {
            getFormById();
        }
    }, [miscFormList]);

    const handleSubmit = () => {
        const miscFormSubmission = {
            item: item,
            brandName: brandName,
            additionalComments: additionalComments,
            roomId: id
        }

        if (formId === null || formId === undefined) {
            axios
                .post('/api/forms/miscform', miscFormSubmission)
                .then(response => {
                    history.push(`/room-overview/${id}`);
                })
                .catch(error => {
                    console.log(error);
                    alert('Sorry, could not add miscellaneous form');
                });
        } else {
            axios
                .put(`/api/forms/miscform/${formId}`, miscFormSubmission)
                .then(response => {
                    history.push(`/room-overview/${id}`);
                })
                .catch(error => {
                    console.log(error);
                    alert('Sorry, could not update miscellaneous form');
                });
        }
    };

    return (
        <div class="misc-background">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <p class="misc-form-title">MISCELLANEOUS</p>
                            <div class="misc-form-style">
                                <input type="text" class="form-input-style" id="item" autoComplete='off' placeholder="*item" value={item} onChange={(event) => setItem(event.target.value)} />
                            </div>

                            <div class="misc-form-style">
                                <input type="text" class="form-input-style" id="brandName" autoComplete='off' placeholder="*brand name" value={brandName} required onChange={(event) => setBrandName(event.target.value)} />
                            </div>

                            <div class="misc-form-style additional-comments-margin">
                                <textarea class="form-input-style" id="comments" rows="5" autoComplete='off' placeholder="additional comments" value={additionalComments} onChange={(event) => setAdditionalComments(event.target.value)}></textarea>
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

export default MiscellaneousForm;