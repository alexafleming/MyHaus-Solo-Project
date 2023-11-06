import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './DecorForm.css'
import axios from 'axios';

function DecorForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id , formId } = useParams();
    const decorFormList = useSelector((store) => store.forms.data.decorForm);
    const [item, setItem] = useState('');
    const [purchasedFrom, setPurchasedFrom] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    function getFormById() {
        const editFormId = parseInt(formId);
        for (const form of decorFormList) {
            if (form.id === editFormId) {
                setItem(form.item);
                setPurchasedFrom(form.purchased_from);
                setWebsiteLink(form.website_link);
                setAdditionalComments(form.additional_comments);
            }
        }
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_FORMS_DETAILS', payload: id })
    }, []);

    useEffect(() => {
        if (decorFormList.length > 0) {
            getFormById();
        }
    }, [decorFormList]);

    const handleSubmit = () => {
        const decorFormSubmission = {
            item: item,
            purchasedFrom: purchasedFrom,
            websiteLink: websiteLink,
            additionalComments: additionalComments,
            roomId: id
        }
        if (formId === null || formId === undefined) {
        axios
            .post('/api/forms/decorform', decorFormSubmission)
            .then(response => {
                history.push(`/room-overview/${id}`);
            })
            .catch(error => {
                console.log(error);
                alert('Sorry, could not add decor form');
            });
        } else {
            axios
                .put(`/api/forms/decorform/${formId}`, decorFormSubmission)
                .then(response => {
                    history.push(`/room-overview/${id}`);
                })
                .catch(error => {
                    console.log(error);
                    alert('Sorry, could not update decor form');
                });
        }
    };



    return (
        <div class="decor-background">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <p class="decor-form-title">DECOR</p>
                            <div class="decor-form-style">
                                <input type="text" class="form-input-style" id="item" placeholder="*item" autoComplete='off' value={item} required onChange={(event) => setItem(event.target.value)} />
                            </div>

                            <div class="decor-form-style">
                                <input type="text" class="form-input-style" id="purchasedFrom" placeholder="purchased from" autoComplete='off' value={purchasedFrom} onChange={(event) => setPurchasedFrom(event.target.value)} />
                            </div>

                            <div class="decor-form-style">

                                <input type="text" class="form-input-style" id="websiteLink" placeholder="website link" autoComplete='off' value={websiteLink} onChange={(event) => setWebsiteLink(event.target.value)} />
                            </div>

                            <div class="decor-form-style additional-comments-margin">
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

export default DecorForm;