import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './DecorForm.css'
import axios from 'axios';

function DecorForm(param) {
    const history = useHistory();
    const { id } = useParams();
    const [item, setItem] = useState('');
    const [purchasedFrom, setPurchasedFrom] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    const handleSubmit = () => {
        const decorFormSubmission = {
            item: item,
            purchasedFrom: purchasedFrom,
            websiteLink: websiteLink,
            additionalComments: additionalComments,
            roomId: id
        }

        axios
            .post('/api/forms/decorform', decorFormSubmission)
            .then(response => {
                history.push('/room-overview'); //WILL NEED TO ADD ROOM ID IN FUTURE!
            })
            .catch(error => {
                console.log(error);
                alert('Sorry, could not add decor form');
            });
    };



    return (
        <div class="decor-background">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <p class="decor-form-title">DECORS</p>
                            <div class="decor-form-style">
                                <input type="text" class="form-input-style" id="item" placeholder="*item" required onChange={(event) => setItem(event.target.value)} />
                            </div>

                            <div class="decor-form-style">
                                <input type="text" class="form-input-style" id="purchasedFrom" placeholder="purchased from" onChange={(event) => setPurchasedFrom(event.target.value)} />
                            </div>

                            <div class="decor-form-style">

                                <input type="text" class="form-input-style" id="websiteLink" placeholder="website link" onChange={(event) => setWebsiteLink(event.target.value)} />
                            </div>

                            <div class="decor-form-style additional-comments-margin">
                                <textarea class="form-input-style" id="comments" rows="5" placeholder="additional comments" onChange={(event) => setAdditionalComments(event.target.value)}></textarea>
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