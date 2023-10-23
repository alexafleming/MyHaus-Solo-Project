import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './PaintColorForm.css'
import axios from 'axios';

function PaintColorForm(param) {
    const history = useHistory();
    const { id } = useParams();
    const [brandName, setBrandName] = useState('');
    const [paintColorName, setPaintColorName] = useState('');
    const [paintFinish, setPaintFinish] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    // Function to handle the submit button click
    const handleSubmit = () => {
        const paintFormSubmission = {
            brandName: brandName,
            paintColorName: paintColorName,
            paintFinish: paintFinish,
            additionalComments: additionalComments,
            roomId: id 
        }
  
        axios
            .post('/api/forms/paintform', paintFormSubmission)
            .then(response => {
                history.push('/room-overview'); //WILL NEED TO ADD ROOM ID IN FUTURE!
            })
            .catch(error => {
                console.log(error);
                alert('Sorry, could not add paint form');
            });
    };

    return (
        <div class="paint-background">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="card">
                    <div class="card-body">
                        <form  onSubmit={handleSubmit}>
                            <p class="paint-form-title">PAINT COLORS</p>
                            <div class="paint-form-style">
                                <input type="text" class="form-input-style" id="brandName" placeholder="brand name" onChange={(event) => setBrandName(event.target.value)} />
                            </div>

                            <div class="paint-form-style">
                                <input type="text" class="form-input-style" id="colorName" placeholder="*paint color name" required onChange={(event) => setPaintColorName(event.target.value)} />
                            </div>

                            <div class="paint-form-style">

                                <input type="text" class="form-input-style" id="finish" placeholder="*paint finish" required onChange={(event) => setPaintFinish(event.target.value)} />
                            </div>

                            <div class="paint-form-style additional-comments-margin">
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

export default PaintColorForm;